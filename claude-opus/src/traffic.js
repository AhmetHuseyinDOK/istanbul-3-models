// Cars, taxis and buses doing a random walk on the road graph, obeying signals and
// keeping distance. Fully instanced: one mesh per part, no per-car objects in the scene.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { U, rand, pick, damp, angleLerp, events, glowTexture } from './util.js';
import { ROAD_HALF } from './city.js';

const LANE = 0.23;

function carGeo(len, wid, h, cabin = true) {
  const parts = [new THREE.BoxGeometry(wid, h * 0.55, len).translate(0, h * 0.275 + 0.04, 0)];
  if (cabin) parts.push(new THREE.BoxGeometry(wid * 0.86, h * 0.45, len * 0.52).translate(0, h * 0.55 + h * 0.225 + 0.04, -len * 0.06));
  return mergeGeometries(parts);
}

export function buildTraffic(scene, city) {
  const G = city.graph;
  const startEdges = G.edges.filter((e) => e.kind === 'road');
  const N_CAR = Math.min(90, Math.round(startEdges.length * 0.55));
  const N_BUS = 8;
  const total = N_CAR + N_BUS;

  const carMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35, metalness: 0.25 });
  const cars = new THREE.InstancedMesh(carGeo(0.62, 0.32, 0.28), carMat, N_CAR);
  const busMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.2 });
  const buses = new THREE.InstancedMesh(carGeo(1.15, 0.36, 0.42, false), busMat, N_BUS);
  // window band for cars: a dark glass box around the cabin
  const glass = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.29, 0.1, 0.34).translate(0, 0.27, -0.04),
    new THREE.MeshStandardMaterial({ color: 0x1d2630, roughness: 0.1, metalness: 0.6 }), N_CAR);
  const busGlass = new THREE.InstancedMesh(
    new THREE.BoxGeometry(0.37, 0.1, 1.08).translate(0, 0.3, 0),
    new THREE.MeshStandardMaterial({ color: 0x1d2630, roughness: 0.1, metalness: 0.6 }), N_BUS);
  // taxi roof signs
  const signMat = new THREE.MeshBasicMaterial({ color: 0xfff1a0, toneMapped: false });
  const signs = new THREE.InstancedMesh(new THREE.BoxGeometry(0.12, 0.04, 0.06).translate(0, 0.33, -0.04), signMat, N_CAR);

  const headMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const tailMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const lightPair = (z, y) => mergeGeometries([new THREE.BoxGeometry(0.06, 0.04, 0.02).translate(-0.1, y, z), new THREE.BoxGeometry(0.06, 0.04, 0.02).translate(0.1, y, z)]);
  const heads = new THREE.InstancedMesh(lightPair(0.31, 0.12), headMat, total);
  const tails = new THREE.InstancedMesh(lightPair(-0.31, 0.13), tailMat, total);
  const beamMat = new THREE.MeshBasicMaterial({ map: glowTexture(), color: 0xfff0c8, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  const beams = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.55, 1.1).rotateX(-Math.PI / 2).translate(0, 0.045, 0.85), beamMat, total);
  beams.renderOrder = 3;
  tails.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(total * 3), 3);

  for (const m of [cars, buses, glass, busGlass]) {
    m.castShadow = true;
    m.receiveShadow = true;
  }
  // moving instances: a board-sized bounding sphere keeps culling + picking correct
  for (const m of [cars, buses, glass, busGlass, signs, heads, tails, beams]) m.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 60);
  scene.add(cars, buses, glass, busGlass, signs, heads, tails, beams);

  const colors = ['#f2c230', '#f2c230', '#f2c230', '#f2c230', '#eeeeee', '#d9dde0', '#2f3a45', '#9a1f24', '#2c5d8f', '#6d7378', '#f4f1ea', '#3d5a3a', '#c25e2c'];
  const vehicles = [];
  const c = new THREE.Color();
  for (let i = 0; i < total; i++) {
    const bus = i >= N_CAR;
    const e = pick(startEdges);
    const v = {
      i, bus, local: bus ? i - N_CAR : i,
      edge: e, dir: Math.random() < 0.5 ? 1 : -1, s: rand(0, e.len),
      speed: 0, vmax: bus ? rand(0.7, 0.85) : rand(0.95, 1.5), boost: 0,
      pos: new THREE.Vector3(), heading: 0, braking: false, hop: 0, len: bus ? 1.15 : 0.62,
    };
    v.taxi = false;
    if (!bus) {
      const col = pick(colors);
      v.taxi = col === '#f2c230';
      cars.setColorAt(v.local, c.set(col));
      v.color = col;
    } else {
      buses.setColorAt(v.local, c.set(pick(['#2f6db5', '#d23b2f', '#1f8f6b'])));
    }
    vehicles.push(v);
    place(v);
    v.pos.copy(v.target);
    v.heading = v.targetHeading;
  }

  // lookup per edge-direction for car following
  const lanes = new Map();
  const laneKey = (e, d) => e.id * 2 + (d > 0 ? 0 : 1);

  function place(v) {
    const e = v.edge;
    const s = v.dir > 0 ? v.s : e.len - v.s; // distance from node a
    const dx = e.dx * v.dir, dz = e.dz * v.dir;
    const x = e.a.x + e.dx * s - dz * LANE;
    const z = e.a.z + e.dz * s + dx * LANE;
    v.target = v.target || new THREE.Vector3();
    v.target.set(x, G.y(e, s), z);
    v.targetHeading = Math.atan2(dx, dz);
  }

  function endNode(v) {
    return v.dir > 0 ? v.edge.b : v.edge.a;
  }

  function chooseNext(v) {
    const n = endNode(v);
    const opts = n.edges.filter((e) => e !== v.edge);
    const e = opts.length ? pick(opts) : v.edge;
    const dir = e.a === n ? 1 : -1;
    return { e, dir };
  }

  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
  const pos = new THREE.Vector3();
  const lm = new THREE.Matrix4(), ID = new THREE.Matrix4(), HIDE = new THREE.Matrix4().makeScale(0, 0, 0);
  const BUS_SCALE = new THREE.Matrix4().makeScale(1, 1, 1.15 / 0.62);
  const BUS_SHIFT = new THREE.Matrix4().makeTranslation(0, 0, (1.15 / 0.62 - 1) * 0.31);
  let honkCooldown = 0;

  function update(dt, t) {
    lanes.clear();
    for (const v of vehicles) {
      const k = laneKey(v.edge, v.dir);
      if (!lanes.has(k)) lanes.set(k, []);
      lanes.get(k).push(v);
    }
    honkCooldown -= dt;
    for (const v of vehicles) {
      const e = v.edge;
      // gap to the vehicle ahead on the same lane
      let gap = 1e9;
      for (const o of lanes.get(laneKey(e, v.dir))) {
        if (o !== v && o.s > v.s) gap = Math.min(gap, o.s - v.s - (o.len + v.len) / 2);
      }
      // signal at the end node
      const n = endNode(v);
      let stopAt = 1e9;
      if (n.signal) {
        const st = n.signal.state[e.axis];
        const toStop = e.len - 0.85 - v.s;
        if (st === 0 || (st === 1 && toStop > 0.3)) {
          if (toStop > -0.05) stopAt = toStop;
        }
      }
      if (!v.next) v.next = chooseNext(v);
      // look into the next edge for queued cars
      const nl = lanes.get(laneKey(v.next.e, v.next.dir));
      if (nl) for (const o of nl) if (o !== v) gap = Math.min(gap, e.len - v.s + o.s - (o.len + v.len) / 2);

      // patience: if stuck in a queue (not at a red light) for long, squeeze through
      if (v.speed < 0.02 && stopAt === 1e9) v.wait = (v.wait || 0) + dt;
      else if (v.speed > 0.3) v.wait = 0;
      if (v.wait > 6) gap = 1e9;
      const limit = Math.min(gap - 0.18, stopAt);
      const vmax = v.vmax * (1 + v.boost) * (e.kind === 'bosphorus' ? 1.25 : 1) * (1 - U.uSnow.value * 0.4) * (1 - U.uWet.value * 0.15);
      const desired = Math.max(0, Math.min(vmax, limit * 1.6));
      const prev = v.speed;
      v.speed = desired < v.speed ? damp(v.speed, desired, 7, dt) : damp(v.speed, desired, 1.6, dt);
      if (limit < 0.02) v.speed = 0;
      v.braking = v.speed < prev - 0.002 || v.speed < 0.05;
      v.s += v.speed * dt;
      if (v.boost > 0) v.boost = Math.max(0, v.boost - dt * 0.08);
      if (v.s >= e.len) {
        v.s -= e.len;
        v.edge = v.next.e;
        v.dir = v.next.dir;
        v.next = null;
        if (v.taxi && v.boost > 0 && honkCooldown <= 0 && Math.random() < 0.5) {
          events.emit('taxi:honk', { position: v.pos.clone() });
          honkCooldown = 3;
        }
      }
      place(v);
      // smooth visual position through corners
      v.pos.x = damp(v.pos.x, v.target.x, 9, dt);
      v.pos.z = damp(v.pos.z, v.target.z, 9, dt);
      v.pos.y = damp(v.pos.y, v.target.y, 12, dt);
      v.heading = angleLerp(v.heading, v.targetHeading, 1 - Math.exp(-8 * dt));
      if (v.hop > 0) v.hop = Math.max(0, v.hop - dt * 2.5);

      q.setFromAxisAngle(up, v.heading);
      pos.copy(v.pos);
      pos.y += Math.sin(v.hop * Math.PI) * 0.25;
      m4.compose(pos, q, sc);
      if (v.bus) {
        buses.setMatrixAt(v.local, m4);
        busGlass.setMatrixAt(v.local, m4);
      } else {
        cars.setMatrixAt(v.local, m4);
        glass.setMatrixAt(v.local, m4);
        signs.setMatrixAt(v.local, v.taxi ? m4 : HIDE);
      }
      // lights sit at the front/back of each body length
      const lf = v.len / 0.62;
      lm.copy(m4).multiply(v.bus ? BUS_SCALE : ID);
      heads.setMatrixAt(v.i, lm);
      tails.setMatrixAt(v.i, lm);
      lm.copy(m4).multiply(v.bus ? BUS_SHIFT : ID);
      beams.setMatrixAt(v.i, lm);
      const night = U.uNight.value;
      const base = 0.25 + night * 1.2 + U.uWet.value * 0.3;
      const br = v.braking ? 2.6 : base;
      tails.instanceColor.setXYZ(v.i, br * 1.2, br * 0.08, br * 0.06);
    }
    for (const m of [cars, buses, glass, busGlass, signs, heads, tails, beams]) m.instanceMatrix.needsUpdate = true;
    tails.instanceColor.needsUpdate = true;
    const night = U.uNight.value;
    const lightsOn = Math.max(night, U.uLampGlow.value);
    headMat.color.setRGB(0.6 + lightsOn * 2.6, 0.6 + lightsOn * 2.4, 0.55 + lightsOn * 1.8);
    beamMat.opacity = lightsOn * 0.42;
    signMat.color.setRGB(0.9 + night * 1.5, 0.8 + night * 1.2, 0.3 + night * 0.4);
  }

  // Ambient: a taxi rushes through.
  function rushTaxi() {
    const taxis = vehicles.filter((v) => v.taxi);
    const v = pick(taxis);
    v.boost = 0.8;
    events.emit('taxi:rush', { position: v.pos.clone() });
    return v;
  }

  function hit(mesh, instanceId) {
    if (mesh === cars) return vehicles.find((v) => !v.bus && v.local === instanceId);
    if (mesh === buses) return vehicles.find((v) => v.bus && v.local === instanceId);
    return null;
  }

  return { update, vehicles, meshes: [cars, buses], hit, rushTaxi };
}

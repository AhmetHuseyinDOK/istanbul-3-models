// Ferries (vapur) on real-ish lines, a Bosphorus tour boat, a cargo ship, fishing boats,
// moored boats, and a pooled GPU wake system.
import * as THREE from 'three';
import { HALF, WATER_Y, DOCKS, BRIDGE, shoreDist, bosC } from './geo.js';
import { U, rand, pick, damp, angleLerp, events, clamp } from './util.js';
import { flag, mergeStatic } from './landmarks.js';

export const CLIP = [
  new THREE.Plane(new THREE.Vector3(1, 0, 0), HALF),
  new THREE.Plane(new THREE.Vector3(-1, 0, 0), HALF),
  new THREE.Plane(new THREE.Vector3(0, 0, 1), HALF),
  new THREE.Plane(new THREE.Vector3(0, 0, -1), HALF),
];
const mat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.55, clippingPlanes: CLIP, ...o });
const M = {
  white: mat(0xf4f2ec),
  dark: mat(0x2b3138),
  hullRed: mat(0x8e2a24),
  funnel: mat(0xe9c46a),
  black: mat(0x1c1c1c),
  orange: mat(0xe8742a),
  wood: mat(0x9a6b45),
  blue: mat(0x2f5d8a),
  win: mat(0x1f2933, { roughness: 0.2, emissive: new THREE.Color(0xffd29a), emissiveIntensity: 0 }),
};
const containerMats = [0xc0392b, 0x2e86c1, 0x27ae60, 0xf39c12, 0x8e44ad, 0x7f8c8d, 0xd35400].map((c) => mat(c));

function hullGeo(len, wid, h, bowSharp = 0.7, both = true) {
  const g = new THREE.BoxGeometry(wid, h, len, 1, 2, 12).translate(0, h / 2, 0);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const z = p.getZ(i) / (len / 2);
    const y = p.getY(i) / h;
    let t = both ? Math.abs(z) : Math.max(0, z);
    const taper = 1 - Math.pow(t, 3) * bowSharp;
    p.setX(i, p.getX(i) * taper * (0.75 + 0.25 * y));
    if (!both && z < 0) p.setX(i, p.getX(i) * (1 - Math.pow(-z, 6) * 0.15));
  }
  g.computeVertexNormals();
  return g;
}
const part = (g, geo, m, x, y, z) => {
  const k = new THREE.Mesh(geo, m);
  k.position.set(x, y, z);
  k.castShadow = true;
  k.receiveShadow = true;
  g.add(k);
  return k;
};

function ferryModel() {
  const g = new THREE.Group();
  part(g, hullGeo(2.4, 0.72, 0.18), M.dark, 0, -0.08, 0);
  part(g, hullGeo(2.42, 0.74, 0.16), M.white, 0, 0.08, 0);
  part(g, new THREE.BoxGeometry(0.62, 0.17, 1.8), M.white, 0, 0.32, 0);
  part(g, new THREE.BoxGeometry(0.635, 0.07, 1.7), M.win, 0, 0.33, 0);
  part(g, new THREE.BoxGeometry(0.66, 0.025, 1.9), M.white, 0, 0.415, 0);
  part(g, new THREE.BoxGeometry(0.48, 0.14, 1.1), M.white, 0, 0.5, 0);
  part(g, new THREE.BoxGeometry(0.49, 0.05, 1.0), M.win, 0, 0.51, 0);
  part(g, new THREE.BoxGeometry(0.4, 0.1, 0.3), M.white, 0, 0.62, 0.5);
  part(g, new THREE.CylinderGeometry(0.075, 0.085, 0.3, 10), M.funnel, 0, 0.72, -0.1);
  part(g, new THREE.CylinderGeometry(0.077, 0.077, 0.06, 10), M.black, 0, 0.86, -0.1);
  for (const sx of [-0.33, 0.33]) part(g, new THREE.BoxGeometry(0.06, 0.06, 0.3), M.orange, sx, 0.47, -0.25);
  mergeStatic(g);
  flag(g, 0, 0.42, -1.05, 0.38, true);
  return g;
}
function tourModel() {
  const g = new THREE.Group();
  part(g, hullGeo(1.6, 0.5, 0.16, 0.8, false), M.white, 0, -0.04, 0);
  part(g, new THREE.BoxGeometry(0.42, 0.14, 1.0), M.win, 0, 0.18, -0.1);
  part(g, new THREE.BoxGeometry(0.46, 0.03, 1.1), M.blue, 0, 0.27, -0.1);
  mergeStatic(g);
  flag(g, 0, 0.12, -0.75, 0.3, true);
  return g;
}
function tankerModel() {
  const g = new THREE.Group();
  part(g, hullGeo(5.2, 0.95, 0.22, 0.85, false), M.hullRed, 0, -0.12, 0);
  part(g, hullGeo(5.22, 0.97, 0.24, 0.85, false), M.dark, 0, 0.08, 0);
  part(g, new THREE.BoxGeometry(0.8, 0.5, 0.6), M.white, 0, 0.32, -2.0);
  part(g, new THREE.BoxGeometry(0.82, 0.06, 0.62), M.win, 0, 0.7, -2.0);
  part(g, new THREE.CylinderGeometry(0.1, 0.12, 0.35, 8), M.black, 0, 0.9, -2.2);
  for (let r = 0; r < 6; r++)
    for (let s = -1; s <= 1; s++)
      for (let h = 0; h < 1 + (r + s + 2) % 2; h++) {
        const m = containerMats[(r * 3 + s + h * 5 + 7) % containerMats.length];
        part(g, new THREE.BoxGeometry(0.26, 0.17, 0.5), m, s * 0.27, 0.41 + h * 0.18, -1.2 + r * 0.55);
      }
  mergeStatic(g);
  return g;
}
function smallBoatModel(kind) {
  const g = new THREE.Group();
  const col = pick([M.white, M.blue, mat(0x2f8a7a), mat(0xd8c49a)]);
  part(g, hullGeo(0.7, 0.26, 0.1, 0.9, false), col, 0, -0.03, 0);
  if (kind === 'fish') {
    part(g, new THREE.BoxGeometry(0.16, 0.12, 0.18), M.white, 0, 0.12, -0.08);
    part(g, new THREE.CylinderGeometry(0.008, 0.008, 0.35), M.wood, 0, 0.25, 0.15);
  } else {
    part(g, new THREE.BoxGeometry(0.18, 0.06, 0.2), M.win, 0, 0.1, 0.0);
  }
  mergeStatic(g);
  return g;
}

// ── wakes: pooled instanced foam blobs, all animated on the GPU ──
function buildWakes(scene) {
  const MAX = 900;
  const geo = new THREE.InstancedBufferGeometry().copy(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2));
  const aA = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 4), 4); // x, z, vx, vz
  const aB = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 4), 4); // birth, life, size, strength
  aA.setUsage(THREE.DynamicDrawUsage);
  aB.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('aA', aA);
  geo.setAttribute('aB', aB);
  geo.instanceCount = MAX;
  const m = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: U.uTime, uNight: U.uNight, uY: { value: WATER_Y + 0.045 } },
    vertexShader: /* glsl */ `
      attribute vec4 aA; attribute vec4 aB; uniform float uTime, uY; varying vec2 vUv; varying float vA; varying vec2 vW;
      void main(){
        float age = (uTime - aB.x) / aB.y;
        float alive = step(0.0, age) * step(age, 1.0);
        float s = aB.z * (0.35 + age*1.3) * alive;
        vec2 c = aA.xy + aA.zw * (1.0 - exp(-age*aB.y*0.8)) * 1.2;
        vec3 p = vec3(c.x + position.x*s, uY, c.y + position.z*s);
        vW = p.xz; vUv = uv; vA = (1.0-age)*(1.0-age) * aB.w * alive;
        gl_Position = projectionMatrix * viewMatrix * vec4(p,1.0);
      }`,
    fragmentShader: /* glsl */ `
      varying vec2 vUv; varying float vA; varying vec2 vW; uniform float uNight;
      void main(){
        if (abs(vW.x) > ${HALF.toFixed(1)} || abs(vW.y) > ${HALF.toFixed(1)}) discard;
        vec2 d = vUv-0.5; float r = length(d)*2.0;
        float ring = smoothstep(1.0, 0.55, r) * (0.55 + 0.45*smoothstep(0.2, 0.8, r));
        float a = ring * vA;
        if (a < 0.01) discard;
        gl_FragColor = vec4(mix(vec3(0.95,0.98,1.0), vec3(0.32,0.37,0.45), uNight), a*mix(0.7, 0.4, uNight));
      }`,
  });
  const mesh = new THREE.Mesh(geo, m);
  mesh.frustumCulled = false;
  mesh.renderOrder = 1;
  scene.add(mesh);
  let head = 0;
  function spawn(x, z, vx, vz, size = 0.4, life = 3, strength = 0.8) {
    const i = head++ % MAX;
    aA.setXYZW(i, x, z, vx, vz);
    aB.setXYZW(i, U.uTime.value, life, size, strength);
    aA.needsUpdate = aB.needsUpdate = true;
  }
  return { spawn };
}

function outward(d, k = 1.8) {
  const e = 0.4;
  const gx = shoreDist(d.x + e, d.z) - shoreDist(d.x - e, d.z);
  const gz = shoreDist(d.x, d.z + e) - shoreDist(d.x, d.z - e);
  const l = Math.hypot(gx, gz) || 1;
  return [d.x - (gx / l) * k, d.z - (gz / l) * k];
}
const curve = (pts) => new THREE.CatmullRomCurve3(pts.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'centripetal');

export function buildBoats(scene, people, city) {
  const wakes = buildWakes(scene);
  const D = DOCKS;
  const boats = [];
  const tmp = new THREE.Vector3(), tan = new THREE.Vector3();

  // ── ferries ──
  const lines = [
    { name: 'Eminönü ⇄ Kadıköy', a: 'eminonu', b: 'kadikoy', mid: [[-2.5, 4.6], [0.2, 8.5], [1.0, 12], [3.5, 16.2], [8, 19.4]] },
    { name: 'Karaköy ⇄ Üsküdar', a: 'karakoy', b: 'uskudar', mid: [] },
    { name: 'Beşiktaş ⇄ Kadıköy', a: 'besiktas', b: 'kadikoy2', mid: [[0.9, -8], [1.6, -1], [2.0, 5], [1.0, 11.5], [3.2, 16.4], [7.5, 19.8]] },
  ];
  for (const L of lines) {
    const A = D[L.a], B = D[L.b];
    const pts = [[A.x, A.z], outward(A), ...L.mid, outward(B), [B.x, B.z]];
    const fwd = curve(pts);
    const back = curve([...pts].reverse());
    const g = ferryModel();
    scene.add(g);
    const f = {
      kind: 'ferry', group: g, name: L.name, routes: [fwd, back], dockNames: [B.name, A.name], from: [A, B],
      leg: 0, u: 0, len: fwd.getLength(), state: 'docked', wait: rand(2, 14), speed: 0, vmax: rand(1.1, 1.35),
      heading: 0, spawnT: 0, bob: rand(0, 6),
    };
    fwd.getPointAt(0, tmp);
    g.position.set(tmp.x, WATER_Y, tmp.z);
    const [ox, oz] = outward(A, 1);
    f.heading = Math.atan2(A.x - ox, A.z - oz); // bow facing the pier
    g.userData.landmark = { name: 'Vapur', sub: L.name };
    g.userData.boat = f;
    boats.push(f);
  }

  // ── Bosphorus tour boat: loops up to the bridge and beyond ──
  {
    const west = [], east = [];
    for (let z = 4; z >= -29; z -= 3) west.push([bosC(z) - 1.0, z]);
    for (let z = -29; z <= 4; z += 3) east.push([bosC(z) + 1.0, z]);
    const loop = curve([[-3.6, 3.6], ...west, [bosC(-31), -31.5], ...east, [-1.0, 5.2], [-3.6, 3.6]]);
    const g = tourModel();
    scene.add(g);
    const b = { kind: 'tour', group: g, routes: [loop], leg: 0, u: rand(0, 1), len: loop.getLength(), state: 'cruise', speed: 0.9, vmax: 0.9, heading: 0, spawnT: 0, bob: rand(0, 6), name: 'Bosphorus tour' };
    g.userData.landmark = { name: 'Boğaz Turu', sub: 'Bosphorus tour boat' };
    g.userData.boat = b;
    boats.push(b);
  }

  // ── cargo ship (spawned by the event director) ──
  const tankerPts = [[-14, 31], [-6, 26], [-0.5, 21], [0.9, 16], [0.9, 11.5]];
  for (let z = 8; z >= -28; z -= 4) tankerPts.push([bosC(z), z]);
  tankerPts.push([bosC(-34), -34]);
  const tankerCurve = curve(tankerPts);
  const tankerCurveRev = curve([...tankerPts].reverse());
  const tanker = { kind: 'tanker', group: tankerModel(), routes: [tankerCurve], leg: 0, u: 0, len: tankerCurve.getLength(), state: 'idle', speed: 0.55, vmax: 0.55, heading: 0, spawnT: 0, bob: 0, name: 'Cargo ship' };
  tanker.group.visible = false;
  tanker.group.userData.landmark = { name: 'Yük Gemisi', sub: 'Cargo ship transiting the Bosphorus' };
  tanker.group.userData.boat = tanker;
  scene.add(tanker.group);
  boats.push(tanker);
  function sendTanker() {
    if (tanker.state !== 'idle') return false;
    const northbound = Math.random() < 0.5;
    tanker.routes = [northbound ? tankerCurve : tankerCurveRev];
    tanker.len = tanker.routes[0].getLength();
    tanker.u = 0;
    tanker.state = 'cruise';
    tanker.group.visible = true;
    tanker.routes[0].getPointAt(0, tmp);
    tanker.routes[0].getTangentAt(0, tan);
    tanker.heading = Math.atan2(tan.x, tan.z);
    events.emit('ship:enter', { position: tmp.clone(), northbound });
    return true;
  }

  // ── small wandering boats ──
  const randomWater = (x, z, r) => {
    for (let k = 0; k < 40; k++) {
      const a = rand(0, 6.28), d = rand(r * 0.3, r);
      const nx = clamp(x + Math.cos(a) * d, -HALF + 1, HALF - 1), nz = clamp(z + Math.sin(a) * d, -HALF + 1, HALF - 1);
      if (shoreDist(nx, nz) > -0.9) continue;
      let ok = true;
      const n = Math.ceil(d / 0.3);
      for (let j = 1; j <= n && ok; j++) if (shoreDist(x + ((nx - x) * j) / n, z + ((nz - z) * j) / n) > -0.6) ok = false;
      if (ok) return [nx, nz];
    }
    return null;
  };
  const starts = [[-12, 25], [-20, 26], [6, 25], [14, 26], [-18, 3.5], [-25, 3.6], [0.5, -16], [1.0, -26], [22, 24]];
  starts.forEach(([x, z], k) => {
    const kind = k % 3 === 2 ? 'motor' : 'fish';
    const g = smallBoatModel(kind);
    scene.add(g);
    g.position.set(x, WATER_Y, z);
    const b = { kind, group: g, x, z, tx: x, tz: z, speed: 0, vmax: kind === 'motor' ? rand(1.4, 2.0) : rand(0.35, 0.55), heading: rand(0, 6.28), wait: rand(0, 6), spawnT: 0, bob: rand(0, 6), name: kind === 'motor' ? 'Motorboat' : 'Fishing boat' };
    g.userData.landmark = { name: kind === 'motor' ? 'Sürat Teknesi' : 'Balıkçı Teknesi', sub: kind === 'motor' ? 'Motorboat' : 'Fishing boat' };
    g.userData.boat = b;
    boats.push(b);
  });

  // ── moored boats bobbing along the shore ──
  const moored = [];
  for (let k = 0; k < 600 && moored.length < 22; k++) {
    const x = rand(-HALF + 1, HALF - 1), z = rand(-HALF + 1, HALF - 1);
    const sd = shoreDist(x, z);
    if (sd > -0.35 || sd < -0.6) continue;
    if (Object.values(D).some((d) => Math.hypot(d.x - x, d.z - z) < 2.5)) continue;
    if (Math.abs(z - BRIDGE.z) < 2) continue;
    const g = smallBoatModel(Math.random() < 0.6 ? 'fish' : 'motor');
    const e = 0.4;
    const gx = shoreDist(x + e, z) - shoreDist(x - e, z), gz = shoreDist(x, z + e) - shoreDist(x, z - e);
    g.position.set(x, WATER_Y, z);
    g.rotation.y = Math.atan2(gx, gz) + Math.PI / 2 + rand(-0.3, 0.3);
    g.userData.bob = rand(0, 6);
    scene.add(g);
    moored.push(g);
  }

  const underBridge = new WeakMap();
  function moveOnCurve(b, dt) {
    const c = b.routes[b.leg];
    const dist = b.u * b.len, toEnd = b.len - dist;
    let target = b.vmax;
    if (b.kind === 'ferry') target = Math.min(b.vmax, 0.12 + Math.sqrt(Math.max(0, dist)) * 0.7, 0.05 + Math.sqrt(Math.max(0, toEnd)) * 0.6);
    b.speed = damp(b.speed, target, 1.2, dt);
    b.u = Math.min(1, b.u + (b.speed * dt) / b.len);
    c.getPointAt(b.u, tmp);
    c.getTangentAt(b.u, tan);
    b.group.position.x = tmp.x;
    b.group.position.z = tmp.z;
    const turnRate = b.kind === 'ferry' && dist < 2.5 ? 1.4 : 3;
    b.heading = angleLerp(b.heading, Math.atan2(tan.x, tan.z), 1 - Math.exp(-turnRate * dt));
  }

  function emitWake(b, dt, len, width) {
    if (b.speed < 0.08) return;
    b.spawnT -= dt;
    if (b.spawnT > 0) return;
    b.spawnT = 0.07;
    const h = b.heading;
    const fx = Math.sin(h), fz = Math.cos(h);
    const rx = fz, rz = -fx;
    const p = b.group.position;
    const sx = p.x - fx * len * 0.5, sz = p.z - fz * len * 0.5;
    const k = Math.min(1, b.speed / 1.2);
    wakes.spawn(sx, sz, -fx * 0.1, -fz * 0.1, width * 1.1, 2.6, 0.55 * k + 0.2);
    for (const s of [-1, 1]) wakes.spawn(sx + rx * s * width * 0.5, sz + rz * s * width * 0.5, rx * s * 0.35 * k, rz * s * 0.35 * k, width * 0.6, 3.6, 0.5 * k + 0.1);
    // bow wave
    if (Math.random() < 0.5) wakes.spawn(p.x + fx * len * 0.45, p.z + fz * len * 0.45, rx * (Math.random() < 0.5 ? 1 : -1) * 0.2, 0, width * 0.4, 1.4, 0.4 * k);
  }

  function bob(g, b, t) {
    const amp = 0.012 + U.uWind.value * 0.03;
    g.position.y = WATER_Y + Math.sin(t * 1.6 + b) * amp;
    g.rotation.z = Math.sin(t * 1.1 + b * 1.3) * (0.02 + U.uWind.value * 0.05);
    g.rotation.x = Math.sin(t * 0.9 + b * 0.7) * (0.01 + U.uWind.value * 0.025);
  }

  function update(dt, t) {
    for (const b of boats) {
      const g = b.group;
      if (b.kind === 'ferry') {
        if (b.state === 'docked') {
          b.wait -= dt;
          b.speed = 0;
          if (b.wait <= 0) {
            b.state = 'cruise';
            b.u = 0;
            b.len = b.routes[b.leg].getLength();
            events.emit('ferry:horn', { position: g.position.clone(), name: b.name });
            events.emit('ferry:depart', { position: g.position.clone(), name: b.name, from: b.from[b.leg].name });
          }
        } else {
          moveOnCurve(b, dt);
          if (b.u >= 1) {
            b.state = 'docked';
            b.wait = rand(10, 22);
            const dock = b.from[1 - b.leg];
            events.emit('ferry:arrive', { position: g.position.clone(), name: b.name, at: dock.name });
            // passengers walk ashore towards the nearest plaza
            const [lx, lz] = outward(dock, -2.2);
            let best = city.plazas[0], bd = 1e9;
            for (const p of city.plazas) { const d = Math.hypot(p.x - lx, p.z - lz); if (d < bd) { bd = d; best = p; } }
            people.disembark(lx, lz, best);
            b.leg = 1 - b.leg;
          }
        }
        emitWake(b, dt, 2.3, 0.7);
      } else if (b.kind === 'tour' || b.kind === 'tanker') {
        if (b.state === 'idle') continue;
        moveOnCurve(b, dt);
        if (b.u >= 1) {
          if (b.kind === 'tour') b.u = 0;
          else { b.state = 'idle'; g.visible = false; continue; }
        }
        const wasNorth = underBridge.get(b);
        const north = g.position.z < BRIDGE.z;
        if (wasNorth !== undefined && wasNorth !== north) events.emit('boat:underBridge', { position: g.position.clone(), name: b.name });
        underBridge.set(b, north);
        emitWake(b, dt, b.kind === 'tanker' ? 5 : 1.5, b.kind === 'tanker' ? 0.95 : 0.5);
      } else {
        // wandering small boats
        if (b.wait > 0) {
          b.wait -= dt;
          b.speed = damp(b.speed, 0, 1, dt);
          if (b.wait <= 0) {
            const nt = randomWater(b.x, b.z, b.kind === 'motor' ? 12 : 6);
            if (nt) { [b.tx, b.tz] = nt; if (b.kind === 'motor') events.emit('boat:leave', { position: g.position.clone() }); }
            else b.wait = 2;
          }
        } else {
          const dx = b.tx - b.x, dz = b.tz - b.z, d = Math.hypot(dx, dz);
          if (d < 0.2) b.wait = b.kind === 'motor' ? rand(3, 10) : rand(6, 20);
          b.speed = damp(b.speed, Math.min(b.vmax, d * 0.6 + 0.05), 1, dt);
          const want = Math.atan2(dx, dz);
          b.heading = angleLerp(b.heading, want, 1 - Math.exp(-2 * dt));
          const fwd = Math.max(0, Math.cos(want - b.heading));
          b.x += Math.sin(b.heading) * b.speed * fwd * dt;
          b.z += Math.cos(b.heading) * b.speed * fwd * dt;
        }
        g.position.x = b.x;
        g.position.z = b.z;
        emitWake(b, dt, 0.7, b.kind === 'motor' ? 0.4 : 0.26);
      }
      g.rotation.y = b.heading;
      bob(g, b.bob, t);
      if (b.boost) { b.boost -= dt; }
    }
    for (const g of moored) {
      const r = g.rotation.y;
      bob(g, g.userData.bob, t);
      g.rotation.y = r;
    }
    M.win.emissiveIntensity = U.uNight.value * 1.3;
  }

  // click feedback: horn + a foam burst
  function poke(b) {
    events.emit(b.kind === 'ferry' || b.kind === 'tanker' ? 'ferry:horn' : 'boat:horn', { position: b.group.position.clone(), name: b.name });
    const p = b.group.position;
    for (let k = 0; k < 14; k++) {
      const a = (k / 14) * Math.PI * 2;
      wakes.spawn(p.x, p.z, Math.cos(a) * 0.5, Math.sin(a) * 0.5, 0.35, 2, 0.7);
    }
    if (b.kind === 'ferry' && b.state === 'docked') b.wait = Math.min(b.wait, 1.5);
  }
  function ripple(x, z) {
    for (let k = 0; k < 3; k++) wakes.spawn(x, z, 0, 0, 0.6 + k * 0.5, 2.2 + k * 0.6, 0.8 - k * 0.2);
    events.emit('water:splash', { position: new THREE.Vector3(x, WATER_Y, z) });
  }

  return { update, boats, sendTanker, poke, ripple, wakes };
}

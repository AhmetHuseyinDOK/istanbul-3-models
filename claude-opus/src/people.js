// Pedestrians (sidewalk walkers, plaza wanderers, Istiklal crowd, Galata bridge fishermen),
// umbrellas in the rain, and the nostalgic red tram on Istiklal.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { LAND_Y, GALATA_BRIDGE } from './geo.js';
import { U, rand, pick, damp, angleLerp, events, clamp } from './util.js';
import { ROAD_HALF } from './city.js';

const SIDE = ROAD_HALF + 0.2;

export function buildPeople(scene, city) {
  const G = city.graph;
  const walkEdges = G.edges.filter((e) => e.kind === 'road' || e.kind === 'link' || e.kind === 'galata');
  const N_WALK = 220, N_PLAZA = 170, N_IST = 70, N_FISH = 18;
  const total = N_WALK + N_PLAZA + N_IST + N_FISH;

  const bodyGeo = mergeGeometries([
    new THREE.CylinderGeometry(0.05, 0.065, 0.17, 6).translate(0, 0.085 + 0.06, 0),
    new THREE.CylinderGeometry(0.045, 0.04, 0.07, 5).translate(0, 0.035, 0),
  ]);
  const bodies = new THREE.InstancedMesh(bodyGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8 }), total);
  const heads = new THREE.InstancedMesh(new THREE.SphereGeometry(0.042, 6, 4).translate(0, 0.27, 0), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }), total);
  const umbGeo = mergeGeometries([
    new THREE.ConeGeometry(0.17, 0.07, 8, 1, true).translate(0, 0.39, 0),
    new THREE.CylinderGeometry(0.006, 0.006, 0.16, 3).translate(0, 0.3, 0),
  ]);
  const umbrellas = new THREE.InstancedMesh(umbGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, side: THREE.DoubleSide }), total);
  for (const m of [bodies, heads, umbrellas]) {
    m.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 60);
    m.castShadow = true;
    scene.add(m);
  }
  const clothes = ['#2f3e55', '#8a2f2f', '#d9cfba', '#3d5c3a', '#5a4a6e', '#c27a2c', '#1f1f24', '#6e7f8f', '#b5485a', '#e8e2d2', '#365f7a', '#7a5a3a'];
  const skins = ['#e8c4a0', '#d9a77f', '#c48d64', '#a8714a', '#f0d0b0'];
  const umbCols = ['#1f1f24', '#c0392b', '#2e5e8a', '#e2b33a', '#3d7a4a', '#7a3d7a', '#e8e2d2', '#d35400'];
  const c = new THREE.Color();
  const people = [];
  for (let i = 0; i < total; i++) {
    bodies.setColorAt(i, c.set(pick(clothes)));
    heads.setColorAt(i, c.set(pick(skins)));
    umbrellas.setColorAt(i, c.set(pick(umbCols)));
    const p = { i, pos: new THREE.Vector3(), target: new THREE.Vector3(), heading: rand(0, 6.28), speed: rand(0.28, 0.5), phase: rand(0, 10), pause: 0, umbrellaChance: Math.random(), shy: Math.random(), state: 'walk' };
    if (i < N_WALK) {
      p.type = 'walk';
      p.edge = pick(walkEdges);
      p.dir = Math.random() < 0.5 ? 1 : -1;
      p.s = rand(0, p.edge.len);
      p.side = Math.random() < 0.5 ? 1 : -1;
    } else if (i < N_WALK + N_PLAZA) {
      p.type = 'plaza';
      p.plaza = pick(city.plazas);
      p.home = p.plaza;
      newPlazaTarget(p, true);
    } else if (i < N_WALK + N_PLAZA + N_IST) {
      p.type = 'ist';
      p.u = rand(0, 1);
      p.dir = Math.random() < 0.5 ? 1 : -1;
      p.off = rand(-0.38, 0.38);
      p.speed = rand(0.18, 0.36);
    } else {
      p.type = 'fish';
      const k = i - (N_WALK + N_PLAZA + N_IST);
      const side = k % 2 ? 1 : -1;
      const z = GALATA_BRIDGE.z0 + 1.0 + (Math.floor(k / 2) / (N_FISH / 2)) * (GALATA_BRIDGE.z1 - GALATA_BRIDGE.z0 - 2.0) + rand(-0.1, 0.1);
      p.pos.set(GALATA_BRIDGE.x + side * 0.62, GALATA_BRIDGE.deckY, z);
      p.heading = side > 0 ? Math.PI / 2 : -Math.PI / 2;
      p.side = side;
    }
    people.push(p);
    if (p.type === 'walk') { placeWalker(p); p.pos.copy(p.target); }
    if (p.type === 'plaza') p.pos.copy(p.target);
    if (p.type === 'ist') { placeIst(p); p.pos.copy(p.target); }
  }

  // fishing rods for the fishermen
  const fishers = people.filter((p) => p.type === 'fish');
  const rodGeo = new THREE.CylinderGeometry(0.004, 0.006, 0.9, 3).translate(0, 0.45, 0).rotateX(Math.PI / 2 - 0.5).translate(0, 0.18, 0);
  const rods = new THREE.InstancedMesh(rodGeo, new THREE.MeshStandardMaterial({ color: 0x2a2a2a }), fishers.length);
  scene.add(rods);

  function placeWalker(p) {
    const e = p.edge;
    const s = p.dir > 0 ? p.s : e.len - p.s;
    const dx = e.dx * p.dir, dz = e.dz * p.dir;
    const side = e.kind === 'galata' ? 0.45 : SIDE;
    p.target.set(e.a.x + e.dx * s - dz * side * p.side, G.y(e, s), e.a.z + e.dz * s + dx * side * p.side);
    p.th = Math.atan2(dx, dz);
  }
  function placeIst(p) {
    const I = city.istiklal;
    const x = I.ax + (I.bx - I.ax) * p.u, z = I.az + (I.bz - I.az) * p.u;
    const len = Math.hypot(I.bx - I.ax, I.bz - I.az);
    const nx = -(I.bz - I.az) / len, nz = (I.bx - I.ax) / len;
    p.target.set(x + nx * p.off, LAND_Y + 0.02, z + nz * p.off);
    p.th = Math.atan2((I.bx - I.ax) * p.dir, (I.bz - I.az) * p.dir);
  }
  function newPlazaTarget(p, init = false) {
    const pl = p.plaza;
    const a = rand(0, Math.PI * 2), r = Math.sqrt(Math.random()) * pl.r;
    p.target.set(pl.x + Math.cos(a) * r, LAND_Y + 0.02, pl.z + Math.sin(a) * r);
    p.pause = init ? rand(0, 3) : 0;
  }

  // ── gatherings ──
  const gatherings = [];
  function gather(x, z, n = 14, dur = rand(10, 18), label = 'crowd') {
    const cand = people.filter((p) => (p.type === 'plaza' || p.type === 'walk') && !p.gather && Math.hypot(p.pos.x - x, p.pos.z - z) < 7)
      .sort((a, b) => Math.hypot(a.pos.x - x, a.pos.z - z) - Math.hypot(b.pos.x - x, b.pos.z - z)).slice(0, n);
    const g = { x, z, until: performance.now() / 1000 + dur, members: cand };
    cand.forEach((p, k) => {
      const a = (k / cand.length) * Math.PI * 2 + rand(-0.2, 0.2);
      const r = 0.45 + (k % 3) * 0.18;
      p.gather = { x: x + Math.cos(a) * r, z: z + Math.sin(a) * r, cx: x, cz: z, prevType: p.type };
      p.type = 'gather';
    });
    gatherings.push(g);
    events.emit('crowd:gather', { position: new THREE.Vector3(x, LAND_Y, z), label, size: cand.length });
    return g;
  }
  function releaseGathering(g) {
    for (const p of g.members) {
      p.type = p.gather.prevType;
      if (p.type === 'walk') {
        // rejoin the network from wherever they are: snap to the closest edge
        let best = walkEdges[0], bd = 1e9;
        for (const e of walkEdges) {
          const d = Math.hypot((e.a.x + e.b.x) / 2 - p.pos.x, (e.a.z + e.b.z) / 2 - p.pos.z);
          if (d < bd) { bd = d; best = e; }
        }
        p.edge = best;
        p.s = rand(0, best.len);
      } else newPlazaTarget(p);
      p.gather = null;
    }
  }

  // passengers streaming off a ferry
  function disembark(x, z, toward) {
    const cand = people.filter((p) => p.type === 'plaza' && Math.hypot(p.pos.x - x, p.pos.z - z) > 3).slice(0, 6);
    for (const p of cand) {
      p.pos.set(x + rand(-0.2, 0.2), LAND_Y + 0.02, z + rand(-0.2, 0.2));
      p.plaza = toward;
      newPlazaTarget(p);
    }
  }

  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), pos = new THREE.Vector3();
  const ONE = new THREE.Vector3(1, 1, 1), ZERO = new THREE.Vector3(0, 0, 0), XAXIS = new THREE.Vector3(1, 0, 0), tilt = new THREE.Quaternion();
  let visibleFrac = 1;

  function update(dt, t, hourFrac) {
    // fewer people out late at night and in heavy weather
    const h = hourFrac;
    let want = h < 5 ? 0.25 : h < 7 ? 0.5 : h > 23 ? 0.45 : 1;
    want *= 1 - U.uRain.value * 0.3 - U.uSnow.value * 0.2;
    visibleFrac = damp(visibleFrac, want, 0.3, dt);
    const rainy = U.uRain.value > 0.05 || U.uSnow.value > 0.6;
    const now = performance.now() / 1000;
    for (let k = gatherings.length - 1; k >= 0; k--) if (now > gatherings[k].until) { releaseGathering(gatherings[k]); gatherings.splice(k, 1); }

    const hurry = 1 + U.uRain.value * 0.5;
    for (const p of people) {
      let moving = false;
      if (p.type === 'walk') {
        p.s += p.speed * hurry * dt;
        if (p.s >= p.edge.len) {
          const n = p.dir > 0 ? p.edge.b : p.edge.a;
          const opts = n.edges.filter((e) => e !== p.edge && e.kind !== 'bosphorus');
          const e = opts.length ? pick(opts) : p.edge;
          p.dir = e === p.edge ? -p.dir : e.a === n ? 1 : -1;
          p.edge = e;
          p.s = 0;
          if (Math.random() < 0.3) p.side = -p.side; // crosses the street
        }
        placeWalker(p);
        moving = true;
      } else if (p.type === 'plaza') {
        if (p.pause > 0) p.pause -= dt;
        else {
          const dx = p.target.x - p.pos.x, dz = p.target.z - p.pos.z;
          const d = Math.hypot(dx, dz);
          if (d < 0.05) {
            p.pause = rand(1, 6);
            if (p.plaza !== p.home && Math.random() < 0.5) p.plaza = p.home;
            newPlazaTarget(p);
            p.pause = rand(0.5, 5);
          } else {
            p.th = Math.atan2(dx, dz);
            moving = true;
          }
        }
      } else if (p.type === 'ist') {
        p.u += (p.speed * hurry * p.dir * dt) / 12.8;
        if (p.u > 1 || p.u < 0) { p.dir = -p.dir; p.u = clamp(p.u, 0, 1); p.off = rand(-0.38, 0.38); }
        placeIst(p);
        moving = true;
      } else if (p.type === 'gather') {
        p.target.set(p.gather.x, LAND_Y + 0.02, p.gather.z);
        const dx = p.target.x - p.pos.x, dz = p.target.z - p.pos.z;
        if (Math.hypot(dx, dz) > 0.04) { p.th = Math.atan2(dx, dz); moving = true; }
        else p.th = Math.atan2(p.gather.cx - p.pos.x, p.gather.cz - p.pos.z);
      }

      if (p.type === 'plaza' || p.type === 'gather') {
        if (moving) {
          const sp = p.speed * hurry * (p.type === 'gather' ? 1.6 : 1) * dt;
          const dx = p.target.x - p.pos.x, dz = p.target.z - p.pos.z;
          const d = Math.hypot(dx, dz) || 1;
          p.pos.x += (dx / d) * Math.min(sp, d);
          p.pos.z += (dz / d) * Math.min(sp, d);
          p.pos.y = LAND_Y + 0.02;
        }
      } else if (p.type !== 'fish') {
        p.pos.x = damp(p.pos.x, p.target.x, 6, dt);
        p.pos.z = damp(p.pos.z, p.target.z, 6, dt);
        p.pos.y = damp(p.pos.y, p.target.y, 10, dt);
      }
      if (p.th !== undefined) p.heading = angleLerp(p.heading, p.th, 1 - Math.exp(-6 * dt));

      const hidden = p.shy > visibleFrac && p.type !== 'gather' && p.type !== 'fish';
      p.phase += dt * (moving ? 9 * hurry : 0);
      pos.copy(p.pos);
      pos.y += moving ? Math.abs(Math.sin(p.phase)) * 0.018 : 0;
      q.setFromAxisAngle(up, p.heading);
      m4.compose(pos, q, hidden ? ZERO : ONE);
      bodies.setMatrixAt(p.i, m4);
      heads.setMatrixAt(p.i, m4);
      const umb = rainy && p.umbrellaChance < 0.75 && !hidden && p.type !== 'fish';
      m4.compose(pos, q, umb ? ONE : ZERO);
      umbrellas.setMatrixAt(p.i, m4);
    }
    // fishermen rods bob gently
    fishers.forEach((p, k) => {
      const a = Math.sin(t * 0.7 + k * 1.3) * 0.05;
      q.setFromAxisAngle(up, p.heading);
      tilt.setFromAxisAngle(XAXIS, a);
      m4.compose(p.pos, q.multiply(tilt), ONE);
      rods.setMatrixAt(k, m4);
    });
    rods.instanceMatrix.needsUpdate = true;
    bodies.instanceMatrix.needsUpdate = heads.instanceMatrix.needsUpdate = umbrellas.instanceMatrix.needsUpdate = true;
  }

  return { update, gather, disembark, people, meshes: [bodies, heads] };
}

// The red nostalgic tram running Taksim ⇄ Tünel.
export function buildTram(scene, city) {
  const I = city.istiklal;
  const g = new THREE.Group();
  const red = new THREE.MeshStandardMaterial({ color: 0xb3261e, roughness: 0.5 });
  const cream = new THREE.MeshStandardMaterial({ color: 0xf1e6cc, roughness: 0.6 });
  const win = new THREE.MeshStandardMaterial({ color: 0x223, roughness: 0.2, emissive: 0xffd28a, emissiveIntensity: 0 });
  const add = (geo, m, y) => { const k = new THREE.Mesh(geo, m); k.position.y = y; k.castShadow = true; g.add(k); return k; };
  add(new THREE.BoxGeometry(0.34, 0.2, 1.0), red, 0.14);
  add(new THREE.BoxGeometry(0.35, 0.12, 0.92), win, 0.3);
  add(new THREE.BoxGeometry(0.36, 0.05, 1.04), cream, 0.38);
  add(new THREE.BoxGeometry(0.02, 0.18, 0.02), new THREE.MeshStandardMaterial({ color: 0x333333 }), 0.5);
  scene.add(g);
  g.userData.landmark = { name: 'Nostaljik Tramvay', sub: 'Taksim ⇄ Tünel · Istiklal Avenue' };
  const len = Math.hypot(I.bx - I.ax, I.bz - I.az);
  let u = 0.3, dir = 1, wait = 0, speed = 0;
  const heading = Math.atan2(I.bx - I.ax, I.bz - I.az);
  function update(dt) {
    if (wait > 0) {
      wait -= dt;
      speed = 0;
      if (wait <= 0) events.emit('tram:bell', { position: g.position.clone() });
    } else {
      const toEnd = dir > 0 ? (1 - u) * len : u * len;
      const target = Math.min(0.45, toEnd * 0.6 + 0.05);
      speed = damp(speed, target, 1.5, dt);
      u += (speed * dir * dt) / len;
      if (u >= 0.97 || u <= 0.03) {
        u = clamp(u, 0.03, 0.97);
        dir = -dir;
        wait = rand(5, 10);
      }
    }
    g.position.set(I.ax + (I.bx - I.ax) * u, LAND_Y + 0.02, I.az + (I.bz - I.az) * u);
    g.rotation.y = heading;
    win.emissiveIntensity = U.uNight.value * 1.4;
  }
  return { update, group: g };
}

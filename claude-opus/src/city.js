// Procedural city fabric: road graph, signals, buildings, trees, lamps, awnings, plazas.
import * as THREE from 'three';
import { HALF, LAND_Y, regionAt, shoreDist, SITES, BRIDGE, GALATA_BRIDGE, DOCKS } from './geo.js';
import { U, patch, rand, pick, glowTexture, clamp } from './util.js';
import { bridgeDeckY } from './landmarks.js';

export const ROAD_HALF = 0.5;
const S = 5.4; // grid spacing
const OX = 1.2, OZ = -0.6;

function segDist(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const L2 = dx * dx + dz * dz || 1;
  const t = clamp(((px - ax) * dx + (pz - az) * dz) / L2, 0, 1);
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}

export class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }
  addNode(x, z, extra = {}) {
    const n = { id: this.nodes.length, x, z, edges: [], ...extra };
    this.nodes.push(n);
    return n;
  }
  addEdge(a, b, extra = {}) {
    const e = { id: this.edges.length, a, b, len: Math.hypot(b.x - a.x, b.z - a.z), kind: 'road', ...extra };
    e.dx = (b.x - a.x) / e.len;
    e.dz = (b.z - a.z) / e.len;
    e.axis = Math.abs(e.dx) > Math.abs(e.dz) ? 0 : 1;
    this.edges.push(e);
    a.edges.push(e);
    b.edges.push(e);
    return e;
  }
  other(e, n) {
    return e.a === n ? e.b : e.a;
  }
  // height of the road surface along an edge, t in [0,len] measured from node a
  y(e, s) {
    if (e.kind === 'bosphorus') {
      const x = e.a.x + e.dx * s;
      return bridgeDeckY(x) - 0.08;
    }
    if (e.kind === 'galata') return GALATA_BRIDGE.deckY;
    return LAND_Y + 0.02;
  }
}

export function buildCity(scene, landmarks) {
  // Obstacles = landmark footprints (except long bridges handled specially).
  const obstacles = [];
  for (const g of landmarks) {
    const name = g.userData.landmark?.name || '';
    if (name.includes('Köprü')) continue;
    g.updateMatrixWorld(true);
    const b = new THREE.Box3().setFromObject(g);
    obstacles.push(b.expandByScalar(0.25));
  }
  const inObstacle = (x, z, pad = 0) => obstacles.some((b) => x > b.min.x - pad && x < b.max.x + pad && z > b.min.z - pad && z < b.max.z + pad);

  // Plazas (pedestrian squares) — also kept free of buildings.
  const plazas = [];
  for (const g of landmarks) {
    const c = g.userData.courtyard;
    if (c) plazas.push({ ...c, name: g.userData.landmark.name, paved: false });
  }
  const P = (x, z, r, name) => plazas.push({ x, z, r, name, paved: true });
  P((SITES.hagiaSophia.x + SITES.blueMosque.x) / 2 + 0.3, 13.0, 1.5, 'Sultanahmet Meydanı');
  P(SITES.yeniCami.x + 2.0, 7.4, 1.0, 'Eminönü');
  P(SITES.kadikoy.x, SITES.kadikoy.z + 0.6, 1.5, 'Kadıköy Meydanı');
  P(SITES.ortakoy.x - 0.2, SITES.ortakoy.z + 1.6, 0.8, 'Ortaköy Meydanı');
  P(DOCKS.uskudar.x + 2.2, -5.6, 1.1, 'Üsküdar Meydanı');
  P(DOCKS.besiktas.x - 2.0, -12.5, 1.0, 'Beşiktaş Meydanı');
  P(SITES.galataTower.x + 1.2, SITES.galataTower.z + 1.2, 0.8, 'Galata Meydanı');
  const inPlaza = (x, z, pad = 0) => plazas.some((p) => Math.hypot(x - p.x, z - p.z) < p.r + pad);

  // Parks
  const parks = [
    { x: -6.0, z: -15.0, r: 2.2 }, // Yıldız
    { x: -15.6, z: -21.6, r: 1.5 }, // Gezi
    { x: -2.6, z: 16.8, r: 1.3 }, // Gülhane
    { x: 9.0, z: -9.0, r: 2.0 }, // Fethi Paşa
    { x: 17.5, z: -9.0, r: 2.6 }, // Çamlıca slopes
    { x: -26.5, z: 14.0, r: 2.0 },
    { x: 22, z: 6, r: 2.2 },
    { x: -22, z: -6, r: 1.8 },
  ];
  const inPark = (x, z, pad = 0) => parks.some((p) => Math.hypot(x - p.x, z - p.z) < p.r + pad);

  // ── Road graph on a grid ──
  const G = new Graph();
  const grid = new Map();
  for (let i = -8; i <= 8; i++)
    for (let j = -8; j <= 8; j++) {
      const x = OX + i * S, z = OZ + j * S;
      if (Math.abs(x) > HALF - 0.8 || Math.abs(z) > HALF - 0.8) continue;
      const reg = regionAt(x, z);
      if (!reg || reg === 'islet') continue;
      if (shoreDist(x, z) < 1.3 || inObstacle(x, z, 0.6) || inPark(x, z, 0.2) || inPlaza(x, z, 0.6)) continue;
      grid.set(`${i},${j}`, G.addNode(x, z, { reg }));
    }
  const edgeOk = (a, b) => {
    if (a.reg !== b.reg) return false;
    const n = Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / 0.3);
    for (let k = 0; k <= n; k++) {
      const x = a.x + ((b.x - a.x) * k) / n, z = a.z + ((b.z - a.z) * k) / n;
      if (regionAt(x, z) !== a.reg || shoreDist(x, z) < 0.9 || inObstacle(x, z, 0.35) || inPark(x, z, 0.1) || inPlaza(x, z, 0.4)) return false;
    }
    return true;
  };
  for (const [k, n] of grid) {
    const [i, j] = k.split(',').map(Number);
    for (const [di, dj] of [[1, 0], [0, 1]]) {
      const m = grid.get(`${i + di},${j + dj}`);
      if (m && edgeOk(n, m) && Math.random() > 0.1) G.addEdge(n, m);
    }
  }
  // Bridges join the networks.
  const nearest = (x, z, reg) => {
    let best = null, bd = 1e9;
    for (const n of G.nodes) {
      if (n.reg !== reg || !n.edges.length) continue;
      const d = Math.hypot(n.x - x, n.z - z);
      if (d < bd) { bd = d; best = n; }
    }
    return best;
  };
  {
    const a = G.addNode(BRIDGE.x0, BRIDGE.z, { reg: 'europe', bridgeEnd: true });
    const b = G.addNode(BRIDGE.x1, BRIDGE.z, { reg: 'asia', bridgeEnd: true });
    G.addEdge(a, b, { kind: 'bosphorus' });
    const na = nearest(BRIDGE.x0 - 2, BRIDGE.z, 'europe');
    const nb = nearest(BRIDGE.x1 + 2, BRIDGE.z, 'asia');
    if (na) G.addEdge(na, a, { kind: 'link' });
    if (nb) G.addEdge(b, nb, { kind: 'link' });
  }
  {
    const a = G.addNode(GALATA_BRIDGE.x, GALATA_BRIDGE.z0, { reg: 'europe', bridgeEnd: true });
    const b = G.addNode(GALATA_BRIDGE.x, GALATA_BRIDGE.z1, { reg: 'peninsula', bridgeEnd: true });
    G.addEdge(a, b, { kind: 'galata' });
    const na = nearest(GALATA_BRIDGE.x, GALATA_BRIDGE.z0 - 3, 'europe');
    const nb = nearest(GALATA_BRIDGE.x, GALATA_BRIDGE.z1 + 3, 'peninsula');
    if (na) G.addEdge(na, a, { kind: 'link' });
    if (nb) G.addEdge(b, nb, { kind: 'link' });
  }
  // Drop isolated nodes from consideration (keep ids stable).
  G.live = G.nodes.filter((n) => n.edges.length);

  // ── Road meshes ──
  const roadMat = patch(new THREE.MeshStandardMaterial({ color: 0x55595f, roughness: 0.88 }), { wet: true, puddles: true, snow: true });
  const roadEdges = G.edges.filter((e) => e.kind === 'road' || e.kind === 'link');
  const roadGeo = new THREE.BoxGeometry(1, 0.03, 1).translate(0, 0.015, 0);
  const roads = new THREE.InstancedMesh(roadGeo, roadMat, roadEdges.length + G.live.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3();
  let ri = 0;
  for (const e of roadEdges) {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(e.dx, e.dz));
    v.set((e.a.x + e.b.x) / 2, LAND_Y, (e.a.z + e.b.z) / 2);
    sc.set(ROAD_HALF * 2, 1, e.len);
    roads.setMatrixAt(ri++, m4.compose(v, q, sc));
  }
  for (const n of G.live) {
    if (n.bridgeEnd) continue;
    v.set(n.x, LAND_Y + 0.001, n.z);
    roads.setMatrixAt(ri++, m4.compose(v, q.identity(), sc.set(ROAD_HALF * 2, 1, ROAD_HALF * 2)));
  }
  roads.count = ri;
  roads.receiveShadow = true;
  roads.userData.ground = true;
  scene.add(roads);

  // dashed centre lines
  const dashes = [];
  for (const e of roadEdges) {
    for (let s = 0.9; s < e.len - 0.9; s += 0.55) dashes.push([e.a.x + e.dx * s, e.a.z + e.dz * s, Math.atan2(e.dx, e.dz)]);
  }
  const dashMat = new THREE.MeshStandardMaterial({ color: 0xe8e2cf, roughness: 0.7 });
  const dashMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.04, 0.01, 0.24), dashMat, dashes.length);
  dashes.forEach(([x, z, a], i) => dashMesh.setMatrixAt(i, m4.compose(v.set(x, LAND_Y + 0.032, z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), a), sc.set(1, 1, 1))));
  dashMesh.receiveShadow = true;
  scene.add(dashMesh);

  // ── Signals at busy intersections ──
  const signals = [];
  const stripes = [];
  for (const n of G.live) {
    if (n.edges.length < 3 || n.bridgeEnd || Math.random() < 0.35) continue;
    const sig = { node: n, period: rand(9, 14), offset: rand(0, 20), state: [1, 0] };
    n.signal = sig;
    signals.push(sig);
    for (const e of n.edges) {
      const dir = e.a === n ? 1 : -1;
      const ox = e.dx * dir, oz = e.dz * dir;
      for (let k = -2; k <= 2; k++) {
        const px = n.x + ox * 0.78 + -oz * k * 0.17, pz = n.z + oz * 0.78 + ox * k * 0.17;
        stripes.push([px, pz, Math.atan2(ox, oz)]);
      }
    }
  }
  const stripeMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.09, 0.01, 0.3), dashMat, stripes.length);
  stripes.forEach(([x, z, a], i) => stripeMesh.setMatrixAt(i, m4.compose(v.set(x, LAND_Y + 0.032, z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), a), sc.set(1, 1, 1))));
  stripeMesh.receiveShadow = true;
  scene.add(stripeMesh);

  // signal heads: two per intersection (one per axis)
  const poleMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.018, 0.018, 0.5, 5).translate(0, 0.25, 0), new THREE.MeshStandardMaterial({ color: 0x33373c }), signals.length * 2);
  const headMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  const headMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.07, 0.07, 0.07), headMat, signals.length * 2);
  signals.forEach((s, i) => {
    const n = s.node;
    for (let a = 0; a < 2; a++) {
      const px = n.x + (a ? -0.62 : 0.62), pz = n.z + (a ? 0.62 : -0.62);
      poleMesh.setMatrixAt(i * 2 + a, m4.makeTranslation(px, LAND_Y, pz));
      headMesh.setMatrixAt(i * 2 + a, m4.makeTranslation(px, LAND_Y + 0.5, pz));
      headMesh.setColorAt(i * 2 + a, new THREE.Color(0x30ff60));
    }
  });
  poleMesh.castShadow = true;
  scene.add(poleMesh, headMesh);
  const RED = new THREE.Color(3, 0.15, 0.1), GREEN = new THREE.Color(0.2, 2.6, 0.7), AMBER = new THREE.Color(3, 1.6, 0.1);
  function updateSignals(t) {
    signals.forEach((s, i) => {
      const ph = ((t + s.offset) % (s.period * 2)) / s.period; // 0..2
      const axisGreen = ph < 1 ? 0 : 1;
      const local = ph % 1;
      const amber = local > 0.82;
      // state per axis: 2 = green, 1 = amber, 0 = red
      s.state[axisGreen] = amber ? 1 : 2;
      s.state[1 - axisGreen] = 0;
      for (let a = 0; a < 2; a++) headMesh.setColorAt(i * 2 + a, s.state[a] === 2 ? GREEN : s.state[a] === 1 ? AMBER : RED);
    });
    if (headMesh.instanceColor) headMesh.instanceColor.needsUpdate = true;
  }

  // ── Plaza paving ──
  const paveMat = patch(new THREE.MeshStandardMaterial({ color: 0xf0e8d8, roughness: 0.8 }), { wet: true, puddles: true, snow: true });
  for (const p of plazas) {
    if (!p.paved) continue;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(p.r + 0.2, p.r + 0.2, 0.02, 28), paveMat);
    m.position.set(p.x, LAND_Y + 0.01, p.z);
    m.receiveShadow = true;
    m.userData.ground = true;
    scene.add(m);
  }
  const parkMat = patch(new THREE.MeshStandardMaterial({ color: 0x86a861, roughness: 1 }), { snow: true, wet: true });
  for (const p of parks) {
    if (!regionAt(p.x, p.z)) continue;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(p.r, p.r + 0.1, 0.03, 24), parkMat);
    m.position.set(p.x, LAND_Y + 0.012, p.z);
    m.receiveShadow = true;
    m.userData.ground = true;
    scene.add(m);
  }

  // ── Istiklal Avenue (pedestrian + nostalgic tram) ──
  const istiklal = { ax: -17.2, az: -17.4, bx: -12.6, bz: -5.6 };
  {
    const len = Math.hypot(istiklal.bx - istiklal.ax, istiklal.bz - istiklal.az);
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.02, len), paveMat);
    m.position.set((istiklal.ax + istiklal.bx) / 2, LAND_Y + 0.012, (istiklal.az + istiklal.bz) / 2);
    m.rotation.y = Math.atan2(istiklal.bx - istiklal.ax, istiklal.bz - istiklal.az);
    m.receiveShadow = true;
    m.userData.ground = true;
    scene.add(m);
    for (const off of [-0.07, 0.07]) {
      const r = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.012, len), new THREE.MeshStandardMaterial({ color: 0x777b80, metalness: 0.8, roughness: 0.3 }));
      r.position.copy(m.position).add(new THREE.Vector3(Math.cos(m.rotation.y) * off, 0.012, -Math.sin(m.rotation.y) * off));
      r.rotation.y = m.rotation.y;
      scene.add(r);
    }
  }
  const nearIstiklal = (x, z) => segDist(x, z, istiklal.ax, istiklal.az, istiklal.bx, istiklal.bz);

  const roadDist = (x, z) => {
    let d = 1e9;
    for (const e of roadEdges) {
      const dd = segDist(x, z, e.a.x, e.a.z, e.b.x, e.b.z);
      if (dd < d) d = dd;
    }
    return d;
  };
  const roadDistFull = (x, z) => {
    let d = roadDist(x, z);
    for (const e of G.edges) if (e.kind !== 'road' && e.kind !== 'link') d = Math.min(d, segDist(x, z, e.a.x, e.a.z, e.b.x, e.b.z));
    return d;
  };

  // ── Buildings ──
  const facade = ['#efe2c8', '#e8cfa6', '#f0d9b5', '#dcb59a', '#e9c3a6', '#cfd6d0', '#f2e8d8', '#d8c3a5', '#e6b89c', '#c9d3d9', '#f1d7a6', '#e3a587', '#f4efe4', '#d9a98c'];
  const blds = [];
  const STEP = 1.12;
  for (let x = -HALF + 0.7; x < HALF - 0.5; x += STEP)
    for (let z = -HALF + 0.7; z < HALF - 0.5; z += STEP) {
      const px = x + rand(-0.12, 0.12), pz = z + rand(-0.12, 0.12);
      const reg = regionAt(px, pz);
      if (!reg || reg === 'islet') continue;
      const w = rand(0.78, 1.12), d = rand(0.78, 1.12);
      const hs = Math.max(w, d) / 2;
      const sd = shoreDist(px, pz);
      if (sd < hs + 0.3) continue;
      if (Math.abs(px) > HALF - hs - 0.1 || Math.abs(pz) > HALF - hs - 0.1) continue;
      const rd = roadDistFull(px, pz);
      if (rd < ROAD_HALF + 0.24 + hs) continue;
      if (nearIstiklal(px, pz) < 0.45 + hs) continue;
      if (inObstacle(px, pz, hs) || inPlaza(px, pz, hs + 0.1) || inPark(px, pz, hs)) continue;
      // height by district
      let h = rand(0.7, 1.7);
      if (reg === 'peninsula') h = rand(0.6, 1.3);
      if (reg === 'asia' && px > 16) h = rand(1.0, 2.6);
      if (reg === 'europe' && pz < -12 && px < -10) h = rand(1.2, 2.8);
      if (sd < 1.6) h = rand(0.6, 1.0); // yalı waterfront mansions
      if (Math.random() < 0.06) {
        // a leftover tree spot instead
        blds.push({ tree: true, x: px, z: pz });
        continue;
      }
      blds.push({ x: px, z: pz, w, d, h, roof: Math.random() < (reg === 'peninsula' || sd < 1.6 ? 0.85 : 0.6), rd, yali: sd < 1.6 });
    }
  const real = blds.filter((b) => !b.tree);
  const bodyGeo = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const bodyMat = patch(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85 }), { windows: { tint: 0x34404c }, snow: true, rand: true });
  bodyMat.emissive = new THREE.Color(0x000000);
  const bodies = new THREE.InstancedMesh(bodyGeo, bodyMat, real.length);
  const aRand = new Float32Array(real.length);
  const roofGeo = new THREE.ConeGeometry(0.7071, 1, 4).rotateY(Math.PI / 4).translate(0, 0.5, 0);
  const roofMat = patch(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75 }), { snow: true });
  const roofList = real.filter((b) => b.roof);
  const roofs = new THREE.InstancedMesh(roofGeo, roofMat, roofList.length);
  const flatTops = real.filter((b) => !b.roof);
  const hutMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), patch(new THREE.MeshStandardMaterial({ color: 0xd8d2c4, roughness: 0.9 }), { snow: true }), flatTops.length);
  const c = new THREE.Color();
  let ri2 = 0, hi = 0;
  real.forEach((b, i) => {
    m4.compose(v.set(b.x, LAND_Y, b.z), q.identity(), sc.set(b.w, b.h, b.d));
    bodies.setMatrixAt(i, m4);
    b.matrix = m4.clone();
    c.set(b.yali ? pick(['#f4efe4', '#e9dcc4', '#c9b08f', '#dfe6e2', '#e8c9a6']) : pick(facade));
    c.offsetHSL(0, rand(-0.03, 0.03), rand(-0.04, 0.03));
    bodies.setColorAt(i, c);
    b.color = c.clone();
    aRand[i] = Math.random();
    b.index = i;
    if (b.roof) {
      m4.compose(v.set(b.x, LAND_Y + b.h, b.z), q.identity(), sc.set(b.w * 1.1, rand(0.28, 0.42), b.d * 1.1));
      roofs.setMatrixAt(ri2, m4);
      c.set(pick(['#b5523b', '#a84a36', '#c0623f', '#9c4533', '#b8583f', '#8f5a4a']));
      roofs.setColorAt(ri2, c);
      b.roofIndex = ri2++;
    } else {
      m4.compose(v.set(b.x + rand(-0.2, 0.2) * b.w, LAND_Y + b.h, b.z + rand(-0.2, 0.2) * b.d), q.identity(), sc.set(0.25, 0.14, 0.25));
      hutMesh.setMatrixAt(hi++, m4);
    }
  });
  bodyGeo.setAttribute('aRand', new THREE.InstancedBufferAttribute(aRand, 1));
  for (const m of [bodies, roofs, hutMesh]) {
    m.castShadow = true;
    m.receiveShadow = true;
    scene.add(m);
  }
  bodies.userData.buildings = real;
  bodies.userData.roofs = roofs;

  // Awnings on street-facing ground floors.
  const awn = [];
  for (const b of real) {
    if (b.rd > ROAD_HALF + 0.24 + Math.max(b.w, b.d) / 2 + 0.25 || Math.random() < 0.45 || b.yali) continue;
    // face towards nearest road: test four sides
    let best = null, bd = 1e9;
    for (const [sx, sz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const px = b.x + sx * (b.w / 2 + 0.2), pz = b.z + sz * (b.d / 2 + 0.2);
      const dd = roadDist(px, pz);
      if (dd < bd) { bd = dd; best = [sx, sz]; }
    }
    const [sx, sz] = best;
    const len = (sx ? b.d : b.w) * 0.8;
    awn.push({ x: b.x + sx * (b.w / 2 + 0.09), z: b.z + sz * (b.d / 2 + 0.09), rot: Math.atan2(sx, sz), len });
  }
  const awnGeo = new THREE.BoxGeometry(1, 0.012, 0.2).translate(0, 0, 0.0);
  awnGeo.rotateX(0.45);
  const awnMat = patch(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, side: THREE.DoubleSide }), { sway: 0.4, snow: true });
  const awnings = new THREE.InstancedMesh(awnGeo, awnMat, awn.length);
  awn.forEach((a, i) => {
    awnings.setMatrixAt(i, m4.compose(v.set(a.x, LAND_Y + 0.26, a.z), q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), a.rot), sc.set(a.len, 1, 1)));
    awnings.setColorAt(i, c.set(pick(['#c0392b', '#2e7d6b', '#e0a030', '#3a6ea5', '#8e3b5e', '#d35400', '#4a7c3a'])));
  });
  awnings.castShadow = true;
  scene.add(awnings);

  // ── Trees ──
  const month = new Date().getMonth();
  const autumn = month >= 9 && month <= 10;
  const winter = month === 11 || month <= 1;
  const treeSpots = blds.filter((b) => b.tree).map((b) => ({ x: b.x, z: b.z }));
  for (const p of parks) {
    const n = Math.round(p.r * p.r * 3.2);
    for (let k = 0; k < n; k++) {
      const a = rand(0, Math.PI * 2), r = Math.sqrt(Math.random()) * (p.r - 0.2);
      const x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
      if (regionAt(x, z) && shoreDist(x, z) > 0.3 && !inObstacle(x, z)) treeSpots.push({ x, z });
    }
  }
  // street trees along some roads
  for (const e of roadEdges) {
    if (Math.random() < 0.55) continue;
    const side = Math.random() < 0.5 ? -1 : 1;
    for (let s = 1.0; s < e.len - 0.8; s += rand(0.9, 1.3)) {
      const x = e.a.x + e.dx * s - e.dz * side * (ROAD_HALF + 0.22), z = e.a.z + e.dz * s + e.dx * side * (ROAD_HALF + 0.22);
      if (!inObstacle(x, z) && shoreDist(x, z) > 0.4) treeSpots.push({ x, z, small: true });
    }
  }
  // waterfront promenade trees
  for (let k = 0; k < 900; k++) {
    const x = rand(-HALF + 0.5, HALF - 0.5), z = rand(-HALF + 0.5, HALF - 0.5);
    const sd = shoreDist(x, z);
    if (sd > 0.3 && sd < 0.6 && regionAt(x, z) && regionAt(x, z) !== 'islet' && !inObstacle(x, z) && roadDistFull(x, z) > 0.7 && Math.random() < 0.35) treeSpots.push({ x, z, small: true });
  }
  // cypresses around mosques
  const cypressSpots = [];
  for (const g of landmarks) {
    const name = g.userData.landmark?.name || '';
    if (!/Cami|Ayasofya|Topkapı/.test(name)) continue;
    const b = new THREE.Box3().setFromObject(g);
    for (let k = 0; k < 10; k++) {
      const x = rand(b.min.x - 0.6, b.max.x + 0.6), z = rand(b.min.z - 0.6, b.max.z + 0.6);
      if (inObstacle(x, z, -0.1) || roadDistFull(x, z) < 0.7 || !regionAt(x, z) || shoreDist(x, z) < 0.3) continue;
      if (x > b.min.x && x < b.max.x && z > b.min.z && z < b.max.z) continue;
      cypressSpots.push({ x, z });
    }
  }
  const crownGeo = new THREE.IcosahedronGeometry(0.34, 0).translate(0, 0.62, 0);
  const trunkGeo = new THREE.CylinderGeometry(0.035, 0.05, 0.38, 5).translate(0, 0.19, 0);
  const crownMat = patch(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, flatShading: true }), { sway: 0.22, snow: true });
  const trunkMat = patch(new THREE.MeshStandardMaterial({ color: 0x6b4f3a, roughness: 1 }), { sway: 0.1 });
  const crowns = new THREE.InstancedMesh(crownGeo, crownMat, treeSpots.length + cypressSpots.length);
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treeSpots.length + cypressSpots.length);
  const greens = ['#5f8f4a', '#6e9b4f', '#4f7f45', '#7aa356', '#5a8a55'];
  const autumns = ['#d39a3a', '#c8742e', '#e0b44a', '#b5562e', '#9aa04a'];
  let ti = 0;
  for (const t of treeSpots) {
    const s = t.small ? rand(0.55, 0.8) : rand(0.8, 1.25);
    const e = new THREE.Euler(0, rand(0, 6.28), 0);
    m4.compose(v.set(t.x, LAND_Y, t.z), q.setFromEuler(e), sc.set(s, s * rand(0.9, 1.2), s));
    crowns.setMatrixAt(ti, m4);
    trunks.setMatrixAt(ti, m4);
    c.set(autumn && Math.random() < 0.4 ? pick(autumns) : pick(greens));
    if (winter) c.offsetHSL(0, -0.15, -0.05);
    crowns.setColorAt(ti, c);
    ti++;
  }
  for (const t of cypressSpots) {
    m4.compose(v.set(t.x, LAND_Y, t.z), q.identity(), sc.set(0.5, 2.1, 0.5));
    crowns.setMatrixAt(ti, m4);
    trunks.setMatrixAt(ti, m4.compose(v, q, sc.set(0.6, 0.6, 0.6)));
    crowns.setColorAt(ti, c.set('#3f6a3c'));
    ti++;
  }
  crowns.castShadow = trunks.castShadow = true;
  crowns.receiveShadow = true;
  scene.add(crowns, trunks);

  // ── Street lamps + light pools ──
  const lamps = [];
  for (const e of roadEdges) {
    let side = 1;
    for (let s = 0.9; s < e.len - 0.6; s += 1.5) {
      side = -side;
      const x = e.a.x + e.dx * s - e.dz * side * (ROAD_HALF + 0.1), z = e.a.z + e.dz * s + e.dx * side * (ROAD_HALF + 0.1);
      lamps.push({ x, z, y: LAND_Y });
    }
  }
  // along the Galata bridge and the Bosphorus bridge deck
  for (let z = GALATA_BRIDGE.z0 + 0.6; z < GALATA_BRIDGE.z1 - 0.4; z += 1.0) for (const dx of [-0.7, 0.7]) lamps.push({ x: GALATA_BRIDGE.x + dx, z, y: GALATA_BRIDGE.deckY, noPole: true, h: 0.55 });
  const lampPole = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.012, 0.016, 0.5, 4).translate(0, 0.25, 0), new THREE.MeshStandardMaterial({ color: 0x2f3337, roughness: 0.6 }), lamps.length);
  const lampHeadMat = new THREE.MeshBasicMaterial({ color: 0x555555, toneMapped: false });
  const lampHead = new THREE.InstancedMesh(new THREE.SphereGeometry(0.04, 6, 4), lampHeadMat, lamps.length);
  const poolMat = new THREE.MeshBasicMaterial({ map: glowTexture(), color: 0xffb35c, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  const pools = new THREE.InstancedMesh(new THREE.PlaneGeometry(1.3, 1.3).rotateX(-Math.PI / 2), poolMat, lamps.length);
  lamps.forEach((l, i) => {
    const h = l.h ?? 0.5;
    lampPole.setMatrixAt(i, m4.makeTranslation(l.x, l.noPole ? -10 : l.y, l.z));
    lampHead.setMatrixAt(i, m4.makeTranslation(l.x, l.y + h, l.z));
    pools.setMatrixAt(i, m4.makeTranslation(l.x, l.y + 0.035, l.z));
  });
  lampPole.castShadow = true;
  pools.renderOrder = 2;
  scene.add(lampPole, lampHead, pools);

  function update(t) {
    updateSignals(t);
    const g = U.uLampGlow.value;
    poolMat.opacity = g * 0.55;
    lampHeadMat.color.setRGB(0.35 + g * 3.2, 0.35 + g * 2.2, 0.32 + g * 1.0);
  }

  return { graph: G, plazas, parks, buildings: bodies, roofs, update, istiklal, obstacles, inObstacle, roadEdges };
}

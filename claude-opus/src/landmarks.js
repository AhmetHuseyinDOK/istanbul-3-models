// Hand-built miniature landmarks from primitives. Each landmark is a Group tagged with
// userData.landmark = { name, sub } so the interaction layer can find it.
import * as THREE from 'three';
import { LAND_Y, WATER_Y, SITES, BRIDGE, GALATA_BRIDGE, DOCKS, bosW, bosE } from './geo.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { U, patch, canvasTex } from './util.js';

const std = (color, rough = 0.8, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: rough, ...extra });
export const MAT = {
  stone: patch(std(0xece2cf, 0.85), { snow: true }),
  stoneWarm: patch(std(0xdfb08a, 0.85), { snow: true }),
  hagia: patch(std(0xd99a78, 0.85), { snow: true }),
  white: patch(std(0xf3efe6, 0.75), { snow: true }),
  lead: patch(std(0x8d9aa6, 0.45, { metalness: 0.35 }), { snow: true }),
  leadDark: patch(std(0x5d6c7a, 0.5, { metalness: 0.3 }), { snow: true }),
  gold: std(0xd9b44a, 0.3, { metalness: 0.9 }),
  red: patch(std(0xb5523b, 0.8), { snow: true }),
  dark: std(0x3a3f45, 0.7),
  steel: std(0xc9cdd2, 0.4, { metalness: 0.6 }),
  deck: patch(std(0x55595f, 0.8), { wet: true, puddles: true, snow: true }),
  wood: std(0x8a6a4a, 0.85),
  glass: std(0x9fc4d8, 0.15, { metalness: 0.7 }),
  green: patch(std(0x7aa35a, 0.95), { snow: true }),
};
// floodlights: landmark walls get a warm emissive wash at night
const FLOOD = [MAT.stone, MAT.hagia, MAT.white, MAT.stoneWarm];
FLOOD.forEach((m) => (m.emissive = new THREE.Color(0xffb36b)));
export function updateLandmarkLights(night, t) {
  FLOOD.forEach((m) => (m.emissiveIntensity = night * 0.32));
  MAT.gold.emissive = MAT.gold.emissive || new THREE.Color();
  MAT.gold.emissive.setHex(0xffc35a);
  MAT.gold.emissiveIntensity = night * 1.2;
}

function mesh(geo, mat, x = 0, y = 0, z = 0, cast = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = true;
  return m;
}
const box = (w, h, d, mat, x, y, z) => mesh(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0), mat, x, y, z);
const cyl = (rt, rb, h, mat, x, y, z, seg = 16) => mesh(new THREE.CylinderGeometry(rt, rb, h, seg).translate(0, h / 2, 0), mat, x, y, z);
function dome(r, mat, x, y, z, squash = 0.85, seg = 24) {
  const g = new THREE.SphereGeometry(r, seg, Math.max(6, seg / 2), 0, Math.PI * 2, 0, Math.PI / 2);
  g.scale(1, squash, 1);
  return mesh(g, mat, x, y, z);
}
function halfDome(r, mat, x, y, z, rotY) {
  const g = new THREE.SphereGeometry(r, 18, 8, 0, Math.PI, 0, Math.PI / 2);
  g.scale(1, 0.85, 1);
  const m = mesh(g, mat, x, y, z);
  m.rotation.y = rotY;
  return m;
}
function finial(group, x, y, z, s = 1) {
  group.add(mesh(new THREE.CylinderGeometry(0.008 * s, 0.008 * s, 0.12 * s, 4).translate(0, 0.06 * s, 0), MAT.gold, x, y, z, false));
  group.add(mesh(new THREE.SphereGeometry(0.025 * s, 8, 6), MAT.gold, x, y + 0.1 * s, z, false));
}

export function minaret(group, x, z, h, { r = 0.09, balconies = 2, mat = MAT.white, cap = MAT.lead } = {}) {
  const y0 = LAND_Y;
  group.add(cyl(r * 1.25, r * 1.35, h * 0.12, mat, x, y0, z, 8));
  group.add(cyl(r, r * 1.05, h * 0.82, mat, x, y0 + h * 0.12, z, 10));
  for (let i = 0; i < balconies; i++) {
    const by = y0 + h * (0.55 + i * 0.16);
    group.add(cyl(r * 1.7, r * 1.25, 0.05, mat, x, by, z, 12));
  }
  const capH = h * 0.22;
  group.add(mesh(new THREE.ConeGeometry(r * 1.1, capH, 10).translate(0, capH / 2, 0), cap, x, y0 + h * 0.94, z));
  finial(group, x, y0 + h * 0.94 + capH, z, 0.8);
  return new THREE.Vector3(x, y0 + h * 0.94 + capH, z);
}

function tag(group, name, sub, extra = {}) {
  group.userData.landmark = { name, sub, ...extra };
  return group;
}

// Classical Ottoman mosque: square prayer hall, central dome on a drum, half domes,
// corner turrets, courtyard with arcade domes + şadırvan, minarets.
function mosque({ x, z, rot = 0, s = 1, wall = MAT.white, minarets = 4, halfDomes = 2, courtyard = true, name, sub, domeR = 1 }) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rot;
  const y = LAND_Y;
  const hall = 2.6 * s;
  g.add(box(hall, 0.95 * s, hall, wall, 0, y, 0));
  // drum + dome
  const dr = 0.95 * s * domeR;
  g.add(cyl(dr * 1.02, dr * 1.05, 0.28 * s, wall, 0, y + 0.95 * s, 0, 24));
  g.add(dome(dr, MAT.lead, 0, y + 1.23 * s, 0));
  finial(g, 0, y + 1.23 * s + dr * 0.85, 0, s);
  // half domes
  const hd = [[0, -1], [0, 1], [1, 0], [-1, 0]].slice(0, halfDomes);
  for (const [dx, dz] of hd) {
    g.add(halfDome(dr * 0.75, MAT.lead, dx * dr * 0.95, y + 0.95 * s, dz * dr * 0.95, Math.atan2(dx, dz) - Math.PI / 2));
  }
  // corner turrets with small domes
  for (const [cx, cz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    const tx = cx * hall * 0.38, tz = cz * hall * 0.38;
    g.add(cyl(0.16 * s, 0.18 * s, 0.35 * s, wall, tx, y + 0.95 * s, tz, 8));
    g.add(dome(0.17 * s, MAT.lead, tx, y + 1.3 * s, tz, 1, 10));
  }
  // small side domes
  for (const [cx, cz] of [[1, 0], [-1, 0]]) g.add(dome(0.38 * s, MAT.lead, cx * hall * 0.36, y + 0.95 * s, cz * hall * 0.36, 0.8, 14));
  // courtyard (avlu) on +z side
  let court = null;
  if (courtyard) {
    const cw = hall, cd = hall * 0.9, cz0 = hall / 2 + cd / 2;
    const paving = mesh(new THREE.BoxGeometry(cw, 0.03, cd).translate(0, 0.015, 0), MAT.stone, 0, y, cz0, false);
    g.add(paving);
    // arcade on three sides with little domes
    const ar = 0.2 * s;
    const n = Math.max(3, Math.round(cw / (ar * 2.2)));
    for (let i = 0; i < n; i++) {
      const t = -cw / 2 + ar + (i * (cw - 2 * ar)) / (n - 1);
      for (const pz of [cz0 + cd / 2 - ar]) {
        g.add(box(ar * 2, 0.32 * s, ar * 2, wall, t, y, pz));
        g.add(dome(ar * 0.9, MAT.lead, t, y + 0.32 * s, pz, 0.9, 8));
      }
    }
    const m2 = Math.max(2, Math.round(cd / (ar * 2.2)));
    for (let i = 0; i < m2; i++) {
      const t = cz0 - cd / 2 + ar + (i * (cd - 2 * ar)) / (m2 - 1);
      for (const px of [-cw / 2 + ar, cw / 2 - ar]) {
        g.add(box(ar * 2, 0.32 * s, ar * 2, wall, px, y, t));
        g.add(dome(ar * 0.9, MAT.lead, px, y + 0.32 * s, t, 0.9, 8));
      }
    }
    // şadırvan (ablution fountain)
    g.add(cyl(0.22 * s, 0.24 * s, 0.14 * s, wall, 0, y, cz0, 8));
    g.add(mesh(new THREE.ConeGeometry(0.3 * s, 0.18 * s, 8).translate(0, 0.09 * s, 0), MAT.lead, 0, y + 0.24 * s, cz0));
    const cw2 = new THREE.Vector3(0, 0, cz0).applyAxisAngle(new THREE.Vector3(0, 1, 0), rot);
    court = { x: x + cw2.x, z: z + cw2.z, r: Math.min(cw, cd) * 0.36 };
  }
  // minarets
  const tips = [];
  const mp = [];
  const mh = 3.0 * s;
  if (minarets >= 2) mp.push([hall / 2 + 0.15, -hall / 2 - 0.15], [-hall / 2 - 0.15, -hall / 2 - 0.15]);
  if (minarets >= 4) mp.push([hall / 2 + 0.15, hall * 1.4 - 0.1], [-hall / 2 - 0.15, hall * 1.4 - 0.1]);
  if (minarets >= 6) mp.push([hall / 2 + 0.15, hall / 2 + 0.15], [-hall / 2 - 0.15, hall / 2 + 0.15]);
  if (minarets === 1) mp.push([hall / 2 + 0.15, -hall / 2 + 0.2]);
  if (!courtyard) for (const p of mp) p[1] = Math.sign(p[1]) * (hall / 2 + 0.15);
  mp.forEach(([mx, mz], i) => {
    const hh = mh * (minarets >= 4 && i < 2 ? 1.08 : 0.95);
    const tip = minaret(g, mx, mz, hh, { r: 0.085 * s, balconies: minarets >= 4 ? 3 : 2, mat: wall });
    tips.push(tip);
  });
  tag(g, name, sub);
  g.userData.courtyard = court;
  g.userData.tips = tips;
  return g;
}

function hagiaSophia() {
  const { x, z } = SITES.hagiaSophia;
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = 0.12;
  const y = LAND_Y;
  const W = MAT.hagia;
  g.add(box(3.6, 0.9, 3.0, W, 0, y, 0));
  // massive buttresses
  for (const [bx, bz] of [[1.7, 1.3], [1.7, -1.3], [-1.7, 1.3], [-1.7, -1.3], [0.6, 1.55], [-0.6, 1.55], [0.6, -1.55], [-0.6, -1.55]])
    g.add(box(0.5, 1.25, 0.45, W, bx, y, bz));
  // central drum + wide flat dome
  g.add(cyl(1.18, 1.22, 0.38, W, 0, y + 0.9, 0, 40));
  // ribbed window ring
  const ring = mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.12, 40, 1, true).translate(0, 0.06, 0), MAT.dark, 0, y + 1.18, 0, false);
  ring.scale.set(1.002, 1, 1.002);
  g.add(ring);
  g.add(dome(1.16, MAT.lead, 0, y + 1.28, 0, 0.62, 40));
  finial(g, 0, y + 1.28 + 0.72, 0, 1.4);
  // east & west half domes and their exedrae
  for (const dx of [1, -1]) {
    g.add(halfDome(0.95, MAT.lead, dx * 1.0, y + 0.95, 0, dx > 0 ? -Math.PI / 2 : Math.PI / 2));
    g.add(halfDome(0.42, MAT.lead, dx * 1.65, y + 0.9, 0.55, dx > 0 ? -Math.PI / 2 : Math.PI / 2));
    g.add(halfDome(0.42, MAT.lead, dx * 1.65, y + 0.9, -0.55, dx > 0 ? -Math.PI / 2 : Math.PI / 2));
  }
  // narthex
  g.add(box(0.6, 0.7, 2.8, W, -2.05, y, 0));
  // four minarets: two stone, two brick-red
  const tips = [];
  tips.push(minaret(g, 2.25, 1.75, 2.6, { r: 0.09, mat: MAT.stone, balconies: 2 }));
  tips.push(minaret(g, 2.25, -1.75, 2.5, { r: 0.1, mat: MAT.red, balconies: 1 }));
  tips.push(minaret(g, -2.55, 1.75, 2.8, { r: 0.09, mat: MAT.stone, balconies: 2 }));
  tips.push(minaret(g, -2.55, -1.75, 2.8, { r: 0.09, mat: MAT.stone, balconies: 2 }));
  tag(g, 'Ayasofya', 'Hagia Sophia · 537 AD');
  g.userData.tips = tips;
  g.userData.courtyard = { x: x - 2.9, z: z + 0.2, r: 0.8 };
  return g;
}

function blueMosque() {
  const { x, z } = SITES.blueMosque;
  const g = mosque({ x, z: z - 0.9, rot: Math.PI, s: 1.05, minarets: 6, halfDomes: 4, wall: MAT.stone, name: 'Sultanahmet Camii', sub: 'The Blue Mosque · 1616' });
  return g;
}

function galataTower() {
  const { x, z } = SITES.galataTower;
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const y = LAND_Y;
  g.add(cyl(0.62, 0.68, 0.4, MAT.stoneWarm, 0, y, 0, 20));
  g.add(cyl(0.55, 0.6, 2.6, MAT.stoneWarm, 0, y + 0.4, 0, 20));
  // windows strip + gallery
  g.add(mesh(new THREE.CylinderGeometry(0.565, 0.565, 0.22, 20, 1, true).translate(0, 0.11, 0), MAT.dark, 0, y + 2.75, 0, false));
  g.add(cyl(0.72, 0.62, 0.06, MAT.stone, 0, y + 2.68, 0, 20));
  g.add(cyl(0.58, 0.58, 0.2, MAT.stoneWarm, 0, y + 2.97, 0, 20));
  g.add(mesh(new THREE.ConeGeometry(0.66, 1.25, 20).translate(0, 0.625, 0), MAT.leadDark, 0, y + 3.17, 0));
  finial(g, 0, y + 4.42, 0, 1.2);
  tag(g, 'Galata Kulesi', 'Galata Tower · 1348');
  return g;
}

function maidensTower() {
  const { x, z } = SITES.maidensTower;
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const y = LAND_Y;
  g.add(box(1.1, 0.4, 0.8, MAT.white, 0.15, y, 0));
  g.add(box(0.4, 0.75, 0.4, MAT.white, -0.25, y, 0));
  g.add(cyl(0.22, 0.24, 0.6, MAT.white, -0.25, y + 0.75, 0, 12));
  g.add(cyl(0.27, 0.27, 0.05, MAT.white, -0.25, y + 1.33, 0, 12));
  const lantern = mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.22, 10).translate(0, 0.11, 0), new THREE.MeshStandardMaterial({ color: 0x223, emissive: 0xfff0b0, emissiveIntensity: 0 }), -0.25, y + 1.38, 0);
  lantern.userData.keep = true;
  g.add(lantern);
  g.add(mesh(new THREE.ConeGeometry(0.2, 0.45, 10).translate(0, 0.225, 0), MAT.lead, -0.25, y + 1.6, 0));
  finial(g, -0.25, y + 2.05, 0);
  g.add(dome(0.18, MAT.lead, 0.45, y + 0.4, 0, 0.9, 10));
  tag(g, 'Kız Kulesi', "Maiden's Tower");
  g.userData.lantern = lantern;
  return g;
}

function topkapi() {
  const { x, z } = SITES.topkapi;
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const y = LAND_Y;
  g.add(box(2.6, 0.32, 0.5, MAT.white, 0, y, -0.8));
  g.add(box(0.5, 0.32, 2.0, MAT.white, -1.1, y, 0.1));
  g.add(box(1.2, 0.36, 0.8, MAT.white, 0.5, y, 0.4));
  for (const [rx, rz, w, d] of [[0, -0.8, 2.6, 0.5], [-1.1, 0.1, 0.5, 2.0], [0.5, 0.4, 1.2, 0.8]]) {
    const r = mesh(new THREE.ConeGeometry(0.7071, 1, 4).rotateY(Math.PI / 4).translate(0, 0.5, 0), MAT.lead, rx, y + 0.32, rz);
    r.scale.set(w * 1.05, 0.22, d * 1.1);
    g.add(r);
  }
  // Tower of Justice
  g.add(box(0.36, 1.3, 0.36, MAT.white, -0.5, y, 0.1));
  g.add(mesh(new THREE.ConeGeometry(0.28, 0.6, 8).translate(0, 0.3, 0), MAT.lead, -0.5, y + 1.3, 0.1));
  finial(g, -0.5, y + 1.9, 0.1);
  // kitchen chimneys
  for (let i = 0; i < 5; i++) {
    g.add(cyl(0.06, 0.07, 0.24, MAT.white, -0.6 + i * 0.3, y + 0.32, -0.95, 8));
    g.add(dome(0.07, MAT.lead, -0.6 + i * 0.3, y + 0.56, -0.95, 0.9, 8));
  }
  tag(g, 'Topkapı Sarayı', 'Topkapı Palace · 1478');
  return g;
}

function dolmabahce() {
  const { x, z } = SITES.dolmabahce;
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = Math.PI / 2;
  const y = LAND_Y;
  g.add(box(4.0, 0.62, 1.1, MAT.white, 0, y, 0));
  g.add(box(1.3, 0.92, 1.3, MAT.white, 0, y, 0));
  g.add(dome(0.5, MAT.lead, 0, y + 0.92, 0, 0.6, 18));
  // pilasters
  for (let i = -9; i <= 9; i++) g.add(box(0.06, 0.62, 0.05, MAT.stone, i * 0.21, y, 0.57));
  // cornice
  g.add(box(4.1, 0.06, 1.2, MAT.stone, 0, y + 0.62, 0));
  // clock tower
  g.add(box(0.32, 1.25, 0.32, MAT.white, 2.6, y, 0.7));
  g.add(dome(0.18, MAT.lead, 2.6, y + 1.25, 0.7, 1.2, 10));
  tag(g, 'Dolmabahçe Sarayı', 'Dolmabahçe Palace · 1856');
  return g;
}

function haydarpasa() {
  const { x, z } = SITES.haydarpasa;
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = -0.6;
  const y = LAND_Y;
  g.add(box(2.6, 1.1, 1.0, MAT.stoneWarm, 0, y, 0));
  const roof = mesh(new THREE.ConeGeometry(0.7071, 1, 4).rotateY(Math.PI / 4).translate(0, 0.5, 0), MAT.red, 0, y + 1.1, 0);
  roof.scale.set(2.7, 0.4, 1.1);
  g.add(roof);
  for (const tx of [-1.3, 1.3]) {
    g.add(cyl(0.3, 0.3, 1.35, MAT.stoneWarm, tx, y, -0.5, 14));
    g.add(mesh(new THREE.ConeGeometry(0.34, 0.75, 14).translate(0, 0.375, 0), MAT.leadDark, tx, y + 1.35, -0.5));
  }
  tag(g, 'Haydarpaşa Garı', 'Haydarpaşa Station · 1909');
  return g;
}

function taksim() {
  const { x, z } = SITES.taksim;
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const y = LAND_Y;
  g.add(mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.03, 32).translate(0, 0.015, 0), MAT.stone, 0, y, 0, false));
  g.add(box(0.5, 0.5, 0.3, MAT.stone, 0.4, y, 0.3));
  g.add(box(0.36, 0.12, 0.2, MAT.dark, 0.4, y + 0.5, 0.3));
  // AKM cultural centre
  g.add(box(2.6, 0.9, 0.9, std(0x9c3b2c, 0.6), 0.1, y, -2.3));
  g.add(box(2.7, 0.08, 1.0, MAT.dark, 0.1, y + 0.9, -2.3));
  tag(g, 'Taksim Meydanı', 'Taksim Square');
  g.userData.courtyard = { x, z, r: 1.6 };
  return g;
}

function levent() {
  const { x, z } = SITES.levent;
  const g = new THREE.Group();
  const towers = [
    [-1.6, -1.0, 0.9, 7.5, 0.9], [0.4, -1.8, 0.8, 9.0, 0.8], [1.8, 0.2, 1.0, 6.0, 0.7],
    [-0.4, 0.8, 0.7, 5.0, 0.7], [2.6, -2.0, 0.6, 4.4, 0.6], [-2.6, 1.2, 0.8, 4.0, 0.8],
  ];
  const glass = patch(std(0x7fa6c0, 0.18, { metalness: 0.65 }), { windows: { tint: 0x3d566a }, snow: true });
  for (const [dx, dz, w, h, d] of towers) {
    g.add(box(w, h, d, glass, x + dx, LAND_Y, z + dz));
    g.add(box(w * 0.7, 0.3, d * 0.7, MAT.steel, x + dx, LAND_Y + h, z + dz));
  }
  // Sapphire-ish spire on the tallest
  g.add(mesh(new THREE.ConeGeometry(0.06, 1.2, 6).translate(0, 0.6, 0), MAT.steel, x + 0.4, LAND_Y + 9.3, z - 1.8));
  tag(g, 'Levent', 'Business district skyline');
  return g;
}

function camlica() {
  const { x, z } = SITES.camlica;
  const g = mosque({ x, z, rot: -Math.PI / 2, s: 1.0, minarets: 6, halfDomes: 4, wall: MAT.white, name: 'Çamlıca Camii', sub: 'Çamlıca Mosque · 2019' });
  return g;
}

function tvTower() {
  const x = 24, z = -22;
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const y = LAND_Y;
  g.add(cyl(0.35, 0.7, 0.6, MAT.white, 0, y, 0, 8));
  g.add(cyl(0.18, 0.32, 6.0, MAT.white, 0, y + 0.6, 0, 8));
  g.add(cyl(0.55, 0.25, 0.9, MAT.glass, 0, y + 6.2, 0, 12));
  g.add(cyl(0.3, 0.55, 0.5, MAT.white, 0, y + 7.1, 0, 12));
  g.add(cyl(0.05, 0.12, 2.6, MAT.steel, 0, y + 7.6, 0, 6));
  const beacon = mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff2a1a }), 0, y + 10.25, 0, false);
  beacon.userData.keep = true;
  g.add(beacon);
  tag(g, 'Çamlıca Kulesi', 'Çamlıca TV Tower · 369 m');
  g.userData.beacon = beacon;
  return g;
}

// ── Bosphorus (15 July Martyrs) Bridge ─────────────────────────────────────
export const bridgeDeckY = (xx) => {
  const { x0, x1, deckY } = BRIDGE;
  const ramp = 4.2;
  const sm = (a) => { const t = Math.min(1, Math.max(0, a)); return t * t * (3 - 2 * t); };
  return LAND_Y + (deckY - LAND_Y) * sm((xx - x0) / ramp) * sm((x1 - xx) / ramp) + 0.12;
};

function bosphorusBridge() {
  const g = new THREE.Group();
  const { z, x0, x1, deckY } = BRIDGE;
  const tw0 = bosW(z) - 0.2, tw1 = bosE(z) + 0.2;
  const towerH = 8.5;
  // deck: segmented along x to follow the ramps
  const seg = 60;
  const deckGeo = new THREE.BoxGeometry(1, 0.16, 1.5, seg, 1, 1);
  const pos = deckGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const u = pos.getX(i) + 0.5;
    const xx = x0 + u * (x1 - x0);
    pos.setX(i, xx);
    pos.setY(i, pos.getY(i) + bridgeDeckY(xx) - 0.2);
  }
  deckGeo.computeVertexNormals();
  const deck = mesh(deckGeo, MAT.deck, 0, 0, z);
  g.add(deck);
  // edge rails
  const railGeo = deckGeo.clone().scale(1, 0.6, 0.05);
  g.add(mesh(railGeo, MAT.steel, 0, 0.12, z + 0.72, false));
  g.add(mesh(railGeo.clone(), MAT.steel, 0, 0.12, z - 0.72, false));
  // towers
  for (const tx of [tw0, tw1]) {
    for (const dz of [-0.75, 0.75]) g.add(box(0.22, towerH, 0.22, MAT.steel, tx, WATER_Y, z + dz));
    for (const ty of [deckY - 0.5, towerH * 0.6, towerH - 0.3]) g.add(box(0.2, 0.2, 1.7, MAT.steel, tx, WATER_Y + ty, z));
    g.add(box(0.5, 0.25, 2.0, MAT.stone, tx, WATER_Y - 0.1, z));
  }
  // main cables (parabolic between towers, straight to anchors)
  const ledMat = new THREE.MeshStandardMaterial({ color: 0xdfe3e8, roughness: 0.4, metalness: 0.5, emissive: 0xffffff, emissiveIntensity: 0 });
  const topY = WATER_Y + towerH;
  const sagY = deckY + 0.55;
  const cableY = (xx) => {
    if (xx < tw0) return LAND_Y + 0.3 + ((topY - LAND_Y - 0.3) * (xx - x0)) / (tw0 - x0);
    if (xx > tw1) return LAND_Y + 0.3 + ((topY - LAND_Y - 0.3) * (x1 - xx)) / (x1 - tw1);
    const t = (xx - tw0) / (tw1 - tw0) * 2 - 1;
    return sagY + (topY - sagY) * t * t;
  };
  for (const dz of [-0.75, 0.75]) {
    const pts = [];
    for (let i = 0; i <= 80; i++) {
      const xx = x0 + ((x1 - x0) * i) / 80;
      pts.push(new THREE.Vector3(xx, cableY(xx), z + dz));
    }
    g.add(mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, 0.045, 5), ledMat, 0, 0, 0, false));
    // hangers
    const hp = [];
    for (let xx = tw0 + 0.35; xx < tw1 - 0.2; xx += 0.35) hp.push(xx);
    const hg = new THREE.CylinderGeometry(0.012, 0.012, 1, 3).translate(0, 0.5, 0);
    const hangers = new THREE.InstancedMesh(hg, ledMat, hp.length);
    const m4 = new THREE.Matrix4();
    hp.forEach((xx, i) => {
      const yb = bridgeDeckY(xx) - 0.05;
      const len = cableY(xx) - yb;
      m4.makeScale(1, len, 1).setPosition(xx, yb, z + dz);
      hangers.setMatrixAt(i, m4);
    });
    g.add(hangers);
  }
  tag(g, '15 Temmuz Şehitler Köprüsü', 'Bosphorus Bridge · 1973');
  g.userData.led = ledMat;
  return g;
}

function galataBridge() {
  const g = new THREE.Group();
  const { x, z0, z1, deckY } = GALATA_BRIDGE;
  const len = z1 - z0;
  g.add(mesh(new THREE.BoxGeometry(1.5, 0.14, len).translate(0, -0.07, 0), MAT.deck, x, deckY, (z0 + z1) / 2));
  // lower restaurant level + piers
  g.add(mesh(new THREE.BoxGeometry(1.3, 0.3, len - 2.4).translate(0, -0.15, 0), MAT.stone, x, deckY - 0.14, (z0 + z1) / 2));
  for (let k = 0; k < 6; k++) g.add(box(0.3, deckY - WATER_Y, 0.3, MAT.stone, x, WATER_Y - 0.05, z0 + 1.3 + (k * (len - 2.6)) / 5));
  // lamp masts
  for (let k = 0; k <= 6; k++) for (const dx of [-0.7, 0.7]) g.add(box(0.03, 0.55, 0.03, MAT.dark, x + dx, deckY, z0 + 0.6 + (k * (len - 1.2)) / 6));
  tag(g, 'Galata Köprüsü', 'Galata Bridge · fishermen at work');
  return g;
}

// Ferry piers with a small terminal shed.
function piers() {
  const out = [];
  const tm = patch(std(0x6f8796, 0.5, { metalness: 0.3 }), { snow: true });
  for (const [k, d] of Object.entries(DOCKS)) {
    if (k === 'kadikoy2') continue;
    const g = new THREE.Group();
    // pier from shore to berth; direction = towards land
    const sx = d.x, sz = d.z;
    const ang = d.ang + Math.PI; // towards land
    const dx = Math.sin(ang), dz = Math.cos(ang);
    const L = 1.6;
    const p = mesh(new THREE.BoxGeometry(0.7, 0.1, L).translate(0, 0, L / 2), MAT.wood, sx + dx * 0.3, LAND_Y - 0.1, sz + dz * 0.3);
    p.rotation.y = ang;
    g.add(p);
    const shed = new THREE.Group();
    shed.position.set(sx + dx * 1.6, LAND_Y, sz + dz * 1.6);
    shed.rotation.y = ang;
    shed.add(box(1.2, 0.35, 0.7, MAT.white, 0, 0, 0));
    const r = mesh(new THREE.ConeGeometry(0.7071, 1, 4).rotateY(Math.PI / 4).translate(0, 0.5, 0), tm, 0, 0.35, 0);
    r.scale.set(1.4, 0.3, 0.85);
    shed.add(r);
    shed.add(box(0.12, 0.35, 0.12, MAT.white, 0, 0.35, 0));
    g.add(shed);
    tag(g, `${d.name} İskelesi`, 'Ferry pier');
    out.push(g);
  }
  return out;
}

// Collapse a landmark's many primitive meshes into one mesh per material.
export function mergeStatic(g) {
  g.updateMatrixWorld(true);
  const inv = g.matrixWorld.clone().invert();
  const byMat = new Map();
  const drop = [];
  g.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.userData.keep || o.material === flagMat) return;
    if (o.parent && o.parent.userData.cloth) return;
    const geo = (o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone()).applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    for (const k of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv'].includes(k)) geo.deleteAttribute(k);
    if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
    if (!byMat.has(o.material)) byMat.set(o.material, []);
    byMat.get(o.material).push(geo);
    drop.push(o);
  });
  for (const o of drop) o.parent.remove(o);
  for (const [m, geos] of byMat) {
    const merged = new THREE.Mesh(mergeGeometries(geos), m);
    merged.castShadow = true;
    merged.receiveShadow = true;
    g.add(merged);
  }
}

export function buildLandmarks(scene) {
  const list = [
    hagiaSophia(),
    blueMosque(),
    mosque({ x: SITES.suleymaniye.x, z: SITES.suleymaniye.z - 0.8, rot: Math.PI, s: 1.0, minarets: 4, halfDomes: 2, name: 'Süleymaniye Camii', sub: 'Süleymaniye Mosque · Mimar Sinan, 1557' }),
    mosque({ x: SITES.yeniCami.x, z: SITES.yeniCami.z, rot: Math.PI, s: 0.62, minarets: 2, halfDomes: 4, name: 'Yeni Cami', sub: 'New Mosque · Eminönü' }),
    mosque({ x: SITES.ortakoy.x, z: SITES.ortakoy.z, rot: Math.PI / 2, s: 0.42, minarets: 2, halfDomes: 0, courtyard: false, name: 'Ortaköy Camii', sub: 'Ortaköy Mosque · 1856' }),
    mosque({ x: SITES.mihrimah.x, z: SITES.mihrimah.z, rot: -Math.PI / 2, s: 0.55, minarets: 2, halfDomes: 1, name: 'Mihrimah Sultan Camii', sub: 'Üsküdar · Mimar Sinan' }),
    camlica(),
    galataTower(),
    maidensTower(),
    topkapi(),
    dolmabahce(),
    haydarpasa(),
    taksim(),
    levent(),
    tvTower(),
    bosphorusBridge(),
    galataBridge(),
    ...piers(),
  ];
  for (const g of list) {
    mergeStatic(g);
    scene.add(g);
  }
  return list;
}

// ── Turkish flags with wind-driven waving ──────────────────────────────────
let flagMat;
export function flagMaterial() {
  if (flagMat) return flagMat;
  const tex = canvasTex(192, 128, (g, w, h) => {
    g.fillStyle = '#e30a17';
    g.fillRect(0, 0, w, h);
    const cx = w * 0.36, cy = h / 2, r = h * 0.25;
    g.fillStyle = '#fff';
    g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#e30a17';
    g.beginPath(); g.arc(cx + r * 0.25, cy, r * 0.8, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#fff';
    const sx = cx + r * 0.95, sr = r * 0.42;
    g.beginPath();
    for (let i = 0; i < 10; i++) {
      const ang = Math.PI + (i * Math.PI) / 5;
      const rr = i % 2 ? sr * 0.4 : sr;
      g.lineTo(sx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr);
    }
    g.closePath(); g.fill();
  });
  flagMat = new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.8 });
  flagMat.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, U);
    s.vertexShader = 'uniform float uTime, uWind;\n' + s.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       float fx = uv.x;
       float sp = 4.0 + uWind*9.0;
       float ph = modelMatrix[3].x*3.1 + modelMatrix[3].z*1.7;
       transformed.z += sin(fx*7.0 - uTime*sp + ph) * fx * (0.05 + uWind*0.07);
       transformed.y -= fx*fx*(0.25 - uWind*0.22) * 0.5;`
    );
  };
  return flagMat;
}

export const flags = [];
export function flag(parent, x, y, z, size = 1, pole = true) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  if (pole) {
    const pm = mesh(new THREE.CylinderGeometry(0.012 * size, 0.015 * size, 1.4 * size, 5).translate(0, 0.7 * size, 0), MAT.steel, 0, 0, 0);
    g.add(pm);
  }
  const geo = new THREE.PlaneGeometry(0.6 * size, 0.4 * size, 12, 6).translate(0.3 * size, 0, 0);
  const f = new THREE.Mesh(geo, flagMaterial());
  f.castShadow = true;
  f.position.y = (pole ? 1.4 : 0) * size - 0.2 * size;
  g.add(f);
  g.userData.cloth = f;
  parent.add(g);
  flags.push(g);
  return g;
}
const _q = new THREE.Quaternion();
export function updateFlags(windDir) {
  // cloth points downwind (world), independent of the parent's rotation
  const yaw = Math.atan2(-windDir.y, windDir.x);
  for (const g of flags) {
    g.parent.getWorldQuaternion(_q);
    const parentYaw = new THREE.Euler().setFromQuaternion(_q, 'YXZ').y;
    g.userData.cloth.rotation.y = yaw - parentYaw;
  }
}

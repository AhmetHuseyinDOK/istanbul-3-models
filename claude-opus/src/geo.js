// Geography of the miniature: land polygons, the water mask, docks, landmark sites.
// Pure math, no three.js, so it can be checked from Node.
// Axes: x = east, z = south (north is -z). Board spans [-HALF, HALF] on both axes.

export const HALF = 30;
export const LAND_Y = 0.6;
export const WATER_Y = 0.22;

// Bosphorus centre line and half width.
export const bosC = (z) => 1 + 1.6 * Math.sin(z * 0.1 + 0.6);
export const bosHW = (z) => 3.3 + 0.5 * Math.sin(z * 0.21);
export const bosW = (z) => bosC(z) - bosHW(z); // European shore
export const bosE = (z) => bosC(z) + bosHW(z); // Asian shore

// Golden Horn shores.
const ghN = (x) => 1 + 0.4 * Math.sin(x * 0.2);
const ghS = (x) => 6.2 + 0.4 * Math.sin(x * 0.2 + 1);

function range(a, b, step) {
  const out = [];
  const n = Math.max(1, Math.ceil(Math.abs(b - a) / step));
  for (let i = 0; i <= n; i++) out.push(a + ((b - a) * i) / n);
  return out;
}

function buildEurope() {
  // Beyoğlu / Beşiktaş / Ortaköy / Levent
  const p = [[-HALF - 0.5, -HALF - 0.5]];
  for (const z of range(-HALF - 0.5, 0.2, 0.5)) p.push([bosW(z), z]);
  // round the Karaköy corner
  const cx = bosW(0.2);
  p.push([cx - 0.3, 0.9]);
  for (const x of range(cx - 0.9, -HALF - 0.5, 0.5)) p.push([x, ghN(x)]);
  return p;
}

function buildPeninsula() {
  // Historic peninsula (Fatih): Sultanahmet, Eminönü, Süleymaniye, Topkapı.
  const p = [];
  const tipX = -1.6;
  for (const x of range(-HALF - 0.5, -5.5, 0.5)) p.push([x, ghS(x)]);
  // Sarayburnu, the rounded tip
  for (const t of range(0, 1, 0.05)) {
    const a = -Math.PI / 2 + t * Math.PI;
    const r = 1 - Math.pow(Math.abs(Math.sin(a)), 3) * 0.0;
    const ex = (tipX - (-5.5)) * Math.cos(a) * r;
    const z = 13.6 + 7.4 * Math.sin(a);
    p.push([-5.5 + Math.max(0, ex), z]);
  }
  for (const x of range(-5.5, -HALF - 0.5, 0.5)) p.push([x, 21 + 0.3 * Math.sin(x * 0.3)]);
  return p;
}

function buildAsia() {
  // Üsküdar / Kadıköy / Çamlıca
  const p = [[HALF + 0.5, -HALF - 0.5]];
  for (const z of range(-HALF - 0.5, 10, 0.5)) p.push([bosE(z), z]);
  // Haydarpaşa bay + Moda point curve, then the Marmara shore
  const e10 = bosE(10);
  const pts = [
    [e10 + 0.6, 13],
    [e10 + 2.0, 15.5],
    [e10 + 4.5, 17.2],
    [e10 + 7.5, 17.6],
    [e10 + 9.5, 18.6],
    [e10 + 11, 20.6], // Moda point
    [e10 + 13, 20.9],
  ];
  p.push(...pts);
  for (const x of range(e10 + 14, HALF + 0.5, 0.5)) p.push([x, 20 + 0.6 * Math.sin(x * 0.4)]);
  return p;
}

function buildIslet() {
  // Maiden's Tower rock
  const p = [];
  const cx = bosE(11) - 2.0;
  const cz = 11.5;
  for (const t of range(0, Math.PI * 2, 0.4)) p.push([cx + Math.cos(t) * 0.9, cz + Math.sin(t) * 0.75]);
  p.pop();
  return p;
}

export const REGIONS = {
  europe: buildEurope(),
  peninsula: buildPeninsula(),
  asia: buildAsia(),
  islet: buildIslet(),
};

function pip(poly, x, z) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) inside = !inside;
  }
  return inside;
}

export function regionAt(x, z) {
  if (Math.abs(x) > HALF || Math.abs(z) > HALF) return null;
  for (const k in REGIONS) if (pip(REGIONS[k], x, z)) return k;
  return null;
}
export const isLand = (x, z) => regionAt(x, z) !== null;
export const isWater = (x, z) => Math.abs(x) <= HALF && Math.abs(z) <= HALF && !isLand(x, z);

// Distance field to the shoreline, sampled on a grid (signed: + on land, - in water).
export const SDF_RES = 256;
export const sdf = (() => {
  const N = SDF_RES;
  const land = new Uint8Array(N * N);
  const cell = (2 * HALF) / N;
  for (let j = 0; j < N; j++)
    for (let i = 0; i < N; i++) land[j * N + i] = isLand(-HALF + (i + 0.5) * cell, -HALF + (j + 0.5) * cell) ? 1 : 0;
  // two-pass chamfer distance to the opposite class
  const INF = 1e9;
  const dist = (target) => {
    const d = new Float32Array(N * N);
    for (let k = 0; k < N * N; k++) d[k] = land[k] === target ? 0 : INF;
    const a = 1, b = Math.SQRT2;
    for (let j = 0; j < N; j++)
      for (let i = 0; i < N; i++) {
        const k = j * N + i;
        if (i > 0) d[k] = Math.min(d[k], d[k - 1] + a);
        if (j > 0) d[k] = Math.min(d[k], d[k - N] + a);
        if (i > 0 && j > 0) d[k] = Math.min(d[k], d[k - N - 1] + b);
        if (i < N - 1 && j > 0) d[k] = Math.min(d[k], d[k - N + 1] + b);
      }
    for (let j = N - 1; j >= 0; j--)
      for (let i = N - 1; i >= 0; i--) {
        const k = j * N + i;
        if (i < N - 1) d[k] = Math.min(d[k], d[k + 1] + a);
        if (j < N - 1) d[k] = Math.min(d[k], d[k + N] + a);
        if (i < N - 1 && j < N - 1) d[k] = Math.min(d[k], d[k + N + 1] + b);
        if (i > 0 && j < N - 1) d[k] = Math.min(d[k], d[k + N - 1] + b);
      }
    return d;
  };
  const toWater = dist(0);
  const toLand = dist(1);
  const out = new Float32Array(N * N);
  for (let k = 0; k < N * N; k++) out[k] = (land[k] ? toWater[k] : -toLand[k]) * cell;
  return out;
})();

export function shoreDist(x, z) {
  const N = SDF_RES;
  const i = Math.min(N - 1, Math.max(0, Math.floor(((x + HALF) / (2 * HALF)) * N)));
  const j = Math.min(N - 1, Math.max(0, Math.floor(((z + HALF) / (2 * HALF)) * N)));
  return sdf[j * N + i];
}

// ── Landmark sites ─────────────────────────────────────────────────────────
export const SITES = {
  hagiaSophia: { x: -6.2, z: 14.6, r: 2.6 },
  blueMosque: { x: -12.6, z: 16.4, r: 3.4 },
  topkapi: { x: -3.6, z: 10.6, r: 1.9 },
  suleymaniye: { x: -21, z: 11.2, r: 3.0 },
  yeniCami: { x: -10.6, z: 8.6, r: 1.7 },
  galataTower: { x: -11, z: -3.2, r: 1.3 },
  taksim: { x: -19, z: -19, r: 2.4 },
  ortakoy: { x: bosW(-17) - 1.4, z: -17, r: 1.4 },
  dolmabahce: { x: bosW(-8.5) - 2.6, z: -8.5, r: 2.4 },
  levent: { x: -24, z: -25.5, r: 4.5 },
  maidensTower: { x: bosE(11) - 2.0, z: 11.5, r: 0 },
  haydarpasa: { x: bosE(10) + 3.4, z: 14.6, r: 1.8 },
  mihrimah: { x: bosE(-4) + 3.2, z: -1.4, r: 1.6 },
  camlica: { x: 18, z: -14, r: 3.6 },
  kadikoy: { x: bosE(10) + 9.6, z: 15.6, r: 1.8 },
};

export const BRIDGE = { z: -22.5, deckY: 3.0, x0: bosW(-22.5) - 4.5, x1: bosE(-22.5) + 4.5 };
export const GALATA_BRIDGE = { x: -8.2, z0: ghN(-8.2) - 1.2, z1: ghS(-8.2) + 1.2, deckY: LAND_Y + 0.12 };

// Ferry berths: position in water + the direction the bow points when leaving.
const W = bosW, E = bosE;
export const DOCKS = {
  eminonu: { x: -6.6, z: ghS(-6.6) - 1.1, ang: 0, name: 'Eminönü' },
  karakoy: { x: W(-2) + 1.0, z: -2, ang: Math.PI / 2, name: 'Karaköy' },
  besiktas: { x: W(-12.5) + 1.0, z: -12.5, ang: Math.PI / 2, name: 'Beşiktaş' },
  uskudar: { x: E(-4) - 1.0, z: -4, ang: -Math.PI / 2, name: 'Üsküdar' },
  kadikoy: { x: E(10) + 8.4, z: 19.6, ang: Math.PI / 2, name: 'Kadıköy' },
  kadikoy2: { x: E(10) + 6.4, z: 18.9, ang: Math.PI / 2, name: 'Kadıköy' },
};

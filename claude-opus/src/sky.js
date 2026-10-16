// Istanbul local time, real sun position, and the colour script of the day.
import * as THREE from 'three';
import { clamp, smoothstep, lerp } from './util.js';

const LAT = 41.01, LON = 28.98;
let _fmt;
const params = new URLSearchParams(location.search);
// ?hour=20.5 pins the clock, ?speed=120 runs a time-lapse.
const pinnedHour = params.has('hour') ? parseFloat(params.get('hour')) : null;
const speed = params.has('speed') ? parseFloat(params.get('speed')) : 1;
const start = Date.now();
let offset = 0;
if (pinnedHour !== null) {
  const p = istanbulParts(new Date(start));
  offset = (pinnedHour - (p.hour + p.minute / 60 + p.second / 3600)) * 3600e3;
}

export function now() {
  return new Date(start + offset + (Date.now() - start) * speed);
}


export function istanbulParts(d) {
  const f = (_fmt ||= new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Istanbul', year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h23',
  }));
  const o = {};
  for (const p of f.formatToParts(d)) if (p.type !== 'literal') o[p.type] = +p.value;
  return o;
}

// NOAA-style solar position. Returns degrees.
export function sunPosition(date) {
  const rad = Math.PI / 180;
  const jd = date.getTime() / 86400000 + 2440587.5;
  const n = jd - 2451545.0;
  const L = (280.46 + 0.9856474 * n) % 360;
  const g = ((357.528 + 0.9856003 * n) % 360) * rad;
  const lambda = (L + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * rad;
  const eps = (23.439 - 0.0000004 * n) * rad;
  const dec = Math.asin(Math.sin(eps) * Math.sin(lambda));
  const ra = Math.atan2(Math.cos(eps) * Math.sin(lambda), Math.cos(lambda));
  const gmst = (18.697374558 + 24.06570982441908 * n) % 24;
  const lst = (gmst * 15 + LON) * rad;
  const ha = lst - ra;
  const lat = LAT * rad;
  const el = Math.asin(Math.sin(lat) * Math.sin(dec) + Math.cos(lat) * Math.cos(dec) * Math.cos(ha));
  const az = Math.atan2(-Math.sin(ha), Math.tan(dec) * Math.cos(lat) - Math.sin(lat) * Math.cos(ha));
  return { elevation: el / rad, azimuth: ((az / rad) + 360) % 360 }; // azimuth from north, clockwise
}

// Rough moon: opposite-ish the sun, good enough for a light direction.
export function moonPosition(date) {
  const s = sunPosition(new Date(date.getTime() + 12.4 * 3600e3));
  return s;
}

// Direction vector (towards the body) in scene space: north = -z, east = +x.
export function dirFromAngles(elevDeg, azDeg, out = new THREE.Vector3()) {
  const e = (Math.max(elevDeg, 4) * Math.PI) / 180;
  const a = (azDeg * Math.PI) / 180;
  return out.set(Math.sin(a) * Math.cos(e), Math.sin(e), -Math.cos(a) * Math.cos(e)).normalize();
}

const C = (h) => new THREE.Color(h);
// Key frames by sun elevation (degrees).
const KEYS = [
  { el: -18, bg: C(0x1b2238), sun: C(0x6d7fb8), sunI: 0.0, hemiSky: C(0x34436e), hemiGround: C(0x141a2a), hemiI: 0.4, env: 0.08, text: '#eef1ff' },
  { el: -6, bg: C(0x3a3a63), sun: C(0x8a8fd0), sunI: 0.0, hemiSky: C(0x5a5a8e), hemiGround: C(0x2a2433), hemiI: 0.45, env: 0.12, text: '#f6f0ff' },
  { el: 0, bg: C(0xd9a0a0), sun: C(0xff8a5c), sunI: 0.9, hemiSky: C(0xc49ac0), hemiGround: C(0x5a4a55), hemiI: 0.5, env: 0.25, text: '#3b2a3a' },
  { el: 8, bg: C(0xf2c79e), sun: C(0xffb377), sunI: 2.2, hemiSky: C(0xffe1c4), hemiGround: C(0x7a6a5e), hemiI: 0.55, env: 0.35, text: '#4a3326' },
  { el: 25, bg: C(0xd3e5ee), sun: C(0xfff0dd), sunI: 3.0, hemiSky: C(0xdfefff), hemiGround: C(0x8b8577), hemiI: 0.6, env: 0.45, text: '#2b3640' },
  { el: 60, bg: C(0xcfe4f0), sun: C(0xffffff), sunI: 3.3, hemiSky: C(0xe6f2ff), hemiGround: C(0x8f8a7c), hemiI: 0.62, env: 0.5, text: '#26323c' },
];

export function palette(elevation, weather) {
  let i = 0;
  while (i < KEYS.length - 2 && elevation > KEYS[i + 1].el) i++;
  const a = KEYS[i], b = KEYS[i + 1];
  const t = clamp((elevation - a.el) / (b.el - a.el), 0, 1);
  const p = {
    bg: a.bg.clone().lerp(b.bg, t),
    sun: a.sun.clone().lerp(b.sun, t),
    sunI: lerp(a.sunI, b.sunI, t),
    hemiSky: a.hemiSky.clone().lerp(b.hemiSky, t),
    hemiGround: a.hemiGround.clone().lerp(b.hemiGround, t),
    hemiI: lerp(a.hemiI, b.hemiI, t),
    env: lerp(a.env, b.env, t),
    text: t < 0.5 ? a.text : b.text,
  };
  // Weather grading: clouds soften the sun and grey the sky.
  const overcast = weather.cloud;
  const grey = new THREE.Color().setHSL(0.6, 0.08, lerp(0.16, 0.74, smoothstep(-8, 20, elevation)));
  p.bg.lerp(grey, overcast * 0.6 + weather.fog * 0.3);
  p.sunI *= 1 - overcast * 0.6 - (weather.rain > 0 ? 0.25 : 0) - (weather.snow > 0 ? 0.15 : 0);
  if (weather.rain > 0) p.bg.lerp(new THREE.Color(0x9aa6b2).multiplyScalar(lerp(0.3, 1, smoothstep(-8, 15, elevation))), 0.35);
  p.hemiI *= 1 + overcast * 0.35;
  p.env *= 1 + overcast * 0.3;
  p.hemiSky.lerp(grey, overcast * 0.5);
  p.night = 1 - smoothstep(-7, 3, elevation);
  p.textIsLight = p.night > 0.5;
  p.text = p.textIsLight ? '#f2f2ff' : '#2a3038';
  return p;
}

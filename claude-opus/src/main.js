import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { HALF } from './geo.js';
import { U, events, rand, damp, smoothstep, clamp } from './util.js';
import { now, istanbulParts, sunPosition, moonPosition, dirFromAngles, palette } from './sky.js';
import { fetchWeather, toScene, PRESETS } from './weather.js';
import { buildWorld } from './world.js';
import { buildLandmarks, updateLandmarkLights, updateFlags, flag, flagMaterial } from './landmarks.js';
import { buildCity } from './city.js';
import { buildTraffic } from './traffic.js';
import { buildPeople, buildTram } from './people.js';
import { buildBoats, CLIP } from './boats.js';
import { buildBirds } from './birds.js';
import { buildFx } from './fx.js';
import { buildInteraction } from './interact.js';
import { buildHud } from './hud.js';

const params = new URLSearchParams(location.search);
const stage = document.getElementById('stage');
const canvas = document.getElementById('c');

// ── renderer ──
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = !params.has('noshadow');
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.localClippingEnabled = true;
let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdfe8ec);
scene.fog = new THREE.Fog(0xdfe8ec, 200, 400);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.8;

// ── camera: 45° orthographic, looking from the south-west ──
const FRUST = 47;
// the frustum is shifted up so the board sits low, leaving the sky for the title
const LIFT = 10.4;
const camera = new THREE.OrthographicCamera(-FRUST, FRUST, FRUST + LIFT, -FRUST + LIFT, 1, 400);
const CAM_DIST = 120;
const target0 = new THREE.Vector3(0, 0, 0);
// camera sits to the south-west (-x, +z), 45° above the ground
camera.position.set(target0.x - Math.SQRT1_2 * CAM_DIST * Math.SQRT1_2, target0.y + CAM_DIST * Math.SQRT1_2, target0.z + Math.SQRT1_2 * CAM_DIST * Math.SQRT1_2);
camera.zoom = 1.0;
camera.lookAt(target0);

const controls = new OrbitControls(camera, canvas);
controls.target.copy(target0);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minZoom = 0.8;
controls.maxZoom = 6;
controls.zoomToCursor = true;
controls.minPolarAngle = THREE.MathUtils.degToRad(28);
controls.maxPolarAngle = THREE.MathUtils.degToRad(62);
controls.screenSpacePanning = false;
controls.rotateSpeed = 0.6;
controls.panSpeed = 0.9;
controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
controls.update();

// ── lights ──
const hemi = new THREE.HemisphereLight(0xdfefff, 0x8b8577, 1.0);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffffff, 3);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
const sc = sun.shadow.camera;
sc.left = sc.bottom = -44;
sc.right = sc.top = 44;
sc.near = 1;
sc.far = 160;
sun.shadow.bias = -0.0005;
sun.shadow.normalBias = 0.03;
sun.shadow.radius = 3;
scene.add(sun, sun.target);

// ── world ──
const world = buildWorld(scene);
const landmarks = buildLandmarks(scene);
const city = buildCity(scene, landmarks);
const traffic = buildTraffic(scene, city);
const people = buildPeople(scene, city);
const tram = buildTram(scene, city);
const boats = buildBoats(scene, people, city);
const birds = buildBirds(scene, boats, people);
const fx = buildFx(scene);
flagMaterial().clippingPlanes = CLIP;

// big flags on landmarks
const byName = (s) => landmarks.find((g) => g.userData.landmark?.name.includes(s));
{
  const camlica = byName('Çamlıca Camii');
  flag(scene, camlica.position.x + 3.6, 0.6, camlica.position.z + 2.6, 2.0);
  const taksim = byName('Taksim');
  flag(scene, taksim.position.x - 0.9, 0.6, taksim.position.z + 0.6, 1.5);
  const mt = byName('Kız Kulesi');
  flag(mt, 0.55, 0.62, 0.25, 0.5);
  const tk = byName('Topkapı');
  flag(tk, -0.5, 2.5, 0.1, 0.45, true);
  const dl = byName('Dolmabahçe');
  flag(dl, 0, 1.4, 0, 0.7);
  const hp = byName('Haydarpaşa');
  flag(hp, 0, 1.5, 0, 0.5);
  const gt = byName('Galata Kulesi');
  flag(gt, 0, 4.6, 0, 0.45, true);
}

const hud = buildHud(document.getElementById('hud'));
const interaction = buildInteraction({ renderer, camera, scene, landmarks, city, traffic, people, boats, birds, tram, tooltip: document.getElementById('tip') });

// ── post ──
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.4, 0.38, 0.9);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ── sizing: a 1080×1080 square that scales down to fit ──
function resize() {
  const s = Math.floor(Math.min(1080, window.innerWidth, window.innerHeight));
  stage.style.width = stage.style.height = s + 'px';
  stage.style.setProperty('--k', s / 1080);
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(s, s, false);
  composer.setPixelRatio(pixelRatio);
  composer.setSize(s, s);
}
window.addEventListener('resize', resize);
resize();

// ── weather ──
let weather = toScene({ ...PRESETS.cloudy, cloudCover: 40, code: 2, temp: 16, source: 'boot' });
let weatherLoaded = false;
async function refreshWeather() {
  const w = await fetchWeather();
  const first = !weatherLoaded;
  weather = w;
  weatherLoaded = true;
  if (first) {
    // arrive in the right state rather than easing in from defaults
    U.uWet.value = w.rain > 0 ? 0.7 + w.rain * 0.3 : 0;
    U.uSnow.value = w.snow > 0 ? 0.55 : 0;
    U.uRain.value = w.rain;
    U.uWind.value = w.wind;
  }
  events.emit('weather:update', { weather: w });
  document.body.dataset.weather = w.kind;
}
refreshWeather();
setInterval(refreshWeather, 10 * 60 * 1000);

// ── ambient director: small events at organic, randomised intervals ──
const director = {
  next: 6,
  cool: {},
  table: [
    { k: 'flock', w: 3, cd: 20, run: () => birds.spawnFlock() },
    { k: 'ship', w: 2, cd: 50, run: () => boats.sendTanker() },
    { k: 'gather', w: 3, cd: 15, run: () => { const pl = city.plazas[Math.floor(Math.random() * city.plazas.length)]; people.gather(pl.x, pl.z, Math.floor(rand(8, 16)), rand(10, 20), pl.name); } },
    { k: 'taxi', w: 3, cd: 10, run: () => traffic.rushTaxi() },
    { k: 'pigeons', w: 2, cd: 25, run: () => birds.scatterPigeons(birds.pigeonHome.x, birds.pigeonHome.z) },
    { k: 'ferry', w: 2, cd: 20, run: () => { const f = boats.boats.filter((b) => b.kind === 'ferry' && b.state === 'docked'); if (f.length) f[Math.floor(Math.random() * f.length)].wait = 0.5; } },
  ],
  update(dt, t) {
    this.next -= dt;
    if (this.next > 0) return;
    this.next = rand(5, 16);
    const ok = this.table.filter((e) => !(this.cool[e.k] > t));
    let r = Math.random() * ok.reduce((a, e) => a + e.w, 0);
    for (const e of ok) {
      r -= e.w;
      if (r <= 0) { e.run(); this.cool[e.k] = t + e.cd; events.emit('ambient', { kind: e.k }); break; }
    }
  },
};
setTimeout(() => boats.sendTanker(), 12000);
setTimeout(() => birds.spawnFlock(), 4000);

// ── per-frame atmosphere ──
const sunDir = new THREE.Vector3();
const bg = new THREE.Color(0xdfe8ec);
let pal = null, lastHud = 0;
const ledColor = new THREE.Color();
const bridge = byName('Köprüsü');
const maiden = byName('Kız Kulesi');
const tv = byName('Çamlıca Kulesi');

function atmosphere(dt, t) {
  const d = now();
  const parts = istanbulParts(d);
  const hour = parts.hour + parts.minute / 60;
  const s = sunPosition(d);
  const p = palette(s.elevation, weather);
  pal = p;
  // sun by day, moon by night
  const night = p.night;
  const useMoon = s.elevation < -4;
  const body = useMoon ? moonPosition(d) : s;
  dirFromAngles(body.elevation, body.azimuth, sunDir);
  const lightTarget = controls.target;
  sun.position.copy(lightTarget).addScaledVector(sunDir, 80);
  sun.target.position.copy(lightTarget);
  const k = 1 - Math.exp(-2 * dt);
  sun.color.lerp(useMoon ? new THREE.Color(0x8fa6d8) : p.sun, k);
  sun.intensity = damp(sun.intensity, useMoon ? 0.35 * (1 - weather.cloud * 0.7) : p.sunI, 2, dt);
  hemi.color.lerp(p.hemiSky, k);
  hemi.groundColor.lerp(p.hemiGround, k);
  hemi.intensity = damp(hemi.intensity, p.hemiI, 2, dt);
  scene.environmentIntensity = damp(scene.environmentIntensity, p.env, 2, dt);
  bg.lerp(p.bg, k);
  // fog: visibility-driven, measured along the view depth
  const fogAmt = weather.fog;
  const near = CAM_DIST - 30 + (1 - fogAmt) * 200;
  const far = CAM_DIST + 15 + (1 - fogAmt) * 260;
  scene.fog.near = damp(scene.fog.near, near, 1, dt);
  scene.fog.far = damp(scene.fog.far, far, 1, dt);
  scene.fog.color.copy(bg);
  scene.background.copy(bg);
  document.body.style.background = `#${bg.getHexString()}`;
  stage.style.setProperty('--halo', `#${bg.getHexString()}`);

  // shared uniforms
  U.uNight.value = night;
  const lateNight = hour >= 1 && hour < 5.5 ? 0.35 : hour >= 23 || hour < 1 ? 0.7 : 1;
  U.uLit.value = clamp(night * 0.5 * lateNight + weather.cloud * 0.06 + fogAmt * 0.08 + (1 - smoothstep(-2, 12, s.elevation)) * 0.12, 0, 0.75);
  U.uLampGlow.value = clamp(1 - smoothstep(-3, 5, s.elevation) + fogAmt * 0.5 + (weather.thunder ? 0.4 : 0), 0, 1);
  U.uRain.value = damp(U.uRain.value, weather.rain, 0.5, dt);
  U.uWet.value = damp(U.uWet.value, weather.rain > 0 ? 0.7 + weather.rain * 0.3 : weather.snow > 0 ? 0.35 : 0, weather.rain > 0 ? 0.08 : 0.01, dt);
  U.uSnow.value = damp(U.uSnow.value, weather.snow > 0 ? 0.55 + weather.snow * 0.45 : 0, weather.snow > 0 ? 0.015 : 0.006, dt);
  U.uWind.value = damp(U.uWind.value, weather.wind, 0.5, dt);
  const toward = weather.windDirRad + Math.PI;
  U.uWindDir.value.set(Math.sin(toward), -Math.cos(toward));

  bloom.enabled = night > 0.08 || U.uLampGlow.value > 0.3;
  bloom.strength = 0.1 + night * 0.42;
  bloom.threshold = 0.9 - night * 0.12;
  renderer.toneMappingExposure = 1.0 + night * 0.15;

  updateLandmarkLights(night, t);
  // bridge LEDs: slow colour wash at night, show on click
  const led = bridge.userData.led;
  if (bridge.userData.ledShow > 0) bridge.userData.ledShow -= dt;
  const show = bridge.userData.ledShow > 0;
  ledColor.setHSL((t * (show ? 0.4 : 0.03)) % 1, 0.75, 0.6);
  led.emissive.copy(ledColor);
  led.emissiveIntensity = Math.max(night * 0.9, show ? 1.4 : 0);
  // Maiden's Tower lantern
  if (maiden.userData.flash > 0) maiden.userData.flash -= dt;
  maiden.userData.lantern.material.emissiveIntensity = night * (1.2 + 0.8 * Math.sin(t * 2)) + (maiden.userData.flash > 0 ? 3 * Math.abs(Math.sin(t * 10)) : 0);
  // TV tower aviation beacon
  tv.userData.beacon.material.color.setScalar(0).setRGB(Math.sin(t * 3) > 0.6 ? 4 : 0.4, 0.1, 0.05);

  if (t - lastHud > 1) {
    lastHud = t;
    hud.update({ weather, night: night > 0.5, textColor: p.text, date: d, parts });
  }
  return { hour, night };
}

// ── adaptive resolution: protect the frame rate ──
let frameAcc = 0, frameN = 0, perfT = 0;
function adapt(dt) {
  frameAcc += dt;
  frameN++;
  perfT += dt;
  if (perfT < 2.5) return;
  const avg = frameAcc / frameN;
  frameAcc = frameN = perfT = 0;
  if (avg > 1 / 45 && pixelRatio > 0.75) { pixelRatio = Math.max(0.75, pixelRatio - 0.25); resize(); }
  else if (avg < 1 / 58 && pixelRatio < Math.min(window.devicePixelRatio || 1, 2) - 0.01) { pixelRatio = Math.min(Math.min(window.devicePixelRatio || 1, 2), pixelRatio + 0.25); resize(); }
}

// keep the camera over the board
function clampPan() {
  const tg = controls.target;
  const cx = clamp(tg.x, -HALF + 4, HALF - 4), cz = clamp(tg.z, -HALF + 4, HALF - 4);
  if (cx !== tg.x || cz !== tg.z) {
    const dx = cx - tg.x, dz = cz - tg.z;
    tg.x += dx; tg.z += dz;
    camera.position.x += dx; camera.position.z += dz;
  }
}

let lastNow = performance.now();
let t = 0;
const fpsEl = params.has('debug') ? document.getElementById('fps') : null;
renderer.info.autoReset = false;
const PROF = {};
function prof(k, fn) { if (!fpsEl) return fn(); const t0 = performance.now(); const r = fn(); PROF[k] = (PROF[k] || 0) * 0.95 + (performance.now() - t0) * 0.05; return r; }
window.PROF = PROF;
let fpsSmooth = 60;
function frame() {
  const nowMs = performance.now();
  const raw = (nowMs - lastNow) / 1000;
  lastNow = nowMs;
  const dt = Math.min(raw, 1 / 20);
  fpsSmooth = damp(fpsSmooth, 1 / Math.max(raw, 1e-3), 3, raw);
  renderer.info.reset();
  t += dt;
  U.uTime.value = t;
  controls.update();
  clampPan();
  const { hour } = prof('atmosphere', () => atmosphere(dt, t));
  const flash = prof('fx', () => fx.update(dt, t, weather, camera, pixelRatio));
  if (flash > 0) {
    hemi.intensity += flash * 2.5;
    scene.background.lerp(new THREE.Color(0xe8ecff), flash * 0.5);
  }
  city.update(t);
  prof('traffic', () => traffic.update(dt, t));
  prof('people', () => people.update(dt, t, hour));
  tram.update(dt);
  prof('boats', () => boats.update(dt, t));
  prof('birds', () => birds.update(dt, t));
  director.update(dt, t);
  updateFlags(U.uWindDir.value);
  interaction.update(dt, t);
  prof('render', () => { if (params.has('nobloom')) renderer.render(scene, camera); else composer.render(); });
  adapt(raw);
  if (fpsEl && Math.floor(t * 2) !== Math.floor((t - dt) * 2)) fpsEl.textContent = `${Math.round(fpsSmooth)} fps · dpr ${pixelRatio} · ${weather.kind}/${weather.source} · calls ${renderer.info.render.calls} · tris ${(renderer.info.render.triangles / 1000) | 0}k`;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
document.body.classList.add('ready');

// A tiny public surface for hooking audio or poking the world from the console.
window.istanbul = {
  events,
  setWeather(kind) { if (PRESETS[kind]) { weather = toScene({ ...PRESETS[kind], source: 'manual:' + kind }); } },
  get weather() { return weather; },
  scene, camera, renderer, controls, interaction,
};

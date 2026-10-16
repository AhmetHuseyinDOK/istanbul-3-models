import * as THREE from 'three';

export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const randi = (a, b) => Math.floor(rand(a, b + 1));
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export function angleLerp(a, b, t) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

// Small pub/sub bus. Every ambient happening in the city is emitted here with a world
// position, so an audio layer (or anything else) can subscribe later:
//   istanbul.events.on('ferry:horn', ({ position }) => playSpatial('horn', position))
export class EventBus {
  constructor() {
    this.map = new Map();
    this.log = [];
  }
  on(type, fn) {
    if (!this.map.has(type)) this.map.set(type, new Set());
    this.map.get(type).add(fn);
    return () => this.map.get(type).delete(fn);
  }
  emit(type, payload = {}) {
    const e = { type, t: performance.now(), ...payload };
    this.log.push(e);
    if (this.log.length > 60) this.log.shift();
    for (const k of [type, '*']) this.map.get(k)?.forEach((fn) => fn(e));
  }
}
export const events = new EventBus();

// Uniforms shared by every patched material.
export const U = {
  uTime: { value: 0 },
  uWind: { value: 0.2 }, // 0..1
  uWindDir: { value: new THREE.Vector2(0, 1) }, // direction the wind blows towards (x,z)
  uSnow: { value: 0 }, // accumulated snow cover 0..1
  uWet: { value: 0 }, // wetness 0..1
  uRain: { value: 0 }, // rain intensity 0..1 (ripples)
  uNight: { value: 0 }, // 0 day .. 1 night
  uLit: { value: 0 }, // fraction of windows lit
  uLampGlow: { value: 0 },
};

const NOISE = /* glsl */ `
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
// expanding rain ring normal perturbation on a cell grid
vec2 rainRipple(vec2 p, float t, float amount){
  vec2 acc = vec2(0.0);
  for (int k=0;k<2;k++){
    vec2 q = p*(k==0?2.2:3.1) + float(k)*7.3;
    vec2 id = floor(q); vec2 f = fract(q)-0.5;
    float ph = h21(id+float(k)*3.1);
    if (ph > amount) continue;
    float life = fract(t*0.9 + ph*13.0);
    vec2 o = (vec2(h21(id+1.7), h21(id+9.1))-0.5)*0.5;
    vec2 d = f - o; float r = length(d);
    float ring = sin((r - life*0.45)*55.0) * smoothstep(0.08,0.0,abs(r-life*0.45)) * (1.0-life);
    acc += normalize(d+1e-4) * ring;
  }
  return acc;
}
`;

/**
 * Inject world-space varyings + optional effects into a built-in material.
 * opts: { snow, wet, puddles, sway: amp, windows: {...}, emissiveNight }
 */
export function patch(material, opts = {}) {
  const defs = [];
  if (opts.snow) defs.push('SNOWABLE');
  if (opts.wet) defs.push('WETTABLE');
  if (opts.puddles) defs.push('PUDDLES');
  if (opts.sway) defs.push('SWAY');
  if (opts.windows) defs.push('WINDOWS');
  if (opts.rand) defs.push('USE_ARAND');
  const key = defs.join('|') + (opts.sway || '') + JSON.stringify(opts.windows || '');
  material.customProgramCacheKey = () => key;
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, U);
    shader.uniforms.uSwayAmp = { value: opts.sway || 0 };
    const w = opts.windows || {};
    shader.uniforms.uWinTint = { value: new THREE.Color(w.tint ?? 0x2a3440) };
    const head = defs.map((d) => `#define ${d}`).join('\n') +
      `\nuniform float uTime, uWind, uSnow, uWet, uRain, uNight, uLit, uSwayAmp; uniform vec2 uWindDir; uniform vec3 uWinTint;
       varying vec3 vWPos; varying vec3 vWNrm; varying float vRand;\n`;
    shader.vertexShader = head + `#ifdef USE_ARAND\nattribute float aRand;\n#endif\n` +
      shader.vertexShader.replace(
        '#include <project_vertex>',
        `vec4 mvPosition = vec4( transformed, 1.0 );
        vec3 ipos = modelMatrix[3].xyz;
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
          ipos = instanceMatrix[3].xyz;
        #endif
        #ifdef SWAY
        {
          float h = max(0.0, mvPosition.y - ipos.y);
          float ph = ipos.x*1.7 + ipos.z*1.3;
          float gust = 0.55 + 0.45*sin(uTime*(1.2+uWind*2.5) + ph*0.35) * sin(uTime*0.37 + ph);
          mvPosition.xz += uWindDir * h * uSwayAmp * (0.04 + uWind*0.55*gust);
          mvPosition.xz += vec2(sin(uTime*1.3+ph), cos(uTime*1.07+ph*1.3)) * h * uSwayAmp * (0.03 + uWind*0.08);
        }
        #endif
        vWPos = (modelMatrix * mvPosition).xyz;
        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;`
      ).replace(
        '#include <beginnormal_vertex>',
        `#include <beginnormal_vertex>
        {
          vec3 n0 = objectNormal;
          #ifdef USE_INSTANCING
            mat3 im3 = mat3(instanceMatrix);
            n0 /= vec3(dot(im3[0], im3[0]), dot(im3[1], im3[1]), dot(im3[2], im3[2]));
            n0 = im3 * n0;
          #endif
          vWNrm = normalize(mat3(modelMatrix) * n0);
          #ifdef USE_ARAND
            vRand = aRand;
          #else
            vRand = 0.5;
          #endif
        }`
      );
    let fs = head + NOISE + shader.fragmentShader;
    fs = fs.replace(
      '#include <color_fragment>',
      `#include <color_fragment>
      vec3 wn = normalize(vWNrm);
      float upness = smoothstep(0.5, 0.95, wn.y);
      float puddle = 0.0;
      #ifdef WINDOWS
        float vert = 1.0 - step(0.45, abs(wn.y));
        float wu = abs(wn.x) > 0.5 ? vWPos.z : vWPos.x;
        float wv = vWPos.y - 0.6;
        vec2 wc = vec2(wu/0.3, wv/0.34);
        vec2 wf = fract(wc);
        float isWin = vert * step(0.28, wf.x) * step(wf.x, 0.72) * step(0.32, wf.y) * step(wf.y, 0.82) * step(0.3, wv);
        diffuseColor.rgb = mix(diffuseColor.rgb, uWinTint, isWin * 0.85);
      #endif
      #ifdef WETTABLE
        #ifdef PUDDLES
          float pn = vnoise(vWPos.xz*1.5) * 0.6 + vnoise(vWPos.xz*4.3) * 0.4;
          puddle = smoothstep(0.7 - uWet*0.08, 0.73 - uWet*0.08, pn) * uWet * upness;
        #endif
        diffuseColor.rgb *= 1.0 - (0.28*uWet*upness + 0.35*puddle);
      #endif
      #ifdef SNOWABLE
        float sn = vnoise(vWPos.xz*2.3) * 0.6 + vnoise(vWPos.xz*7.0) * 0.4;
        float snowAmt = uSnow * upness * smoothstep(0.75 - uSnow*0.9, 0.95 - uSnow*0.9, sn);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93,0.95,0.98), snowAmt);
      #endif`
    ).replace(
      '#include <roughnessmap_fragment>',
      `#include <roughnessmap_fragment>
      #ifdef WETTABLE
        roughnessFactor = mix(roughnessFactor, 0.32, uWet*upness);
        roughnessFactor = mix(roughnessFactor, 0.04, puddle);
      #endif
      #ifdef SNOWABLE
        roughnessFactor = mix(roughnessFactor, 0.9, snowAmt);
      #endif`
    ).replace(
      '#include <normal_fragment_maps>',
      `#include <normal_fragment_maps>
      #ifdef PUDDLES
        if (puddle > 0.01 && uRain > 0.01) {
          vec2 rr = rainRipple(vWPos.xz, uTime, uRain) * puddle;
          normal = normalize(normal + (viewMatrix * vec4(rr.x, 0.0, rr.y, 0.0)).xyz * 0.6);
        }
      #endif`
    ).replace(
      '#include <emissivemap_fragment>',
      `#include <emissivemap_fragment>
      #ifdef WINDOWS
      {
        vec2 cid = floor(wc) + vRand*311.0;
        float hh = h21(cid);
        float epoch = floor(uTime/37.0 + hh*5.0);
        float lit = step(h21(cid + epoch*0.37), uLit);
        float shop = step(wv, 0.3) * step(0.04, wv) * vert * step(0.6, fract(vRand*7.0+0.13));
        vec3 warm = mix(vec3(1.0,0.72,0.38), vec3(1.0,0.88,0.62), h21(cid+3.3));
        if (hh > 0.88) warm = vec3(0.75,0.85,1.0);
        totalEmissiveRadiance += warm * (isWin * lit * 1.15 + shop * uNight * 0.9);
      }
      #endif`
    );
    shader.fragmentShader = fs;
    opts.onShader?.(shader);
  };
  return material;
}

// Canvas texture helper
export function canvasTex(w, h, draw, { repeat = false, srgb = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}

// Soft radial gradient used for light pools, glows, shadows.
let _glow;
export function glowTexture() {
  if (_glow) return _glow;
  _glow = canvasTex(64, 64, (g, w, h) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.35, 'rgba(255,255,255,0.45)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, h);
  });
  return _glow;
}

// Polyline helper: arc-length parametrised path through points (x,z) with optional y fn.
export class Path {
  constructor(pts, closed = false) {
    this.pts = pts.map((p) => new THREE.Vector2(p[0] ?? p.x, p[1] ?? p.y));
    if (closed) this.pts.push(this.pts[0].clone());
    this.cum = [0];
    for (let i = 1; i < this.pts.length; i++) this.cum.push(this.cum[i - 1] + this.pts[i].distanceTo(this.pts[i - 1]));
    this.length = this.cum[this.cum.length - 1];
  }
  at(s, out = new THREE.Vector3()) {
    s = clamp(s, 0, this.length);
    let i = 1;
    while (i < this.cum.length - 1 && this.cum[i] < s) i++;
    const a = this.pts[i - 1], b = this.pts[i];
    const seg = this.cum[i] - this.cum[i - 1] || 1;
    const t = (s - this.cum[i - 1]) / seg;
    out.set(lerp(a.x, b.x, t), 0, lerp(a.y, b.y, t));
    out.heading = Math.atan2(b.x - a.x, b.y - a.y);
    return out;
  }
}

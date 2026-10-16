// The diorama board: earth slab, land masses, and the animated Bosphorus.
import * as THREE from 'three';
import { HALF, LAND_Y, WATER_Y, REGIONS, sdf, SDF_RES } from './geo.js';
import { U, patch, canvasTex } from './util.js';

export function sdfTexture() {
  const N = SDF_RES;
  const data = new Uint8Array(N * N);
  for (let k = 0; k < N * N; k++) data[k] = Math.max(0, Math.min(255, Math.round((sdf[k] / 8 + 0.5) * 255)));
  const t = new THREE.DataTexture(data, N, N, THREE.RedFormat, THREE.UnsignedByteType);
  t.magFilter = t.minFilter = THREE.LinearFilter;
  t.needsUpdate = true;
  return t;
}
export const SDF_TEX = sdfTexture();

function cleanPoly(poly) {
  const out = [];
  for (const [x0, z0] of poly) {
    const x = Math.max(-HALF, Math.min(HALF, x0));
    const z = Math.max(-HALF, Math.min(HALF, z0));
    const last = out[out.length - 1];
    if (!last || Math.hypot(last[0] - x, last[1] - z) > 0.05) out.push([x, z]);
  }
  return out;
}

export function buildWorld(scene) {
  const group = new THREE.Group();
  scene.add(group);

  // ── Earth slab with soil strata on the sides ──
  const strata = canvasTex(64, 256, (g, w, h) => {
    const bands = ['#b8a080', '#a88a68', '#9a7b5a', '#8a6b4d', '#7c5e44', '#6e5340'];
    let y = 0;
    let i = 0;
    while (y < h) {
      const bh = 18 + Math.random() * 40;
      g.fillStyle = bands[i++ % bands.length];
      g.fillRect(0, y, w, bh);
      for (let k = 0; k < 40; k++) {
        g.fillStyle = `rgba(60,40,25,${Math.random() * 0.15})`;
        g.fillRect(Math.random() * w, y + Math.random() * bh, 2 + Math.random() * 4, 1 + Math.random() * 2);
      }
      y += bh;
    }
  });
  const slabDepth = 3.2;
  const slab = new THREE.Mesh(
    new THREE.BoxGeometry(HALF * 2, slabDepth, HALF * 2),
    [
      new THREE.MeshStandardMaterial({ map: strata, roughness: 0.95 }),
      new THREE.MeshStandardMaterial({ map: strata, roughness: 0.95 }),
      new THREE.MeshStandardMaterial({ color: 0x3d5a63, roughness: 1 }),
      new THREE.MeshStandardMaterial({ color: 0x5c4634, roughness: 1 }),
      new THREE.MeshStandardMaterial({ map: strata, roughness: 0.95 }),
      new THREE.MeshStandardMaterial({ map: strata, roughness: 0.95 }),
    ]
  );
  slab.position.y = -slabDepth / 2;
  slab.receiveShadow = true;
  group.add(slab);

  // Water cross-section skirt around the board edge.
  const skirtMat = new THREE.MeshStandardMaterial({ color: 0x2f7d93, roughness: 0.2, transparent: true, opacity: 0.85 });
  for (let i = 0; i < 4; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2, WATER_Y + 0.02), skirtMat);
    const a = (i * Math.PI) / 2;
    m.position.set(Math.sin(a) * (HALF - 0.005), (WATER_Y + 0.02) / 2 - 0.01, Math.cos(a) * (HALF - 0.005));
    m.rotation.y = a;
    group.add(m);
  }

  // ── Land masses ──
  const landTop = patch(new THREE.MeshStandardMaterial({ color: 0xd8cbb0, roughness: 0.92 }), { snow: true, wet: true, puddles: true });
  const landSide = new THREE.MeshStandardMaterial({ color: 0xb59c7a, roughness: 0.95 });
  for (const key of Object.keys(REGIONS)) {
    const poly = cleanPoly(REGIONS[key]);
    const shape = new THREE.Shape(poly.map(([x, z]) => new THREE.Vector2(x, -z)));
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: LAND_Y - 0.08,
      bevelEnabled: true,
      bevelSize: 0.06,
      bevelThickness: 0.08,
      bevelSegments: 2,
      curveSegments: 4,
    });
    geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, key === 'islet' ? [new THREE.MeshStandardMaterial({ color: 0x9a948a, roughness: 0.9 }), landSide] : [landTop, landSide]);
    m.receiveShadow = true;
    m.castShadow = false;
    m.userData.ground = true;
    group.add(m);
  }

  // ── The water ──
  const water = buildWater();
  group.add(water);

  return { group, water, landTop };
}

function waterNormalTex() {
  // tiling height noise -> normal map
  const N = 256;
  const h = new Float32Array(N * N);
  const waves = [];
  for (let i = 0; i < 18; i++) waves.push({ kx: Math.round((Math.random() - 0.5) * 16), kz: Math.round((Math.random() - 0.5) * 16), p: Math.random() * 6.28, a: Math.random() });
  for (let j = 0; j < N; j++)
    for (let i = 0; i < N; i++) {
      let v = 0;
      for (const w of waves) v += w.a * Math.sin(((w.kx * i + w.kz * j) / N) * Math.PI * 2 + w.p);
      h[j * N + i] = v;
    }
  return canvasTex(N, N, (g) => {
    const img = g.createImageData(N, N);
    for (let j = 0; j < N; j++)
      for (let i = 0; i < N; i++) {
        const dx = h[j * N + ((i + 1) % N)] - h[j * N + ((i - 1 + N) % N)];
        const dz = h[((j + 1) % N) * N + i] - h[((j - 1 + N) % N) * N + i];
        const n = new THREE.Vector3(-dx * 0.25, -dz * 0.25, 1).normalize();
        const k = (j * N + i) * 4;
        img.data[k] = (n.x * 0.5 + 0.5) * 255;
        img.data[k + 1] = (n.y * 0.5 + 0.5) * 255;
        img.data[k + 2] = (n.z * 0.5 + 0.5) * 255;
        img.data[k + 3] = 255;
      }
    g.putImageData(img, 0, 0);
  }, { repeat: true, srgb: false });
}

function buildWater() {
  const geo = new THREE.PlaneGeometry(HALF * 2, HALF * 2, 90, 90);
  geo.rotateX(-Math.PI / 2);
  const nTex = waterNormalTex();
  nTex.repeat.set(9, 9);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x1d6b86,
    roughness: 0.12,
    metalness: 0.05,
    normalMap: nTex,
    normalScale: new THREE.Vector2(0.35, 0.35),
  });
  const uni = { uSdf: { value: SDF_TEX }, uDeep: { value: new THREE.Color(0x0f4a66) }, uShallow: { value: new THREE.Color(0x3b9aa0) } };
  mat.customProgramCacheKey = () => 'water';
  mat.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, U, uni);
    const head = `uniform float uTime, uWind, uRain, uNight; uniform vec2 uWindDir; uniform sampler2D uSdf; uniform vec3 uDeep, uShallow;
      varying vec3 vWPos;
      vec3 waveH(vec2 p, float t, float amp){
        // returns (height, d/dx, d/dz)
        vec3 r = vec3(0.0);
        vec2 d1 = normalize(uWindDir + vec2(0.2,0.1)); vec2 d2 = normalize(vec2(-uWindDir.y, uWindDir.x)*0.6 + uWindDir); vec2 d3 = normalize(vec2(0.7,-0.4));
        float k1=1.6, k2=2.7, k3=4.3; float w1=1.1, w2=1.7, w3=2.3;
        float a1=amp, a2=amp*0.55, a3=amp*0.3;
        float f1 = dot(d1,p)*k1 - t*w1; float f2 = dot(d2,p)*k2 - t*w2 + 1.3; float f3 = dot(d3,p)*k3 - t*w3 + 4.1;
        r.x = a1*sin(f1) + a2*sin(f2) + a3*sin(f3);
        r.yz = a1*k1*cos(f1)*d1 + a2*k2*cos(f2)*d2 + a3*k3*cos(f3)*d3;
        return r;
      }\n`;
    s.vertexShader = head + s.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       vec3 wv = waveH(position.xz, uTime, 0.02 + uWind*0.05);
       transformed.y += wv.x;
       vWPos = (modelMatrix * vec4(transformed,1.0)).xyz;`
    );
    s.fragmentShader = head + `
      float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
      float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
      vec2 ripple(vec2 p, float t){ vec2 acc=vec2(0.0);
        for(int k=0;k<2;k++){ vec2 q=p*(k==0?1.6:2.3)+float(k)*5.1; vec2 id=floor(q); vec2 f=fract(q)-0.5;
          float ph=h21(id+float(k)*2.7); if(ph>uRain) continue; float life=fract(t*0.8+ph*11.0);
          vec2 o=(vec2(h21(id+1.3),h21(id+7.7))-0.5)*0.5; vec2 d=f-o; float r=length(d);
          float ring=sin((r-life*0.45)*48.0)*smoothstep(0.07,0.0,abs(r-life*0.45))*(1.0-life);
          acc+=normalize(d+1e-4)*ring; }
        return acc; }
    ` + s.fragmentShader
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
         vec2 suv = (vWPos.xz + ${HALF.toFixed(1)}) / ${(HALF * 2).toFixed(1)};
         float sd = (texture2D(uSdf, suv).r - 0.5) * 8.0; // + land, - water
         float shallow = smoothstep(-2.8, 0.0, sd);
         diffuseColor.rgb = mix(uDeep, uShallow, shallow*shallow);
         float n = vnoise(vWPos.xz*3.0 + uTime*0.2);
         float band = smoothstep(-0.55, -0.12, sd);
         float lap = 0.5 + 0.5*sin(sd*16.0 - uTime*1.8 + n*5.0);
         float foam = band * smoothstep(0.55, 0.9, lap) + smoothstep(-0.16, -0.04, sd);
         diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.92,0.96,0.97), clamp(foam,0.0,1.0)*0.75);`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
         {
           vec3 wv = waveH(vWPos.xz, uTime, 0.02 + uWind*0.05);
           vec3 wn = normalize(vec3(-wv.y, 1.0, -wv.z));
           vec2 rr = ripple(vWPos.xz, uTime) * 0.8;
           wn = normalize(wn + vec3(rr.x, 0.0, rr.y));
           vec3 vn = normalize((viewMatrix * vec4(wn, 0.0)).xyz);
           normal = normalize(normal + vn - vec3(0.0,0.0,0.0));
           normal = normalize(mix(normal, vn, 0.5));
         }`
      );
  };
  const m = new THREE.Mesh(geo, mat);
  m.position.y = WATER_Y;
  m.receiveShadow = true;
  m.userData.water = true;
  return m;
}

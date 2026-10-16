// Weather effects living in the world: rain streaks + splashes, snowfall, drifting clouds
// that cast shadows, lightning, fog.
import * as THREE from 'three';
import { HALF, LAND_Y, WATER_Y } from './geo.js';
import { U, rand, events } from './util.js';
import { SDF_TEX } from './world.js';

const AREA = HALF * 2 + 6;
const TOP = 16;

function rain(scene) {
  const N = 9000;
  const pos = new Float32Array(N * 2 * 3);
  const end = new Float32Array(N * 2);
  for (let i = 0; i < N; i++) {
    const x = (Math.random() - 0.5) * AREA, z = (Math.random() - 0.5) * AREA, y = Math.random() * TOP;
    for (let k = 0; k < 2; k++) {
      pos.set([x, y, z], (i * 2 + k) * 3);
      end[i * 2 + k] = k;
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aEnd', new THREE.BufferAttribute(end, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: U.uTime, uRain: U.uRain, uWind: U.uWind, uWindDir: U.uWindDir, uSdf: { value: SDF_TEX }, uNight: U.uNight },
    vertexShader: /* glsl */ `
      attribute float aEnd; uniform float uTime, uRain, uWind; uniform vec2 uWindDir; uniform sampler2D uSdf; varying float vA; varying float vEnd;
      void main(){
        float speed = 15.0;
        float y = mod(position.y - uTime*speed, ${TOP.toFixed(1)});
        vec2 slant = uWindDir * (0.15 + uWind*0.9);
        vec3 p = vec3(position.x, y, position.z);
        p.xz += slant * (y - ${TOP.toFixed(1)}) * 0.25;
        p.xz = mod(p.xz + ${(AREA / 2).toFixed(1)}, ${AREA.toFixed(1)}) - ${(AREA / 2).toFixed(1)};
        vec3 d = normalize(vec3(slant.x, -1.0, slant.y));
        p -= d * aEnd * 0.85;
        // hide below the surface
        vec2 suv = (p.xz + ${HALF.toFixed(1)}) / ${(HALF * 2).toFixed(1)};
        float land = step(0.5, texture2D(uSdf, clamp(suv,0.0,1.0)).r);
        float floorY = mix(${WATER_Y.toFixed(2)}, ${LAND_Y.toFixed(2)}, land);
        float inside = step(abs(p.x), ${HALF.toFixed(1)}) * step(abs(p.z), ${HALF.toFixed(1)});
        float vis = step(fract(position.x*13.13+position.z*7.7), uRain) * step(mix(-3.5, floorY, inside), p.y);
        vA = vis; vEnd = aEnd;
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      varying float vA; varying float vEnd; uniform float uNight;
      void main(){ if (vA < 0.5) discard; gl_FragColor = vec4(mix(vec3(0.78,0.85,0.95), vec3(0.6,0.66,0.8), uNight), 0.7*(1.0-vEnd*0.8)); }`,
  });
  const lines = new THREE.LineSegments(g, m);
  lines.frustumCulled = false;
  lines.renderOrder = 5;
  scene.add(lines);
  return lines;
}

function splashes(scene) {
  // ring splashes on every surface; positions re-randomised per cycle on the GPU
  const N = 700;
  const geo = new THREE.InstancedBufferGeometry().copy(new THREE.RingGeometry(0.6, 1, 14).rotateX(-Math.PI / 2));
  const seed = new Float32Array(N);
  for (let i = 0; i < N; i++) seed[i] = Math.random();
  geo.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seed, 1));
  geo.instanceCount = N;
  const m = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: U.uTime, uRain: U.uRain, uSdf: { value: SDF_TEX } },
    vertexShader: /* glsl */ `
      attribute float aSeed; uniform float uTime, uRain; uniform sampler2D uSdf; varying float vA;
      float h(float n){ return fract(sin(n)*43758.5453); }
      void main(){
        float rate = 1.6;
        float tt = uTime*rate + aSeed*7.0;
        float cyc = floor(tt); float life = fract(tt);
        float sx = h(aSeed*91.7 + cyc*1.31)*2.0-1.0, sz = h(aSeed*47.3 + cyc*2.71)*2.0-1.0;
        vec2 c = vec2(sx, sz) * ${HALF.toFixed(1)};
        vec2 suv = (c + ${HALF.toFixed(1)}) / ${(HALF * 2).toFixed(1)};
        float land = step(0.5, texture2D(uSdf, suv).r);
        float y = mix(${WATER_Y.toFixed(2)} + 0.05, ${LAND_Y.toFixed(2)} + 0.045, land);
        float s = 0.03 + life*0.12;
        vec3 p = vec3(c.x + position.x*s, y, c.y + position.z*s);
        vA = (1.0-life) * step(aSeed, uRain);
        gl_Position = projectionMatrix * viewMatrix * vec4(p,1.0);
      }`,
    fragmentShader: `varying float vA; void main(){ if(vA<0.01) discard; gl_FragColor = vec4(0.9,0.95,1.0, vA*0.6); }`,
  });
  const mesh = new THREE.Mesh(geo, m);
  mesh.frustumCulled = false;
  mesh.renderOrder = 4;
  scene.add(mesh);
  return mesh;
}

function snow(scene) {
  const N = 5000;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) pos.set([(Math.random() - 0.5) * AREA, Math.random() * TOP, (Math.random() - 0.5) * AREA], i * 3);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const uZoom = { value: 1 };
  const m = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uTime: U.uTime, uSnowFall: { value: 0 }, uWind: U.uWind, uWindDir: U.uWindDir, uZoom, uPx: { value: 1 } },
    vertexShader: /* glsl */ `
      uniform float uTime, uSnowFall, uWind, uZoom, uPx; uniform vec2 uWindDir; varying float vA;
      void main(){
        float sp = 1.1 + fract(position.x*3.1)*0.6;
        float y = mod(position.y - uTime*sp, ${TOP.toFixed(1)});
        vec3 p = vec3(position.x, y, position.z);
        p.x += sin(uTime*0.8 + position.z*2.0)*0.35;
        p.z += cos(uTime*0.7 + position.x*2.0)*0.35;
        p.xz += uWindDir * uWind * (${TOP.toFixed(1)} - y) * 0.5;
        p.xz = mod(p.xz + ${(AREA / 2).toFixed(1)}, ${AREA.toFixed(1)}) - ${(AREA / 2).toFixed(1)};
        vA = step(fract(position.z*17.3), uSnowFall) * step(0.3, y);
        gl_PointSize = (2.0 + fract(position.y*5.3)*2.5) * uZoom * uPx;
        gl_Position = projectionMatrix * viewMatrix * vec4(p,1.0);
      }`,
    fragmentShader: `varying float vA; void main(){ if(vA<0.5) discard; float d = length(gl_PointCoord-0.5); if(d>0.5) discard; gl_FragColor = vec4(1.0,1.0,1.0, smoothstep(0.5,0.1,d)*0.9); }`,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  pts.renderOrder = 5;
  scene.add(pts);
  return pts;
}

function clouds(scene) {
  const list = [];
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, transparent: true, opacity: 0.0, depthWrite: false });
  const base = new THREE.IcosahedronGeometry(1, 2);
  for (let k = 0; k < 9; k++) {
    const g = new THREE.Group();
    const n = Math.floor(rand(4, 7));
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(base, mat);
      const s = rand(0.9, 1.6);
      m.position.set((i - n / 2) * rand(0.9, 1.3), rand(-0.1, 0.4) + (i > 0 && i < n - 1 ? 0.3 : 0), rand(-0.6, 0.6));
      m.scale.set(s, s * 0.7, s);
      m.castShadow = true;
      g.add(m);
    }
    g.position.set(rand(-HALF, HALF), rand(13, 15), rand(-HALF, HALF));
    g.scale.setScalar(rand(0.6, 0.9));
    g.rotation.y = rand(0, 6.28);
    g.userData.speed = rand(0.6, 1.1);
    g.userData.slot = k;
    scene.add(g);
    list.push(g);
  }
  return { list, mat };
}

function lightning(scene) {
  const mat = new THREE.LineBasicMaterial({ color: new THREE.Color(4, 4, 6), transparent: true, opacity: 0, toneMapped: false });
  const geo = new THREE.BufferGeometry();
  const line = new THREE.Line(geo, mat);
  line.frustumCulled = false;
  scene.add(line);
  return {
    strike() {
      const x = rand(-HALF * 0.8, HALF * 0.8), z = rand(-HALF * 0.8, HALF * 0.8);
      const pts = [];
      let px = x, pz = z;
      for (let y = 14; y >= LAND_Y; y -= 0.7) {
        pts.push(new THREE.Vector3(px, y, pz));
        px += rand(-0.5, 0.5);
        pz += rand(-0.5, 0.5);
      }
      geo.setFromPoints(pts);
      return new THREE.Vector3(px, LAND_Y, pz);
    },
    mat,
  };
}

export function buildFx(scene) {
  const r = rain(scene);
  const sp = splashes(scene);
  const sn = snow(scene);
  const cl = clouds(scene);
  const lt = lightning(scene);
  let flash = 0, nextStrike = rand(4, 10);

  function update(dt, t, weather, camera, pxRatio) {
    // rain + snow visibility
    r.visible = U.uRain.value > 0.01;
    sp.visible = r.visible;
    sn.visible = weather.snow > 0.01;
    sn.material.uniforms.uSnowFall.value = weather.snow;
    sn.material.uniforms.uZoom.value = camera.zoom;
    sn.material.uniforms.uPx.value = pxRatio;

    // clouds: count by cover, colour by darkness, drift with the wind
    const want = Math.round(weather.cloud * 6 * (weather.kind === 'clear' ? 0.3 : 1));
    const dark = weather.rain > 0 || weather.thunder ? 0.55 : weather.kind === 'cloudy' ? 0.82 : 1;
    cl.mat.color.setScalar(dark);
    const night = U.uNight.value;
    cl.mat.color.multiplyScalar(1 - night * 0.6);
    // fade clouds when zoomed in so they never block exploration
    const zoomFade = THREE.MathUtils.clamp(1.6 - camera.zoom * 0.5, 0, 1);
    cl.mat.opacity = 0.6 * zoomFade;
    const wd = U.uWindDir.value;
    for (const g of cl.list) {
      g.visible = g.userData.slot < want && zoomFade > 0.02;
      g.position.x += wd.x * (0.25 + U.uWind.value * 1.6) * g.userData.speed * dt;
      g.position.z += wd.y * (0.25 + U.uWind.value * 1.6) * g.userData.speed * dt;
      if (g.position.x > HALF + 6) g.position.x = -HALF - 6;
      if (g.position.x < -HALF - 6) g.position.x = HALF + 6;
      if (g.position.z > HALF + 6) g.position.z = -HALF - 6;
      if (g.position.z < -HALF - 6) g.position.z = HALF + 6;
    }

    // lightning
    if (weather.thunder) {
      nextStrike -= dt;
      if (nextStrike <= 0) {
        nextStrike = rand(5, 16);
        const p = lt.strike();
        flash = 1;
        events.emit('weather:lightning', { position: p });
        setTimeout(() => events.emit('weather:thunder', { position: p }), rand(600, 2500));
      }
    }
    flash = Math.max(0, flash - dt * 3.5);
    const flicker = flash > 0 ? (Math.sin(t * 60) > 0 ? 1 : 0.4) * flash : 0;
    lt.mat.opacity = flicker;
    return flicker;
  }
  return { update, clouds: cl };
}

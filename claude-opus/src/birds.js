// Birds: migrating flocks crossing the sky, gulls circling ferries, pigeons at Eminönü.
// One instanced mesh; wings flap in the vertex shader using a per-instance flap amount.
import * as THREE from 'three';
import { LAND_Y, HALF, SITES } from './geo.js';
import { U, rand, pick, damp, events } from './util.js';

function birdGeo() {
  // body + two wing triangles; attribute `wing` = |x| distance for flapping
  const v = [
    // left wing
    0, 0, 0.06, -0.26, 0, -0.02, 0, 0, -0.06,
    // right wing
    0, 0, 0.06, 0, 0, -0.06, 0.26, 0, -0.02,
    // body (thin diamond)
    0, 0.01, 0.12, -0.03, 0, 0, 0, 0.01, -0.1,
    0, 0.01, 0.12, 0, 0.01, -0.1, 0.03, 0, 0,
  ];
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  g.computeVertexNormals();
  return g;
}

export function buildBirds(scene, boats, people) {
  const MAX = 140;
  const geo = birdGeo();
  const aFlap = new THREE.InstancedBufferAttribute(new Float32Array(MAX * 2), 2); // amplitude, speed
  geo.setAttribute('aFlap', aFlap);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, side: THREE.DoubleSide });
  mat.onBeforeCompile = (s) => {
    s.uniforms.uTime = U.uTime;
    s.vertexShader = 'uniform float uTime; attribute vec2 aFlap;\n' + s.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       float ph = instanceMatrix[3].x*3.7 + instanceMatrix[3].z*2.1;
       transformed.y += sin(uTime*aFlap.y + ph) * abs(position.x) * aFlap.x;`
    );
  };
  const mesh = new THREE.InstancedMesh(geo, mat, MAX);
  mesh.castShadow = true;
  mesh.frustumCulled = false;
  scene.add(mesh);
  const c = new THREE.Color();

  const birds = [];
  for (let i = 0; i < MAX; i++) {
    birds.push({ i, active: false, pos: new THREE.Vector3(), vel: new THREE.Vector3(), heading: 0, kind: '' });
    mesh.setColorAt(i, c.set(0xffffff));
  }
  let free = birds.slice();
  const take = (n) => free.splice(0, n);

  // gulls: circling over the water, sometimes trailing a ferry
  const gulls = take(12);
  gulls.forEach((b, k) => {
    b.active = true;
    b.kind = 'gull';
    b.center = new THREE.Vector3(rand(-6, 4), 0, rand(-4, 14));
    b.r = rand(0.8, 2.2);
    b.a = rand(0, 6.28);
    b.w = rand(0.35, 0.6) * (Math.random() < 0.5 ? -1 : 1);
    b.h = rand(2.2, 3.8);
    b.scale = 0.75;
    mesh.setColorAt(b.i, c.set(0xf4f4f0));
  });

  // pigeons at Eminönü square (Yeni Cami)
  const pigeonHome = { x: SITES.yeniCami.x + 2.0, z: 7.4 };
  const pigeons = take(26);
  pigeons.forEach((b) => {
    b.active = true;
    b.kind = 'pigeon';
    b.state = 'ground';
    b.home = new THREE.Vector3(pigeonHome.x + rand(-0.9, 0.9), LAND_Y + 0.03, pigeonHome.z + rand(-0.9, 0.9));
    b.pos.copy(b.home);
    b.heading = rand(0, 6.28);
    b.scale = 0.38;
    b.hopT = rand(0, 3);
    mesh.setColorAt(b.i, c.set(pick(['#8a8f99', '#7d828c', '#9aa0aa', '#6f747d'])));
  });

  // migrating flocks
  const flocks = [];
  function spawnFlock() {
    const n = Math.floor(rand(9, 18));
    if (free.length < n) return;
    const members = take(n);
    const a = rand(0, Math.PI * 2);
    const start = new THREE.Vector3(Math.cos(a) * 42, rand(8, 11), Math.sin(a) * 42);
    const end = new THREE.Vector3(Math.cos(a + Math.PI + rand(-0.6, 0.6)) * 42, start.y + rand(-1, 1), Math.sin(a + Math.PI + rand(-0.6, 0.6)) * 42);
    const dir = end.clone().sub(start).normalize();
    const f = { members, pos: start, dir, speed: rand(3.2, 4.4), life: 0, wobble: rand(0, 6) };
    // V formation offsets
    members.forEach((b, k) => {
      b.active = true;
      b.kind = 'flock';
      const side = k % 2 ? 1 : -1, row = Math.ceil(k / 2);
      b.off = new THREE.Vector3(side * row * 0.5, rand(-0.15, 0.15) + row * 0.04, -row * 0.55);
      b.scale = 0.9;
      b.jit = rand(0, 6);
      mesh.setColorAt(b.i, c.set(0x2a2d33));
    });
    flocks.push(f);
    events.emit('birds:flock', { position: start.clone(), size: n });
  }

  function scatterPigeons(x, z) {
    let any = false;
    for (const b of pigeons) {
      if (b.state !== 'ground' || Math.hypot(b.pos.x - x, b.pos.z - z) > 3) continue;
      b.state = 'fly';
      b.t = 0;
      b.flyA = rand(0, 6.28);
      b.flyR = rand(1.0, 2.2);
      b.flyH = rand(1.5, 3);
      b.flyDur = rand(6, 11);
      any = true;
    }
    if (any) events.emit('birds:pigeons', { position: new THREE.Vector3(x, LAND_Y, z) });
    return any;
  }

  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(), pos = new THREE.Vector3();
  const ferries = boats.boats.filter((b) => b.kind === 'ferry');

  function update(dt, t) {
    const wind = U.uWind.value;
    // gulls
    for (const b of gulls) {
      // follow a moving ferry now and then
      if (!b.follow || Math.random() < dt * 0.02) {
        const moving = ferries.filter((f) => f.speed > 0.3);
        b.follow = moving.length && Math.random() < 0.6 ? pick(moving) : null;
      }
      if (b.follow) b.center.lerp(b.follow.group.position, 1 - Math.exp(-0.8 * dt));
      b.a += b.w * dt;
      const x = b.center.x + Math.cos(b.a) * b.r, z = b.center.z + Math.sin(b.a) * b.r;
      const y = b.h + Math.sin(t * 0.7 + b.i) * 0.3;
      b.heading = Math.atan2(-Math.sin(b.a) * Math.sign(b.w), Math.cos(b.a) * Math.sign(b.w));
      b.pos.set(x + U.uWindDir.value.x * wind * 0.3, y, z + U.uWindDir.value.y * wind * 0.3);
      aFlap.setXY(b.i, Math.sin(t * 0.5 + b.i) > 0.3 ? 0.9 : 0.12, 9);
      b.bank = -Math.sign(b.w) * 0.35;
    }
    // pigeons
    for (const b of pigeons) {
      if (b.state === 'ground') {
        b.hopT -= dt;
        if (b.hopT < 0) {
          b.hopT = rand(0.6, 3);
          b.heading += rand(-1.2, 1.2);
          b.pos.x += Math.sin(b.heading) * 0.06;
          b.pos.z += Math.cos(b.heading) * 0.06;
          if (b.pos.distanceTo(b.home) > 1.2) b.heading = Math.atan2(b.home.x - b.pos.x, b.home.z - b.pos.z);
        }
        b.pos.y = LAND_Y + 0.03 + Math.max(0, Math.sin(b.hopT * 10)) * 0.015;
        aFlap.setXY(b.i, 0, 0);
        b.bank = 0;
      } else {
        b.t += dt;
        const k = b.t / b.flyDur;
        const lift = Math.sin(Math.min(1, k) * Math.PI);
        b.flyA += dt * 1.4;
        const tx = b.home.x + Math.cos(b.flyA) * b.flyR * lift, tz = b.home.z + Math.sin(b.flyA) * b.flyR * lift;
        const ty = LAND_Y + 0.03 + b.flyH * lift;
        b.heading = Math.atan2(tx - b.pos.x, tz - b.pos.z) || b.heading;
        b.pos.set(tx, ty, tz);
        aFlap.setXY(b.i, 1.1, 22);
        b.bank = -0.4;
        if (k >= 1) { b.state = 'ground'; b.pos.copy(b.home); }
      }
    }
    // flocks
    for (let k = flocks.length - 1; k >= 0; k--) {
      const f = flocks[k];
      f.life += dt;
      f.pos.addScaledVector(f.dir, f.speed * dt);
      f.pos.x += U.uWindDir.value.x * wind * dt;
      f.pos.z += U.uWindDir.value.y * wind * dt;
      const yaw = Math.atan2(f.dir.x, f.dir.z);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
      for (const b of f.members) {
        pos.copy(b.off).applyQuaternion(q);
        b.pos.copy(f.pos).add(pos);
        b.pos.y += Math.sin(t * 1.3 + b.jit) * 0.12;
        b.pos.x += Math.sin(t * 0.9 + b.jit * 2) * 0.1;
        b.heading = yaw;
        b.bank = Math.sin(t * 0.8 + f.wobble) * 0.15;
        aFlap.setXY(b.i, Math.sin(t * 0.6 + b.jit) > -0.2 ? 0.8 : 0.1, 11);
      }
      if (f.life > 30 || Math.abs(f.pos.x) > 46 || Math.abs(f.pos.z) > 46) {
        for (const b of f.members) { b.active = false; free.push(b); }
        flocks.splice(k, 1);
      }
    }
    for (const b of birds) {
      if (!b.active) {
        mesh.setMatrixAt(b.i, m4.makeScale(0, 0, 0));
        continue;
      }
      e.set(0, b.heading, b.bank || 0, 'YXZ');
      q.setFromEuler(e);
      sc.setScalar(b.scale);
      mesh.setMatrixAt(b.i, m4.compose(b.pos, q, sc));
    }
    mesh.instanceMatrix.needsUpdate = true;
    aFlap.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }

  return { update, spawnFlock, scatterPigeons, pigeonHome };
}

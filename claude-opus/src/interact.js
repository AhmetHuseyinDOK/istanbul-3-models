// Hover + click on the miniature: landmarks pop and glow, buildings hop, cars honk,
// water ripples, plazas draw a curious crowd, pigeons scatter.
import * as THREE from 'three';
import { LAND_Y } from './geo.js';
import { events, glowTexture, rand, pick, damp } from './util.js';

const PEOPLE_LABELS = [
  ['Simitçi', 'Simit seller'], ['Turist', 'Tourist with a map'], ['Çaycı', 'Tea runner'], ['Öğrenci', 'Student'],
  ['Balıkçı', 'Fisherman'], ['Yolcu', 'Commuter'], ['Kestaneci', 'Roasted chestnut seller'], ['Kedi sever', 'Feeds the street cats'],
];

export function buildInteraction({ renderer, camera, scene, landmarks, city, traffic, people, boats, birds, tram, tooltip }) {
  const ray = new THREE.Raycaster();
  const ptr = new THREE.Vector2(-9, -9);
  let hasPtr = false, dirty = false;
  const el = renderer.domElement;

  // halo ring on the ground under the hovered thing
  const halo = new THREE.Mesh(
    new THREE.RingGeometry(0.82, 1, 48).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xfff2c6, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  halo.renderOrder = 6;
  scene.add(halo);
  const haloGlow = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: glowTexture(), color: 0xffe9b0, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  haloGlow.renderOrder = 6;
  scene.add(haloGlow);

  const groups = [...landmarks, tram.group, ...boats.boats.map((b) => b.group)];
  const inst = [city.buildings, ...traffic.meshes, ...people.meshes];
  const ground = [];
  scene.traverse((o) => { if (o.userData.ground) ground.push(o); });
  // cheap flat proxy for the (finely tessellated) water surface
  const waterProxy = new THREE.Mesh(new THREE.PlaneGeometry(60, 60).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial());
  waterProxy.position.y = 0.22;
  waterProxy.userData.water = true;
  waterProxy.updateMatrixWorld();
  ground.push(waterProxy);

  let hover = null; // { kind, group?, mesh?, id?, label }
  const bounce = new Map(); // group -> {v, x}
  const hops = new Map(); // building index -> t

  function rootLandmark(o) {
    while (o) {
      if (o.userData.landmark) return o;
      o = o.parent;
    }
    return null;
  }

  function pickAt() {
    ray.setFromCamera(ptr, camera);
    const hits = ray.intersectObjects([...groups.filter((g) => g.visible), ...inst, ...ground], true);
    for (const h of hits) {
      if (!Number.isFinite(h.distance)) continue; // zero-scaled (hidden) instances
      const g = rootLandmark(h.object);
      if (g) return { kind: g.userData.boat ? 'boat' : 'landmark', group: g, point: h.point, label: g.userData.landmark };
      if (h.object === city.buildings) {
        const b = city.buildings.userData.buildings[h.instanceId];
        return { kind: 'building', mesh: h.object, id: h.instanceId, b, point: h.point, label: { name: b.yali ? 'Yalı' : pick(['Apartman', 'Konak', 'Ev']) , sub: b.yali ? 'Waterfront mansion' : `${Math.max(2, Math.round(b.h / 0.34))} floors` } };
      }
      if (traffic.meshes.includes(h.object)) {
        const v = traffic.hit(h.object, h.instanceId);
        if (v) return { kind: 'car', v, point: h.point, label: v.bus ? { name: 'İETT Otobüsü', sub: 'City bus' } : v.taxi ? { name: 'Taksi', sub: 'Yellow cab' } : { name: 'Araba', sub: 'Car' } };
      }
      if (people.meshes.includes(h.object)) {
        const l = PEOPLE_LABELS[h.instanceId % PEOPLE_LABELS.length];
        return { kind: 'person', id: h.instanceId, point: h.point, label: { name: l[0], sub: l[1] } };
      }
      if (h.object.userData.water) return { kind: 'water', point: h.point };
      if (h.object.userData.ground) return { kind: 'ground', point: h.point };
    }
    return null;
  }

  const tipEl = tooltip;
  function showTip(label, cx, cy) {
    if (!label) { tipEl.classList.remove('on'); return; }
    tipEl.innerHTML = `<b>${label.name}</b>${label.sub ? `<span>${label.sub}</span>` : ''}`;
    tipEl.style.transform = `translate(${cx}px, ${cy}px)`;
    tipEl.classList.add('on');
  }

  let clientX = 0, clientY = 0;
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    clientX = e.clientX - r.left;
    clientY = e.clientY - r.top;
    hasPtr = true;
    dirty = true;
  });
  el.addEventListener('pointerleave', () => { hasPtr = false; dirty = true; });

  let down = null;
  el.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  el.addEventListener('pointerup', (e) => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    const quick = performance.now() - down.t < 450;
    down = null;
    if (moved > 6 || !quick) return;
    const r = el.getBoundingClientRect();
    ptr.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    click(pickAt());
  });

  function kick(g, amount = 0.06) {
    const s = bounce.get(g) || { v: 0, x: 0 };
    s.v += amount * 6;
    bounce.set(g, s);
  }

  function click(h) {
    if (!h) return;
    const p = h.point;
    if (h.kind === 'landmark') {
      const g = h.group;
      const name = g.userData.landmark.name;
      kick(g, 0.08);
      events.emit('landmark:click', { position: p.clone(), name });
      if (g.userData.courtyard) people.gather(g.userData.courtyard.x, g.userData.courtyard.z, 16, 14, name);
      else if (/Galata Kulesi|Kız Kulesi|Kulesi/.test(name)) birds.spawnFlock();
      else people.gather(p.x, p.z, 10, 10, name);
      if (/Yeni Cami/.test(name)) birds.scatterPigeons(birds.pigeonHome.x, birds.pigeonHome.z);
      if (g.userData.led) g.userData.ledShow = 6; // bridge light show
      if (g.userData.lantern) g.userData.flash = 3;
    } else if (h.kind === 'boat') {
      kick(h.group, 0.1);
      boats.poke(h.group.userData.boat);
    } else if (h.kind === 'building') {
      hops.set(h.id, 0);
      events.emit('building:knock', { position: p.clone() });
    } else if (h.kind === 'car') {
      h.v.hop = 1;
      events.emit(h.v.taxi ? 'taxi:honk' : 'car:honk', { position: h.v.pos.clone() });
    } else if (h.kind === 'water') {
      boats.ripple(p.x, p.z);
    } else if (h.kind === 'ground' || h.kind === 'person') {
      if (!birds.scatterPigeons(p.x, p.z)) people.gather(p.x, p.z, 8, 9, 'curious crowd');
    }
  }

  const m4 = new THREE.Matrix4(), v = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  const box = new THREE.Box3(), size = new THREE.Vector3(), ctr = new THREE.Vector3();
  let haloTarget = 0, lastHoverBuilding = -1;

  function setBuildingLift(i, lift, tint) {
    const b = city.buildings.userData.buildings[i];
    b.matrix.decompose(v, q, s);
    v.y += lift;
    s.y *= 1 + lift * 0.4;
    city.buildings.setMatrixAt(i, m4.compose(v, q, s));
    city.buildings.instanceMatrix.needsUpdate = true;
    if (b.roofIndex !== undefined) {
      city.roofs.getMatrixAt(b.roofIndex, m4);
      m4.decompose(v, q, s);
      v.y = LAND_Y + b.h * (1 + lift * 0.4) + lift;
      city.roofs.setMatrixAt(b.roofIndex, m4.compose(v, q, s));
      city.roofs.instanceMatrix.needsUpdate = true;
    }
    const c = b.color.clone();
    if (tint) c.lerp(new THREE.Color(0xffffff), 0.25);
    city.buildings.setColorAt(i, c);
    city.buildings.instanceColor.needsUpdate = true;
  }

  function update(dt, t) {
    if (dirty && hasPtr) {
      dirty = false;
      const h = pickAt();
      const prevB = lastHoverBuilding;
      hover = h && h.kind !== 'ground' && h.kind !== 'water' ? h : null;
      el.style.cursor = h && h.kind !== 'ground' ? 'pointer' : 'grab';
      lastHoverBuilding = hover?.kind === 'building' ? hover.id : -1;
      if (prevB !== lastHoverBuilding && prevB >= 0 && !hops.has(prevB)) setBuildingLift(prevB, 0, false);
      if (hover && hover.kind === 'landmark' && hover !== h) kick(hover.group, 0.02);
      showTip(hover?.label, clientX, clientY);
    } else if (!hasPtr && hover) {
      if (lastHoverBuilding >= 0 && !hops.has(lastHoverBuilding)) setBuildingLift(lastHoverBuilding, 0, false);
      lastHoverBuilding = -1;
      hover = null;
      showTip(null);
    }
    // halo
    haloTarget = 0;
    if (hover) {
      if (hover.group) {
        box.setFromObject(hover.group);
        box.getSize(size);
        box.getCenter(ctr);
        const r = Math.min(4.5, Math.max(size.x, size.z) * 0.55 + 0.2);
        halo.scale.setScalar(r);
        haloGlow.scale.setScalar(r * 1.1);
        const y = hover.kind === 'boat' ? 0.27 : Math.max(LAND_Y + 0.05, box.min.y + 0.05);
        halo.position.set(ctr.x, y, ctr.z);
        haloGlow.position.copy(halo.position);
        haloTarget = 1;
      } else if (hover.kind === 'car') {
        halo.scale.setScalar(0.55);
        haloGlow.scale.setScalar(0.6);
        halo.position.set(hover.v.pos.x, hover.v.pos.y + 0.03, hover.v.pos.z);
        haloGlow.position.copy(halo.position);
        haloTarget = 1;
      } else if (hover.kind === 'building') {
        const b = hover.b;
        halo.scale.setScalar(Math.max(b.w, b.d) * 0.8);
        haloGlow.scale.setScalar(Math.max(b.w, b.d) * 0.9);
        halo.position.set(b.x, LAND_Y + 0.04, b.z);
        haloGlow.position.copy(halo.position);
        haloTarget = 1;
      }
    }
    const pulse = 0.75 + 0.25 * Math.sin(t * 5);
    halo.material.opacity = damp(halo.material.opacity, haloTarget * 0.8 * pulse, 10, dt);
    haloGlow.material.opacity = damp(haloGlow.material.opacity, haloTarget * 0.45, 10, dt);

    // hovered building lifts a touch
    if (lastHoverBuilding >= 0 && !hops.has(lastHoverBuilding)) setBuildingLift(lastHoverBuilding, 0.06, true);
    // clicked buildings hop
    for (const [i, h] of hops) {
      const nt = h + dt * 2.2;
      if (nt >= 1) { hops.delete(i); setBuildingLift(i, i === lastHoverBuilding ? 0.06 : 0, i === lastHoverBuilding); continue; }
      hops.set(i, nt);
      setBuildingLift(i, Math.sin(nt * Math.PI) * 0.35 * (1 - nt * 0.3), true);
    }
    // spring bounce for landmark groups (scaled about their base)
    for (const [g, sp] of bounce) {
      const hovered = hover && hover.group === g;
      const target = hovered ? 0.035 : 0;
      sp.v += (target - sp.x) * 120 * dt;
      sp.v *= Math.exp(-9 * dt);
      sp.x += sp.v * dt;
      if (!g.userData.noScale && g.position.lengthSq() > 0) g.scale.setScalar(1 + sp.x);
      if (!hovered && Math.abs(sp.x) < 1e-4 && Math.abs(sp.v) < 1e-3) { g.scale.setScalar(1); bounce.delete(g); }
    }
    if (hover && hover.group && !bounce.has(hover.group)) bounce.set(hover.group, { v: 0.3, x: 0 });
  }

  return { update, pick: (nx, ny) => { ptr.set(nx, ny); const h = pickAt(); return h && { kind: h.kind, label: h.label, point: h.point }; } };
}

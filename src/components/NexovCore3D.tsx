import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CAPABILITIES_DATA } from '../data/portfolioData';

interface NexovCore3DProps {
  onNodeSelect: (nodeId: string) => void;
}

export const NexovCore3D: React.FC<NexovCore3DProps> = ({ onNodeSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    /* ── Scene ─────────────────────────────────────────────── */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      200
    );
    camera.position.set(0, 0, isMobile ? 10 : 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    /* ── Studio Lighting ───────────────────────────────────── */
    scene.add(new THREE.AmbientLight(0xc7d2fe, 2.5));

    const keyLight = new THREE.DirectionalLight(0xffffff, 5.0);
    keyLight.position.set(5, 8, 8);
    scene.add(keyLight);

    const indigoFill = new THREE.PointLight(0x4f46e5, 8, 30);
    indigoFill.position.set(-5, -3, 5);
    scene.add(indigoFill);

    const violetRim = new THREE.PointLight(0x7c3aed, 5, 22);
    violetRim.position.set(4, -5, -4);
    scene.add(violetRim);

    /* ── Core Group ────────────────────────────────────────── */
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    /* ── Main Sphere — deep metallic indigo ── */
    const sphereGeo = new THREE.SphereGeometry(1.2, 128, 128);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0x3730a3,
      metalness: 0.95,
      roughness: 0.05,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.5,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    coreGroup.add(sphereMesh);

    /* ── Outer glow sphere (transparent) ── */
    const outerGlowGeo = new THREE.SphereGeometry(1.55, 32, 32);
    const outerGlowMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.07,
      side: THREE.BackSide,
    });
    coreGroup.add(new THREE.Mesh(outerGlowGeo, outerGlowMat));

    /* ── Orbit Rings — thin, glowing, line-based ── */
    // Using LineLoop for hair-thin rings that actually look good on light bg
    const makeLineRing = (radius: number, color: number, rx: number, ry: number, rz: number, segments = 128) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.65 });
      const ring = new THREE.LineLoop(geo, mat);
      ring.rotation.x = rx;
      ring.rotation.y = ry;
      ring.rotation.z = rz;
      return ring;
    };

    const ring1 = makeLineRing(2.4,  0x6366f1, Math.PI / 2.5, 0,            0.3);
    const ring2 = makeLineRing(2.85, 0x7c3aed, Math.PI / 6,   Math.PI / 5,  0);
    const ring3 = makeLineRing(3.2,  0x0ea5e9, Math.PI / 4,   Math.PI / 3,  0.2);
    coreGroup.add(ring1, ring2, ring3);

    /* ── Capability Nodes ── */
    const nodeColors = [0x4f46e5, 0x7c3aed, 0x0ea5e9, 0xec4899, 0x06b6d4, 0xa855f7];
    const nodeMeshes: { mesh: THREE.Mesh; halo: THREE.Mesh; id: string; angle: number; radius: number }[] = [];

    CAPABILITIES_DATA.forEach((cap, idx) => {
      const color = nodeColors[idx % nodeColors.length];
      const angle = (idx / CAPABILITIES_DATA.length) * Math.PI * 2;
      const r = 3.0;

      const nodeGeo = new THREE.OctahedronGeometry(0.22, 0);
      const nodeMat = new THREE.MeshPhysicalMaterial({
        color,
        metalness: 1.0,
        roughness: 0.0,
        emissive: color,
        emissiveIntensity: 0.6,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.userData = { id: cap.id, name: cap.name };
      nodeMesh.position.set(Math.cos(angle) * r, Math.sin(angle) * r, 0);

      // Soft halo
      const haloGeo = new THREE.SphereGeometry(0.38, 12, 12);
      const haloMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.10,
        side: THREE.BackSide,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(nodeMesh.position);

      coreGroup.add(nodeMesh, halo);
      nodeMeshes.push({ mesh: nodeMesh, halo, id: cap.id, angle, radius: r });
    });

    /* ── Spokes: core → each node ── */
    nodeMeshes.forEach(n => {
      const pts = [new THREE.Vector3(0, 0, 0), n.mesh.position.clone()];
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: 0xa5b4fc, transparent: true, opacity: 0.15 });
      coreGroup.add(new THREE.Line(geo, mat));
    });

    /* ── Particle field ── */
    const pCount = isMobile ? 250 : 600;
    const pPos = new Float32Array(pCount * 3);
    const pCol = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const rr = 3.8 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pPos[i * 3]     = rr * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = rr * Math.sin(phi) * Math.sin(theta);
      pPos[i * 3 + 2] = rr * Math.cos(phi);
      const t = Math.random();
      if (t < 0.45)      { pCol[i*3]=0.31; pCol[i*3+1]=0.27; pCol[i*3+2]=0.90; }
      else if (t < 0.75) { pCol[i*3]=0.49; pCol[i*3+1]=0.23; pCol[i*3+2]=0.93; }
      else               { pCol[i*3]=0.06; pCol[i*3+1]=0.65; pCol[i*3+2]=0.91; }
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute('color',    new THREE.BufferAttribute(pCol, 3));
    scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
      size: 0.045,
      transparent: true,
      opacity: 0.5,
      vertexColors: true,
    })));

    /* ── Interaction ── */
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);
    let hoveredId: string | null = null;
    let mx = 0, my = 0;

    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      mx = mouse.x; my = mouse.y;
    };
    const onClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(nodeMeshes.map(n => n.mesh));
      if (hits.length > 0) {
        const id = (hits[0].object as THREE.Mesh).userData.id;
        if (id) onNodeSelect(id);
      }
    };

    const domEl = containerRef.current;
    domEl.addEventListener('mousemove', onMove);
    domEl.addEventListener('click', onClick);

    /* ── Animation ── */
    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Camera parallax
        camera.position.x += (mx * 0.8 - camera.position.x) * 0.03;
        camera.position.y += (my * 0.6 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);

        // Core spin
        coreGroup.rotation.y = t * 0.10;
        coreGroup.rotation.x = Math.sin(t * 0.06) * 0.07;

        // Sphere breathe
        const breathe = 1 + Math.sin(t * 2.2) * 0.04;
        sphereMesh.scale.setScalar(breathe);
        sphereMat.emissiveIntensity = 0.4 + Math.sin(t * 2) * 0.2;

        // Rings independent rotation
        ring1.rotation.z += 0.003;
        ring2.rotation.z -= 0.002;
        ring3.rotation.y += 0.0015;

        // Orbit nodes
        nodeMeshes.forEach((n, idx) => {
          const speed = 0.18 + idx * 0.015;
          const a = n.angle + t * speed;
          n.mesh.position.set(
            Math.cos(a) * n.radius,
            Math.sin(a) * n.radius,
            Math.sin(a * 1.3 + idx) * 0.6
          );
          n.mesh.rotation.y += 0.02;
          n.mesh.rotation.x += 0.012;
          n.halo.position.copy(n.mesh.position);
          n.halo.scale.setScalar(1 + Math.sin(t * 2.5 + idx) * 0.15);
        });

        // Pulse lights
        indigoFill.intensity = 7 + Math.sin(t * 1.2) * 1.5;
        violetRim.intensity  = 4 + Math.sin(t * 0.9 + 1) * 1.0;
      }

      // Hover
      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(nodeMeshes.map(n => n.mesh));
      const curHover = hits.length > 0 ? (hits[0].object as THREE.Mesh).userData.id : null;
      if (curHover !== hoveredId) {
        hoveredId = curHover;
        document.body.style.cursor = curHover ? 'pointer' : 'default';
      }

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      domEl.removeEventListener('mousemove', onMove);
      domEl.removeEventListener('click', onClick);
      if (renderer.domElement && domEl.contains(renderer.domElement)) {
        domEl.removeChild(renderer.domElement);
      }
      renderer.dispose();
      document.body.style.cursor = 'default';
    };
  }, [onNodeSelect]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[640px] cursor-grab active:cursor-grabbing select-none"
    >
    </div>
  );
};

'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// ─── Lat/Lng to 3D point on a sphere of radius r ────────────────────────────
function latLngToVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  );
}

// ─── Glowing connection arc between two points on the globe ──────────────────
function ConnectionArc({
  from, to, color = '#3B82F6', segments = 60
}: {
  from: [number, number]; to: [number, number]; color?: string; segments?: number;
}) {
  const ref = useRef<THREE.Line>(null!);

  const points = useMemo(() => {
    const R = 1.02;
    const p1 = latLngToVec3(from[0], from[1], R);
    const p2 = latLngToVec3(to[0], to[1], R);
    const mid = p1.clone().add(p2).normalize().multiplyScalar(R * 1.6);
    const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
    return curve.getPoints(segments);
  }, [from, to, segments]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  useFrame(({ clock }) => {
    if (ref.current?.material) {
      (ref.current.material as THREE.LineBasicMaterial).opacity =
        0.4 + 0.3 * Math.sin(clock.getElapsedTime() * 1.5);
    }
  });

  return (
    <primitive
      ref={ref}
      object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.6, linewidth: 1 }))}
    />
  );
}

// ─── Pulsing dot on the globe surface ────────────────────────────────────────
function LocationDot({ lat, lng, color = '#3B82F6' }: { lat: number; lng: number; color?: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  const pos = useMemo(() => latLngToVec3(lat, lng, 1.03), [lat, lng]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const s = 1 + 0.4 * Math.sin(clock.getElapsedTime() * 2);
      ref.current.scale.setScalar(s);
    }
  });

  return (
    <mesh ref={ref} position={pos}>
      <sphereGeometry args={[0.022, 12, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  );
}

// ─── Orbiting particle ring ───────────────────────────────────────────────────
function ParticleRing({ count = 400, radius = 1.5 }: { count?: number; radius?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const pos: number[] = [];
    const col: number[] = [];
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius + (Math.random() - 0.5) * 0.3;
      pos.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      );
      // Blueish white
      const t = Math.random();
      col.push(0.4 + t * 0.6, 0.5 + t * 0.5, 1);
    }
    return { positions: new Float32Array(pos), colors: new Float32Array(col) };
  }, [count, radius]);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.005} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

// ─── The main globe mesh ──────────────────────────────────────────────────────
function Globe() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) meshRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    if (wireRef.current) wireRef.current.rotation.y = clock.getElapsedTime() * 0.08;
  });

  return (
    <group>
      {/* Main globe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0B2A4A"
          roughness={0.8}
          metalness={0.2}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={wireRef}>
        <sphereGeometry args={[1.001, 32, 32]} />
        <meshBasicMaterial color="#1E4A8A" wireframe transparent opacity={0.12} />
      </mesh>

      {/* Outer glow shell */}
      <mesh>
        <sphereGeometry args={[1.06, 32, 32]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>

      {/* Australia → Manila arc (amber) */}
      <ConnectionArc
        from={[-25.0, 133.0]}   // Australia (centre)
        to={[14.5, 121.0]}      // Manila, Philippines
        color="#D97706"
        segments={80}
      />
      {/* Return arc (blue, offset) */}
      <ConnectionArc
        from={[14.5, 121.0]}
        to={[-33.8, 151.2]}     // Sydney
        color="#3B82F6"
        segments={80}
      />

      {/* Location dots */}
      <LocationDot lat={-25.0} lng={133.0} color="#D97706" />  {/* Australia */}
      <LocationDot lat={-33.8} lng={151.2} color="#D97706" />  {/* Sydney */}
      <LocationDot lat={14.5}  lng={121.0} color="#3B82F6" />  {/* Manila */}
    </group>
  );
}

// ─── Scene wrapper ────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0.3} fade speed={0.5} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 3, 5]} intensity={1.5} color="#4A90D9" />
      <pointLight position={[-5, -3, -5]} intensity={0.5} color="#D97706" />
      <directionalLight position={[2, 4, 2]} intensity={0.8} color="#ffffff" />

      <Float speed={1} rotationIntensity={0.15} floatIntensity={0.3}>
        <Globe />
      </Float>

      <ParticleRing count={500} radius={1.55} />
    </>
  );
}

// ─── Exported canvas ──────────────────────────────────────────────────────────
export default function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      <Scene />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI * 0.25}
        maxPolarAngle={Math.PI * 0.75}
      />
    </Canvas>
  );
}

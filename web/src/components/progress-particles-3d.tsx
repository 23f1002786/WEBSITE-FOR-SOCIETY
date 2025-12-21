"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function ProgressParticles() {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  // Create particle system showing upward progress
  const { positions, particleData } = useMemo(() => {
    const pts: number[] = [];
    const data: { phase: number; speed: number; color: string }[] = [];
    const particleCount = 25;
    const colors = ["#D4C8E8", "#B8E0E1", "#F5D4D8"];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1.5;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = -2 + Math.random() * 0.5;

      pts.push(x, y, z);

      data.push({
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    return { positions: new Float32Array(pts), particleData: data };
  }, []);

  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    if (!groupRef.current || prefersReducedMotion) return;
    groupRef.current.rotation.y += 0.0005;

    // Update each particle's position
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const particle = particleData[i];
      const time = state.clock.elapsedTime;
      const cycleTime = 4; // Seconds for full cycle

      const t = ((time * particle.speed) / cycleTime) % 1;
      mesh.position.y = -2 + t * 4;
      mesh.position.x = Math.cos(particle.phase + time * 0.3) * (1.5 - t * 1.5);
      mesh.position.z = Math.sin(particle.phase + time * 0.3) * (1.5 - t * 1.5);

      // Scale increases as particle ascends
      const scale = 0.05 + t * 0.15;
      mesh.scale.set(scale, scale, scale);

      // Opacity decreases at top
      if ((mesh.material as THREE.Material).opacity !== undefined) {
        (mesh.material as any).opacity = Math.max(0, 1 - (t - 0.8) * 5);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {particleData.map((particle, i) => (
        <mesh
          key={i}
          ref={(el) => {
            meshRefs.current[i] = el;
          }}
          position={[
            Math.cos(particle.phase) * 1.5,
            -2,
            Math.sin(particle.phase) * 1.5,
          ]}
        >
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={particle.color}
            metalness={0.6}
            roughness={0.4}
            emissive={particle.color}
            emissiveIntensity={0.3}
            transparent
            opacity={1}
          />
        </mesh>
      ))}

      {/* Central ascending column for visual anchor */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 4, 8]} />
        <meshStandardMaterial
          color="#c9a862"
          metalness={0.5}
          roughness={0.5}
          emissive="#c9a862"
          emissiveIntensity={0.2}
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

export function ProgressParticlesScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={0.9} color="#D4C8E8" />
      <pointLight position={[-3, 1, -3]} intensity={0.7} color="#B8E0E1" />
      <ProgressParticles />
    </Canvas>
  );
}

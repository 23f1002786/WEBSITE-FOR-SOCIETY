"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function GrowthHelix() {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!groupRef.current || prefersReducedMotion) return;
    groupRef.current.rotation.x += 0.002;
    groupRef.current.rotation.z += 0.003;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  return (
    <group ref={groupRef}>
      {/* Spiral spheres for growth markers */}
      {Array.from({ length: 12 }).map((_, i) => {
        const t = i / 11;
        const angle = t * Math.PI * 2 * 3;
        const height = (t - 0.5) * 3;
        const radius = 1 + t * 0.3;

        const x = Math.cos(angle) * radius;
        const y = height;
        const z = Math.sin(angle) * radius;

        const colorIdx = Math.floor(t * 3) % 3;
        const colors = [
          "#D4C8E8", // purple pastel
          "#B8E0E1", // teal pastel
          "#F5D4D8", // coral pastel
        ];

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.08 + t * 0.12, 12, 12]} />
            <meshStandardMaterial
              color={colors[colorIdx]}
              metalness={0.7}
              roughness={0.3}
              emissive={colors[colorIdx]}
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function GrowthHelixScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 2, 4]} intensity={0.8} color="#D4C8E8" />
      <pointLight position={[-3, -2, 3]} intensity={0.6} color="#B8E0E1" />
      <GrowthHelix />
    </Canvas>
  );
}

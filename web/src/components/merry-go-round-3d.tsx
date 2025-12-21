"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function MerryGoRound() {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame(() => {
    if (!groupRef.current || prefersReducedMotion) return;
    groupRef.current.rotation.y += 0.008;
  });

  const horses = 6;
  const radius = 2;

  return (
    <group ref={groupRef}>
      {/* Central pole */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 4, 16]} />
        <meshStandardMaterial
          color="#D4C8E8"
          metalness={0.8}
          roughness={0.2}
          emissive="#D4C8E8"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Top canopy */}
      <mesh position={[0, 2.2, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[2.5, 0.8, 8, 1, false]} />
        <meshStandardMaterial
          color="#B8E0E1"
          metalness={0.6}
          roughness={0.3}
          emissive="#D4EFF0"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Horses/seats around the carousel */}
      {Array.from({ length: horses }).map((_, i) => {
        const angle = (i / horses) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(angle * 2) * 0.3;

        return (
          <group key={i} position={[x, y, z]}>
            {/* Pole connecting to horse */}
            <mesh position={[0, 1, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 2, 8]} />
              <meshStandardMaterial
                color="#F5D4D8"
                metalness={0.5}
                roughness={0.4}
              />
            </mesh>

            {/* Horse/seat (simplified as rounded box) */}
            <mesh position={[0, 0, 0]} rotation={[0, angle + Math.PI / 2, 0]}>
              <boxGeometry args={[0.4, 0.6, 0.3]} />
              <meshStandardMaterial
                color={i % 3 === 0 ? "#D4C8E8" : i % 3 === 1 ? "#B8E0E1" : "#F5D4D8"}
                metalness={0.7}
                roughness={0.3}
                emissive={i % 3 === 0 ? "#E8DDF5" : i % 3 === 1 ? "#D4EFF0" : "#F5D4D8"}
                emissiveIntensity={0.25}
              />
            </mesh>

            {/* Decorative spheres on top of each horse */}
            <mesh position={[0, 0.5, 0]}>
              <sphereGeometry args={[0.08, 12, 12]} />
              <meshStandardMaterial
                color="#F5D4D8"
                metalness={0.9}
                roughness={0.1}
                emissive="#F5D4D8"
                emissiveIntensity={0.4}
              />
            </mesh>
          </group>
        );
      })}

      {/* Base platform */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[2.3, 2.3, 0.2, 24]} />
        <meshStandardMaterial
          color="#8c8279"
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}

export function MerryGoRoundScene() {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#c9a862" />
      <pointLight position={[-5, 2, -5]} intensity={0.6} color="#8b7bb5" />
      <MerryGoRound />
    </Canvas>
  );
}

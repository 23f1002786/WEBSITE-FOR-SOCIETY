"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!meshRef.current || prefersReducedMotion) return;
    meshRef.current.rotation.x += 0.008;
    meshRef.current.rotation.y += 0.012;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 3]} />
      <meshPhongMaterial color="#F5D4D8" shininess={100} />
    </mesh>
  );
}

function PulsingDodecahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!meshRef.current || prefersReducedMotion) return;
    meshRef.current.rotation.x -= 0.006;
    meshRef.current.rotation.y += 0.008;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <dodecahedronGeometry args={[1]} />
      <meshPhongMaterial color="#D4C8E8" shininess={80} />
    </mesh>
  );
}

export function FloatingGeometryScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={0.9} />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#c9a862" />

      {!prefersReducedMotion && (
        <>
          <FloatingIcosahedron />
          <PulsingDodecahedron />
        </>
      )}
    </Canvas>
  );
}

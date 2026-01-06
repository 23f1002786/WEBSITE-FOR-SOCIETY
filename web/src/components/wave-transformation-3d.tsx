"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function WaveTransformation() {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  // Create wave grid
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 12, 80, 50);
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || prefersReducedMotion) return;

    const time = state.clock.elapsedTime;
    const positions = meshRef.current.geometry.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);

      // Wave motion
      const waveX = Math.sin(x * 0.5 + time * 0.8) * 0.3;
      const waveY = Math.cos(y * 0.5 + time * 0.8) * 0.3;
      
      // Transform into a meaningful shape (heart-like or flower-like) at peak
      const cycle = (time % 8) / 8; // 8-second cycle
      
      let z = waveX + waveY;
      
      if (cycle > 0.25 && cycle < 0.5) {
        // Transform into heart/flower shape
        const transformFactor = (cycle - 0.25) * 4; // 0 to 1
        const distance = Math.sqrt(x * x + y * y);
        const angle = Math.atan2(y, x);
        
        // Heart-like shape
        const heartShape = Math.pow(Math.sin(angle), 3) * 2;
        z = z * (1 - transformFactor) + heartShape * transformFactor * 0.5;
      } else if (cycle >= 0.5 && cycle < 0.75) {
        // Hold the shape
        const angle = Math.atan2(y, x);
        const heartShape = Math.pow(Math.sin(angle), 3) * 2;
        z = heartShape * 0.5;
      } else if (cycle >= 0.75) {
        // Wash away
        const washFactor = (cycle - 0.75) * 4; // 0 to 1
        z = z * (1 - washFactor * 0.5);
      }

      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
    meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 6, 0, 0]}>
      <meshStandardMaterial
        color="#D4C8E8"
        metalness={0.3}
        roughness={0.7}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const prefersReducedMotion = useReducedMotion();

  const { positions, colors } = useMemo(() => {
    const count = 40;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorPalette = [
      { r: 0.831, g: 0.784, b: 0.91 }, // purple pastel #D4C8E8
      { r: 0.722, g: 0.878, b: 0.882 }, // teal pastel #B8E0E1
      { r: 0.961, g: 0.831, b: 0.847 }, // coral pastel #F5D4D8
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current || prefersReducedMotion) return;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          args={[positions, 3]}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          args={[colors, 3]}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.6} />
    </points>
  );
}

export function WaveTransformationScene() {
  return (
    <div className="fixed inset-0 -z-10" style={{ pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#D4C8E8" />
        <pointLight position={[-10, -10, 5]} intensity={0.4} color="#B8E0E1" />
        <WaveTransformation />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}

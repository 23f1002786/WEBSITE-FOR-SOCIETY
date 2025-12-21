"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function CommunityNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  // Generate interconnected nodes in a network pattern
  const nodePositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const nodeCount = 8;
    const radius = 2.5;

    // Create nodes in a circular pattern
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * (radius * 0.6);
      const z = Math.sin(angle * 0.5) * 0.5;
      positions.push([x, y, z]);
    }

    // Add center node
    positions.push([0, 0, 0]);
    return positions;
  }, []);

  useFrame((state) => {
    if (!groupRef.current || prefersReducedMotion) return;
    groupRef.current.rotation.z += 0.0008;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      {Array.from({ length: 8 }).map((_, i) => {
        const next = (i + 1) % 8;
        const start = nodePositions[i];
        const end = nodePositions[next];
        const center = nodePositions[8];

        return (
          <group key={`connections-${i}`}>
            {/* Line to center */}
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  args={[new Float32Array([...start, ...center]), 3]}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#D4C8E8" opacity={0.6} transparent />
            </line>
            {/* Line to next node */}
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  args={[new Float32Array([...start, ...end]), 3]}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#B8E0E1" opacity={0.4} transparent />
            </line>
          </group>
        );
      })}

      {/* Nodes */}
      {Array.from({ length: 9 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = i === 8 ? 0 : 2.5;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * (radius * 0.6);
        const z = Math.sin(angle * 0.5) * 0.5;

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial
              color={i === 8 ? "#F5D4D8" : "#D4E6CC"}
              metalness={0.8}
              roughness={0.2}
              emissive={i === 8 ? "#F5D4D8" : "#D4EFF0"}
              emissiveIntensity={i === 8 ? 0.4 : 0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function CommunityNetworkScene() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#D4C8E8" />
      <pointLight position={[-5, -5, 5]} intensity={0.6} color="#B8E0E1" />
      <CommunityNetwork />
    </Canvas>
  );
}

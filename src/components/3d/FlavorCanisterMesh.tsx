"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CanisterProps {
  color: string;
  flavorName: string;
}

export default function FlavorCanisterMesh({ color, flavorName }: CanisterProps) {
  const meshRef = useRef<THREE.Group>(null);
  const liquidRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.6;
      ringRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={[0, -0.2, 0]}>
      {/* 3D Bottle Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.9, 2.2, 32]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.1}
          transmission={0.4}
          thickness={0.8}
          transparent
          opacity={0.92}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Internal Liquid Core */}
      <mesh ref={liquidRef} position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.78, 0.82, 1.9, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.2}
        />
      </mesh>

      {/* Bottle Shoulder */}
      <mesh position={[0, 1.25, 0]} castShadow>
        <coneGeometry args={[0.85, 0.4, 32]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.2}
          transmission={0.3}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Bottle Neck */}
      <mesh position={[0, 1.55, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.35, 32]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} metalness={0.2} />
      </mesh>

      {/* Premium Medical Cap */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <cylinderGeometry args={[0.38, 0.38, 0.25, 32]} />
        <meshStandardMaterial
          color="#1A6DFF"
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>

      {/* White Medical Branding Label */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.87, 0.92, 1.2, 32, 1, true, 0, Math.PI * 1.3]} />
        <meshStandardMaterial
          color="#FFFFFF"
          roughness={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Orbiting Clean-Label Particle Ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.4, 0.02, 16, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          wireframe
        />
      </mesh>
    </group>
  );
}

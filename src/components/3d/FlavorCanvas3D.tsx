"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, Environment } from "@react-three/drei";
import FlavorCanisterMesh from "./FlavorCanisterMesh";

interface Canvas3DProps {
  activeColor: string;
  activeFlavorName: string;
}

export default function FlavorCanvas3D({ activeColor, activeFlavorName }: Canvas3DProps) {
  return (
    <div className="relative w-full h-[360px] md:h-[420px] rounded-xl overflow-hidden bg-gradient-to-b from-[#0E1320]/80 to-[#080914]/90 border border-white/10 shadow-2xl backdrop-blur-md">
      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 transition-all duration-700 blur-3xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${activeColor} 0%, transparent 70%)`
        }}
      />

      {/* Interactive Canvas HUD */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: activeColor }} />
        <span className="text-xs font-mono tracking-wider uppercase text-white/80">
          3D Specimen // {activeFlavorName}
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 text-[10px] font-mono text-white/40 tracking-wider">
        CLICK & DRAG TO ORBIT // AUTO-STABILIZED
      </div>

      <Canvas
        camera={{ position: [0, 0.5, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-5, -2, -3]} intensity={1.2} color={activeColor} />
        <directionalLight position={[0, 8, 4]} intensity={1.0} castShadow />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
            <FlavorCanisterMesh color={activeColor} flavorName={activeFlavorName} />
          </Float>
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.65}
            scale={6}
            blur={2.5}
            far={4}
            color="#000000"
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 3}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}

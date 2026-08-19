"use client";

import React, { useState } from "react";
import { FLAVOR_SEEDS, BRAND_COLORS } from "@/lib/tokens";
import FlavorCanvas3D from "@/components/3d/FlavorCanvas3D";
import { Copy, Check, Sparkles, CheckCircle2 } from "lucide-react";

export default function ColorEngine() {
  const [selectedFlavor, setSelectedFlavor] = useState(FLAVOR_SEEDS[0]);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <section id="section-colors" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#F27A1A]/10 text-[#F27A1A] border border-[#F27A1A]/30 rounded-[4px]">
          SECTION 03
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          8-Flavor Seed Palette & Interactive 3D Packaging Stage
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 8 Flavor Seed Cards */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white p-6 rounded-[4px] border border-[#ECECEC] shadow-sm">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#171445] font-bold mb-2">
              The 8-Flavor Seed System
            </h3>
            <p className="text-xs text-[#444749] mb-4">
              In the "Kids Deserve Less" design system, color is reserved for flavor identity and positive emotional warmth — never used as noisy wallpaper.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {FLAVOR_SEEDS.map((flavor) => {
                const isSelected = selectedFlavor.id === flavor.id;
                return (
                  <button
                    key={flavor.id}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`p-3 rounded-[4px] text-left transition-all border flex flex-col justify-between h-28 ${
                      isSelected
                        ? "ring-2 ring-[#D11994] border-transparent shadow-md bg-white"
                        : "border-[#ECECEC] bg-[#F9F7F4] hover:bg-white"
                    }`}
                  >
                    <div
                      className="w-full h-8 rounded-[2px] shadow-inner mb-2"
                      style={{ backgroundColor: flavor.hex }}
                    />
                    <div>
                      <span className="text-xs font-bold text-[#171445] block truncate">
                        {flavor.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#767676]">
                        {flavor.hex}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Swatch Detail Box */}
          <div className="bg-white p-6 rounded-[4px] border border-[#ECECEC] shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-[4px] shadow-md shrink-0"
                style={{ backgroundColor: selectedFlavor.hex }}
              />
              <div>
                <h4 className="font-serif font-bold text-[#171445] text-base">{selectedFlavor.name}</h4>
                <p className="text-xs text-[#444749] font-mono">{selectedFlavor.hex} • RGB({selectedFlavor.rgb})</p>
                <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-mono rounded bg-[#3E9B57]/10 text-[#3E9B57] font-bold border border-[#3E9B57]/30">
                  {selectedFlavor.contrast} WCAG Compliant
                </span>
              </div>
            </div>

            <button
              onClick={() => handleCopy(selectedFlavor.hex)}
              className="px-4 py-2 text-xs font-mono bg-[#0E1320] text-white hover:bg-[#171445] rounded-[4px] transition-all flex items-center gap-1.5"
            >
              {copiedHex === selectedFlavor.hex ? (
                <Check className="w-3.5 h-3.5 text-[#3E9B57]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copiedHex === selectedFlavor.hex ? "Copied" : "Copy HEX"}
            </button>
          </div>
        </div>

        {/* Right: 3D Canvas Specimen Stage */}
        <div className="lg:col-span-6 bg-[#0E1320] p-6 rounded-[4px] border border-[#1E2638] shadow-md flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D11994]" />
                <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                  3D WebGL Bottle Specimen
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/50">
                Active: <span className="text-white font-bold">{selectedFlavor.name}</span>
              </span>
            </div>
            <p className="text-xs text-white/60 mb-4">
              Live Three.js physical bottle shader rendering dynamic liquid tint and packaging cap. Drag to rotate in 3D space.
            </p>

            <FlavorCanvas3D activeColor={selectedFlavor.hex} activeFlavorName={selectedFlavor.name} />
          </div>

          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
            <span>Three.js + R3F Engine</span>
            <span>0% Artificial Dyes Liquid Shader</span>
          </div>
        </div>
      </div>
    </section>
  );
}

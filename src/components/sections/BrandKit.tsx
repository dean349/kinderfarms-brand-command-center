"use client";

import React, { useState } from "react";
import { Download, ShieldCheck, Box, Package, Sparkles, Check, Copy } from "lucide-react";

export default function BrandKit() {
  const [copiedSvg, setCopiedSvg] = useState(false);

  const handleCopySvg = () => {
    navigator.clipboard.writeText(`<img src="/images/logos/logo-blue.svg" alt="KinderFarms®" width="220" />`);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2000);
  };

  return (
    <section id="section-brand-kit" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#D11994]/10 text-[#D11994] border border-[#D11994]/30 rounded-[4px]">
          SECTION 04B
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Brand Kit & Two-Vertical Packaging Architecture
        </h2>
      </div>

      {/* Primary Logotype Master Specimen */}
      <div className="bg-white p-8 rounded-[4px] border border-[#ECECEC] shadow-sm mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#ECECEC]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1A6DFF] font-bold block mb-1">
              Official Master Brandmark (2026 Direct Vector)
            </span>
            <h3 className="text-xl font-serif font-bold text-[#171445]">
              KinderFarms® Primary Horizontal Lockup
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySvg}
              className="px-3.5 py-2 text-xs font-mono bg-[#F9F7F4] hover:bg-[#ECECEC] text-[#171445] border border-[#ECECEC] rounded-[4px] transition-all flex items-center gap-1.5 font-bold"
            >
              {copiedSvg ? <Check className="w-3.5 h-3.5 text-[#3E9B57]" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedSvg ? "Snippet Copied" : "Copy HTML"}
            </button>
            <a
              href="/images/logos/logo-blue.svg"
              download="KinderFarms_Master_Logo_Blue.svg"
              className="px-3.5 py-2 text-xs font-mono bg-[#171445] hover:bg-[#0E1320] text-white rounded-[4px] transition-all flex items-center gap-1.5 font-bold shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Download Vector SVG
            </a>
          </div>
        </div>

        {/* Vector Logo Showcase Stage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Porcelain Surface Stage */}
          <div className="p-8 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] flex flex-col items-center justify-center min-h-[160px] relative">
            <img src="/images/logos/logo-blue.svg" alt="KinderFarms Master Logo Blue" className="h-14 max-w-[280px] object-contain" />
            <span className="text-[10px] font-mono text-[#767676] absolute bottom-3 left-4">Surface: Warm Porcelain (#F9F7F4)</span>
          </div>

          {/* Dark Obsidian Surface Stage */}
          <div className="p-8 rounded-[4px] bg-[#0E1320] border border-[#1E2638] flex flex-col items-center justify-center min-h-[160px] relative">
            <img src="/images/logos/logo-blue.svg" alt="KinderFarms Master Logo" className="h-14 max-w-[280px] object-contain brightness-0 invert" />
            <span className="text-[10px] font-mono text-white/50 absolute bottom-3 left-4">Surface: Dark Obsidian (#0E1320) Inverted</span>
          </div>
        </div>
      </div>

      {/* Two-Vertical Architecture Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vertical A: Hydration */}
        <div className="bg-white p-8 rounded-[4px] border border-[#ECECEC] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#1A6DFF]/10 text-[#1A6DFF] rounded-[4px]">
                VERTICAL A
              </span>
              <span className="text-xs font-mono text-[#767676]">Electrolyte Solutions & Powders</span>
            </div>

            <div className="rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] p-6 mb-6 flex flex-col items-center justify-center">
              <img
                src="/images/products/fruit_punch_liquid.jpg"
                alt="KinderFarms Hydration Fruit Punch"
                className="h-48 object-contain drop-shadow-md mb-3"
              />
              <div className="flex items-center gap-2 mt-1">
                <span className="h-2 w-12 rounded-full bg-[#E8416F]" />
                <span className="text-xs font-sans font-bold text-[#171445]">Hydration • Fruit Punch (33.8 FL OZ)</span>
              </div>
            </div>

            <h3 className="text-base font-serif font-bold text-[#171445] mb-2">
              Hydration Packaging Standards
            </h3>
            <ul className="space-y-2 text-xs text-[#444749] mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A6DFF] mt-1.5 shrink-0" />
                <span>8-Flavor Seed color bar anchors flavor identity instantly on shelf.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A6DFF] mt-1.5 shrink-0" />
                <span>Prominent front callouts: <strong>3g Sugar</strong> and <strong>0% Sucralose</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A6DFF] mt-1.5 shrink-0" />
                <span>Instant Absorption Technology (IAT) clinical badge verified.</span>
              </li>
            </ul>
          </div>

          <div className="p-3 bg-[#F9F7F4] rounded-[4px] border border-[#ECECEC] text-[11px] font-mono text-[#767676]">
            Sub-brands (KinderLyte) retired → Unified Master Brand KinderFarms®
          </div>
        </div>

        {/* Vertical B: Medicine & Supplements */}
        <div className="bg-white p-8 rounded-[4px] border border-[#ECECEC] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#3E9B57]/10 text-[#3E9B57] rounded-[4px]">
                VERTICAL B
              </span>
              <span className="text-xs font-mono text-[#767676]">Pain & Fever, Cough & Cold</span>
            </div>

            <div className="rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] p-6 mb-6 flex flex-col items-center justify-center">
              <img
                src="/images/products/infants_pain_fever_cherry.jpg"
                alt="KinderFarms Infants Pain & Fever"
                className="h-48 object-contain drop-shadow-md mb-3"
              />
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#3E9B57]/10 text-[#3E9B57] rounded border border-[#3E9B57]/30">
                  Infants' Pain & Fever • Cherry
                </span>
              </div>
            </div>

            <h3 className="text-base font-serif font-bold text-[#171445] mb-2">
              Medicine Packaging Standards
            </h3>
            <ul className="space-y-2 text-xs text-[#444749] mb-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E9B57] mt-1.5 shrink-0" />
                <span>White porcelain ground with high-contrast active ingredient banner.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E9B57] mt-1.5 shrink-0" />
                <span>Prominent <strong>0% Artificial Dyes</strong> (No Red 40) trust badge.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3E9B57] mt-1.5 shrink-0" />
                <span>Clear flow-restrictor syringe for exact, spill-free pediatric dosing.</span>
              </li>
            </ul>
          </div>

          <div className="p-3 bg-[#F9F7F4] rounded-[4px] border border-[#ECECEC] text-[11px] font-mono text-[#767676]">
            Sub-brands (KinderMed) retired → Unified Master Brand KinderFarms®
          </div>
        </div>
      </div>
    </section>
  );
}

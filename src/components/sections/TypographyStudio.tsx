"use client";

import React, { useState } from "react";
import { Sliders, Type, RotateCcw } from "lucide-react";

export default function TypographyStudio() {
  const [fontSize, setFontSize] = useState(36);
  const [specimenText, setSpecimenText] = useState("Kids Deserve Less. Fewer ingredients, fuller childhoods.");

  return (
    <section id="section-typography" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#8B5CBF]/10 text-[#8B5CBF] border border-[#8B5CBF]/30 rounded-[4px]">
          SECTION 04
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Typography Studio: Tropiline Bold & Montserrat
        </h2>
      </div>

      <div className="bg-white p-8 rounded-[4px] border border-[#ECECEC] shadow-sm space-y-8">
        {/* Type Family Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC]">
            <span className="text-xs font-mono uppercase text-[#D11994] font-bold block mb-1">
              Display & Mission Headlines
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#171445] mb-2">Tropiline Bold (Serif)</h3>
            <p className="text-xs text-[#444749] leading-relaxed mb-4">
              Used for master hero headlines, packaging brand blocks, and emotional storytelling. Conveys timeless warmth, humanity, and approachable credibility.
            </p>
            <div className="p-3 bg-white rounded-[4px] border border-[#ECECEC] text-xs font-mono text-[#767676]">
              font-family: 'Tropiline Bold', 'Playfair Display', serif;
            </div>
          </div>

          <div className="p-6 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC]">
            <span className="text-xs font-mono uppercase text-[#1A6DFF] font-bold block mb-1">
              Primary UI, Body & Nutrition Labels
            </span>
            <h3 className="text-2xl font-sans font-bold text-[#171445] mb-2">Montserrat (Sans-Serif)</h3>
            <p className="text-xs text-[#444749] leading-relaxed mb-4">
              Clean geometric sans-serif used across all digital interfaces, ingredient ledgers, claims, and packaging body copy. Highly readable at small sizes.
            </p>
            <div className="p-3 bg-white rounded-[4px] border border-[#ECECEC] text-xs font-mono text-[#767676]">
              font-family: 'Montserrat', Inter, sans-serif;
            </div>
          </div>
        </div>

        {/* Live Interactive Specimen Sandbox */}
        <div className="p-6 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#171445] uppercase">Live Type Scaler</span>
              <span className="text-xs font-mono text-[#767676]">{fontSize}px</span>
            </div>
            <input
              type="range"
              min="20"
              max="64"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-48 accent-[#D11994] cursor-pointer"
            />
          </div>

          <input
            type="text"
            value={specimenText}
            onChange={(e) => setSpecimenText(e.target.value)}
            className="w-full p-3 rounded-[4px] bg-white border border-[#ECECEC] text-xs font-mono text-[#444749] mb-6 focus:outline-none focus:border-[#1A6DFF]"
          />

          <div className="space-y-6 pt-4 border-t border-[#ECECEC]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#767676] block mb-1">
                Tropiline Bold (Headline Rendering)
              </span>
              <p
                className="font-serif font-bold text-[#171445] leading-tight"
                style={{ fontSize: `${fontSize}px` }}
              >
                {specimenText}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#767676] block mb-1">
                Montserrat (UI & Body Rendering)
              </span>
              <p
                className="font-sans font-semibold text-[#444749] leading-tight"
                style={{ fontSize: `${Math.round(fontSize * 0.75)}px` }}
              >
                {specimenText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

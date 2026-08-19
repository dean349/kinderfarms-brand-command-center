"use client";

import React from "react";
import { CheckCircle2, XCircle, AlertOctagon } from "lucide-react";

export default function BrandGovernance() {
  const dos = [
    "Always use the unified Master Brand mark 'KinderFarms®' on the front of all packaging and digital assets.",
    "Prominently declare what is subtracted (0% Artificial Dyes, 0% Sucralose, 0% Synthetic Parabens).",
    "Pair Tropiline Bold display serif headlines with clean Montserrat/Inter body copy.",
    "Use exact 8-Flavor Seed palette tokens with certified WCAG AAA/AA contrast compliance.",
    "State clinical evidence plainly (WHO/AAP physiological osmolarity and exact acetaminophen milligrams)."
  ];

  const donts = [
    "Never revive retired sub-brand marks (KinderLyte, KinderMed, KinderSprout) as primary architecture.",
    "Never use neon candy-style pharmacy colors that suggest artificial petroleum food dyes.",
    "Never make unsupported organic claims on active OTC pharmaceutical medicine lines.",
    "Never alter the 0.5x cap-height clearspace bounding box on master logotypes.",
    "Never use fear-mongering or panic-inducing medical copy in high-stress moments."
  ];

  return (
    <section id="section-governance" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#3E9B57]/10 text-[#3E9B57] border border-[#3E9B57]/30 rounded-[4px]">
          SECTION 10
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Brand Governance: Mandatory Rules (DOs & DON'Ts)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* DOs */}
        <div className="p-8 rounded-[4px] bg-white border-2 border-[#3E9B57]/30 shadow-sm">
          <div className="flex items-center gap-2 mb-6 text-[#3E9B57] font-bold text-sm uppercase tracking-wider font-mono">
            <CheckCircle2 className="w-5 h-5" />
            Approved Brand Standards (DOs)
          </div>
          <ul className="space-y-4">
            {dos.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-[#444749] leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#3E9B57] mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DONTs */}
        <div className="p-8 rounded-[4px] bg-white border-2 border-[#E8416F]/30 shadow-sm">
          <div className="flex items-center gap-2 mb-6 text-[#E8416F] font-bold text-sm uppercase tracking-wider font-mono">
            <XCircle className="w-5 h-5" />
            Strict Violations (DON'Ts)
          </div>
          <ul className="space-y-4">
            {donts.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-[#444749] leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-[#E8416F] mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

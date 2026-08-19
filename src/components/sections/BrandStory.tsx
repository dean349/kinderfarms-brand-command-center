"use client";

import React, { useState } from "react";
import { Quote, Copy, Check, Heart, ShieldCheck, Star } from "lucide-react";
import { PRESS_QUOTES } from "@/lib/tokens";

export default function BrandStory() {
  const [copied, setCopied] = useState(false);

  const manifestoText = `It started, as so many great ideas do, at 2am with a sick child.
Our founders were parents of young children — living the same sleepless nights, worried fevers, and desperate pharmacy runs every parent knows. When their kids were sick, they reached for the same over-the-counter medicines generations had trusted.
But one night, in the fluorescent glow of a drugstore aisle, they did something that would change everything:
They read the label.
What they found stopped them cold: the very brands America trusted most were packed with artificial dyes (Red 40, Yellow 5, Blue 1), artificial sweeteners like sucralose, and synthetic chemical fillers that had nothing to do with helping a child feel better.
KinderFarms was born from a simple promise: clean, effective health and hydration with zero compromises. Kids deserve less of what doesn't belong, and more of what heals.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(manifestoText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="section-story" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#D11994]/10 text-[#D11994] border border-[#D11994]/30 rounded-[4px]">
          SECTION 01
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          The Founding Story & The 2:00 AM Discovery
        </h2>
      </div>

      {/* Main Narrative & Manifesto Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        {/* Narrative Card */}
        <div className="lg:col-span-7 bg-white p-8 rounded-[4px] border border-[#ECECEC] shadow-sm space-y-4 text-sm text-[#444749] leading-relaxed">
          <h3 className="text-xl font-serif font-bold text-[#171445]">
            "We turned the bottle around, and we couldn't unsee it."
          </h3>
          <p>
            Co-founded by <strong>Jessica Biel</strong> and <strong>Jeremy Adams</strong>, KinderFarms began not in a corporate boardroom, but in a fluorescent-lit pharmacy aisle in the middle of the night.
          </p>
          <p>
            Standing with a feverish child, reading the fine print of leading pediatric pain relievers and electrolyte solutions, they discovered that virtually every trusted household name was loaded with synthetic dyes like Red 40, artificial chemical sweeteners like sucralose, and unnecessary binders.
          </p>
          <p>
            Why should a parent have to choose between clinical efficacy and clean ingredients? Why does children's medicine need to be dyed hot pink or neon blue with petroleum derivatives?
          </p>
          <div className="p-4 rounded-[4px] bg-[#FDF0E4] border-l-4 border-[#F27A1A] text-xs text-[#171445] font-medium">
            <strong>The Core Breakthrough:</strong> Formulating products that deliver 100% evidence-based clinical relief (AAP/WHO electrolyte standards and exact acetaminophen pediatric dosing) while completely subtracting synthetic chemical fillers.
          </div>
        </div>

        {/* Founding Manifesto Card */}
        <div className="lg:col-span-5 bg-[#0E1320] text-white p-8 rounded-[4px] border border-[#1E2638] shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1A6DFF] font-bold">
                The 2:00 AM Manifesto
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-white/10 hover:bg-white/20 text-white rounded-[4px] transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#3E9B57]" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <Quote className="w-8 h-8 text-[#D11994] opacity-50 mb-3" />
            <p className="text-xs text-white/90 font-serif italic leading-relaxed">
              "{manifestoText}"
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
            <span>Jessica Biel & Jeremy Adams</span>
            <span>Co-Founders</span>
          </div>
        </div>
      </div>

      {/* Tier-1 Press Proof & Quotes Strip */}
      <div className="bg-[#F9F7F4] p-8 rounded-[4px] border border-[#ECECEC]">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#171445] font-bold">
            As Featured In Tier-1 Press
          </span>
          <span className="text-xs font-mono text-[#767676]">
            Editorial Recognition
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRESS_QUOTES.map((pq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[4px] bg-white border border-[#ECECEC] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="h-8 mb-4 flex items-center">
                  <img src={pq.logo} alt={pq.outlet} className="max-h-6 max-w-[120px] object-contain" />
                </div>
                <p className="text-xs text-[#444749] italic leading-relaxed mb-4">
                  "{pq.quote}"
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#767676] pt-3 border-t border-[#ECECEC]">
                {pq.authorOrContext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

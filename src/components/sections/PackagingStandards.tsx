"use client";

import React from "react";
import { Shield, Sparkles, CheckCircle2, Globe2, Store, ExternalLink } from "lucide-react";
import { CLEAN_CERTIFICATIONS, RETAIL_PARTNERS } from "@/lib/tokens";

export default function PackagingStandards() {
  const topBadges = [
    {
      title: "0% Artificial Dyes",
      desc: "Zero Red 40, Yellow 5, or Blue 1 petroleum colorants. 100% natural fruit & vegetable colors.",
      image: "/images/badges/icon-no-artificial-dyes.png"
    },
    {
      title: "0% Sucralose",
      desc: "Zero synthetic high-intensity chemical sweeteners or high-fructose corn syrups.",
      image: "/images/badges/icon-no-sweetener.png"
    },
    {
      title: "Non-GMO Project Verified",
      desc: "North America's most rigorous third-party non-GMO verification standards.",
      image: "/images/badges/badge-non-gmo-verified.png"
    },
    {
      title: "1% For The Planet",
      desc: "1% of all gross sales donated to children's environmental health and clean water initiatives.",
      image: "/images/badges/icon-kosher.png"
    },
  ];

  return (
    <section id="section-packaging" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#3E9B57]/10 text-[#3E9B57] border border-[#3E9B57]/30 rounded-[4px]">
          SECTION 04C
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Clean-Label Icon System & Retail Shelf Brand Block
        </h2>
      </div>

      {/* 4 Primary Clean Label Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {topBadges.map((b, idx) => (
          <div
            key={idx}
            className="p-6 rounded-[4px] bg-white border border-[#ECECEC] hover:border-[#3E9B57] shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] flex items-center justify-center p-2 mb-4">
                <img src={b.image} alt={b.title} className="w-full h-full object-contain" />
              </div>
              <h4 className="font-serif font-bold text-[#171445] text-base mb-1">{b.title}</h4>
              <p className="text-xs text-[#444749] leading-relaxed">{b.desc}</p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#ECECEC] text-[10px] font-mono text-[#3E9B57] font-bold">
              ✓ 100% LABEL VERIFIED
            </div>
          </div>
        ))}
      </div>

      {/* Retail Clean-Label Brand Block Strategy */}
      <div className="bg-[#0E1320] text-white p-8 rounded-[4px] border border-[#1E2638] shadow-md mb-8">
        <div className="flex items-center gap-2 mb-3 text-[#1A6DFF] font-mono text-xs font-bold uppercase">
          <Store className="w-4 h-4" />
          The Omnichannel "Clean-Label Brand Block"
        </div>
        <h3 className="text-xl font-serif font-bold text-white mb-3">
          Unifying Hydration and Medicine on Retail Shelves Nationwide
        </h3>
        <p className="text-xs text-white/80 leading-relaxed mb-6 max-w-3xl">
          By consolidating all product lines under <strong>KinderFarms®</strong>, retail partners (Walmart, Target, CVS, Walgreens, Kroger, Whole Foods) create a single clean-label health destination. Parents no longer need to hunt across three separate sub-brand aisles; they find instant trust under one monolithic brand block.
        </p>

        {/* Retail Partner Distribution Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 pt-6 border-t border-white/10 mb-6">
          {RETAIL_PARTNERS.map((rp, idx) => (
            <div key={idx} className="p-4 rounded-[4px] bg-white/5 border border-white/10 flex flex-col items-center justify-between text-center hover:bg-white/10 transition-colors">
              <div className="h-10 flex items-center justify-center mb-2">
                <img src={rp.logo} alt={rp.name} className="max-h-7 max-w-[90px] object-contain" />
              </div>
              <span className="text-[10px] font-mono font-bold text-[#1A6DFF]">{rp.status}</span>
              <span className="text-[9px] font-mono text-white/50 mt-0.5">{rp.stores}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono text-white/70">
          <div>
            <span className="text-[#3E9B57] font-bold block mb-1">✓ Higher Shelf Velocity</span>
            <span>Brand recognition doubles repeat cross-category purchase rates.</span>
          </div>
          <div>
            <span className="text-[#1A6DFF] font-bold block mb-1">✓ Simplified Planograms</span>
            <span>Single master brand buyer code reduces retail inventory friction.</span>
          </div>
          <div>
            <span className="text-[#D11994] font-bold block mb-1">✓ 1.5s Shelf Conversion</span>
            <span>Clean contrast badges legible under parent 3am shopping stress.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

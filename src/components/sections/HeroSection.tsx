"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, ArrowDown, ExternalLink, HeartHandshake, CheckCircle2 } from "lucide-react";
import { CLEAN_CERTIFICATIONS } from "@/lib/tokens";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative mb-16 pt-4 pb-8">
      {/* Hero Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Mission & Typography */}
        <div className="lg:col-span-7">
          {/* Clean Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ECECEC] shadow-sm mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3E9B57] animate-pulse" />
            <span className="text-xs font-mono text-[#171445] uppercase tracking-wider font-bold">
              Unified Master Brand System · "Less by Design"
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#171445] tracking-tight leading-[1.12] mb-6">
            Kids Deserve Less. <br />
            <span className="text-[#D11994]">
              Fewer ingredients, fuller childhoods.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#444749] leading-relaxed mb-8 max-w-2xl">
            Welcome to the <strong>KinderFarms® Brand Command Center</strong>. A complete design, architecture, and messaging system built on intentional subtraction: removing artificial dyes, sucralose, and sub-brand confusion to deliver clean, medical-grade healthcare parents can trust.
          </p>

          {/* 55px Master Brand CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("section-architecture")}
              className="h-[55px] px-8 bg-[#D11994] hover:bg-[#b0147c] text-white font-sans font-bold text-sm tracking-wider uppercase rounded-[4px] shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Explore 24+ Master SKUs</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo("section-colors")}
              className="h-[55px] px-8 bg-[#171445] hover:bg-[#0E1320] text-white font-sans font-semibold text-sm tracking-wider uppercase rounded-[4px] transition-all active:scale-95 flex items-center gap-2"
            >
              <span>8-Flavor Palette</span>
            </button>

            <button
              onClick={() => scrollTo("section-vault")}
              className="h-[55px] px-8 bg-white hover:bg-[#F6F6F6] text-[#171445] font-sans font-semibold text-sm tracking-wider uppercase rounded-[4px] border border-[#ECECEC] shadow-sm transition-all active:scale-95 flex items-center gap-2"
            >
              <span>Asset Vault</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Visual Media & New Look Stamp */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[4px] overflow-hidden border border-[#ECECEC] bg-white shadow-xl p-3">
            <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-[#F9F7F4]">
              <img
                src="/images/lifestyle/girl_pouring_drink_mix.jpg"
                alt="KinderFarms Daily Electrolyte Pouring"
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#ECECEC] shadow-md flex items-center gap-2">
                <img src="/images/badges/sticker-new-look.png" alt="New Look" className="w-5 h-5 object-contain" />
                <span className="text-[11px] font-mono font-bold text-[#171445]">2026 Master Look</span>
              </div>
            </div>

            {/* Micro Caption */}
            <div className="p-3 flex items-center justify-between text-xs font-mono text-[#767676]">
              <span>Clean Hydration & OTC Medicine</span>
              <span className="text-[#3E9B57] font-bold">● Live In Market</span>
            </div>
          </div>
        </div>
      </div>

      {/* Official 2026 Clean Certification Seal Strip */}
      <div className="mt-12 pt-8 border-t border-[#ECECEC]">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#767676] font-bold">
            Official 2026 Clean-Label Standard Seals (kinderfarms.com)
          </span>
          <span className="text-xs font-mono text-[#3E9B57] font-bold">
            100% Third-Party Audited
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {CLEAN_CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="p-3 rounded-[4px] bg-white border border-[#ECECEC] shadow-sm flex flex-col items-center text-center justify-center hover:border-[#D11994] transition-all group"
            >
              <div className="w-8 h-8 mb-2 flex items-center justify-center">
                <img src={cert.icon} alt={cert.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-sans font-bold text-[#171445] leading-tight line-clamp-2">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

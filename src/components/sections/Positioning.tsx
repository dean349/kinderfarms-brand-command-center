"use client";

import React from "react";
import { Minus, Shield, Sparkles, HeartHandshake, Stethoscope } from "lucide-react";

export default function Positioning() {
  const pillars = [
    {
      num: "01",
      title: "Clean-Label Efficacy",
      desc: "What is left out matters as much as what goes in. 0% Artificial Dyes, 0% Sucralose, 0% Synthetic Parabens, with 100% evidence-based active clinical ingredients.",
      icon: Shield
    },
    {
      num: "02",
      title: "Master-Brand Simplicity",
      desc: "Retiring fragmented sub-brands (KinderLyte, KinderMed, KinderSprout) into one monolithic KinderFarms® umbrella that parents recognize instantly across every aisle.",
      icon: Minus
    },
    {
      num: "03",
      title: "Parent Empathy",
      desc: "Written parent-to-parent from the lived experience of sleepless nights. Never clinical intimidation; always calm, honest, and reassuring.",
      icon: HeartHandshake
    },
    {
      num: "04",
      title: "Medical-Grade Trust",
      desc: "Physician-formulated to exact WHO/AAP physiological osmolarity standards for rapid cellular rehydration without sugar spikes or stomach distress.",
      icon: Stethoscope
    }
  ];

  return (
    <section id="section-positioning" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#1A6DFF]/10 text-[#1A6DFF] border border-[#1A6DFF]/30 rounded-[4px]">
          SECTION 02
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Brand Positioning: "Kids Deserve Less"
        </h2>
      </div>

      <div className="bg-white p-8 rounded-[4px] border border-[#ECECEC] shadow-sm mb-8">
        <div className="max-w-3xl mb-8">
          <h3 className="text-xl font-serif font-bold text-[#171445] mb-2">
            The Act of Subtraction as the Core Differentiator
          </h3>
          <p className="text-sm text-[#444749] leading-relaxed">
            Legacy pharmaceutical and hydration incumbents compete on <strong>"More"</strong>: more confusing sub-brands, more artificial flavor enhancers, more chemical dyes to look neon, more complex fine print. KinderFarms flips the paradigm completely: <strong>Kids Deserve Less.</strong>
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] hover:border-[#1A6DFF]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#1A6DFF]">{p.num}</span>
                    <Icon className="w-5 h-5 text-[#171445]" />
                  </div>
                  <h4 className="font-serif font-bold text-[#171445] text-base mb-2">{p.title}</h4>
                  <p className="text-xs text-[#444749] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

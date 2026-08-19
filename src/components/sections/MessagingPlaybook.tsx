"use client";

import React from "react";
import { MessageSquare, Users, Stethoscope, Store, Flame, Heart, Sparkles } from "lucide-react";

export default function MessagingPlaybook() {
  const campaigns = [
    {
      title: 'Campaign 01 · "Hard No"',
      hook: "Taking a stand against unnecessary artificial fillers.",
      desc: "A bold declaration that artificial food dyes (Red 40, Yellow 5) and sucralose have no place in a sick child's body. Parents say an uncompromising 'Hard No' to synthetic chemical shortcuts.",
      tag: "Cultural Movement"
    },
    {
      title: 'Campaign 02 · "The Meltdown"',
      hook: "Ending the fight over foul-tasting medicine.",
      desc: "Every parent has experienced the 2am medicine battle. KinderFarms uses real fruit flavors that kids actually take without tears, chemical dye stains, or artificial sweetener aftertaste.",
      tag: "Parent Empathy"
    },
    {
      title: 'Campaign 03 · "The Standoff"',
      hook: "Clean hydration that wins the taste test.",
      desc: "Replacing sugary sports drinks and neon pharmacy solutions with delicious, physician-formulated electrolyte drinks that replenish fluids 3x faster.",
      tag: "Daily Hydration"
    },
    {
      title: 'Campaign 04 · "The After-Practice Swap"',
      hook: "Upgrading the team sideline cooler.",
      desc: "Swapping out high-fructose corn syrup sports drinks for clean, low-sugar electrolyte drink sticks that hydrate without artificial energy crashes.",
      tag: "Sports & Play"
    }
  ];

  const audiences = [
    {
      title: "For Parents & Caregivers",
      icon: Users,
      pitch: "When your child is sick at 2:00 AM, you shouldn't have to choose between medicine that works and ingredients you trust. Proven relief with 0% artificial dyes or sucralose.",
      keyHook: "No synthetic chemical compromises when your child needs you most."
    },
    {
      title: "For Pediatricians & HCPs",
      icon: Stethoscope,
      pitch: "Formulated to exact WHO/AAP oral rehydration physiological osmolarity ratios. Delivers therapeutic clinical efficacy while eliminating artificial colorants linked to behavioral sensitivity.",
      keyHook: "Evidence-based rehydration and precise acetaminophen dosing."
    },
    {
      title: "For Retail Category Buyers",
      icon: Store,
      pitch: "Capturing the modern clean-label parent. KinderFarms consolidates OTC medicine and oral electrolyte hydration under one master brand, driving basket size and high repeat velocity.",
      keyHook: "Category disruption converting legacy pharma shoppers."
    }
  ];

  return (
    <section id="section-messaging" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#D11994]/10 text-[#D11994] border border-[#D11994]/30 rounded-[4px]">
          SECTION 08
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Campaign Narratives & Audience Messaging Playbook
        </h2>
      </div>

      {/* 4 Core Cultural Campaigns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {campaigns.map((c, idx) => (
          <div
            key={idx}
            className="p-6 rounded-[4px] bg-white border border-[#ECECEC] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase font-bold text-[#D11994]">{c.tag}</span>
              </div>
              <h3 className="font-serif font-bold text-[#171445] text-lg mb-1">{c.title}</h3>
              <p className="text-xs font-sans font-semibold text-[#1A6DFF] mb-3">"{c.hook}"</p>
              <p className="text-xs text-[#444749] leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Audience Playbook Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {audiences.map((a, idx) => {
          const Icon = a.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-[4px] bg-[#D11994]/10 border border-[#D11994]/20 flex items-center justify-center text-[#D11994] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-[#171445] text-base mb-2">{a.title}</h3>
                <p className="text-xs text-[#444749] leading-relaxed mb-4">{a.pitch}</p>
              </div>

              <div className="p-3 rounded-[4px] bg-white border border-[#ECECEC] text-xs text-[#D11994] font-medium">
                🎯 {a.keyHook}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

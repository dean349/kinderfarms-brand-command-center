"use client";

import React, { useState } from "react";
import { TONE_STAGES } from "@/lib/tokens";
import { Sliders, Volume2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ToneSimulator() {
  const [level, setLevel] = useState(1);
  const currentStage = TONE_STAGES.find((s) => s.level === level) || TONE_STAGES[0];

  return (
    <section id="section-tone" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#F2C14E]/20 text-[#171445] border border-[#F2C14E]/40 rounded-[4px]">
          SECTION 09
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Situational Voice & Tone Simulator
        </h2>
      </div>

      <div className="bg-white p-8 rounded-[4px] border border-[#ECECEC] shadow-sm">
        {/* Slider Navigation */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#767676] mb-2">
            <span>Stage 01: High-Stress Sick Child</span>
            <span>Stage 05: Retail Buyer Pitch</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="w-full accent-[#D11994] h-2 bg-[#F6F6F6] rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[11px] font-mono text-[#444749] mt-2 font-semibold">
            <span>1. Crisis</span>
            <span>2. Medicine</span>
            <span>3. Ingredients</span>
            <span>4. Hydration</span>
            <span>5. Commercial</span>
          </div>
        </div>

        {/* Dynamic Card Morph */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.level}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-[4px] bg-[#F9F7F4] border border-[#1A6DFF]/30"
          >
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1A6DFF] font-bold">
                Context // {currentStage.context}
              </span>
              <div className="flex gap-1.5">
                {currentStage.voiceAttributes.map((attr, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-white border border-[#ECECEC] text-[#171445] font-bold"
                  >
                    {attr}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-serif font-bold text-[#171445] mb-2">
              "{currentStage.headline}"
            </h3>
            <p className="text-sm text-[#444749] leading-relaxed">{currentStage.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

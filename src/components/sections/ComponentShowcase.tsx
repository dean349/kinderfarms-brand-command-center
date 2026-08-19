"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowRight, Sparkles } from "lucide-react";

export default function ComponentShowcase() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="section-components" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#171445]/10 text-[#171445] border border-[#171445]/30 rounded-[4px]">
          SECTION 04D
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          55px UI Component Library & Button Standards
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Button 1: Primary Brand Pink */}
        <div className="bg-white p-6 rounded-[4px] border border-[#ECECEC] shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-[#D11994] font-bold uppercase block mb-3">
              Primary Action CTA
            </span>
            <button className="w-full h-[55px] px-6 bg-[#D11994] hover:bg-[#b0147c] text-white font-sans font-bold text-sm tracking-wider uppercase rounded-[4px] shadow-sm transition-all flex items-center justify-center gap-2">
              <span>Shop Clean Hydration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-[#444749] mt-3">
              Height: 55px • Radius: 4px • Bg: #D11994
            </p>
          </div>
          <button
            onClick={() => handleCopy('<button className="h-[55px] px-6 bg-[#D11994] hover:bg-[#b0147c] text-white font-bold rounded-[4px]">Shop Clean Hydration</button>', "btn1")}
            className="mt-4 pt-3 border-t border-[#ECECEC] flex items-center justify-between text-xs font-mono text-[#767676] hover:text-[#171445]"
          >
            <span>JSX Snippet</span>
            {copiedCode === "btn1" ? <Check className="w-3.5 h-3.5 text-[#3E9B57]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Button 2: Dark Navy Ground */}
        <div className="bg-white p-6 rounded-[4px] border border-[#ECECEC] shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-[#171445] font-bold uppercase block mb-3">
              Dark Navy Action CTA
            </span>
            <button className="w-full h-[55px] px-6 bg-[#0E1320] hover:bg-[#171445] text-white font-sans font-semibold text-sm tracking-wider uppercase rounded-[4px] transition-all flex items-center justify-center gap-2">
              <span>Read Clinical Study</span>
            </button>
            <p className="text-xs text-[#444749] mt-3">
              Height: 55px • Radius: 4px • Bg: #0E1320
            </p>
          </div>
          <button
            onClick={() => handleCopy('<button className="h-[55px] px-6 bg-[#0E1320] hover:bg-[#171445] text-white font-semibold rounded-[4px]">Read Clinical Study</button>', "btn2")}
            className="mt-4 pt-3 border-t border-[#ECECEC] flex items-center justify-between text-xs font-mono text-[#767676] hover:text-[#171445]"
          >
            <span>JSX Snippet</span>
            {copiedCode === "btn2" ? <Check className="w-3.5 h-3.5 text-[#3E9B57]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Button 3: Clean Bordered */}
        <div className="bg-white p-6 rounded-[4px] border border-[#ECECEC] shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-[#1A6DFF] font-bold uppercase block mb-3">
              Secondary Bordered CTA
            </span>
            <button className="w-full h-[55px] px-6 bg-white hover:bg-[#F6F6F6] text-[#171445] font-sans font-semibold text-sm tracking-wider uppercase rounded-[4px] border border-[#ECECEC] shadow-sm transition-all flex items-center justify-center gap-2">
              <span>Find in Store</span>
            </button>
            <p className="text-xs text-[#444749] mt-3">
              Height: 55px • Radius: 4px • Border: #ECECEC
            </p>
          </div>
          <button
            onClick={() => handleCopy('<button className="h-[55px] px-6 bg-white text-[#171445] border border-[#ECECEC] rounded-[4px]">Find in Store</button>', "btn3")}
            className="mt-4 pt-3 border-t border-[#ECECEC] flex items-center justify-between text-xs font-mono text-[#767676] hover:text-[#171445]"
          >
            <span>JSX Snippet</span>
            {copiedCode === "btn3" ? <Check className="w-3.5 h-3.5 text-[#3E9B57]" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
}

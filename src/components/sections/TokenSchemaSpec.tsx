"use client";

import React from "react";

export default function TokenSchemaSpec() {
  const specs = [
    { property: "Canvas Ground", token: "--bg", value: "#FFFFFF / #F9F7F4", usage: "Clean white / warm porcelain canvas." },
    { property: "Dark Header/Footer", token: "--dark-header", value: "#0E1320", usage: "Master topbar, footer, and high-contrast blocks." },
    { property: "Brand Pink Accent", token: "--accent-pink", value: "#D11994", usage: "Primary CTA hover states, active indicators, and links." },
    { property: "Kinder Blue Accent", token: "--accent-blue", value: "#1A6DFF", usage: "Hydration vertical, clinical trust badges, and accents." },
    { property: "Leaf Green Trust", token: "--accent-leaf", value: "#3E9B57", usage: "0% Dyes badge, clean certifications, and 1% Planet." },
    { property: "Container Max Width", token: "--container-max", value: "1600px", usage: "Desktop viewport container ceiling." },
    { property: "Button Height", token: "--btn-height", value: "55px", usage: "Standard primary action touch target." },
    { property: "Button Border Radius", token: "--btn-radius", value: "4px", usage: "Crisp, gentle rounding on cards and buttons." },
    { property: "Display Font", token: "--font-secondary", value: "Tropiline Bold (Playfair)", usage: "Headlines, story manifestos, and brand marks." },
    { property: "UI / Body Font", token: "--font-primary", value: "Montserrat", usage: "Paragraphs, navigation, tables, and buttons." }
  ];

  return (
    <section id="section-tokens-spec" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#171445]/10 text-[#171445] border border-[#171445]/30 rounded-[4px]">
          SECTION 04E
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Design Token Contract & Dimension Inventory
        </h2>
      </div>

      <div className="bg-white rounded-[4px] border border-[#ECECEC] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#F9F7F4] text-[#171445] border-b border-[#ECECEC] font-mono font-bold">
              <tr>
                <th className="p-4">Design Property</th>
                <th className="p-4">CSS Custom Property</th>
                <th className="p-4">Exact Value</th>
                <th className="p-4">Implementation Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECECEC] text-[#444749]">
              {specs.map((s, idx) => (
                <tr key={idx} className="hover:bg-[#F9F7F4]/50 transition-colors">
                  <td className="p-4 font-bold text-[#171445]">{s.property}</td>
                  <td className="p-4 font-mono text-[#D11994] font-semibold">{s.token}</td>
                  <td className="p-4 font-mono font-bold">{s.value}</td>
                  <td className="p-4 text-[#767676]">{s.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { SUGAR_COMPARISON, COMPETITORS, COMPETITOR_BENCHMARKS } from "@/lib/tokens";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend
} from "recharts";
import { ShieldCheck, XCircle, AlertCircle, Sparkles, Activity, FileText } from "lucide-react";

export default function CompetitorMatrix() {
  const [activeTab, setActiveTab] = useState<"sugar" | "osmolarity">("sugar");
  const [showInfographic, setShowInfographic] = useState(false);

  return (
    <section id="section-competitors" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#171445]/10 text-[#171445] border border-[#171445]/30 rounded-[4px]">
          SECTION 07
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Competitive Intelligence: Less vs. More
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        {/* Recharts Bar Chart: Added Sugar & Clinical Osmolarity */}
        <div className="lg:col-span-6 bg-white p-6 rounded-[4px] border border-[#ECECEC] shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#ECECEC]">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#171445] font-bold">
                {activeTab === "sugar" ? "Added Sugar per Serving (Grams)" : "Osmolarity Clinical Balance (mOsm/L)"}
              </h3>
              <p className="text-xs text-[#767676] mt-0.5">
                {activeTab === "sugar" 
                  ? "KinderFarms uses 3g natural dextrose vs 9g in Pedialyte and 14g in Gatorade." 
                  : "WHO & AAP guideline for rapid oral rehydration is 245 mOsm/L."}
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F9F7F4] p-1 rounded border border-[#ECECEC]">
              <button
                onClick={() => setActiveTab("sugar")}
                className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded ${activeTab === "sugar" ? "bg-[#171445] text-white" : "text-[#767676]"}`}
              >
                Sugar
              </button>
              <button
                onClick={() => setActiveTab("osmolarity")}
                className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded ${activeTab === "osmolarity" ? "bg-[#171445] text-white" : "text-[#767676]"}`}
              >
                Osmolarity
              </button>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SUGAR_COMPARISON} margin={{ top: 10, right: 10, left: -15, bottom: 20 }}>
                <XAxis dataKey="brand" tick={{ fill: "#444749", fontSize: 11 }} />
                <YAxis tick={{ fill: "#767676", fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0E1320",
                    border: "none",
                    borderRadius: "4px",
                    color: "#fff",
                    fontSize: "12px"
                  }}
                />
                <Bar dataKey={activeTab === "sugar" ? "sugar" : "osmolarity"} radius={[4, 4, 0, 0]}>
                  {SUGAR_COMPARISON.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        entry.brand === "KinderFarms"
                          ? "#3E9B57"
                          : entry.brand === "Pedialyte"
                          ? "#D11994"
                          : entry.brand === "Genexa"
                          ? "#1A6DFF"
                          : entry.brand === "Liquid I.V."
                          ? "#F27A1A"
                          : "#8B5CBF"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Clean Summary Card */}
        <div className="lg:col-span-6 bg-[#0E1320] text-white p-8 rounded-[4px] border border-[#1E2638] shadow-md flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1A6DFF] font-bold">
                The Subtraction Advantage
              </span>
              <button
                onClick={() => setShowInfographic(!showInfographic)}
                className="px-2.5 py-1 text-xs font-mono bg-white/10 hover:bg-white/20 text-white rounded-[4px] transition-all flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                {showInfographic ? "Hide Infographic" : "View Official Comps"}
              </button>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-3">
              Why Legacy Incumbents Cannot Easily Pivot
            </h3>
            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Legacy pharmaceutical giants (Abbott / Pedialyte, J&J / Tylenol) are locked into industrial supply chains dependent on synthetic petroleum dyes (Red 40) for visual brand equity, and artificial sucralose for hyper-sweet taste masking.
            </p>
            <p className="text-xs text-white/80 leading-relaxed">
              KinderFarms owns the <strong>clean-label pediatric high ground</strong>: authentic medical efficacy formulated without the artificial chemical baggage.
            </p>
          </div>

          <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#3E9B57]">
            <span>100% Clean Formulation</span>
            <span>WHO/AAP ORS Compliant</span>
          </div>
        </div>
      </div>

      {/* Official Comparative Infographic Overlay */}
      {showInfographic && (
        <div className="p-6 bg-white rounded-[4px] border border-[#ECECEC] shadow-md mb-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif font-bold text-lg text-[#171445]">Official Retail Side-by-Side Benchmark Infographics</h4>
            <span className="text-xs font-mono text-[#767676]">Source: New Packaging Assets Registry</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#F9F7F4] rounded border border-[#ECECEC] flex flex-col items-center">
              <img src="/images/infographics/comparison_fruit_punch.png" alt="Fruit Punch Comparison" className="max-h-72 object-contain" />
              <span className="text-xs font-mono font-bold text-[#171445] mt-2">Hydration RTD vs. Pedialyte</span>
            </div>
            <div className="p-4 bg-[#F9F7F4] rounded border border-[#ECECEC] flex flex-col items-center">
              <img src="/images/infographics/comparison_immunity.png" alt="Immunity Comparison" className="max-h-72 object-contain" />
              <span className="text-xs font-mono font-bold text-[#171445] mt-2">Plus Immunity vs. Conventional Drink Mix</span>
            </div>
          </div>
        </div>
      )}

      {/* Comprehensive Benchmark Matrix Table */}
      <div className="bg-white rounded-[4px] border border-[#ECECEC] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#F9F7F4] text-[#171445] border-b border-[#ECECEC] font-mono font-bold">
              <tr>
                <th className="p-3">Brand</th>
                <th className="p-3">Added Sugar</th>
                <th className="p-3">Artificial Dyes (Red 40)</th>
                <th className="p-3">Artificial Sweeteners (Sucralose)</th>
                <th className="p-3">WHO/AAP Compliance</th>
                <th className="p-3">Clean-Label Stance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECECEC] text-[#444749]">
              {COMPETITORS.map((c, i) => (
                <tr key={i} className={c.brand.includes("KinderFarms") ? "bg-[#3E9B57]/5 font-bold" : ""}>
                  <td className="p-3 font-semibold text-[#171445]">{c.brand}</td>
                  <td className="p-3 font-mono font-bold">{c.sugarPerServing}g</td>
                  <td className="p-3">
                    {c.artificialDyes ? (
                      <span className="text-[#D6443F]">Contains Dyes (Red 40)</span>
                    ) : (
                      <span className="text-[#3E9B57]">0% Dye-Free</span>
                    )}
                  </td>
                  <td className="p-3">
                    {c.sucralose ? (
                      <span className="text-[#D6443F]">Contains Sucralose</span>
                    ) : (
                      <span className="text-[#3E9B57]">0% No Sucralose</span>
                    )}
                  </td>
                  <td className="p-3 font-mono">{c.medicalGradeElectrolytes ? "✓ Clinical Grade" : "✕ Sports/Sub-optimal"}</td>
                  <td className="p-3 text-[11px] text-[#767676]">{c.keyPositioning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { RETIRED_SUB_BRANDS } from "@/lib/tokens";
import { Search, ArrowRight, AlertTriangle, ShieldCheck, Image as ImageIcon, Table as TableIcon } from "lucide-react";

export default function MigrationLookup() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "visual">("visual");

  const filtered = RETIRED_SUB_BRANDS.filter(
    (item) =>
      item.retiredName.toLowerCase().includes(search.toLowerCase()) ||
      item.activeName.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.rationale.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="section-migration" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#D6443F]/10 text-[#D6443F] border border-[#D6443F]/30 rounded-[4px]">
          SECTION 06
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Sub-Brand Retirement Matrix & Mapping Engine
        </h2>
      </div>

      <div className="bg-white p-6 rounded-[4px] border border-[#ECECEC] shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-[#ECECEC]">
          <p className="text-xs text-[#444749] max-w-xl leading-relaxed">
            Legacy sub-brands (<strong>KinderLyte®</strong>, <strong>KinderMed®</strong>, <strong>KinderSprout®</strong>) have been completely retired. Retailers and partners can look up legacy product names here to verify active v2 master brand packaging.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center bg-[#F9F7F4] p-1 rounded border border-[#ECECEC]">
              <button
                onClick={() => setViewMode("visual")}
                className={`px-3 py-1 text-xs font-mono font-bold rounded flex items-center gap-1.5 ${viewMode === "visual" ? "bg-[#171445] text-white" : "text-[#767676]"}`}
              >
                <ImageIcon className="w-3.5 h-3.5" /> Visual Before/After
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-1 text-xs font-mono font-bold rounded flex items-center gap-1.5 ${viewMode === "table" ? "bg-[#171445] text-white" : "text-[#767676]"}`}
              >
                <TableIcon className="w-3.5 h-3.5" /> Table Mapping
              </button>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#767676] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search legacy brands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs font-sans rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] focus:outline-none focus:border-[#D11994]"
              />
            </div>
          </div>
        </div>

        {/* Visual Before & After Comparison Mode */}
        {viewMode === "visual" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Old Packaging Box */}
            <div className="p-6 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-[#D6443F]/10 text-[#D6443F] rounded border border-[#D6443F]/30">
                    RETIRED LEGACY PACKAGING (V1)
                  </span>
                  <span className="text-[10px] font-mono text-[#767676]">Multi-sub-brand fragmentation</span>
                </div>
                <div className="aspect-[16/10] bg-white rounded border border-[#ECECEC] mb-4 p-2 overflow-hidden flex items-center justify-center">
                  <img src="/images/lifestyle/brand_portfolio_old.jpg" alt="Old Packaging Portfolio" className="max-h-full object-contain grayscale opacity-80" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#171445] mb-1">Legacy Fragmented Portfolio</h4>
                <p className="text-xs text-[#767676] leading-relaxed">
                  Multiple sub-brands (KinderLyte, KinderMed, KinderSprout) competed with each other and confused retail shoppers across aisles.
                </p>
              </div>
            </div>

            {/* New Packaging Box */}
            <div className="p-6 rounded-[4px] bg-white border-2 border-[#3E9B57]/40 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-[#3E9B57]/10 text-[#3E9B57] rounded border border-[#3E9B57]/30">
                    ACTIVE MASTER BRAND LOOK (V2)
                  </span>
                  <span className="text-[10px] font-mono text-[#3E9B57] font-bold">100% Unified Master Brand</span>
                </div>
                <div className="aspect-[16/10] bg-[#F9F7F4] rounded border border-[#ECECEC] mb-4 p-2 overflow-hidden flex items-center justify-center">
                  <img src="/images/lifestyle/brand_portfolio_new.jpg" alt="New Packaging Portfolio" className="max-h-full object-contain drop-shadow-md" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#171445] mb-1">Unified KinderFarms® Brand Block</h4>
                <p className="text-xs text-[#444749] leading-relaxed">
                  Single high-contrast master brand architecture with the 8-flavor seed color bar and clean-label verification seals.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Retirement Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#F9F7F4] text-[#171445] border-b border-[#ECECEC] font-mono font-bold">
              <tr>
                <th className="p-3">Retired Legacy Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Active Master Brand Name (v2)</th>
                <th className="p-3">Retirement Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ECECEC] text-[#444749]">
              {filtered.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F9F7F4]/50 transition-colors">
                  <td className="p-3 font-mono text-[#D6443F] font-bold">
                    <del>{row.retiredName}</del>
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white border border-[#ECECEC] font-semibold text-[#171445]">
                      {row.category}
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-[#3E9B57] flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-[#3E9B57]" />
                    <span>{row.activeName}</span>
                  </td>
                  <td className="p-3 text-[#767676] text-[11px]">{row.rationale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { MASTER_SKU_CATALOG } from "@/lib/tokens";
import { SkuItem } from "@/types/brand";
import { Search, Filter, ShieldCheck, Sparkles, Droplets, Pill, X, ExternalLink, ChevronRight, Store, FileText } from "lucide-react";

export default function ArchitectureGrid() {
  const [filter, setFilter] = useState<"ALL" | "Hydration" | "Medicine" | "Plus Lines">("ALL");
  const [query, setQuery] = useState("");
  const [selectedSku, setSelectedSku] = useState<SkuItem | null>(null);
  const [modalTab, setModalTab] = useState<"hero" | "facts" | "comparison">("hero");

  const filtered = MASTER_SKU_CATALOG.filter((item) => {
    const matchesFilter = filter === "ALL" || item.category === filter;
    const matchesQuery =
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.flavor.toLowerCase().includes(query.toLowerCase()) ||
      item.sku.toLowerCase().includes(query.toLowerCase()) ||
      (item.claim && item.claim.toLowerCase().includes(query.toLowerCase()));
    return matchesFilter && matchesQuery;
  });

  return (
    <section id="section-architecture" className="scroll-mt-24 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#1A6DFF]/10 text-[#1A6DFF] border border-[#1A6DFF]/30 rounded-[4px]">
          SECTION 05
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#171445] tracking-tight">
          Master Brand SKU Catalog & Architecture
        </h2>
      </div>

      <div className="bg-white p-6 rounded-[4px] border border-[#ECECEC] shadow-sm space-y-6">
        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {(["ALL", "Hydration", "Medicine", "Plus Lines"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-[4px] transition-all ${
                  filter === cat
                    ? "bg-[#D11994] text-white shadow-sm"
                    : "bg-[#F9F7F4] text-[#444749] hover:bg-[#F6F6F6] border border-[#ECECEC]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#767676] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 24+ SKUs, flavors, claims..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs font-sans rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] focus:outline-none focus:border-[#1A6DFF]"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.sku}
              onClick={() => {
                setSelectedSku(item);
                setModalTab("hero");
              }}
              className="group p-5 rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] hover:border-[#D11994] hover:shadow-md transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Packshot Image Thumbnail Stage */}
                <div className="relative aspect-square w-full rounded-[4px] bg-white border border-[#ECECEC] mb-4 flex items-center justify-center p-4 overflow-hidden group-hover:bg-[#FDF0E4]/30 transition-colors">
                  <img
                    src={item.heroImage}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#171445] text-white rounded">
                    {item.sku}
                  </span>
                  <span className="absolute top-2 right-2 px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-white border border-[#ECECEC] text-[#171445]">
                    {item.category}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-[#171445] text-base mb-1 group-hover:text-[#D11994] transition-colors">
                  {item.name}
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-sans font-semibold text-[#D11994]">{item.flavor}</span>
                  <span className="text-xs text-[#767676]">• {item.size}</span>
                </div>
                <p className="text-xs text-[#444749] leading-relaxed mb-4 line-clamp-2">
                  {item.claim}
                </p>
              </div>

              <div>
                {/* Micro Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.certifications?.slice(0, 2).map((c, i) => (
                    <span key={i} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white border border-[#ECECEC] text-[#3E9B57] font-semibold">
                      ✓ {c}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#ECECEC] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#1A6DFF] font-bold group-hover:underline flex items-center gap-1">
                    Inspect Asset Suite <ChevronRight className="w-3 h-3" />
                  </span>
                  <span className="text-[#171445] font-bold">${item.msrp?.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Inspector Dialog */}
      {selectedSku && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] rounded-[4px] border border-[#ECECEC] shadow-2xl overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#ECECEC] bg-[#0E1320] text-white flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#1A6DFF]">{selectedSku.sku}</span>
                  <span className="text-xs text-white/50">•</span>
                  <span className="text-xs font-mono text-[#3E9B57]">{selectedSku.status}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-white mt-0.5">{selectedSku.name}</h3>
              </div>
              <button
                onClick={() => setSelectedSku(null)}
                className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left Column: Visual Asset Display */}
              <div className="md:col-span-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={() => setModalTab("hero")}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded ${modalTab === "hero" ? "bg-[#171445] text-white" : "bg-[#F9F7F4] text-[#767676]"}`}
                  >
                    Packshot
                  </button>
                  {selectedSku.drugFactsImage && (
                    <button
                      onClick={() => setModalTab("facts")}
                      className={`px-3 py-1 text-xs font-mono font-bold rounded ${modalTab === "facts" ? "bg-[#171445] text-white" : "bg-[#F9F7F4] text-[#767676]"}`}
                    >
                      Facts Panel
                    </button>
                  )}
                  {selectedSku.comparisonImage && (
                    <button
                      onClick={() => setModalTab("comparison")}
                      className={`px-3 py-1 text-xs font-mono font-bold rounded ${modalTab === "comparison" ? "bg-[#171445] text-white" : "bg-[#F9F7F4] text-[#767676]"}`}
                    >
                      Comparison Infographic
                    </button>
                  )}
                </div>

                <div className="flex-1 min-h-[300px] rounded-[4px] bg-[#F9F7F4] border border-[#ECECEC] flex items-center justify-center p-4">
                  {modalTab === "hero" && (
                    <img src={selectedSku.heroImage} alt={selectedSku.name} className="max-h-[320px] max-w-full object-contain drop-shadow-md" />
                  )}
                  {modalTab === "facts" && selectedSku.drugFactsImage && (
                    <img src={selectedSku.drugFactsImage} alt="Facts Panel" className="max-h-[320px] max-w-full object-contain" />
                  )}
                  {modalTab === "comparison" && selectedSku.comparisonImage && (
                    <img src={selectedSku.comparisonImage} alt="Comparison Infographic" className="max-h-[320px] max-w-full object-contain" />
                  )}
                </div>
              </div>

              {/* Right Column: Formulation & Retail Data */}
              <div className="md:col-span-6 space-y-4 text-xs">
                <div>
                  <span className="font-mono text-[#767676] uppercase tracking-wider block mb-1">Positioning & Claim</span>
                  <p className="text-[#171445] font-medium leading-relaxed bg-[#FDF0E4]/40 p-3 rounded border-l-2 border-[#D11994]">
                    {selectedSku.claim}
                  </p>
                </div>

                {selectedSku.activeIngredients && (
                  <div>
                    <span className="font-mono text-[#767676] uppercase tracking-wider block mb-1">Active Formulation</span>
                    <p className="text-[#444749] leading-relaxed bg-[#F9F7F4] p-3 rounded border border-[#ECECEC]">
                      {selectedSku.activeIngredients}
                    </p>
                  </div>
                )}

                {selectedSku.inactiveIngredients && (
                  <div>
                    <span className="font-mono text-[#767676] uppercase tracking-wider block mb-1">Inactive Clean Ingredients</span>
                    <p className="text-[#444749] leading-relaxed bg-[#F9F7F4] p-3 rounded border border-[#ECECEC]">
                      {selectedSku.inactiveIngredients}
                    </p>
                  </div>
                )}

                <div>
                  <span className="font-mono text-[#767676] uppercase tracking-wider block mb-2">Verified Certifications</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSku.certifications?.map((c, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-[#3E9B57]/10 text-[#3E9B57] font-mono text-[10px] font-bold border border-[#3E9B57]/30">
                        ✓ {c}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedSku.retailers && (
                  <div>
                    <span className="font-mono text-[#767676] uppercase tracking-wider block mb-2">Omnichannel Retail Distribution</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedSku.retailers.map((r, i) => (
                        <span key={i} className="px-2.5 py-1 rounded bg-[#0E1320] text-white font-mono text-[10px] font-bold">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-[#ECECEC] flex items-center justify-between">
                  <span className="text-base font-serif font-bold text-[#171445]">MSRP: ${selectedSku.msrp?.toFixed(2)}</span>
                  <span className="text-[10px] font-mono text-[#767676]">Format: {selectedSku.format}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

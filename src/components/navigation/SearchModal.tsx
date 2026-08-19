"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { BRAND_COLORS, MASTER_SKU_CATALOG } from "@/lib/tokens";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredColors = BRAND_COLORS.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.hex.toLowerCase().includes(query.toLowerCase()) ||
      c.role.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSkus = MASTER_SKU_CATALOG.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase()) ||
      s.flavor.toLowerCase().includes(query.toLowerCase()) ||
      s.sku.toLowerCase().includes(query.toLowerCase()) ||
      (s.claim && s.claim.toLowerCase().includes(query.toLowerCase()))
  );

  const scrollTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-[4px] bg-white border border-[#ECECEC] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="p-4 border-b border-[#ECECEC] flex items-center gap-3 bg-[#F9F7F4]">
          <Search className="w-5 h-5 text-[#1A6DFF]" />
          <input
            type="text"
            autoFocus
            placeholder="Search colors, SKUs, typography, or guidelines..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[#171445] placeholder-[#767676] text-sm outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-[#ECECEC] hover:bg-[#CBD5E1] text-[#444749]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-4">
          {/* Colors */}
          {filteredColors.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#767676] block mb-2 font-bold">
                Color Tokens ({filteredColors.length})
              </span>
              <div className="grid grid-cols-2 gap-2">
                {filteredColors.slice(0, 4).map((c) => (
                  <div
                    key={c.id}
                    onClick={() => scrollTo("section-colors")}
                    className="p-2.5 rounded-[4px] bg-[#F9F7F4] hover:bg-[#F6F6F6] border border-[#ECECEC] cursor-pointer flex items-center gap-2.5 transition-all"
                  >
                    <span className="w-4 h-4 rounded shadow-sm" style={{ backgroundColor: c.hex }} />
                    <div className="truncate">
                      <p className="text-xs font-bold text-[#171445] truncate">{c.name}</p>
                      <p className="text-[10px] font-mono text-[#767676]">{c.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SKUs */}
          {filteredSkus.length > 0 && (
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#767676] block mb-2 font-bold">
                SKU Architecture ({filteredSkus.length})
              </span>
              <div className="space-y-1.5">
                {filteredSkus.map((s) => (
                  <div
                    key={s.sku}
                    onClick={() => scrollTo("section-architecture")}
                    className="p-2.5 rounded-[4px] bg-[#F9F7F4] hover:bg-[#F6F6F6] border border-[#ECECEC] cursor-pointer flex items-center justify-between transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded bg-white p-1 border border-[#ECECEC] flex items-center justify-center shrink-0">
                        <img src={s.heroImage} alt={s.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#171445]">{s.name}</p>
                        <p className="text-[10px] text-[#767676]">{s.sku} • {s.category} • {s.flavor}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1A6DFF]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredColors.length === 0 && filteredSkus.length === 0 && (
            <div className="py-8 text-center text-xs text-[#767676]">
              No exact matches found for "{query}".
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="p-3 bg-[#F9F7F4] border-t border-[#ECECEC] flex items-center justify-between text-[10px] font-mono text-[#767676]">
          <span>Navigate with arrows // ESC to exit</span>
          <span>KinderFarms Fuzzy Engine</span>
        </div>
      </div>
    </div>
  );
}

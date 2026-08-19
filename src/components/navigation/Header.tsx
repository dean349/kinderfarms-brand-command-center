"use client";

import React from "react";
import { Search, Sparkles, Shield, ExternalLink, Box } from "lucide-react";

interface HeaderProps {
  onOpenSearch: () => void;
}

export default function Header({ onOpenSearch }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1E2638] bg-[#0E1320] text-white shadow-md">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logos/logo-blue.svg" 
              alt="KinderFarms" 
              className="h-8 md:h-10 object-contain brightness-0 invert" 
            />
            <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-mono uppercase bg-[#1A6DFF]/20 text-[#1A6DFF] font-bold rounded border border-[#1A6DFF]/40">
              Brand Command Center v2.0
            </span>
          </div>
        </div>

        {/* Global Search Trigger + Brand Links */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-3 px-4 py-2 rounded-[4px] bg-white/10 hover:bg-white/15 border border-white/20 text-white/80 hover:text-white transition-all text-xs font-sans"
          >
            <Search className="w-4 h-4 text-[#1A6DFF]" />
            <span className="hidden sm:inline">Search Brand Tokens, SKUs & Guidelines...</span>
            <kbd className="px-1.5 py-0.5 rounded bg-black/40 border border-white/20 text-[10px] text-white/60 font-mono">
              Ctrl+K
            </kbd>
          </button>

          <a
            href="https://www.kinderfarms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-[4px] bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs font-sans transition-all"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>
        </div>
      </div>
    </header>
  );
}

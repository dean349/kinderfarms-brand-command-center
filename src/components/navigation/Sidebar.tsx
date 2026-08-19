"use client";

import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Target,
  Palette,
  Type,
  LayoutTemplate,
  ShieldCheck,
  Component,
  Sliders,
  Layers,
  Search,
  BarChart3,
  MessageSquare,
  Volume2,
  FileCode,
  Database
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  sectionId: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: "01", label: "01. Brand Story & 3am Origin", sectionId: "section-story", icon: BookOpen },
  { id: "02", label: "02. Positioning (Kids Deserve Less)", sectionId: "section-positioning", icon: Target },
  { id: "03", label: "03. 8-Flavor Seed & 3D Stage", sectionId: "section-colors", icon: Palette },
  { id: "04", label: "04. Typography Studio", sectionId: "section-typography", icon: Type },
  { id: "04B", label: "04B. Brand Kit & Logos", sectionId: "section-brand-kit", icon: LayoutTemplate },
  { id: "04C", label: "04C. Packaging & Clean Badges", sectionId: "section-packaging", icon: ShieldCheck },
  { id: "04D", label: "04D. 55px UI Components", sectionId: "section-components", icon: Component },
  { id: "04E", label: "04E. Design Token Contract", sectionId: "section-tokens-spec", icon: Sliders },
  { id: "05", label: "05. Master Brand SKU Catalog", sectionId: "section-architecture", icon: Layers },
  { id: "06", label: "06. Sub-Brand Retirement Guide", sectionId: "section-migration", icon: Search },
  { id: "07", label: "07. Competitor Intelligence", sectionId: "section-competitors", icon: BarChart3 },
  { id: "08", label: "08. Messaging & Campaigns", sectionId: "section-messaging", icon: MessageSquare },
  { id: "09", label: "09. Situational Voice & Tone", sectionId: "section-tone", icon: Volume2 },
  { id: "10", label: "10. Brand Governance (DOs/DON'Ts)", sectionId: "section-governance", icon: FileCode },
  { id: "11", label: "11. Supabase Asset Vault", sectionId: "section-vault", icon: Database },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("section-story");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].sectionId);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden lg:flex flex-col w-72 sticky top-24 h-[calc(100vh-6rem)] pr-4 py-4 overflow-y-auto">
      <div className="mb-4 px-3">
        <span className="text-[11px] font-mono tracking-wider text-[#171445]/60 uppercase font-bold">
          Master Brand Index
        </span>
      </div>

      <nav className="space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.sectionId;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.sectionId)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-[4px] text-xs font-sans font-medium transition-all text-left ${
                isActive
                  ? "bg-[#D11994]/10 text-[#D11994] font-bold border-l-4 border-[#D11994]"
                  : "text-[#444749] hover:text-[#171445] hover:bg-white"
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#D11994]" : "text-[#767676]"}`} />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-[#ECECEC] px-3">
        <div className="p-3.5 rounded-[4px] bg-white border border-[#ECECEC] text-[11px] font-mono text-[#444749] space-y-1.5 shadow-sm">
          <div className="flex justify-between">
            <span className="text-[#767676]">Philosophy:</span>
            <span className="font-bold text-[#171445]">Kids Deserve Less</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#767676]">Architecture:</span>
            <span className="text-[#1A6DFF] font-semibold">Monolithic v2.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#767676]">Standards:</span>
            <span className="text-[#3E9B57] font-semibold">0% Dyes / 0% Sucralose</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

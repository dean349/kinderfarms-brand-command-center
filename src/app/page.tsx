"use client";

import React, { useState } from "react";
import Header from "@/components/navigation/Header";
import Sidebar from "@/components/navigation/Sidebar";
import SearchModal from "@/components/navigation/SearchModal";
import HeroSection from "@/components/sections/HeroSection";
import BrandStory from "@/components/sections/BrandStory";
import Positioning from "@/components/sections/Positioning";
import ColorEngine from "@/components/sections/ColorEngine";
import TypographyStudio from "@/components/sections/TypographyStudio";
import BrandKit from "@/components/sections/BrandKit";
import PackagingStandards from "@/components/sections/PackagingStandards";
import ComponentShowcase from "@/components/sections/ComponentShowcase";
import TokenSchemaSpec from "@/components/sections/TokenSchemaSpec";
import ArchitectureGrid from "@/components/sections/ArchitectureGrid";
import MigrationLookup from "@/components/sections/MigrationLookup";
import CompetitorMatrix from "@/components/sections/CompetitorMatrix";
import MessagingPlaybook from "@/components/sections/MessagingPlaybook";
import ToneSimulator from "@/components/sections/ToneSimulator";
import BrandGovernance from "@/components/sections/BrandGovernance";
import AssetVault from "@/components/sections/AssetVault";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F4] text-[#444749]">
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="max-w-[1600px] w-full mx-auto px-6 md:px-8 flex-1 flex gap-8">
        {/* Sticky Sidebar Navigation */}
        <Sidebar />

        {/* Dynamic Content Stream */}
        <div className="flex-1 py-4 max-w-full overflow-hidden">
          <HeroSection />
          <BrandStory />
          <Positioning />
          <ColorEngine />
          <TypographyStudio />
          <BrandKit />
          <PackagingStandards />
          <ComponentShowcase />
          <TokenSchemaSpec />
          <ArchitectureGrid />
          <MigrationLookup />
          <CompetitorMatrix />
          <MessagingPlaybook />
          <ToneSimulator />
          <BrandGovernance />
          <AssetVault />

          {/* Footer */}
          <footer className="py-12 mt-16 border-t border-[#ECECEC] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#767676]">
            <div>
              KinderFarms® Command Center v2.0 • "Kids Deserve Less"
            </div>
            <div>
              Built on Next.js 14, Tailwind, Three.js & Client-Side Design Tokens
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

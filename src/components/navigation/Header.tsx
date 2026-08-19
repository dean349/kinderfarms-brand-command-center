"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ExternalLink, LogOut, ShieldCheck, User, ChevronDown } from "lucide-react";
import { createClient } from "@/lib/supabase-client";

interface HeaderProps {
  onOpenSearch: () => void;
}

export default function Header({ onOpenSearch }: HeaderProps) {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email || null);
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();
        setRole(profile?.role || null);
      }
    };
    loadUser();
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

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

        {/* Global Search Trigger + Brand Links + User Menu */}
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

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 px-3 py-2 rounded-[4px] bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs font-sans transition-all"
            >
              <span className="w-6 h-6 rounded-[4px] bg-[#1A6DFF]/20 border border-[#1A6DFF]/40 flex items-center justify-center text-[#1A6DFF]">
                <User className="w-3.5 h-3.5" />
              </span>
              <span className="hidden sm:inline max-w-[140px] truncate">{email || "Signed in"}</span>
              <ChevronDown className="w-3.5 h-3.5 text-white/40" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-[4px] bg-[#171445] border border-white/10 shadow-2xl overflow-hidden z-50">
                <div className="px-4 py-3 border-b border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-white/40">
                      Signed In
                    </span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded ${
                        role === "admin"
                          ? "bg-[#D11994]/20 text-[#D11994] border border-[#D11994]/40"
                          : "bg-[#1A6DFF]/20 text-[#1A6DFF] border border-[#1A6DFF]/40"
                      }`}
                    >
                      {role === "admin" ? "ADMIN" : "MEMBER"}
                    </span>
                  </div>
                  <p className="text-sm text-white font-semibold truncate">{email}</p>
                </div>
                <div className="p-2">
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-[4px] text-xs font-sans text-[#F87171] hover:bg-[#D6443F]/15 font-medium transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
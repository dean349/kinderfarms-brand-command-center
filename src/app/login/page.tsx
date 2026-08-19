"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase-client";
import { Eye, EyeOff, Loader2, Lock, Mail, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Check whether the user must change their temporary password
    const { data: profile } = await supabase
      .from("profiles")
      .select("role, must_change_password")
      .eq("id", data.user.id)
      .single();

    if (profile?.must_change_password) {
      router.push("/auth/change-password");
    } else {
      router.push("/");
    }
    router.refresh();
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <img
            src="/images/logos/logo-blue.svg"
            alt="KinderFarms®"
            className="h-10 object-contain mb-6 brightness-0 invert"
          />
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A6DFF]/20 border border-[#1A6DFF]/40 text-[#1A6DFF] text-xs font-mono font-bold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            SECURE COMMAND CENTER
          </span>
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-white/50 mt-2 font-mono">
            Sign in with your admin credentials to access the brand system.
          </p>
        </div>

        {/* Login Card */}
        <form
          onSubmit={handleLogin}
          className="bg-[#171445]/60 backdrop-blur-md border border-white/10 rounded-[4px] p-8 shadow-2xl"
        >
          <label className="block mb-2 text-xs font-mono uppercase tracking-wider text-white/50">
            Email Address
          </label>
          <div className="relative mb-5">
            <Mail className="w-4 h-4 text-[#1A6DFF] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@velyon.io"
              required
              className="w-full pl-10 pr-3 py-3 rounded-[4px] bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-[#1A6DFF] transition-colors"
            />
          </div>

          <label className="block mb-2 text-xs font-mono uppercase tracking-wider text-white/50">
            Password
          </label>
          <div className="relative mb-6">
            <Lock className="w-4 h-4 text-[#1A6DFF] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full pl-10 pr-10 py-3 rounded-[4px] bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-[#1A6DFF] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-[4px] bg-[#D6443F]/15 border border-[#D6443F]/40 text-[#F87171] text-xs font-sans">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-[55px] flex items-center justify-center gap-2 rounded-[4px] bg-[#D11994] hover:bg-[#b0147c] text-white font-sans font-bold text-sm tracking-wider uppercase transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          <p className="mt-6 text-center text-[11px] font-mono text-white/35">
            Protected by Supabase Auth · Row Level Security · TLS Encryption
          </p>
        </form>
      </div>
    </div>
  );
}
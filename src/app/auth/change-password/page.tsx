"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-client";
import { Eye, EyeOff, Loader2, Lock, ShieldCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    setLoading(true);
    const supabase = createClient();

    // Verify the current (temporary) password still works
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: (await supabase.auth.getUser()).data.user?.email || "",
      password: currentPassword,
    });

    if (signInError || !signInData.user) {
      setError("Current password is incorrect.");
      setLoading(false);
      return;
    }

    // Update password
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    // Clear the must_change_password flag so next login redirects to home
    const { error: profileError } = await supabase
      .from("profiles")
      .update({ must_change_password: false })
      .eq("id", signInData.user.id);

    if (profileError) {
      console.error("Failed to clear flag:", profileError);
    }

    setSuccess(true);
    setLoading(false);
    setTimeout(() => {
      router.push("/");
      router.refresh();
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md bg-[#171445]/60 backdrop-blur-md border border-white/10 rounded-[4px] p-10 text-center shadow-2xl">
          <CheckCircle2 className="w-12 h-12 text-[#3E9B57] mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold text-white mb-2">Password Updated</h1>
          <p className="text-sm text-white/50 font-mono">
            Your password is now secure. Redirecting to the command center...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-14 h-14 rounded-[4px] bg-[#F27A1A]/20 border border-[#F27A1A]/50 flex items-center justify-center text-[#F27A1A] mb-5">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
            Set Your Password
          </h1>
          <p className="text-sm text-white/50 mt-2 font-mono">
            For security, you must set your own permanent password before continuing.
          </p>
        </div>

        <form
          onSubmit={handleChangePassword}
          className="bg-[#171445]/60 backdrop-blur-md border border-white/10 rounded-[4px] p-8 shadow-2xl"
        >
          <label className="block mb-2 text-xs font-mono uppercase tracking-wider text-white/50">
            Current Temporary Password
          </label>
          <div className="relative mb-5">
            <Lock className="w-4 h-4 text-[#1A6DFF] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current password"
              required
              className="w-full pl-10 pr-10 py-3 rounded-[4px] bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-[#F27A1A] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <label className="block mb-2 text-xs font-mono uppercase tracking-wider text-white/50">
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New permanent password (8+ chars)"
            required
            className="w-full mb-5 px-3 py-3 rounded-[4px] bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-[#F27A1A] transition-colors"
          />

          <label className="block mb-2 text-xs font-mono uppercase tracking-wider text-white/50">
            Confirm New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            required
            className="w-full mb-6 px-3 py-3 rounded-[4px] bg-black/40 border border-white/15 text-white placeholder-white/30 text-sm outline-none focus:border-[#F27A1A] transition-colors"
          />

          {error && (
            <div className="mb-4 p-3 rounded-[4px] bg-[#D6443F]/15 border border-[#D6443F]/40 text-[#F87171] text-xs font-sans">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-[55px] flex items-center justify-center gap-2 rounded-[4px] bg-[#F27A1A] hover:bg-[#d96a13] text-white font-sans font-bold text-sm tracking-wider uppercase transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Set New Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
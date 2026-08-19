import "server-only";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export function createServerSupabase() {
  const cookieStore = cookies();
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Called from a Server Component; safe to ignore middleware refreshes.
        }
      },
    },
  });
}

export interface ProfileRow {
  id: string;
  email: string;
  role: "admin" | "member";
  must_change_password: boolean;
  created_at?: string;
}

export async function fetchProfile(): Promise<ProfileRow | null> {
  try {
    const supabase = createServerSupabase();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return null;

    const { data } = await supabase
      .from("profiles")
      .select("id, email, role, must_change_password, created_at")
      .eq("id", user.id)
      .single();

    return (data as ProfileRow) || null;
  } catch (err) {
    console.error("fetchProfile error:", err);
    return null;
  }
}

export async function isAdmin(): Promise<boolean> {
  const profile = await fetchProfile();
  return profile?.role === "admin";
}

export async function fetchLiveSkus() {
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase
      .from("kf_sku_catalog")
      .select("*")
      .order("sku", { ascending: true });
    if (error) {
      console.error("Error fetching SKUs from Supabase:", error);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error("Supabase query failed:", err);
    return [];
  }
}

export async function fetchLiveRetailDistribution() {
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase
      .from("kf_retail_distribution")
      .select("*")
      .order("retailer", { ascending: true });
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error("Error fetching distribution:", err);
    return [];
  }
}

export async function fetchLiveCompetitors() {
  try {
    const supabase = createServerSupabase();
    const { data, error } = await supabase
      .from("kf_competitor_benchmarks")
      .select("*")
      .order("sugar_grams", { ascending: true });
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error("Error fetching competitor benchmarks:", err);
    return [];
  }
}

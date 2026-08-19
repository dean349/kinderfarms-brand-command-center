import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pqdikozxocxfenozmcyv.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxZGlrb3p4b2N4ZmVub3ptY3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzNTE2MTYsImV4cCI6MjEwMDkyNzYxNn0.quFqFUE-kWjIuzJj1xJiJ9--31hYc_Mv1HA-uDMNH3w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface IngestedAsset {
  id: string;
  name: string;
  size: number;
  type: string;
  status: "staged" | "uploading" | "indexed" | "vectorized";
  url?: string;
  timestamp: string;
}

export interface DbSkuItem {
  id: string;
  sku: string;
  name: string;
  category: string;
  vertical: string;
  flavor: string;
  format: string;
  size: string;
  sugar_grams: number;
  sodium_mg: number;
  potassium_mg: number;
  active_ingredients: string;
  inactive_ingredients: string;
  certifications: string[];
  hero_image_url: string;
  drug_facts_url?: string;
  comparison_image_url?: string;
  status: string;
  msrp: number;
}

export async function fetchLiveSkus(): Promise<DbSkuItem[]> {
  try {
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

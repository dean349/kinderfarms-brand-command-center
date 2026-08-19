# KinderFarms® Brand Command Center

A complete interactive brand command center for KinderFarms® — design system, master SKU catalog, competitor intelligence, retail distribution, and Supabase-backed asset vault. Powered by Next.js 14, Tailwind CSS, Three.js, and Recharts.

## Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS** with the KinderFarms design token system
- **Three.js** (`@react-three/fiber`) for the interactive 3D flavor canister stage
- **Recharts** for clinical competitor analytics
- **Supabase** (PostgreSQL 17) for the live SKU cataalog, retail distribution, and competitor benchmark tables

## Run Locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Supabase Backend

Tables live in the `VELYON OmniSight AI platform` Supabase project (`pqdikozxocxfenozmcyv`):

- `kf_sku_catalog` — master SKU registry (formulations, certifications, image URLs)
- `kf_retail_distribution` — omnichannel retail shelf placement
- `kf_competitor_benchmarks` — clinical head-to-head benchmarks (sugar, osmolarity, electrolytes)
- `kf_brand_assets` — digital asset registry

Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local` (see `src/lib/supabase.ts` for defaults pointing at the live project).
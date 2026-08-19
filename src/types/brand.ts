export interface ColorToken {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  hsl?: string;
  role: string;
  category: "flavor" | "primary" | "surface" | "trust";
  wcagContrast: string;
  wcagLevel: "AAA" | "AA" | "Fail";
  description: string;
}

export interface SkuItem {
  id: string;
  sku: string;
  name: string;
  category: "Hydration" | "Medicine & Supplements" | "Nutrition" | "Medicine" | "Plus Lines";
  vertical: "Hydration" | "Medicine & Supplements" | "Hydration Plus";
  legacyName?: string;
  flavor: string;
  format?: string;
  size?: string;
  sugarGrams?: number;
  sodiumMg?: number;
  potassiumMg?: number;
  keyClaims?: string[];
  claim?: string;
  certification?: string;
  certifications?: string[];
  activeIngredients?: string;
  inactiveIngredients?: string;
  heroImage: string;
  drugFactsImage?: string;
  comparisonImage?: string;
  nutritionFactsImage?: string;
  dosingImage?: string;
  status?: string;
  msrp?: number;
  retailers?: string[];
}

export interface CompetitorComparison {
  brand: string;
  sugarPerServing: number;
  artificialDyes: boolean;
  sucralose: boolean;
  medicalGradeElectrolytes: boolean;
  osmolarityMosmL?: number;
  sodiumMg?: number;
  potassiumMg?: number;
  keyPositioning: string;
}

export interface ToneStage {
  level: number;
  context: string;
  headline: string;
  body: string;
  voiceAttributes: string[];
}

export interface PressQuote {
  outlet: string;
  logo: string;
  quote: string;
  authorOrContext?: string;
}

export interface RetailerItem {
  name: string;
  logo: string;
  status: string;
  stores?: string;
  aisle: string;
}

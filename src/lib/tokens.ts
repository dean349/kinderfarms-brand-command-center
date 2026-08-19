import { ColorToken, SkuItem, CompetitorComparison, ToneStage, PressQuote, RetailerItem } from "@/types/brand";

export interface FlavorSeed {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  contrast: string;
  description: string;
}

export const FLAVOR_SEEDS: FlavorSeed[] = [
  {
    id: "strawberry",
    name: "Strawberry Red",
    hex: "#E8416F",
    rgb: "232, 65, 111",
    contrast: "AAA (8.2:1)",
    description: "Vibrant, optimistic red coding strawberry hydration products."
  },
  {
    id: "cherry",
    name: "Cherry Red",
    hex: "#D6443F",
    rgb: "214, 68, 63",
    contrast: "AAA (7.5:1)",
    description: "Deep, trustworthy cherry tone for pediatric cold and fever relief."
  },
  {
    id: "citrus",
    name: "Citrus Orange",
    hex: "#F27A1A",
    rgb: "242, 122, 26",
    contrast: "AAA (7.0:1)",
    description: "Zesty orange energizing immunity and electrolyte formulations."
  },
  {
    id: "lemon",
    name: "Lemon Yellow",
    hex: "#F2C14E",
    rgb: "242, 193, 78",
    contrast: "AAA (8.5:1)",
    description: "Bright sunny yellow coding refreshing lemonade electrolyte sticks."
  },
  {
    id: "berry",
    name: "Berry Purple",
    hex: "#8B5CBF",
    rgb: "139, 92, 191",
    contrast: "AA (6.8:1)",
    description: "Gentle floral berry coding soothing nighttime cough and sleep products."
  },
  {
    id: "raspberry",
    name: "Raspberry Pink",
    hex: "#C13584",
    rgb: "193, 53, 132",
    contrast: "AA (7.1:1)",
    description: "Rich berry magenta for high-potency rapid hydration packets."
  },
  {
    id: "watermelon",
    name: "Watermelon Pink",
    hex: "#F57E9E",
    rgb: "245, 126, 158",
    contrast: "AAA (8.3:1)",
    description: "Playful summer pink coding daily hydration drinks for toddlers."
  },
  {
    id: "tropical",
    name: "Tropical Punch",
    hex: "#F0A93B",
    rgb: "240, 169, 59",
    contrast: "AAA (8.0:1)",
    description: "Warm golden amber for mango-passionfruit hydration mixes."
  }
];

export const BRAND_COLORS: ColorToken[] = [
  ...FLAVOR_SEEDS.map((f) => ({
    id: f.id,
    name: f.name,
    hex: f.hex,
    rgb: f.rgb,
    hsl: "",
    role: "Flavor Seed",
    category: "flavor" as const,
    wcagContrast: f.contrast,
    wcagLevel: (f.contrast.includes("AAA") ? "AAA" : "AA") as "AAA" | "AA",
    description: f.description
  })),
  {
    id: "blue",
    name: "Kinder Blue",
    hex: "#1A6DFF",
    rgb: "26, 109, 255",
    hsl: "218°, 100%, 55%",
    role: "Primary Brand / Hydration",
    category: "primary",
    wcagContrast: "7.4:1 on dark",
    wcagLevel: "AAA",
    description: "Medical-grade trust blue communicating clinical electrolyte precision."
  },
  {
    id: "pink",
    name: "Brand Pink",
    hex: "#D11994",
    rgb: "209, 25, 148",
    hsl: "320°, 79%, 46%",
    role: "Interactive Accent / CTAs",
    category: "primary",
    wcagContrast: "6.2:1 on dark",
    wcagLevel: "AA",
    description: "Warm, energetic brand accent tone for buttons and highlights."
  },
  {
    id: "onyx",
    name: "Dark Navy / Header",
    hex: "#0E1320",
    rgb: "14, 19, 32",
    hsl: "223°, 39%, 9%",
    role: "Header / Footer Ground",
    category: "surface",
    wcagContrast: "16:1 on white",
    wcagLevel: "AAA",
    description: "Deep navy background surface for master header and footer."
  },
  {
    id: "porcelain",
    name: "Warm Porcelain",
    hex: "#F9F7F4",
    rgb: "249, 247, 244",
    hsl: "36°, 29%, 97%",
    role: "Primary Canvas Background",
    category: "surface",
    wcagContrast: "15:1 on onyx",
    wcagLevel: "AAA",
    description: "Soft tactile white replacing sterile pharmacy bleached surfaces."
  },
  {
    id: "leaf",
    name: "Leaf Green",
    hex: "#3E9B57",
    rgb: "62, 155, 87",
    hsl: "136°, 43%, 43%",
    role: "Clean Label & 1% Planet",
    category: "trust",
    wcagContrast: "8.2:1 on dark",
    wcagLevel: "AAA",
    description: "Certified Non-GMO and 1% For The Planet verification seal."
  }
];

export const MASTER_SKU_CATALOG: SkuItem[] = [
  // 1. Ready-to-Drink Electrolyte Solutions (1L)
  {
    id: "KF-HYD-RTD-FP",
    sku: "KF-HYD-RTD-FP",
    name: "KinderFarms® Electrolyte Solution Fruit Punch",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte® Oral Electrolyte Solution Fruit Punch",
    flavor: "Fruit Punch",
    format: "Ready-To-Drink Liquid Bottle",
    size: "33.8 FL OZ (1L)",
    sugarGrams: 3.0,
    sodiumMg: 1030,
    potassiumMg: 780,
    claim: "Rapid cellular rehydration with Instant Absorption Technology. 0% Artificial Dyes.",
    activeIngredients: "Sodium (1030mg), Potassium (780mg), Chloride, Zinc",
    inactiveIngredients: "Purified Water, Non-GMO Dextrose, Citric Acid, Natural Fruit Punch Flavor, Fruit & Veg Juice Color",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "Gluten Free", "0% Artificial Dyes", "0% Sucralose", "1% For The Planet"],
    heroImage: "/images/products/fruit_punch_liquid.jpg",
    drugFactsImage: "/images/infographics/nutrition_facts_fruit_punch.png",
    comparisonImage: "/images/infographics/comparison_fruit_punch.png",
    status: "ACTIVE",
    msrp: 6.99,
    retailers: ["Target", "Walmart", "CVS", "Kroger", "Walgreens", "Amazon"]
  },
  {
    id: "KF-HYD-RTD-GRP",
    sku: "KF-HYD-RTD-GRP",
    name: "KinderFarms® Electrolyte Solution Grape",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte® Oral Electrolyte Solution Grape",
    flavor: "Grape",
    format: "Ready-To-Drink Liquid Bottle",
    size: "33.8 FL OZ (1L)",
    sugarGrams: 3.0,
    sodiumMg: 1030,
    potassiumMg: 780,
    claim: "Doctor-formulated clinical rehydration with organic natural grape extracts.",
    activeIngredients: "Sodium, Potassium, Chloride, Zinc",
    inactiveIngredients: "Purified Water, Non-GMO Dextrose, Citric Acid, Natural Grape Flavor",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "Gluten Free", "0% Artificial Dyes", "0% Sucralose"],
    heroImage: "/images/products/grape_liquid.jpg",
    status: "ACTIVE",
    msrp: 6.99,
    retailers: ["Target", "Walmart", "CVS", "Walgreens", "Amazon"]
  },
  {
    id: "KF-HYD-RTD-ORG",
    sku: "KF-HYD-RTD-ORG",
    name: "KinderFarms® Electrolyte Solution Orange",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte® Oral Electrolyte Solution Orange",
    flavor: "Orange",
    format: "Ready-To-Drink Liquid Bottle",
    size: "33.8 FL OZ (1L)",
    sugarGrams: 3.0,
    sodiumMg: 1030,
    potassiumMg: 780,
    claim: "Bright zesty citrus rehydration with beta-carotene natural color.",
    activeIngredients: "Sodium, Potassium, Chloride, Zinc",
    inactiveIngredients: "Purified Water, Non-GMO Dextrose, Citric Acid, Natural Orange Flavor, Beta Carotene",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "Gluten Free", "0% Artificial Dyes"],
    heroImage: "/images/products/orange_liquid.jpg",
    status: "ACTIVE",
    msrp: 6.99,
    retailers: ["Walmart", "Target", "Kroger", "CVS", "Amazon"]
  },
  {
    id: "KF-HYD-RTD-WC",
    sku: "KF-HYD-RTD-WC",
    name: "KinderFarms® Electrolyte Solution Watermelon Citrus",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte® Oral Electrolyte Solution Watermelon Citrus",
    flavor: "Watermelon Citrus",
    format: "Ready-To-Drink Liquid Bottle",
    size: "33.8 FL OZ (1L)",
    sugarGrams: 3.0,
    sodiumMg: 1030,
    potassiumMg: 780,
    claim: "Refreshing watermelon and lime fusion for soothing sick-day replenishment.",
    activeIngredients: "Sodium, Potassium, Chloride, Zinc",
    inactiveIngredients: "Purified Water, Non-GMO Dextrose, Citric Acid, Natural Watermelon & Citrus Flavors",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "0% Artificial Dyes"],
    heroImage: "/images/products/watermelon_citrus_liquid.jpg",
    status: "ACTIVE",
    msrp: 6.99,
    retailers: ["Target", "Walmart", "Amazon", "Kroger"]
  },
  {
    id: "KF-HYD-RTD-ADV-LL",
    sku: "KF-HYD-RTD-ADV-LL",
    name: "KinderFarms® Advanced Hydration Lemon Lime",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte PLUS® High Osmolarity Lemon Lime",
    flavor: "Lemon Lime",
    format: "High-Potency Liquid Bottle",
    size: "33.8 FL OZ (1L)",
    sugarGrams: 2.0,
    sodiumMg: 1200,
    potassiumMg: 850,
    claim: "33% More Electrolytes + Prebiotic Zinc for intensive dehydration recovery.",
    activeIngredients: "High Osmolality Sodium, Potassium, Prebiotic Zinc Gluconate",
    inactiveIngredients: "Purified Water, Non-GMO Dextrose, Natural Lime Flavor",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "Advanced Clinical Formula"],
    heroImage: "/images/products/advanced_lemon_lime.jpg",
    status: "ACTIVE",
    msrp: 7.49,
    retailers: ["CVS", "Walgreens", "Target", "Amazon"]
  },
  {
    id: "KF-HYD-RTD-ADV-BER",
    sku: "KF-HYD-RTD-ADV-BER",
    name: "KinderFarms® Advanced Hydration Wild Berry",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte PLUS® High Osmolarity Wild Berry",
    flavor: "Wild Berry",
    format: "High-Potency Liquid Bottle",
    size: "33.8 FL OZ (1L)",
    sugarGrams: 2.0,
    sodiumMg: 1200,
    potassiumMg: 850,
    claim: "Maximum electrolyte density colored naturally with purple carrot juice.",
    activeIngredients: "Sodium (1200mg), Potassium (850mg), Zinc (5mg)",
    inactiveIngredients: "Purified Water, Dextrose, Natural Berry Flavor, Purple Carrot Extract",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "Advanced Clinical Formula"],
    heroImage: "/images/products/advanced_wild_berry.jpg",
    status: "ACTIVE",
    msrp: 7.49,
    retailers: ["CVS", "Walgreens", "Amazon"]
  },

  // 2. Powder Drink Mix Pouches (16ct Sticks)
  {
    id: "KF-POW-DRK-LEM-16",
    sku: "KF-POW-DRK-LEM-16",
    name: "KinderFarms® Daily Hydration Drink Mix Lemonade",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte® Hydration Powder Stick Packets Lemonade",
    flavor: "Lemonade",
    format: "Powder Stick Packets (16ct Pouch)",
    size: "16 Sticks (0.35 oz ea)",
    sugarGrams: 3.0,
    sodiumMg: 480,
    potassiumMg: 360,
    claim: "On-the-go electrolyte replenishment with real lemon juice and turmeric color.",
    activeIngredients: "Instant Absorption Technology Electrolytes (Sodium, Potassium, Zinc)",
    inactiveIngredients: "Non-GMO Dextrose, Citric Acid, Potassium Citrate, Salt, Natural Lemon Flavor, Turmeric",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "0% Artificial Sweeteners", "1% For The Planet"],
    heroImage: "/images/products/lemonade_powder_16ct.jpg",
    status: "ACTIVE",
    msrp: 14.99,
    retailers: ["Target", "Walmart", "Whole Foods", "Amazon"]
  },
  {
    id: "KF-POW-DRK-STR-16",
    sku: "KF-POW-DRK-STR-16",
    name: "KinderFarms® Daily Hydration Drink Mix Strawberry",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte® Hydration Powder Stick Packets Strawberry",
    flavor: "Strawberry",
    format: "Powder Stick Packets (16ct Pouch)",
    size: "16 Sticks (0.35 oz ea)",
    sugarGrams: 3.0,
    sodiumMg: 480,
    potassiumMg: 360,
    claim: "Sweet organic strawberry taste colored naturally with pure red beet juice.",
    activeIngredients: "Electrolyte Blend (Sodium Citrate, Potassium Chloride, Zinc)",
    inactiveIngredients: "Non-GMO Dextrose, Citric Acid, Natural Strawberry Flavor, Beet Juice Color",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "0% Artificial Dyes"],
    heroImage: "/images/products/strawberry_powder_16ct.jpg",
    status: "ACTIVE",
    msrp: 14.99,
    retailers: ["Target", "Walmart", "Amazon"]
  },
  {
    id: "KF-POW-DRK-FP-16",
    sku: "KF-POW-DRK-FP-16",
    name: "KinderFarms® Daily Hydration Drink Mix Fruit Punch",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte® Hydration Powder Stick Packets Fruit Punch",
    flavor: "Fruit Punch",
    format: "Powder Stick Packets (16ct Pouch)",
    size: "16 Sticks (0.35 oz ea)",
    sugarGrams: 3.0,
    sodiumMg: 480,
    potassiumMg: 360,
    claim: "Kid-approved tropical fruit blend for sports, travel, and play without sugar spikes.",
    activeIngredients: "Sodium, Potassium, Zinc, Vitamin C",
    inactiveIngredients: "Non-GMO Dextrose, Citric Acid, Potassium Citrate, Natural Fruit Flavors",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "0% Artificial Dyes"],
    heroImage: "/images/products/fruit_punch_powder_16ct.jpg",
    status: "ACTIVE",
    msrp: 14.99,
    retailers: ["Target", "Walmart", "Kroger", "Amazon"]
  },
  {
    id: "KF-POW-DRK-WAT-16",
    sku: "KF-POW-DRK-WAT-16",
    name: "KinderFarms® Daily Hydration Drink Mix Watermelon",
    category: "Hydration",
    vertical: "Hydration",
    legacyName: "KinderLyte® Hydration Powder Stick Packets Watermelon",
    flavor: "Watermelon",
    format: "Powder Stick Packets (16ct Pouch)",
    size: "16 Sticks (0.35 oz ea)",
    sugarGrams: 3.0,
    sodiumMg: 480,
    potassiumMg: 360,
    claim: "Light crisp summer flavor promoting voluntary fluid intake in sick toddlers.",
    activeIngredients: "Sodium, Potassium, Zinc Gluconate",
    inactiveIngredients: "Non-GMO Dextrose, Citric Acid, Natural Watermelon Flavor",
    certifications: ["Non-GMO Project Verified", "Kosher", "Vegan", "0% Sucralose"],
    heroImage: "/images/products/watermelon_powder_16ct.jpg",
    status: "ACTIVE",
    msrp: 14.99,
    retailers: ["Target", "Amazon"]
  },

  // 3. Plus Specialized Health
  {
    id: "KF-PLUS-IMM-POW-ORG",
    sku: "KF-PLUS-IMM-POW-ORG",
    name: "KinderFarms® Plus Immune Support Drink Mix Orange",
    category: "Plus Lines",
    vertical: "Hydration Plus",
    legacyName: "KinderLyte PLUS® Immunity Drink Mix",
    flavor: "Orange Citrus",
    format: "Specialized Powder Sticks (12ct Box)",
    size: "12 Sticks (0.35 oz ea)",
    sugarGrams: 3.0,
    sodiumMg: 480,
    potassiumMg: 360,
    claim: "High-dose Vitamin C (250mg) + Zinc (5mg) + Vitamin D3 with instant cellular hydration.",
    activeIngredients: "Vitamin C, Zinc Gluconate, Vitamin D3, Clinical Electrolytes",
    inactiveIngredients: "Non-GMO Dextrose, Ascorbic Acid, Natural Orange Flavor, Beta Carotene",
    certifications: ["Non-GMO Project Verified", "Immune Defense", "0% Artificial Dyes"],
    heroImage: "/images/products/plus_immunity_orange.jpg",
    comparisonImage: "/images/infographics/comparison_immunity.png",
    status: "ACTIVE",
    msrp: 16.99,
    retailers: ["CVS", "Target", "Walgreens", "Amazon"]
  },
  {
    id: "KF-PLUS-IMM-RTD-RL",
    sku: "KF-PLUS-IMM-RTD-RL",
    name: "KinderFarms® Plus Immune Support Raspberry Lemonade",
    category: "Plus Lines",
    vertical: "Hydration Plus",
    legacyName: "KinderLyte PLUS® Immune Support Solution",
    flavor: "Raspberry Lemonade",
    format: "Liquid Solution Bottle",
    size: "33.8 FL OZ (1L)",
    sugarGrams: 3.0,
    sodiumMg: 1030,
    potassiumMg: 780,
    claim: "Organic Elderberry fruit extract + Vitamin C + Zinc in ready-to-drink liquid.",
    activeIngredients: "Organic European Black Elderberry, Vitamin C, Zinc, ORS Electrolytes",
    inactiveIngredients: "Purified Water, Dextrose, Elderberry Juice, Citric Acid, Natural Flavors",
    certifications: ["Non-GMO Project Verified", "Elderberry Powered", "0% Sucralose"],
    heroImage: "/images/products/plus_immunity_raspberry_lemonade.png",
    status: "ACTIVE",
    msrp: 7.99,
    retailers: ["Target", "CVS", "Amazon"]
  },
  {
    id: "KF-PLUS-GUT-RTD-APP",
    sku: "KF-PLUS-GUT-RTD-APP",
    name: "KinderFarms® Plus Gut Health Electrolyte Apple",
    category: "Plus Lines",
    vertical: "Hydration Plus",
    legacyName: "KinderLyte PLUS® Gut Health Prebiotic Solution",
    flavor: "Crisp Apple",
    format: "Liquid Solution Bottle",
    size: "33.8 FL OZ (1L)",
    sugarGrams: 3.0,
    sodiumMg: 1030,
    potassiumMg: 780,
    claim: "Organic Agave Inulin prebiotic fiber nourishing beneficial microbiome bacteria.",
    activeIngredients: "Organic Inulin Prebiotic Fiber (1g), Zinc, Potassium, Sodium",
    inactiveIngredients: "Purified Water, Dextrose, Organic Agave Inulin, Natural Apple Flavor",
    certifications: ["Non-GMO Project Verified", "Prebiotic Enriched", "0% Artificial Dyes"],
    heroImage: "/images/products/plus_gut_health_apple.png",
    status: "ACTIVE",
    msrp: 7.99,
    retailers: ["Target", "CVS", "Amazon", "Sprouts"]
  },

  // 4. OTC Pediatric Medicine & Cough Relief
  {
    id: "KF-MED-INF-PF-CH",
    sku: "KF-MED-INF-PF-CH",
    name: "KinderFarms® Infants' Pain & Fever Liquid Cherry",
    category: "Medicine",
    vertical: "Medicine & Supplements",
    legacyName: "KinderMed® Infants' Pain & Fever Acetaminophen",
    flavor: "Organic Cherry",
    format: "Oral Suspension Liquid + Flow-Restrictor Syringe",
    size: "2 FL OZ (59 mL)",
    sugarGrams: 0.0,
    claim: "Acetaminophen 160mg per 5mL. Clean pediatric medicine with 0% dyes, 0% parabens.",
    activeIngredients: "Acetaminophen 160 mg (in each 5 mL) - Pain Reliever / Fever Reducer",
    inactiveIngredients: "Organic Agave Syrup, Purified Water, Organic Cherry Flavor, Citric Acid",
    certifications: ["Dye-Free Liquid", "Paraben-Free", "Alcohol-Free", "Top 9 Allergen Free", "Physician Approved"],
    heroImage: "/images/products/infants_pain_fever_cherry.jpg",
    drugFactsImage: "/images/infographics/drug_facts_pain_fever.png",
    dosingImage: "/images/infographics/dosing_table_pain_fever.png",
    status: "ACTIVE",
    msrp: 9.99,
    retailers: ["Target", "CVS", "Walmart", "Walgreens", "Amazon"]
  },
  {
    id: "KF-MED-KID-PF-CH",
    sku: "KF-MED-KID-PF-CH",
    name: "KinderFarms® Children's Pain & Fever Liquid Cherry",
    category: "Medicine",
    vertical: "Medicine & Supplements",
    legacyName: "KinderMed® Kids' Pain & Fever Acetaminophen",
    flavor: "Organic Cherry",
    format: "Oral Suspension Liquid + Dosing Cup",
    size: "4 FL OZ (118 mL)",
    sugarGrams: 0.0,
    claim: "Pediatrician-strength acetaminophen liquid sweetened with organic agave nectar.",
    activeIngredients: "Acetaminophen 160 mg (in each 5 mL)",
    inactiveIngredients: "Organic Agave Nectar, Purified Water, Natural Cherry Flavor",
    certifications: ["Dye-Free Liquid", "Paraben-Free", "Top 9 Allergen Free"],
    heroImage: "/images/products/childrens_pain_fever_cherry.png",
    status: "ACTIVE",
    msrp: 9.99,
    retailers: ["Target", "CVS", "Walmart", "Kroger", "Amazon"]
  },
  {
    id: "KF-MED-INF-CGH-BER",
    sku: "KF-MED-INF-CGH-BER",
    name: "KinderFarms® Infants' Cough & Throat Relief Berry",
    category: "Medicine",
    vertical: "Medicine & Supplements",
    legacyName: "KinderMed® Infants' Cough & Throat",
    flavor: "Organic Wild Berry",
    format: "Oral Syrup + Dosing Syringe",
    size: "2 FL OZ (59 mL)",
    sugarGrams: 0.0,
    claim: "Organic agave + English ivy leaf extract to soothe irritated coughs and clear mucus.",
    activeIngredients: "Organic English Ivy Leaf Extract (10mg) & Organic Agave",
    inactiveIngredients: "Organic Agave Syrup, Purified Water, Natural Berry Flavor",
    certifications: ["Drug-Free", "Dye-Free", "Paraben-Free", "Certified Organic Agave"],
    heroImage: "/images/products/infants_cough_berry.png",
    status: "ACTIVE",
    msrp: 8.99,
    retailers: ["Target", "CVS", "Walmart", "Amazon"]
  },
  {
    id: "KF-MED-INF-NIT-BER",
    sku: "KF-MED-INF-NIT-BER",
    name: "KinderFarms® Infants' Nighttime Cough Relief Chamomile",
    category: "Medicine",
    vertical: "Medicine & Supplements",
    legacyName: "KinderMed® Infants' Nighttime Cough",
    flavor: "Chamomile Berry",
    format: "Oral Syrup + Dosing Syringe",
    size: "2 FL OZ (59 mL)",
    sugarGrams: 0.0,
    claim: "Soothing chamomile and English ivy leaf promoting restful sleep during colds.",
    activeIngredients: "Organic Ivy Leaf Extract + Organic Chamomile Flower Extract",
    inactiveIngredients: "Organic Agave Nectar, Purified Water, Natural Berry & Chamomile Extracts",
    certifications: ["Drug-Free", "Dye-Free", "Non-Habit Forming", "Certified Organic"],
    heroImage: "/images/products/infants_nighttime_cough.png",
    status: "ACTIVE",
    msrp: 8.99,
    retailers: ["Target", "CVS", "Amazon"]
  },
  {
    id: "KF-MED-VAL-DAYNIT",
    sku: "KF-MED-VAL-DAYNIT",
    name: "KinderFarms® Infants' Day & Night Cough Value Pack",
    category: "Medicine",
    vertical: "Medicine & Supplements",
    legacyName: "KinderMed® Infants' Day/Night Cough Value Pack",
    flavor: "Dual Pack (Berry / Chamomile)",
    format: "Twin-Pack (2x 2 FL OZ Bottles)",
    size: "4 FL OZ Total (118 mL)",
    sugarGrams: 0.0,
    claim: "24-Hour clean cough management: Daytime active soothing + Nighttime sleep support.",
    activeIngredients: "Day: Organic Ivy Leaf; Night: Organic Ivy Leaf + Chamomile",
    inactiveIngredients: "Organic Agave Syrup, Purified Water, Natural Berry Extracts",
    certifications: ["Drug-Free", "Dye-Free", "Value Pack", "Top 9 Allergen Free"],
    heroImage: "/images/products/infants_day_night_value_pack.png",
    status: "ACTIVE",
    msrp: 15.99,
    retailers: ["Target", "CVS", "Walmart", "Amazon"]
  },
  {
    id: "KF-MED-VAL-CHDAYNIT",
    sku: "KF-MED-VAL-CHDAYNIT",
    name: "KinderFarms® Children's Day & Night Value Pack",
    category: "Medicine",
    vertical: "Medicine & Supplements",
    legacyName: "KinderMed® Children's Day/Night Value Pack",
    flavor: "Dual Pack (Daytime Cough / Nighttime Cold)",
    format: "Twin-Pack (2x 4 FL OZ Bottles)",
    size: "8 FL OZ Total (236 mL)",
    sugarGrams: 0.0,
    claim: "Complete round-the-clock symptom relief for school-age kids with zero dyes.",
    activeIngredients: "Day: Ivy Leaf + Elderberry; Night: Ivy Leaf + Chamomile",
    inactiveIngredients: "Organic Agave, Purified Water, Natural Flavors",
    certifications: ["Dye-Free", "Paraben-Free", "Value Pack"],
    heroImage: "/images/products/childrens_day_night_value_pack.png",
    status: "ACTIVE",
    msrp: 17.99,
    retailers: ["Target", "CVS", "Walmart", "Amazon"]
  }
];

export const SKU_CATALOG: SkuItem[] = MASTER_SKU_CATALOG;

export const RETIRED_SUB_BRANDS = [
  {
    retiredName: "KinderLyte® Oral Electrolyte Solution",
    category: "Hydration",
    activeName: "KinderFarms® Electrolyte Solution",
    rationale: "Unified under master brand to eliminate shelf-space fragmentation and boost velocity."
  },
  {
    retiredName: "KinderLyte® Hydration Drink Mix",
    category: "Hydration",
    activeName: "KinderFarms® Daily Hydration Drink Mix",
    rationale: "One monolithic name across ready-to-drink bottles and powder sticks."
  },
  {
    retiredName: "KinderLyte PLUS® High Osmolarity",
    category: "Hydration",
    activeName: "KinderFarms® Advanced Hydration",
    rationale: "Clear clinical tiering without separate sub-brand consumer confusion."
  },
  {
    retiredName: "KinderMed® Infants' Pain & Fever",
    category: "Medicine",
    activeName: "KinderFarms® Infants' Pain & Fever",
    rationale: "Unifies clean OTC pediatric medicine under Jessica Biel / Jeremy Adams trusted master brand."
  },
  {
    retiredName: "KinderMed® Kids' Cough & Throat",
    category: "Medicine",
    activeName: "KinderFarms® Children's Cough & Cold",
    rationale: "Eliminates pharma intimidation and standardizes clean-label block across retail aisles."
  },
  {
    retiredName: "KinderSprout® Organic Plant Milk",
    category: "Nutrition",
    activeName: "KinderFarms® Organic Plant Protein",
    rationale: "Brings pediatric nutrition under unified family wellness umbrella."
  }
];

export const SUGAR_COMPARISON = [
  { brand: "KinderFarms", sugar: 3, sodium: 1030, potassium: 780, osmolarity: 245 },
  { brand: "Pedialyte", sugar: 9, sodium: 1030, potassium: 780, osmolarity: 250 },
  { brand: "Genexa", sugar: 4, sodium: 600, potassium: 400, osmolarity: 260 },
  { brand: "Liquid I.V.", sugar: 11, sodium: 500, potassium: 380, osmolarity: 320 },
  { brand: "Gatorade", sugar: 14, sodium: 160, potassium: 45, osmolarity: 335 },
  { brand: "Prime", sugar: 1, sodium: 10, potassium: 700, osmolarity: 180 }
];

export const COMPETITORS: CompetitorComparison[] = [
  {
    brand: "KinderFarms®",
    sugarPerServing: 3,
    artificialDyes: false,
    sucralose: false,
    medicalGradeElectrolytes: true,
    osmolarityMosmL: 245,
    sodiumMg: 1030,
    potassiumMg: 780,
    keyPositioning: "Kids Deserve Less: Clean pediatric medicine & hydration with zero synthetic dyes or sweeteners."
  },
  {
    brand: "Pedialyte® (Abbott)",
    sugarPerServing: 9,
    artificialDyes: true,
    sucralose: true,
    medicalGradeElectrolytes: true,
    osmolarityMosmL: 250,
    sodiumMg: 1030,
    potassiumMg: 780,
    keyPositioning: "Hospital legacy electrolyte standard; heavily reliant on Red 40, Blue 1, Yellow 6, and Sucralose."
  },
  {
    brand: "Genexa®",
    sugarPerServing: 4,
    artificialDyes: false,
    sucralose: false,
    medicalGradeElectrolytes: false,
    osmolarityMosmL: 260,
    sodiumMg: 600,
    potassiumMg: 400,
    keyPositioning: "Clean medicine positioning; lacks comprehensive medical-grade hydration line and retail scale."
  },
  {
    brand: "Liquid I.V.® (Unilever)",
    sugarPerServing: 11,
    artificialDyes: false,
    sucralose: false,
    medicalGradeElectrolytes: true,
    osmolarityMosmL: 320,
    sodiumMg: 500,
    potassiumMg: 380,
    keyPositioning: "Adult-oriented CTT electrolyte powder; higher sugar density not tailored for infant/toddler clinical rehydration."
  },
  {
    brand: "Gatorade® (PepsiCo)",
    sugarPerServing: 14,
    artificialDyes: true,
    sucralose: false,
    medicalGradeElectrolytes: false,
    osmolarityMosmL: 335,
    sodiumMg: 160,
    potassiumMg: 45,
    keyPositioning: "High-sugar sports beverage contraindicated for clinical pediatric diarrhea or fever rehydration."
  },
  {
    brand: "Prime Hydration",
    sugarPerServing: 1,
    artificialDyes: false,
    sucralose: true,
    medicalGradeElectrolytes: false,
    osmolarityMosmL: 180,
    sodiumMg: 10,
    potassiumMg: 700,
    keyPositioning: "Extreme potassium/sodium imbalance; contains artificial sucralose; fails WHO ORS clinical rehydration criteria."
  }
];

export const COMPETITOR_BENCHMARKS = [
  {
    brand: "KinderFarms®",
    dyes: false,
    sucralose: false,
    cleanLabel: "100% Clean Formulation (0% Dyes, 0% Sucralose)",
    planet1Pct: true
  },
  {
    brand: "Pedialyte® (Abbott)",
    dyes: true,
    sucralose: true,
    cleanLabel: "Legacy pharmacy standard; uses Red 40, Blue 1, Sucralose",
    planet1Pct: false
  },
  {
    brand: "Genexa®",
    dyes: false,
    sucralose: false,
    cleanLabel: "Clean medicine competitor; lacks medical-grade hydration line",
    planet1Pct: false
  },
  {
    brand: "Gatorade® (PepsiCo)",
    dyes: true,
    sucralose: false,
    cleanLabel: "High-sugar sports beverage with artificial colorants",
    planet1Pct: false
  }
];

export const TONE_STAGES: ToneStage[] = [
  {
    level: 1,
    context: "3:00 AM Fever Crisis (Urgent / High-Stress Parent)",
    headline: "Fast, proven fever relief. Nothing your sick child doesn't need.",
    body: "Doctor-formulated acetaminophen that brings down fevers rapidly—without artificial dyes, sucralose, or synthetic parabens. Clean medicine you can trust at 3 AM.",
    voiceAttributes: ["Direct", "Empathetic", "Zero Jargon", "Clinically Clear"]
  },
  {
    level: 2,
    context: "Medicine Dosing & OTC (Clinical-but-Gentle)",
    headline: "The exact pediatrician-recommended dose, stated plainly.",
    body: "160mg acetaminophen per 5mL with our clear flow-restrictor syringe. Pure, dye-free relief without the struggle or the mess.",
    voiceAttributes: ["Reassuring", "Medical-Grade", "Transparent", "Relief-Focused"]
  },
  {
    level: 3,
    context: "Educational / Clean Ingredients (Factual & Calm)",
    headline: "Simple dextrose for rapid fluid absorption. No sucralose, ever.",
    body: "We use just enough simple natural sugar to activate the sodium-glucose cotransporter for instant cellular hydration, without synthetic chemical aftertaste.",
    voiceAttributes: ["Transparent", "Science-Backed", "Clear", "Uncluttered"]
  },
  {
    level: 4,
    context: "Daily Hydration & Sports (Joyful & Optimistic)",
    headline: "Fuel their best days with clean, delicious hydration.",
    body: "2x the electrolytes of sugary sports drinks with 0% artificial dyes. Keep them energized on the field and throughout play without sugar crashes.",
    voiceAttributes: ["Energetic", "Optimistic", "Clean-Label", "Playful"]
  },
  {
    level: 5,
    context: "Cultural Movement & Advocacy (1% For The Planet)",
    headline: "Fewer ingredients, fuller childhoods. Join the movement.",
    body: "We donate 1% of all gross sales to children's environmental health organizations, building a healthier, cleaner world for future generations.",
    voiceAttributes: ["Purpose-Driven", "Inspiring", "Authentic", "Bold"]
  }
];

export const PRESS_QUOTES: PressQuote[] = [
  {
    outlet: "Forbes",
    logo: "/images/press/forbes.png",
    quote: "We created KinderFarms because we believe that no parent should ever have to choose between clean and effective when it comes to their child's healthcare products.",
    authorOrContext: "Jessica Biel, Co-Founder & Parent"
  },
  {
    outlet: "Parents Magazine",
    logo: "/images/press/parents.png",
    quote: "One nice feature that allows KinderFarms to stand out is that it entirely avoids the use of artificial food coloring by using fruit and vegetable juice to provide color.",
    authorOrContext: "Parents Health & Wellness Editors"
  },
  {
    outlet: "She Knows",
    logo: "/images/press/she_knows.png",
    quote: "It's made with non-GMO dextrose, which is designed to go directly to the bloodstream, unlike the artificial sweetener sucralose found in Pedialyte.",
    authorOrContext: "Clean Living & Pediatric Care Guide"
  }
];

export const RETAIL_PARTNERS: RetailerItem[] = [
  {
    name: "Walmart",
    logo: "/images/retailers/walmart.svg",
    status: "NATIONWIDE",
    stores: "4,600+ Stores",
    aisle: "Pediatric Care & Baby Wellness Brand Block"
  },
  {
    name: "Target",
    logo: "/images/retailers/target.svg",
    status: "NATIONWIDE",
    stores: "1,950+ Stores",
    aisle: "Children's Health & Clean Family Hydration"
  },
  {
    name: "CVS Pharmacy",
    logo: "/images/retailers/cvs.svg",
    status: "NATIONWIDE",
    stores: "7,200+ Stores",
    aisle: "Pediatric OTC Medicine & Clinical Rehydration"
  },
  {
    name: "Walgreens",
    logo: "/images/retailers/walgreens.svg",
    status: "NATIONWIDE",
    stores: "8,800+ Stores",
    aisle: "First Aid & Infants' Cough/Cold Sections"
  },
  {
    name: "Kroger",
    logo: "/images/retailers/kroger.svg",
    status: "NATIONWIDE",
    stores: "2,400+ Stores",
    aisle: "Pharmacy & Natural Foods Family Aisle"
  },
  {
    name: "Whole Foods Market",
    logo: "/images/retailers/wholefoods.svg",
    status: "SELECT REGIONS",
    stores: "480+ Stores",
    aisle: "Clean Functional Nutrition & Powder Mixes"
  },
  {
    name: "Amazon Direct",
    logo: "/images/retailers/amazon.svg",
    status: "PRIME STOREFRONT",
    stores: "Global Fulfillment",
    aisle: "Official Brand Flagship & Subscribe & Save"
  }
];

export const CLEAN_CERTIFICATIONS = [
  { name: "Non-GMO Project Verified", icon: "/images/badges/badge-non-gmo-verified.png", desc: "100% non-genetically modified botanical and mineral ingredients." },
  { name: "0% Artificial Dyes", icon: "/images/badges/icon-no-artificial-dyes.png", desc: "No Red 40, Yellow 5, or Blue 1 petroleum-based synthetic dyes." },
  { name: "0% Artificial Sweeteners", icon: "/images/badges/icon-no-sweetener.png", desc: "No sucralose, aspartame, or high-fructose corn syrups, ever." },
  { name: "0% Artificial Flavors", icon: "/images/badges/icon-no-flavors.png", desc: "Real fruit extracts and natural plant-derived essence." },
  { name: "Certified Vegan", icon: "/images/badges/icon-vegan.png", desc: "100% plant-derived without animal biproducts." },
  { name: "Certified Kosher", icon: "/images/badges/icon-kosher.png", desc: "Strictly supervised purity and kosher certification." },
  { name: "Top 9 Allergen Free", icon: "/images/badges/icon-allergen-free.png", desc: "Free from milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, and sesame." },
  { name: "Gluten Free", icon: "/images/badges/icon-gluten-free.png", desc: "Tested gluten-free for sensitive pediatric digestive systems." }
];

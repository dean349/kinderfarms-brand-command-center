import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        kf: {
          strawberry: "#E8416F",
          cherry: "#D6443F",
          citrus: "#F27A1A",
          lemon: "#F2C14E",
          berry: "#8B5CBF",
          raspberry: "#C13584",
          watermelon: "#F57E9E",
          tropical: "#F0A93B",
          blue: "#1A6DFF",
          pink: "#D11994",
          navy: "#171445",
          onyx: "#0E1320",
          porcelain: "#F9F7F4",
          sand: "#F6F6F6",
          leaf: "#3E9B57",
          coal: "#444749",
          gallery: "#ECECEC"
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Tropiline", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        brand: "4px",
        pill: "9999px"
      },
      maxWidth: {
        brand: "1600px"
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

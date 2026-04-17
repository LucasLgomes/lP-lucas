import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05060A",
          900: "#0A0A0F",
          800: "#111218",
          700: "#1A1B24",
          600: "#252734",
        },
        brand: {
          blue: "#2563EB",
          blueLight: "#3B82F6",
          violet: "#8B5CF6",
          violetLight: "#A78BFA",
          amber: "#F59E0B",
          emerald: "#10B981",
          pink: "#EC4899",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "aurora": "aurora 20s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "glow": "glow 2.5s ease-in-out infinite",
        "grain": "grain 8s steps(10) infinite",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "shine": "shine 3s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(30px, -30px) rotate(90deg)" },
          "50%": { transform: "translate(-20px, 20px) rotate(180deg)" },
          "75%": { transform: "translate(20px, 30px) rotate(270deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glow: {
          "0%, 100%": {
            "box-shadow": "0 0 20px rgba(37, 99, 235, 0.35), 0 0 40px rgba(139, 92, 246, 0.25)",
          },
          "50%": {
            "box-shadow": "0 0 40px rgba(37, 99, 235, 0.65), 0 0 80px rgba(139, 92, 246, 0.5)",
          },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "20%": { transform: "translate(-10%, 5%)" },
          "30%": { transform: "translate(5%, -10%)" },
          "40%": { transform: "translate(-5%, 15%)" },
          "50%": { transform: "translate(-10%, 5%)" },
          "60%": { transform: "translate(15%, 0)" },
          "70%": { transform: "translate(0, 10%)" },
          "80%": { transform: "translate(-15%, 0)" },
          "90%": { transform: "translate(10%, 5%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "1" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        shine: {
          "0%": { "background-position": "-200% center" },
          "100%": { "background-position": "200% center" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, transparent 0%, #05060A 70%)",
      },
    },
  },
  plugins: [],
};

export default config;

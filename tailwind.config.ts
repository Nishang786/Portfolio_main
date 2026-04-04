import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#060816",
        "surface-2": "#0b1220",
        "surface-3": "#111a2c",
        stroke: "rgba(148, 163, 184, 0.18)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(96, 165, 250, 0.14), 0 24px 80px rgba(15, 23, 42, 0.55)",
        panel: "0 30px 120px rgba(2, 8, 23, 0.52)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(56, 189, 248, 0.14), transparent 28%), radial-gradient(circle at 80% 0%, rgba(168, 85, 247, 0.14), transparent 24%), linear-gradient(180deg, rgba(3, 7, 18, 0.92) 0%, rgba(2, 6, 23, 1) 100%)",
        "line-glow":
          "linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.55) 48%, rgba(168, 85, 247, 0.55) 52%, transparent 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-16px,0)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-2%, 2%, 0)" },
          "100%": { transform: "translate3d(0,0,0)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        drift: "drift 22s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./next-env.d.ts",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0a0a0e",
          800: "#121216",
          700: "#1a1a24",
          600: "#272737",
          500: "#363647",
          400: "#474758",
          300: "#676779",
          200: "#97979a",
          100: "#bababa",
          50: "#eaeaea",
        },
        primary: {
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          glow: "rgba(99, 102, 241, 0.5)"
        },
        accent: {
          500: "#8b5cf6",
          600: "#7c3aed",
          glow: "rgba(139, 92, 246, 0.5)"
        },
        success: {
          500: "#10b981",
          glow: "rgba(16, 185, 129, 0.5)"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "conic-gradient(from 180deg at 50% 50%, #0a0a0e 0deg, #121216 180deg, #272737 360deg)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.02) 100%)",
        "glass-hover": "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.05) 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(39,39,55,0.8) 0%, rgba(26,26,36,0.9) 100%)",
        "glow-primary": "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.15), transparent 40%)",
        "glow-accent": "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.15), transparent 40%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      backdropBlur: {
        "xs": "2px",
      },
    },
  },
  plugins: [],
};

export default config;
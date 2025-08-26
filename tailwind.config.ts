import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config: Config = withUt({
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        foreground: "var(--text-light)",
        card: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-light)",
        },
        popover: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-light)",
        },
        primary: {
          DEFAULT: "var(--accent-red)",
          foreground: "var(--text-light)",
        },
        secondary: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-light)",
        },
        muted: {
          DEFAULT: "var(--bg-secondary)",
          foreground: "var(--text-light)",
        },
        accent: {
          DEFAULT: "var(--accent-red)",
          foreground: "var(--text-light)",
        },
        destructive: {
          DEFAULT: "var(--accent-red)",
          foreground: "var(--text-light)",
        },
        border: "var(--accent-red)",
        input: "var(--bg-secondary)",
        ring: "var(--accent-red)",
      },
      fontFamily: {
        stencil: [
          '"Special Elite"',
          '"Rubik Mono One"',
          "system-ui",
          "sans-serif",
        ],
        industrial: [
          '"Special Elite"',
          '"Rubik Mono One"',
          "system-ui",
          "sans-serif",
        ],
        condensed: ['"Roboto Condensed"', "system-ui", "sans-serif"],
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "glitch-subtle": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-1px, 1px)" },
          "40%": { transform: "translate(-1px, -1px)" },
          "60%": { transform: "translate(1px, 1px)" },
          "80%": { transform: "translate(1px, -1px)" },
        },
        shake: {
          "0%, 100%": { transform: "translate(0)" },
          "25%": { transform: "translate(-2px)" },
          "75%": { transform: "translate(2px)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        glitch: "glitch 0.2s ease-in-out",
        "glitch-subtle": "glitch-subtle 0.3s ease-in-out",
        shake: "shake 0.1s ease-in-out",
        flicker: "flicker 0.5s ease-in-out infinite",
      },
      backgroundImage: {
        "grunge-overlay": "url('/assets/textures/noise.svg')",
        "brush-stroke": "url('/assets/textures/brush-stroke.svg')",
      },
      maskImage: {
        s1: "url('/masks/s1.svg')",
        s2: "url('/masks/s2.svg')",
      },
      maskSize: {
        cover: "cover",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        ".mask-s1": {
          "-webkit-mask-image": "url('/masks/s1.svg')",
          "mask-image": "url('/masks/s1.svg')",
          "-webkit-mask-size": "cover",
          "mask-size": "cover",
        },
        ".mask-s2": {
          "-webkit-mask-image": "url('/masks/s2.svg')",
          "mask-image": "url('/masks/s2.svg')",
          "-webkit-mask-size": "cover",
          "mask-size": "cover",
        },
      };
      addUtilities(newUtilities);
    },
  ],
});
export default config;

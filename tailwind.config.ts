import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#080B10",
        deep: "#0C121B",
        panel: "#0F1721",
        line: "#1C2733",
        ink: "#E7ECF2",
        muted: "#8B98AA",
        cyan: "#5FE8D2",
        blue: "#4FA6F0",
        violet: "#9C86F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

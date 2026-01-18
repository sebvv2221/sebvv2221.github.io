import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "Iowan Old Style", "Times New Roman", "serif"],
        body: ["Space Grotesk", "Helvetica Neue", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        base: "var(--color-base)",
        card: "var(--color-card)",
        "card-alt": "var(--color-card-alt)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        "accent-strong": "var(--color-accent-strong)",
        border: "var(--color-border)",
        nav: "var(--color-nav)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
        hero: "var(--shadow-hero)",
      },
    },
  },
  plugins: [],
} satisfies Config;

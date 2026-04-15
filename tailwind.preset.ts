/**
 * Dean Bryan Design System — Tailwind Preset
 *
 * Usage in consuming app tailwind.config.ts:
 *   import preset from './design-system/tailwind.preset';
 *   export default { presets: [preset], content: [...] }
 */

import type { Config } from "tailwindcss";

const preset: Partial<Config> = {
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        body: ["Work Sans", "system-ui", "sans-serif"],
        sans: ["Work Sans", "system-ui", "sans-serif"],
        serif: ["Newsreader", "Georgia", "serif"],
        farsi: ["Vazirmatn", "Noto Sans Arabic", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "display-xl": ["3.5rem", { lineHeight: "1.08", fontWeight: "700" }],
        "display-lg": ["2.75rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["2rem", { lineHeight: "1.15", fontWeight: "600" }],
        "display-sm": ["1.563rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-lg": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-md": ["1.125rem", { lineHeight: "1.35", fontWeight: "600" }],
        "body-lg": ["1rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["0.9375rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.5", fontWeight: "500" }],
        overline: ["0.6875rem", { lineHeight: "1.4", fontWeight: "600", letterSpacing: "0.15em" }],
      },
      colors: {
        ink: "#0E0E0C",
        charcoal: "#0E0E0C",
        "on-surface": "#3E2723",
        "on-surface-muted": "#8D7E71",
        "outline-variant": "#B8B0A8",
        "surface-silk": "#F5F3F3",
        "surface-low": "#EFEEED",
        "surface-mid": "#E8E6E5",
        "surface-high": "#DEDCDB",
        espresso: {
          DEFAULT: "#3E2723",
          dark: "#2C1B18",
          container: "#3E2723",
        },
        "warm-gold": "#8D7E71",
        sable: "#141210",
        linen: "#EDE4D4",
        sand: { DEFAULT: "#D4C4A8", deep: "#B8A88A" },
        "warm-cream": "#F5EFE4",

        stone: { DEFAULT: "hsl(var(--stone))", foreground: "hsl(var(--stone-foreground))" },
        garden: { DEFAULT: "hsl(var(--garden))", foreground: "hsl(var(--garden-foreground))", hover: "hsl(var(--garden-hover))" },
        evening: { DEFAULT: "hsl(var(--evening))", foreground: "hsl(var(--evening-foreground))" },
        cream: { DEFAULT: "hsl(var(--cream))", foreground: "hsl(var(--cream-foreground))" },
        clay: { DEFAULT: "hsl(var(--clay))", foreground: "hsl(var(--clay-foreground))", hover: "hsl(var(--clay-hover))" },
        persian: { DEFAULT: "hsl(var(--persian))", foreground: "hsl(var(--persian-foreground))" },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: { sm: "6px", md: "8px", lg: "var(--radius)", xl: "16px", "2xl": "20px" },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        focus: "0 0 0 3px hsl(var(--ring) / 0.3)",
        card: "var(--shadow-md)",
        "card-hover": "var(--shadow-lg)",
      },
      spacing: { "4.5": "1.125rem", "13": "3.25rem", "15": "3.75rem", "18": "4.5rem", "22": "5.5rem" },
      maxWidth: { prose: "720px", content: "1080px", wide: "1280px", narrow: "560px" },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "slide-up": { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "slide-in-right": { from: { opacity: "0", transform: "translateX(16px)" }, to: { opacity: "1", transform: "translateX(0)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 200ms ease-out",
        "slide-up": "slide-up 200ms ease-out",
        "slide-in-right": "slide-in-right 250ms ease-out",
      },
    },
  },
};

export default preset;

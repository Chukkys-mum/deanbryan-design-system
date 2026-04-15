# Dean Bryan Design System

Shared design system for the Dean Bryan family of sites. Murusha Stitch palette (Manuscript light + Obsidian & Silk dark).

## What's here

- `tokens/colors.css` — HSL colour tokens (light + dark) and legacy aliases
- `tokens/tokens.css` — motion, z-index, icon sizes, skeleton shimmer
- `tokens/accessibility.css` — WCAG 2.1 AA focus, touch targets, high contrast, skip link
- `tokens/rtl.css` — RTL / logical-property utilities
- `tokens/containers.css` — CSS container query helpers
- `tokens/print.css` — print stylesheet
- `tailwind.preset.ts` — Tailwind preset (fonts, typography, shadows, radius, colours)
- `index.css` — imports all token files in order

## Used by

- `deanbryan-website` — public site (deanbryan.co.uk)
- `deanbryan-admin` — admin CMS (admin.deanbryan.co.uk)
- `deanbryan-app` — agent portal (app.deanbryan.co.uk)

## Usage

Add as a git submodule:

```bash
git submodule add https://github.com/Chukkys-mum/deanbryan-design-system.git design-system
```

In `src/index.css`:

```css
@import "../design-system/index.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

In `tailwind.config.ts`:

```ts
import preset from "./design-system/tailwind.preset";

export default {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
};
```

## Updating

```bash
cd your-app
git submodule update --remote design-system
git add design-system
git commit -m "Update design system"
```

## Palette

Primary espresso `#3E2723` on silk `#F5F3F3`. Dark mode inverts to silk on obsidian.

Fonts: Newsreader (serif), Work Sans (sans), Vazirmatn (Farsi), JetBrains Mono (mono).

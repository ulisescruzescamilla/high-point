# AGENTS.md

## Commands

```bash
npm run dev       # dev server with HMR
npm run build     # tsc -b && vite build (type-check then bundle)
npm run lint      # eslint .
npm run preview   # vite preview
```

No test runner configured.

## Architecture

Single React component (`src/App.tsx`) rendered into `#root` via `src/main.tsx`. No routing, no state management, no backend.

**CSS:** Design tokens in `src/index.css` (`:root`). Component styles in `src/App.css` using native CSS nesting. Light theme only (no dark mode).

**Asset loading:** Most images use raw string paths (`/src/...`) served from `public/src/`. The hero image is the only one imported as a module (`import heroImg from '/src/hero.png'`).

**Content:** Spanish-language real estate landing page. Sections: hero, razones, amenidades (carousel + grid), departamentos (tabbed floor plans), acabados (tabbed finishes), ubicación, footer/contacto.

## Conventions

- Uses `erasableSyntaxOnly: true` in tsconfig — no `enum`s, no `namespace`s, no `constructor parameter properties`.
- Uses `verbatimModuleSyntax: true` — use `import type` for type-only imports.
- All static assets are in `public/` (especially `public/src/` with images), not `src/assets/`.
- `src/assets/` contains only boilerplate files (react.svg, vite.svg) — don't assume it's the primary asset directory.

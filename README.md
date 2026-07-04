# Tolu the Shopper

Premium personal shopping & errand service, Lagos, Nigeria. Built with Vite, React, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Start the dev server with hot reload      |
| `npm run build`    | Production build to `dist/`               |
| `npm run preview`  | Serve the production build locally        |
| `npm run lint`     | Run ESLint                                |

## Project structure

```
src/
├── assets/
│   ├── fonts/          Self-hosted Playfair Display & Poppins (.woff2)
│   └── images/         Logo, favicon, owner portrait
├── components/
│   ├── icons/          Shared inline-SVG icon components
│   ├── Reveal.jsx       Scroll-into-view wrapper (IntersectionObserver)
│   ├── Navbar.jsx, Hero.jsx, About.jsx, ...   One component per section
│   └── ...
├── data/
│   └── content.js       All page copy: nav links, features, services,
│                         categories, markets, testimonials, FAQ, links
├── hooks/
│   ├── useTheme.js       Dark/light mode, persisted to localStorage
│   ├── useScrollReveal.js
│   ├── useScrollY.js
│   ├── useScrollProgress.js
│   ├── useCounter.js
│   └── useLoader.js
├── App.jsx               Assembles all sections
├── main.jsx               React entry point
└── index.css              Tailwind directives + @font-face + design system CSS
```

## Editing content

Nearly all page copy — feature/service descriptions, category cards, markets,
testimonials, FAQ, nav links, the WhatsApp number and email — lives in
`src/data/content.js`. Edit it there rather than hunting through components.

To change the WhatsApp number, update `WHATSAPP_NUMBER` in `content.js`; every
link on the site (nav, hero, contact, footer, floating button, category
pre-filled messages) is derived from it.

## Deploying to Vercel

This repo includes a `vercel.json` already configured for a Vite build.

**Option A — CLI:**
```bash
npm i -g vercel
vercel
```

**Option B — Git:** push to GitHub/GitLab/Bitbucket and import the repo at
[vercel.com/new](https://vercel.com/new). Vercel will detect the Vite
framework preset automatically; the build command and output directory are
already set in `vercel.json` (`npm run build` → `dist`).

## Notes on fidelity to the original

- Colors, fonts, copy, and all animations/effects (scroll reveal, ticket
  motif, torn-edge banner, FAQ accordion, glass nav, floating blobs) are
  carried over as-is from the original single-file build.
- Fonts and images that were inlined as base64 are now real files in
  `src/assets/`, self-hosted (no external font/CDN requests), which keeps
  the original's offline-friendly approach but out of the JS/CSS bundle text.
- Dark/light mode now persists across visits via `localStorage` (the
  original kept it in memory only, with a comment noting this as a TODO
  for a real deployment).
- All `target="_blank"` links use `rel="noopener noreferrer"`.

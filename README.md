# Portfolio — Next.js

A single-page-app-style portfolio with a fixed profile card on the left and an
icon-only top navbar (with hover tooltips) for **Home / Projects / Experience /
Education / Publications**.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **next/image** for automatic AVIF/WebP conversion, responsive `sizes`,
  lazy-loading, and long-lived HTTP caching
- **next/font/google** (Fraunces, Inter, IBM Plex Mono) — self-hosted at
  build time, zero layout shift, no runtime request to Google Fonts
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first `npm run build` needs an internet
connection once, to download the Google Fonts used by `next/font` — after
that they're bundled locally.

## Where to make it yours

| What | File |
|---|---|
| Your photo | `public/profile.jpg` — replace with a real portrait, ideally 1200×1600 or taller (portrait orientation matches the fixed card best). |
| Name, tagline, socials | `components/Sidebar.tsx` |
| Nav items / icons | `components/Navbar.tsx` |
| Home content | `app/page.tsx` |
| Projects + thumbnails | `app/projects/page.tsx`, images in `public/projects/` |
| Experience timeline | `app/experience/page.tsx` |
| Education & certifications | `app/education/page.tsx` |
| Publications list | `app/publications/page.tsx` |
| Colors / fonts / spacing tokens | `tailwind.config.ts` |

## Layout notes

- **Desktop (`lg:` and up):** the profile card is `fixed` on the left
  (`components/Sidebar.tsx`), full viewport height. The navbar is a floating
  pill fixed to the top-center of the remaining content area. Main content
  scrolls independently on the right.
- **Mobile:** the profile card becomes a normal, non-fixed block at the top
  (so it doesn't eat the whole screen), and the navbar becomes a floating
  dock pinned to the bottom — still icon-only, tap to navigate.

## Image optimization details

- `Sidebar.tsx` uses `fill` + `priority` (it's the LCP element) with a
  `sizes` attribute matched to the actual rendered width at each breakpoint,
  so the browser never downloads a bigger image than it needs.
- `projects/page.tsx` marks only the first two above-the-fold cards as
  `priority`; the rest lazy-load automatically as the user scrolls.
- `next.config.mjs` sets `images.formats` to prefer AVIF then WebP, and a
  1-year `minimumCacheTTL` so re-visits are served from cache instantly.

## Deploying

Works out of the box on Vercel:

```bash
npx vercel
```

Or build and run anywhere Node.js is available:

```bash
npm run build
npm start
```
# portfolio-revamp

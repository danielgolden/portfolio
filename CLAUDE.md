# Portfolio — danielgolden.me

Personal portfolio and blog for Daniel Golden (UI Designer & Engineer at Stripe).

## Stack

- **Astro 6** — static site generator
- **React** — available for interactive components (via `@astrojs/react`)
- **Bun** — package manager and runtime (`bun run dev`, `bun run build`)
- **Vercel** — hosting and deployment (`@astrojs/vercel` adapter, static output)
- **Cloudflare** — DNS management for `danielgolden.me`

## Project structure

```
src/
  layouts/
    BaseLayout.astro   # Shared HTML shell: fonts, analytics, meta tags
    BlogPost.astro     # Layout for individual blog posts
  pages/
    index.astro        # Homepage (danielgolden.me/)
    rss.xml.ts         # RSS feed for /writing
    writing/
      index.astro      # Post list (danielgolden.me/writing)
      [slug].astro     # Individual post pages
  data/
    writing/           # Blog posts as Markdown files
  styles/
    styles.css         # All styles — no Tailwind, plain CSS with custom properties
  content.config.ts    # Astro content collection config (uses glob loader)
public/
  assets/              # Static assets (images, resume PDF, etc.)
  CNAME                # danielgolden.me — needed for correct domain resolution
```

## Writing / Blog

Posts live in `src/data/writing/` as Markdown files with this frontmatter:

```md
---
title: "Post title"
description: "Short description shown in the post list"
date: 2026-03-14
draft: true   # omit or set to false to publish
---
```

- `draft: true` — post is excluded from the list and not built
- Posts are sorted by date, newest first
- The RSS feed at `/rss.xml` includes all published posts

## Commands

```bash
bun run dev      # Start dev server at localhost:4321
bun run build    # Production build to dist/
bun run preview  # Preview the production build locally
vercel           # Deploy to Vercel (requires vercel CLI login)
vercel --prod    # Deploy to production
```

## Design

- Fonts: **Crimson Pro** (serif, headings/display) and **Assistant** (sans-serif, body)
- Color scheme: supports light and dark mode via `prefers-color-scheme`
- All colors defined as CSS custom properties in `src/styles/styles.css`
- No component library or utility CSS framework

## Deployment

Vercel auto-detects Astro. The `@astrojs/vercel` adapter is configured with `output: "static"`.
Site URL is set in `astro.config.mjs` as `https://danielgolden.me` (used by the RSS feed).

`danielgolden.me` is the canonical domain — `www.danielgolden.me` redirects to it (configured in Vercel dashboard).

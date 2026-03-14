# danielgolden.me

Personal portfolio and blog. Built with Astro, deployed on Vercel.

## Stack

- [Astro 6](https://astro.build) — static site generator
- [Bun](https://bun.sh) — package manager
- [Vercel](https://vercel.com) — hosting

## Development

```bash
bun install
bun run dev
```

## Writing a new post

Add a Markdown file to `src/data/writing/`:

```md
---
title: "Post title"
description: "Short description"
date: 2026-03-14
---

Post content here.
```

Set `draft: true` in the frontmatter to keep a post unpublished.

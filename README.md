# Pak Shao Lin

Official website for **Associacao Pak Shao Lin de Kung Fu**, a traditional Chinese martial arts school founded in 1984 by Mestre Gilmar Dantas in Sao Paulo, Brazil.

**Live site:** [pakshaolin.org](https://pakshaolin.org)

## Tech Stack

- [Astro 5](https://astro.build) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first styling via `@tailwindcss/vite`
- [GSAP](https://gsap.com) — scroll-driven animations
- TypeScript

## Features

- **Bilingual (PT/EN)** — route-based i18n with `/pt/` and `/en/` prefixes
- **Zero JS by default** — animations load only on pages that use them
- **Content collections** — instructors, styles, cultural topics, news, philosophy, and famous martial artists managed via Markdown + Zod schemas
- **SEO-ready** — sitemap, Open Graph tags, hreflang links, and JSON-LD structured data
- **40+ pages** — mirrored across both languages

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
```

## Scripts

| Command           | Action                       |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start dev server             |
| `npm run build`   | Build static site to `dist/` |
| `npm run preview` | Preview production build     |

## Project Structure

```
src/
├── components/       # Astro components (Header, Footer, SEO, animations)
├── content.config.ts # Collection schemas (instructors, styles, news, etc.)
├── data/             # Markdown content files
│   ├── instructors/
│   ├── styles/
│   └── ...
├── i18n/
│   └── ui.ts         # Translations and route mapping helpers
├── layouts/
│   ├── BaseLayout.astro
│   └── ContentLayout.astro
├── pages/
│   ├── index.astro   # Root (serves PT homepage)
│   ├── pt/           # Portuguese pages
│   └── en/           # English pages
└── styles/
    └── global.css    # Tailwind 4 @theme config
public/
├── images/           # Optimized images (instructors, gallery, etc.)
├── favicon.ico
└── og-image.jpg
```

## License

All rights reserved. Content and images are property of Associacao Pak Shao Lin de Kung Fu.

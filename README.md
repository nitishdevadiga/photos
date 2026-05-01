# nitz.clicks

A photography portfolio. Astro + TypeScript + SCSS. Deploys static to GitHub Pages.

## Stack

- **Astro 5** — static site, zero JS by default, image optimization built-in
- **TypeScript** (strict) — type-safe data and scripts
- **SCSS modules** — design tokens in `src/styles/_tokens.scss`
- **Sharp** — automatic WebP conversion + responsive `srcset`

## Run locally

```bash
npm install
npm run dev
# → open http://localhost:4321/photos/
```

## Build & deploy

```bash
npm run build
# → outputs to ./dist
```

The site is configured to deploy at `https://nitishdevadiga.github.io/photos/` (see `astro.config.mjs`). To deploy to GitHub Pages:

1. Push this whole folder (including `dist` is fine, or use a workflow — see below)
2. In repo Settings → Pages → set Source = `Deploy from a branch`, Branch = `main`, Folder = `/dist` (or use a workflow)

### Recommended: GitHub Actions auto-deploy

Drop `.github/workflows/deploy.yml` into the repo (template included in this folder). On every push to `main`, it builds and publishes the site.

## Add a new photo

1. Drop the `.jpeg` (or `.png`/`.webp`) into `src/assets/photos/`
2. Open `src/data/photos.ts` and add an entry:

```ts
{
  id: '24',
  src: img('24-your-filename.jpeg'),
  title: 'Your title',
  caption: 'Short, evocative caption.',
  moods: ['quiet', 'dark'],   // pick from: quiet, burning, dark, wander, sacred, conceptual
  date: '2025-04',
  featured: false,             // true if you want it on the homepage
  aspect: 'portrait',
}
```

That's it. The featured grid, archive, and lightbox auto-update.

## Project structure

```
src/
├── assets/photos/     # source images (optimized at build)
├── components/        # Astro components
│   ├── Hero.astro
│   ├── FeaturedGrid.astro
│   ├── MoodArchive.astro
│   ├── About.astro
│   └── Lightbox.astro
├── data/photos.ts     # ⭐ single source of truth
├── layouts/Base.astro
├── pages/index.astro
├── scripts/           # client-side TS
│   ├── main.ts
│   ├── lightbox.ts
│   ├── filter.ts
│   └── reveal.ts
└── styles/
    ├── _tokens.scss   # ⭐ design system
    └── global.scss
```

## Design tokens

Edit `src/styles/_tokens.scss` to change the palette, type, or motion globally. Current direction:

- Near-black canvas (`#0a0807`)
- Bone-white text (`#ede5d8`)
- Single rust accent (`#b85432`), used sparingly
- Fraunces (display serif) + JetBrains Mono (technical labels)
- Fast, decisive motion (no spring/bounce)

## License

Photos © Nitish Devadiga. Code MIT.

# Nihal Machhi — Portfolio

A compact, responsive portfolio built with Next.js App Router, TypeScript, and CSS. It includes Home, Projects, Writing, and Favorites views, searchable and filterable links, and a persistent light/dark theme.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

## Structure

- `src/app/` — routes, shared layout, transitions, and global styles
- `src/components/` — portfolio shell, sections, navigation, and favorites controls
- `src/data/` — portfolio and favorites content
- `src/assets/` — local images

The theme preference is saved in local storage. The favorites page supports text search, category filtering, and latest/name sorting.

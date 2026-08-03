# Portfolio Agent Instructions

This repository is a small Next.js portfolio site using the App Router, TypeScript, and Tailwind CSS. Keep changes minimal, polished, and aligned with the existing visual style.

## Project structure

- Use [src/app](src/app) for routes, layout, and page-level composition.
- Keep shared UI in [src/components](src/components).
- Store local assets such as images in [src/assets](src/assets).
- Prefer the existing `@/*` path alias for imports from [src](src).

## Development workflow

- Start the app with `npm run dev`.
- Verify changes with `npm run build`.
- Run `npm run lint` before finishing UI or component work.

## Coding conventions

- Prefer server components by default; add `"use client"` only when browser interactivity is required.
- Keep styling in Tailwind utility classes rather than introducing new styling systems.
- Follow the current minimalist, content-first UI tone used in [src/app/page.tsx](src/app/page.tsx) and [src/components/navbar.tsx](src/components/navbar.tsx).
- Use `next/image` for local images and keep assets lightweight.
- Avoid adding new dependencies unless they are clearly necessary.

## When editing the site

- Preserve the existing simple navigation and layout patterns.
- If you add a new route, update the navbar links in [src/components/navbar.tsx](src/components/navbar.tsx).
- Keep interactions accessible and lightweight.

## References

- See [README.md](README.md) for the starter setup and general Next.js notes.

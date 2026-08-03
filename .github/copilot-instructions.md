# Copilot instructions for this repository

This is a lightweight Next.js portfolio app. Treat it as a small, polished content site rather than a large application.

- Prefer the existing App Router structure in [src/app](src/app).
- Keep reusable UI in [src/components](src/components) and use the `@/*` alias for imports.
- Use Tailwind utility classes and preserve the calm, minimal visual style already present in the app.
- Use `npm run dev` for local development, `npm run build` for verification, and `npm run lint` before finishing changes.
- Avoid unnecessary dependencies or over-engineering.
- If a new page is added, make sure navigation remains consistent with [src/components/navbar.tsx](src/components/navbar.tsx).

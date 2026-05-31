# Ali E. Torkayesh — Academic Portfolio

A quiet, content-first personal website for **Dr. Ali E. Torkayesh**, postdoctoral researcher at
**RWTH Aachen University** and **Forschungszentrum Jülich**, working at the intersection of
sustainable transport, renewable fuels, Power-to-X policy analysis, energy-market dynamics, and
multi-criteria decision making.

The site presents publications, grants, awards, teaching, supervision, conferences, services, and
software in a calm, academic register — designed to read like a scholarly profile rather than a
marketing page, with first-class SEO and accessibility throughout.

> Live site: configured via `NEXT_PUBLIC_SITE_URL` (e.g. `https://torkayesh-portfolio.vercel.app`)

---

## Highlights

- **Single source of truth** — all scholarly content lives in typed TypeScript data files under
  `src/data/`, validated against domain types in `src/types/`. No CMS, no database.
- **Static & fast** — built on the Next.js App Router with React Server Components, optimized fonts,
  and Vercel Analytics + Speed Insights.
- **SEO & a11y first** — generated `sitemap.ts`, `robots.ts`, JSON-LD structured data, skip-to-content,
  semantic headings, and keyboard-navigable UI.
- **Searchable** — client-side fuzzy search (Fuse.js) across publications and other records.
- **Theming** — light/dark mode via `next-themes`, with motion handled by Framer Motion.

---

## Tech Stack

| Area        | Choice                                             |
| ----------- | -------------------------------------------------- |
| Framework   | Next.js (App Router, v15+) + React 19              |
| Language    | TypeScript (strict, `noUncheckedIndexedAccess`)    |
| Styling     | Tailwind CSS v4 (no global stylesheets for styles) |
| Animation   | Framer Motion                                      |
| Search      | Fuse.js                                            |
| Icons       | lucide-react                                       |
| Theming     | next-themes                                        |
| Analytics   | @vercel/analytics, @vercel/speed-insights          |

---

## Project Structure

```
src/
├── app/                 # App Router routes
│   ├── page.tsx         # Home (about, research, skills, previews)
│   ├── publications/    # Full publication list with search
│   ├── research/        # Research focus & projects
│   ├── conferences/     # Talks & conference presentations
│   ├── awards/          # Honors & recognition
│   ├── supervision/     # Student supervision
│   ├── contact/         # Contact details
│   ├── sitemap.ts       # Generated sitemap
│   └── robots.ts        # Generated robots rules
├── components/
│   ├── sections/        # Page-level composed sections
│   └── ui/              # Reusable presentational primitives
├── data/                # Typed content — the source of truth
├── types/               # Domain types for each content kind
├── lib/                 # fonts, seo helpers, utils
└── hooks/
```

Each content domain has a paired `types/*.ts` definition and `data/*.ts` content file:
`publications`, `grants`, `awards`, `teaching`, `supervision`, `services`, `conferences`,
`education`, `positions`, `experiences`, `industry`, `software`, `skills`, and `person`.

---

## Getting Started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the local development server   |
| `npm run build` | Create a production build            |
| `npm start`     | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

### Environment

Copy `.env.example` to `.env.local` and set the canonical site URL used for metadata, the sitemap,
robots, and JSON-LD:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

---

## Editing Content

All scholarly records are plain TypeScript — no admin UI is needed.

1. Open the relevant file in `src/data/` (e.g. `publications.ts`).
2. Add or edit an entry; the matching type in `src/types/` enforces the shape.
3. Save — the dev server hot-reloads. Run `npm run build` before deploying.

For example, the homepage hero stats and biography are defined once in `src/data/person.ts`.

---

## Conventions

- **No global CSS for styling.** `globals.css` holds only CSS-variable definitions and bare resets.
  All component styles use Tailwind classes, CSS Modules, `<style>` blocks, or inline styles.
- **Quiet, academic UI.** Favor restrained, scholarly presentation over marketing-style flourishes.
- **Preserve SEO & accessibility** on every public-facing page.
- This project uses a newer Next.js with breaking changes — see `AGENTS.md` and consult the local
  docs in `node_modules/next/dist/docs/` before changing framework code.

---

## Deployment

Optimized for [Vercel](https://vercel.com). Push to the connected repository, set
`NEXT_PUBLIC_SITE_URL` in the project environment, and deploy. Any platform that supports a Next.js
production build (`npm run build` + `npm start`) will also work.

---

## License

All rights reserved. Scholarly content (publications, biography, CV, and related materials) belongs
to Ali E. Torkayesh.

# Ali E. Torkayesh — Academic Portfolio

A quiet, content-first personal website for **Dr. Ali E. Torkayesh**, postdoctoral researcher at
**RWTH Aachen University** and **Forschungszentrum Jülich**, working at the intersection of
sustainable transport, renewable fuels, Power-to-X policy analysis, energy-market dynamics, and
multi-criteria decision making.

The site presents publications, grants, awards, teaching, supervision, conferences, services, and
software in a calm, academic register — designed to read like a scholarly profile rather than a
marketing page, with first-class SEO and accessibility throughout.

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

## License

All rights reserved. Scholarly content (publications, biography, CV, and related materials) belongs
to Ali E. Torkayesh.

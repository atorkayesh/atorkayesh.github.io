# Portfolio for Dr. Ali E. Torkayesh — Project Overview

> Academic portfolio for a postdoctoral researcher at RWTH Aachen University and Forschungszentrum Jülich,
> specializing in sustainable transport, renewable fuels, Power-to-X policy analysis, and market dynamics.

---

## Person at a Glance

| Field | Detail |
|---|---|
| **Name** | Ali E. Torkayesh |
| **Current Role** | Postdoctoral Researcher |
| **Affiliations** | RWTH Aachen University (LuF Economics of Sustainability) · Forschungszentrum Jülich (ICE-JSA) |
| **Research Focus** | Sustainable transport · Renewable fuels · Power-to-X · Policy analysis · Market dynamics · Multi-criteria decision making |
| **PhD** | RWTH Aachen University, 2021–2026 — Management, Business & Economics |
| **MSc** | Sabancı University, 2018–2020 — Industrial Engineering |
| **Publications** | 20+ peer-reviewed papers in top journals (Applied Energy, EJOR, Cleaner Production, IEEE TEM…) |
| **Active Grants** | DFG (Fuel Science Center), BMBF SupplHyInno (~€1.58M), Forschungszentrum Jülich (ISPF) |
| **Awards** | RWTH–Tsinghua Fellowship, IDEA League Grant, DAAD ERA Green Hydrogen Fellowship, Best Presentation (Cambridge), … |
| **Languages** | English, German, Turkish (full professional), Azerbaijani & Persian (native) |

---

## Portfolio Goal

A publicly accessible, SEO-optimised academic portfolio that:

1. Acts as a **living CV** — everything on the PDF CV is also on the web
2. Surfaces **research impact** — publications with journal links, grant funding amounts, award names
3. Provides a **clean contact point** for collaborators, institutions, and conference organizers
4. Signals **technical credibility** — software packages, GitHub links, Vercel speed
5. Replaces the need to email a PDF for most discovery use cases (Google, LinkedIn referrals, conference Google searches)

**Audience:** Hiring committees at research universities, grant reviewers, potential PhD supervisors, conference organizers, and collaborating research groups.

---

## Technology Decisions

### Framework: Next.js 14+ (App Router)

**Why Next.js over plain React:**

| Concern | Decision |
|---|---|
| **SEO** | Academic discoverability is critical — Google Scholar, institutional search, conference organizer Google searches. SSG/SSR with `next/metadata` per page wins. |
| **Performance** | Static generation → Vercel CDN edge → LCP < 1.2s. Publications list can be large; React alone would need extra setup. |
| **Routing** | File-based App Router is clean for `/publications`, `/publications/[slug]`, `/cv`, etc. |
| **Metadata** | `generateMetadata()` per page = correct OG tags for every publication and section. |
| **MDX** | `@next/mdx` for any rich text content sections without a CMS. |
| **Deployment** | Zero-config Vercel deploy with preview URLs on every branch. |

### Full Stack Decisions

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | SEO, SSG, metadata per page |
| **Language** | TypeScript strict mode | Zero `any`, safe props across all data |
| **Styling** | Tailwind CSS v4 | Utility-first; academic color tokens via CSS custom properties |
| **Typography** | `next/font` — Inter (body) + Playfair Display (headings) | Humanist sans + classic academic serif |
| **Animations** | Framer Motion — subtle only | Fade-in on scroll sections, no parallax/carousel |
| **Icons** | Lucide React | Consistent, accessible SVG icons |
| **Content** | TypeScript data files (`/data/`) | Publications, grants, awards as typed arrays — no CMS needed |
| **Search** | Fuse.js | Client-side fuzzy search for publications list |
| **Dark Mode** | Tailwind `class` strategy + `next-themes` | No flash on load; respects system preference |
| **Analytics** | Vercel Analytics + Speed Insights | Privacy-first, zero cookie banner needed |
| **Deployment** | Vercel | Free tier, preview deploys, edge CDN |
| **Error Monitoring** | Sentry (optional) | Same pattern as existing portfolio |

### NOT included (intentional)

- No CMS (Contentful, Sanity) — data is stable typed arrays, not frequently edited by non-devs
- No database — purely static + client-side search
- No contact form backend — mailto link + LinkedIn; no spam risk
- No i18n — English only
- No blog — not in scope for an academic portfolio at this stage

---

## Design Language

### Philosophy

> "Princeton faculty page meets modern web standards."

Academic portfolios should feel **authoritative, calm, and precise** — not startup-y. The design must signal that this person is serious, rigorous, and internationally connected. Every visual decision should reinforce intellectual credibility.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1a2e4a` (deep navy) | Headings, nav, accent borders |
| `--color-accent` | `#2563eb` (academic blue) | Links, CTAs, highlighted stats |
| `--color-surface` | `#f8f9fb` (near white) | Page background (light mode) |
| `--color-muted` | `#6b7280` | Secondary text, metadata |
| `--color-border` | `#e5e7eb` | Dividers, card borders |
| Dark mode surfaces | `#0f172a` / `#1e293b` | Slate dark backgrounds |

### Typography

- **Display headings (h1, hero name):** Playfair Display — gives gravitas, academic authority
- **Section headings (h2, h3):** Inter SemiBold — clean, modern, readable at all sizes
- **Body / metadata:** Inter Regular — legible at small sizes (journal names, affiliations)
- **Publication titles:** Inter Medium — distinguishable but not heavy
- **Code / tech labels:** JetBrains Mono or system monospace — for skill badges, tool names

### Layout Principles

- **Max width:** `1024px` — focused reading width, never full-bleed text
- **Spacing:** 4px base grid (Tailwind default)
- **Section rhythm:** `py-20 md:py-28` — generous whitespace between sections
- **No horizontal scroll at any viewport width (320px → 2560px)**
- **Print stylesheet** — page is printable as a clean 2-column document

### Component Aesthetic

- Cards: subtle `border border-slate-200` + `shadow-sm`, no heavy drop shadows
- Badges: small pills — journal names, grant sources, conference locations
- Timeline: vertical line with dot markers — for Education, Career, Awards
- Publication entries: numbered list style matching academic convention
- Hover states: `opacity` or `color` shift only — no lift/translate effects
- Focus rings: visible, high contrast (`ring-2 ring-blue-600`)

---

## Site Structure & Pages

```
/                          Landing — Hero + key stats strip + About
/publications              Full searchable publications list (filterable by year/journal/topic)
/research                  Research areas overview + current projects
/cv                        Redirect to /ali-cv.pdf download
/contact                   Contact info + social links

Anchor sections on /       (single-page behavior with smooth scroll)
  #hero
  #about
  #research
  #education
  #positions
  #publications-preview    (latest 5, link to /publications)
  #grants
  #awards
  #teaching
  #conferences
  #academic-experiences
  #supervision
  #services
  #software
  #skills
  #contact
```

---

## Data Architecture

All content lives in `/src/data/` as typed TypeScript arrays. No CMS, no database.

```
src/
├── data/
│   ├── publications.ts      # 20+ publications with journal, year, DOI, authors
│   ├── grants.ts            # Research grants with funder, PI, amount, year
│   ├── awards.ts            # Honors & awards with year and description
│   ├── positions.ts         # Academic positions (timeline)
│   ├── education.ts         # Education entries
│   ├── teaching.ts          # Teaching positions + courses
│   ├── conferences.ts       # Conference presentations
│   ├── experiences.ts       # Visiting researcher, PhD school, summer school
│   ├── supervision.ts       # PhD, Masters, Bachelor, Intern students
│   ├── services.ts          # Editorial board + peer review journals list
│   ├── software.ts          # DEMATELab, Policy Coherence Kit
│   ├── skills.ts            # Programming, technical, language skills
│   └── person.ts            # Name, bio, contact, social links (single source of truth)
├── types/
│   ├── publication.ts
│   ├── grant.ts
│   ├── award.ts
│   └── ...                  # One interface per data type
```

---

## Key Sections — Detailed Design Notes

### Hero
- Full name as `h1` — always above the fold
- Title: "Postdoctoral Researcher · RWTH Aachen University & Forschungszentrum Jülich"
- One-sentence research tagline: *"Researching policy, markets, and technology adoption pathways toward climate-neutral transport"*
- Stat strip: **20+ Publications · 4 Research Grants · 10+ International Awards · 5 Countries**
- CTAs: "View Research" (smooth scroll) + "Download CV" (PDF, opens new tab)
- Subtle animated gradient background or clean geometric pattern — academic, not startup

### About
- ~150-word bio paragraph
- Research interests as tags/chips: `Sustainable Transport` · `Power-to-X` · `Policy Analysis` · `Agent-Based Modeling` · `Multi-Criteria Decision Making`
- Photo placeholder (professional academic headshot)
- Affiliation logos: RWTH Aachen + Forschungszentrum Jülich

### Publications (preview + full page)
- Preview: latest 5 with journal badges, year, "View All" link
- Full `/publications` page:
  - Filter by year (2021–2026), journal, topic tag
  - Search by title/author with Fuse.js
  - Each entry: title, authors (Ali's name bolded), journal name, year, DOI link icon
  - Numbered in reverse chronological order (academic convention)
  - Export to BibTeX consideration (Phase 2)

### Research Grants
- Cards with: project title, funder badge (DFG/BMBF/ISPF), PI name, funding amount where available, year range
- Visual distinction between lead and associate researcher roles

### Honors & Awards
- Vertical timeline with year markers
- International institutions named (RWTH-Tsinghua, TU Delft, DAAD, ETH Zürich, University of Canterbury)
- Each award includes the awarding body

### Conference Presentations
- Grouped by year (2022–2026), reverse chronological
- Each entry: title, conference name, location, date
- Location badges (flag emoji or country tag)

### Software Packages
- Two cards: DEMATELab + Policy Coherence Kit
- Python badge, brief description, GitHub link (if public)

### Student Supervision
- Tabbed: PhDs | Master's | Bachelor's | Interns
- Each entry: student name, year, thesis topic, institution(s)
- Supervised interns with DAAD funding noted

---

## Folder Structure

```
ali-torkayesh-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout — fonts, theme provider, analytics
│   │   ├── page.tsx                 # Landing page (all anchor sections)
│   │   ├── publications/
│   │   │   └── page.tsx             # Full publications page
│   │   ├── research/
│   │   │   └── page.tsx             # Research areas page
│   │   ├── cv/
│   │   │   └── route.ts             # Redirects to /ali-cv.pdf
│   │   ├── contact/
│   │   │   └── page.tsx             # Contact page
│   │   └── not-found.tsx            # 404 page
│   ├── components/
│   │   ├── ui/                      # Base components
│   │   ├── layout/                  # Header, Footer, PageWrapper, Nav
│   │   └── sections/                # One component per landing section
│   ├── data/                        # All typed content arrays
│   ├── types/                       # TypeScript interfaces
│   ├── hooks/                       # useTheme, useIntersection, useSearch
│   └── lib/                         # cn(), formatDate(), sortBy()
├── public/
│   ├── ali-cv.pdf                   # Downloadable CV
│   ├── photo.jpg                    # Professional headshot
│   ├── og-image.png                 # Open Graph preview image
│   └── favicon.ico
├── .github/
│   └── workflows/
│       └── ci.yml                   # Type-check → lint → build → deploy
├── CLAUDE.md
├── README.md
└── package.json
```

---

## Performance & Quality Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | 100 |
| Lighthouse Best Practices | 100 |
| LCP | < 1.5s |
| CLS | 0 |
| Initial JS bundle | < 150kb gzipped |
| All images | WebP via `next/image` |
| Fonts | `next/font` — zero FOUT |
| TypeScript errors | 0 |
| `any` types | 0 |

---

## Deployment Plan

1. Repository: GitHub (private initially, public after launch)
2. Deploy: Vercel — free Hobby tier
3. Domain: `alitorkayesh.com` or `torkayesh.com` (to be registered)
4. Preview deploys: every PR gets a unique preview URL
5. Production: auto-deploy on merge to `main`

---

## Out of Scope (v1)

- Blog / commentary posts
- Interactive map of conference locations
- Citation count live-fetch from Google Scholar API
- Co-author network visualization
- Multi-language support (DE/EN)
- Contact form with email delivery (Resend API)
- CMS integration

These are noted as **Phase 2** enhancements.

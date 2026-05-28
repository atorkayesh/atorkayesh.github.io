# Ali E. Torkayesh — Academic Portfolio Checklist

> Legend: `[ ]` = pending · `[x]` = done · `[-]` = skipped/deferred

---

## Phase 0 — Project Bootstrap

### 0.1 Repository & Tooling Setup
- [x] Create project checklist file
- [x] Create project overview file
- [x] Create `AGENTS.md` with local agent instructions
- [x] Add `.gitignore`
- [x] Create new git repository `ali-torkayesh-portfolio`
- [x] Initialize Next.js 15 with App Router: `npx create-next-app@latest ali-torkayesh-portfolio --typescript --tailwind --app --src-dir --import-alias "@/*"`
- [x] Confirm `next.config.ts` uses App Router (no `pages/` directory)
- [x] Enable `strict: true` and `noUncheckedIndexedAccess: true` in `tsconfig.json`
- [ ] Install additional dependencies:
  - [ ] `framer-motion` — subtle scroll animations
  - [ ] `lucide-react` — icons
  - [ ] `next-themes` — dark mode with no flash on load
  - [ ] `fuse.js` — client-side fuzzy search for publications
  - [ ] `@vercel/analytics` — privacy-first analytics
  - [ ] `@vercel/speed-insights` — performance tracking
  - [ ] `clsx` + `tailwind-merge` — `cn()` helper
- [ ] Configure `next/font` — Inter (sans) + Playfair Display (serif) loaded via `src/lib/fonts.ts`
- [ ] Create `src/lib/utils.ts` with `cn()` helper
- [ ] Set up Tailwind CSS v4 config with custom CSS tokens in `globals.css`:
  - [ ] `--color-primary` (deep navy `#1a2e4a`)
  - [ ] `--color-accent` (academic blue `#2563eb`)
  - [ ] `--color-surface`, `--color-muted`, `--color-border`
  - [ ] Dark mode equivalents
- [ ] Add `.env.example` with all used env vars documented
- [x] Create `CLAUDE.md` with project context
- [x] Initialize `README.md` with project description placeholder
- [ ] Connect to GitHub remote
- [ ] Connect GitHub repo to Vercel project (auto-deploy on push to `main`)
- [ ] Confirm preview deploy works on a test push

### 0.2 Folder Scaffold
- [ ] Create `src/data/` directory
- [ ] Create `src/types/` directory
- [ ] Create `src/components/ui/` directory
- [ ] Create `src/components/layout/` directory
- [ ] Create `src/components/sections/` directory
- [ ] Create `src/hooks/` directory
- [ ] Create `src/lib/` directory
- [ ] Create `public/` assets folder structure
- [ ] Add `public/ali-cv.pdf` placeholder (real PDF to be added before launch)
- [ ] Add `public/og-image.png` placeholder (1200×630)

---

## Phase 1 — Data Layer (TypeScript Typed Content)

All content lives in `/src/data/` as typed arrays. This is the single source of truth — every section reads from here.

### 1.1 Types (`src/types/`)
- [ ] `person.ts` — `Person` interface: name, title, bio, email, affiliations[], socialLinks{}
- [ ] `publication.ts` — `Publication` interface: id, title, authors[], journal, year, doi, tags[], type
- [ ] `grant.ts` — `Grant` interface: title, program, funder, pi, amount?, yearStart, yearEnd, projects[]
- [ ] `award.ts` — `Award` interface: title, year, awardedBy, description
- [ ] `position.ts` — `AcademicPosition` interface: role, institution, department, location, yearStart, yearEnd | "Present"
- [ ] `education.ts` — `Education` interface: degree, field, institution, location, yearStart, yearEnd, thesis?
- [ ] `teaching.ts` — `Teaching` interface: role, institution, location, yearStart, yearEnd, courses[]
- [ ] `conference.ts` — `ConferencePresentation` interface: authors[], title, conference, location, date, type: "oral" | "poster" | "proceedings"
- [ ] `experience.ts` — `AcademicExperience` interface: type, title, institution, location, yearStart, yearEnd, description?
- [ ] `supervision.ts` — `Supervised` interface: name, year, topic, institution, level: "phd" | "masters" | "bachelors" | "intern", note?
- [ ] `service.ts` — `AcademicService` interface: role, organization, yearStart, yearEnd | "Present", journals[]
- [ ] `software.ts` — `SoftwarePackage` interface: name, language, description, githubUrl?
- [ ] `skill.ts` — `Skill` interface: name, category: "programming" | "technical" | "language", level?

### 1.2 Data Files (`src/data/`)

#### `person.ts`
- [ ] Full name: Ali E. Torkayesh
- [ ] Current title: Postdoctoral Researcher
- [ ] Affiliations: RWTH Aachen University + Forschungszentrum Jülich
- [ ] Department: LuF Economics of Sustainability / ICE-JSA
- [ ] Location: Aachen, Germany
- [ ] Email: torkayesh@sustainability.rwth-aachen.de
- [ ] Email 2: atorkayesh@outlook.com
- [ ] LinkedIn URL
- [ ] Google Scholar URL
- [ ] ORCID URL
- [ ] Research interests tags array
- [ ] Bio paragraph (drafted from CV context)
- [ ] Hero stat strip values: publications count, grants count, awards count, countries count

#### `publications.ts` — 20 entries
- [ ] (1) Torkayesh, Rohner, Venghaus (2026) — SAF in Europe, agent-based simulation — Transport Policy
- [ ] (2) Torkayesh, Venghaus (2025) — Market diffusion Power-to-X, cognitive approach — Applied Energy
- [ ] (3) Elhüseyni, Celebi, Şahin, Torkayesh, Yılmaz (2025) — Cut-based matheuristic, electricity markets — Energy Sources Part B
- [ ] (4) Perez Vera, Torkayesh, Venghaus (2025) — Expert-based evaluation fuel alternatives, Germany — Case Studies on Transport Policy
- [ ] (5) Hendiani, Torkayesh, Venghaus, Walther (2025) — Type-2 fuzzy VIKOR, eco-conscious freight — Expert Systems with Applications
- [ ] (6) Vorwerg, Torkayesh, Venghaus (2025) — Fossil to alternative fuels strategy, Germany — Energy, Sustainability and Society
- [ ] (7) Torkayesh, Venghaus (2024) — Germany's Power-to-X policy for climate-neutral transport — Energy
- [ ] (8) Torkayesh, Hendiani, Walther, Venghaus (2024) — Market development barriers, renewable fuels — European Journal of Operational Research
- [ ] (9) Torkayesh, Venghaus (2024) — Decoding transport policy maze, climate neutrality — Renewable and Sustainable Energy Reviews
- [ ] (10) Maghsoodi, Torkayesh, Wood, Herrera-Viedma, Govindan (2023) — ML-driven MCDA, LS-SVM — Engineering Applications of AI
- [ ] (11) Haseli, Torkayesh, Keshteli, Venghaus (2023) — Resilient recycling partner selection, waste management — Applied Soft Computing
- [ ] (12) Torkayesh, Yazdani, Ribeiro-Soriano (2022) — Industry 4.0 in mobility sector, fuzzy QFD-BWM — J. of Industrial Information Integration
- [ ] (13) Torkayesh, Tavana, Santos-Arteaga (2022) — Interval-valued neutrosophic, municipal waste management — Cleaner Production
- [ ] (14) Simic, Torkayesh, Maghsoodi (2022) — Healthcare waste disinfection facility, fermatean fuzzy — Annals of Operations Research
- [ ] (15) Torkayesh, Alizadeh, Soltanisehat, Torkayesh S.E., Lund (2022) — Air quality assessment, Europe — Socio-Economic Planning Sciences
- [ ] (16) Yazdani, Torkayesh, Chatterjee, et al. (2022) — Fuzzy resiliency, food supply chain, Spain — Socio-Economic Planning Sciences
- [ ] (17) Torkayesh, Malmir, Asadabadi (2021) — Stratified BWM, waste disposal technology — Waste Management
- [ ] (18) Torkayesh, Deveci (2021) — TRUST approach, battery swapping stations, e-scooters — Sustainable Cities and Society
- [ ] (19) Deveci, Torkayesh (2021) — Charging type for electric buses, interval-valued neutrosophic — IEEE Transactions on Engineering Management
- [ ] (20) Yazdani, Torkayesh, Stević, et al. (2021) — Neutrosophic MCDA, CRITIC-CoCoSo, supply chain — Expert Systems with Applications
- [ ] (21) Torkayesh, Ecer, Pamucar, Karamaşa (2021) — Social sustainability, CoCoSo — Sustainable Cities & Society
- [ ] (22) Torkayesh, Zolfani, Kahvand, Khazaelpour (2021) — Landfill location, BWM-Grey MARCOS, GIS — Sustainable Cities and Society
- [ ] Each entry includes: `doi` string, `tags` array (e.g. `["Power-to-X", "Policy", "Agent-Based Modeling"]`), `isCorresponding` boolean

#### `grants.ts` — 4 entries
- [ ] DFG Fuel and Chemical Science Center (2026-2032) — Policy analysis + Behavioral impacts — PI: Prof. Venghaus
- [ ] BMBF SupplHyInno Rhineland (2025-2028) — HyInnoSys2, hydrogen economy — PI: Prof. Venghaus — ~€1,579,605
- [ ] Forschungszentrum Jülich / ISPF (2024-2025) — Fuel Cell & Battery EVs — PI: Dr. Petra Zapp — ~£24,050
- [ ] DFG Fuel Science Center (2019-2025) — Policy impact & market regulation — PI: Prof. Venghaus

#### `awards.ts` — 10 entries
- [ ] RWTH–Tsinghua Senior Research Fellowship — research stay at Tsinghua University — 2026
- [ ] IDEA League Research Grant — research stay at TU Delft — 2025
- [ ] Second best poster — Hydrogen Futures conference — Bonn, Germany — 2025
- [ ] Best presentation award — Applied Energy Symposium MITAB — Cambridge, USA — 2024
- [ ] NATCOR bursary (AEORS) — PhD course, University of Southampton — 2024
- [ ] ERA Green Hydrogen Fellowship (DAAD) — research stay, University of Canterbury — 2023
- [ ] IDEA League Summer School scholarship — ETH Zürich — 2022
- [ ] Dean's summer scholarship, FENS, Sabancı University — 2020
- [ ] Dean's summer scholarship, FENS, Sabancı University — 2019
- [ ] Dean's scholarship for master's studies, FENS, Sabancı University — 2018

#### `positions.ts` — 4 entries
- [ ] Postdoctoral Researcher — RWTH Aachen University — LuF Economics of Sustainability — Aachen — Jan 2026–Present
- [ ] Postdoctoral Researcher (part-time) — Forschungszentrum Jülich — ICE-JSA — Jülich — Jan 2026–Present
- [ ] Research Associate — RWTH Aachen University — LuF Economics of Sustainability — Aachen — Aug 2021–Dec 2025
- [ ] Research Assistant — Sabancı University — Systems Modelling and Decision Analytics Lab — Istanbul — Sep 2019–Sep 2020

#### `education.ts` — 2 entries
- [ ] PhD — Management, Business & Economics — RWTH Aachen University — Aachen — 2021–2026 — Dissertation: Renewable Fuels for Sustainable Transport
- [ ] MSc — Industrial Engineering — Sabancı University — Istanbul — 2018–2020 — Thesis: Bi-Level Optimization for Collusion Detection in Electricity Markets

#### `teaching.ts` — 2 entries
- [ ] Teaching Assistant — RWTH Aachen University — Aachen — Aug 2021–July 2026 — Courses: Participatory Modelling; Adoption and Diffusion of Bio-based Innovations; Sustainable Development, Circular Economy and German Energiewende
- [ ] Teaching Assistant — Sabancı University — Istanbul — Sep 2018–Sep 2020 — Course: ENS 208 Introduction to Industrial Engineering

#### `conferences.ts` — 25+ entries (full list from CV)
- [ ] All 2026 presentations entered (7 entries)
- [ ] All 2025 presentations entered (3 entries)
- [ ] All 2024 presentations entered (5 entries)
- [ ] All 2023 presentations entered (2 entries)
- [ ] All 2022 presentations entered (2 entries)
- [ ] Each entry tagged: `type: "oral" | "poster" | "proceedings"`

#### `experiences.ts` — 5 entries
- [ ] Visiting Researcher — TU Delft, Faculty of TPM — Delft — Oct 2025–May 2026
- [ ] PhD School — NATCOR, behavioral OR and system dynamics — University of Southampton — July 2024
- [ ] Visiting Research Fellow — Sustainable Energy Research Group, University of Canterbury — Christchurch — Feb 2024–April 2024
- [ ] Summer School — Social network analysis + qualitative research — RWTH Aachen — Sep 2023
- [ ] Summer School — Greening global supply chains — ETH Zürich — Sep 2022

#### `supervision.ts` — 12 entries
- [ ] PhD: Adama Njie (2026–ongoing) — NLP/LLM policy monitoring — RWTH Aachen
- [ ] Masters: Guido Castiglioni (2026) — PtX market dynamics, FZJ + RWTH + Politecnico di Milano
- [ ] Masters: Mohammed Azzaoui (2026) — SAF markets Europe — RWTH
- [ ] Masters: Jakob Joachim Rohner (2024) — Sustainable aviation, Europe — RWTH
- [ ] Masters: Carolina Knecht (2024) — Political discourse on sustainable fuels, Bundestag — RWTH
- [ ] Masters: Wesam Wazwaz (2022) — Circular economy, mobility sector — RWTH
- [ ] Masters: Javier Perez Vera (2022) — Climate neutrality by 2045, road fuel planning — RWTH
- [ ] Bachelors: Franz Christian Vorwerg (2022) — Sustainable fuels, transport sector — RWTH
- [ ] Intern: Chloe Bogen (2026) — Automated discourse network analysis — DAAD RISE — RWTH
- [ ] Intern: Leandro Jose Laperne (2026) — Parliamentary discourse dataset, Bundesrat — Washington and Lee University
- [ ] Intern: Victoria Paterson (2025) — Hydrogen policy analysis suite — DAAD RISE — RWTH
- [ ] Intern: Maimouna Gaye (2024) — XAI hydrogen adoption forecasting — Remote — RWTH
- [ ] Intern: Angela Scanlan (2024) — Renewable jet fuel forecasting — DAAD RISE — RWTH

#### `services.ts` — 1 entry
- [ ] Editorial Board Member — International Journal of Sustainable Energy — 2026–Present
- [ ] Peer reviewer list: Applied Energy, Annals of Operations Research, Engineering Applications of AI, Expert Systems with Applications, Cleaner Production, Information Sciences, Case Studies on Transport Policy, Transport Policy, Transportation Research, Renewable & Sustainable Energy Reviews, Omega, Energy Strategy Reviews, Energy, Energy Economics, Int. J. of Hydrogen Energy, J. of the Operational Research Society, Sustainable Production and Consumption, Socio-Economic Planning Sciences, Sustainable Cities and Society, IEEE TEM — (20 journals)

#### `software.ts` — 2 entries
- [ ] DEMATELab — Python — Cause-and-effect analysis with LLM-assisted interpretation
- [ ] Policy Coherence Kit — Python — Perceived policy coherence analysis

#### `skills.ts`
- [ ] Programming: Python, R
- [ ] Technical: Git, MS Azure, AnyLogic, MS SQL Server, MS Power BI, Tableau, Qualtrics, MS Office, LaTeX
- [ ] Languages: English (Full Professional), German (Intermediate), Azerbaijani (Native), Persian (Native), Turkish (Full Professional)

#### `industry.ts` — 1 entry
- [ ] Implementation Consultant — ICRON Technologies — Istanbul — Sep 2020–Aug 2021 — supply chain software, MS SQL Server, demand forecasting, scheduling

---

## Phase 2 — Base UI Components (`src/components/ui/`)

### 2.1 Core Components
- [ ] `Button.tsx` — variants: primary / outline / ghost; sizes: sm / md / lg; loading state; accessible
- [ ] `Badge.tsx` — variants: default / journal / funder / location / year / tag; small pill style
- [ ] `SectionHeading.tsx` — h2 with optional subtitle and decorative accent line
- [ ] `ExternalLink.tsx` — `target="_blank" rel="noopener noreferrer"` + external-link icon; accessible
- [ ] `Tooltip.tsx` — accessible hover label (Radix UI primitive or hand-built)
- [ ] `SkipToContent.tsx` — first focusable element, visually hidden until focused
- [ ] `ScrollToTop.tsx` — appears after 500px scroll, smooth scroll to top
- [ ] `DarkModeToggle.tsx` — system pref + localStorage via next-themes, no flash on load
- [ ] `Spinner.tsx` — accessible loading indicator with `aria-label`
- [ ] `Tag.tsx` — research topic tag chip (e.g. "Power-to-X", "Policy Analysis")
- [ ] `Divider.tsx` — subtle horizontal divider for section separation
- [ ] `Avatar.tsx` — circular image with fallback initials

### 2.2 Layout Components
- [ ] `TimelineItem.tsx` — dot + vertical line + year marker + content — used by Education, Positions, Awards
- [ ] `Timeline.tsx` — wrapper for TimelineItem list
- [ ] `StatCard.tsx` — large number + label (for hero stat strip)
- [ ] `PublicationEntry.tsx` — numbered citation entry with author list (Ali's name bolded), journal badge, year, DOI link
- [ ] `GrantCard.tsx` — card with funder badge, title, PI, amount, year range
- [ ] `AwardItem.tsx` — year chip + award title + awarding body
- [ ] `ConferenceEntry.tsx` — presentation title, conference name, location badge, date
- [ ] `SupervisionTable.tsx` — tabbed table of students by level
- [ ] `SoftwareCard.tsx` — name, language badge, description, GitHub link
- [ ] `SkillGrid.tsx` — categorized skill badges
- [ ] `SearchInput.tsx` — controlled input with Fuse.js integration for publications

---

## Phase 3 — Layout Shell (`src/components/layout/`)

- [ ] `RootLayout.tsx` — fonts loaded, ThemeProvider, Analytics, SpeedInsights, SkipToContent
- [ ] `Header.tsx`:
  - [ ] Logo / name (left-aligned)
  - [ ] Desktop nav links: Research · Publications · Teaching · Contact
  - [ ] Dark mode toggle
  - [ ] "Download CV" button (top right)
  - [ ] Mobile hamburger menu with smooth slide-down
  - [ ] Active link highlight based on scroll position (IntersectionObserver)
  - [ ] Sticky with subtle backdrop blur on scroll
- [ ] `Footer.tsx`:
  - [ ] Name + current affiliation
  - [ ] Social icon links: LinkedIn · Google Scholar · ORCID · Email
  - [ ] "Last updated: May 2026" note
  - [ ] Copyright line
- [ ] `PageWrapper.tsx` — consistent max-width container with padding
- [ ] `ThemeScript.tsx` — inline `<script>` in `<head>` to read localStorage before React hydrates (no dark mode flash)

---

## Phase 4 — Landing Page Sections (`src/components/sections/`)

### 4.1 HeroSection
- [ ] Full name `h1` — Playfair Display, large
- [ ] Title and affiliations — Inter, secondary color
- [ ] One-sentence research tagline
- [ ] Stat strip: Publications · Grants · Awards · Countries (animated count-up on load)
- [ ] CTA buttons: "View Research" (scroll) + "Download CV" (PDF)
- [ ] Affiliation logos (RWTH + FZJ) — small, tasteful
- [ ] Subtle background — academic geometric pattern or clean gradient
- [ ] Social links row: LinkedIn · Google Scholar · ORCID · Email

### 4.2 AboutSection
- [ ] Two-column layout: bio text (left) + photo (right)
- [ ] Photo: circular or slightly rounded, professional
- [ ] Bio paragraph (~150 words) from `person.ts`
- [ ] Research interests as clickable tag chips
- [ ] Responsive: stacks on mobile, photo above text

### 4.3 ResearchSection
- [ ] 4–6 research area cards: Sustainable Transport · Power-to-X · Policy Analysis · Agent-Based Modeling · Multi-Criteria Decision Making · Market Dynamics
- [ ] Each card: icon + title + 2-sentence description
- [ ] Link to `/research` page for detailed view

### 4.4 EducationSection
- [ ] Timeline layout with vertical line
- [ ] 2 entries: PhD (RWTH, 2021–2026) + MSc (Sabancı, 2018–2020)
- [ ] Each entry: degree + field + institution + location + year range + thesis title

### 4.5 PositionsSection
- [ ] Timeline layout
- [ ] 4 entries: current postdocs + research associate + RA
- [ ] "Present" badge on current positions
- [ ] Institution links (RWTH, FZJ, Sabancı)

### 4.6 PublicationsPreviewSection
- [ ] Latest 5 publications (from `publications.ts`, sorted by year desc)
- [ ] Each entry: number · title · authors · journal badge · year · DOI icon
- [ ] "View All 22 Publications →" link to `/publications` page
- [ ] "Ali E. Torkayesh" name bolded in every author list

### 4.7 GrantsSection
- [ ] 4 grant cards in a 2-column grid
- [ ] Each card: project title · funder badge · PI name · amount (if known) · year range
- [ ] Visual highlight for ongoing grants

### 4.8 AwardsSection
- [ ] Vertical list with year chips on left
- [ ] 10 award entries from `awards.ts`
- [ ] International institutions named in full

### 4.9 TeachingSection
- [ ] 2 teaching position entries
- [ ] Courses listed as indented bullet list under each position

### 4.10 ConferencesSection
- [ ] Grouped by year: 2026 · 2025 · 2024 · 2023 · 2022
- [ ] Each entry: authors (Ali bolded) · title · conference name · location · date
- [ ] Location badges (city, country)
- [ ] "Poster" vs "Oral" type tag where applicable

### 4.11 AcademicExperiencesSection
- [ ] 5 entries: TU Delft · University of Canterbury · NATCOR Southampton · RWTH Summer School · ETH Zürich Summer School
- [ ] Each: role/type tag · institution · location · date range · brief description
- [ ] World map placeholder or location flag icons

### 4.12 SupervisionSection
- [ ] Tabs: PhDs | Master's | Bachelor's | Interns
- [ ] 13 supervised students total
- [ ] Each entry: student name · year · thesis topic · institution(s)
- [ ] DAAD-funded interns noted with funder badge

### 4.13 ServicesSection
- [ ] Editorial board role highlighted prominently
- [ ] Peer review journals as a dense, well-formatted list (20 journals)
- [ ] Count: "Peer reviewer for 20+ international journals"

### 4.14 SoftwareSection
- [ ] 2 cards: DEMATELab + Policy Coherence Kit
- [ ] Python badge on each
- [ ] Description + GitHub link (if public)
- [ ] "Open Source" badge if applicable

### 4.15 IndustrySection
- [ ] 1 card: ICRON Technologies, Istanbul, 2020–2021
- [ ] Responsibilities listed: supply chain software · MS SQL Server · demand forecasting · scheduling

### 4.16 SkillsSection
- [ ] Three categories:
  - [ ] Programming Languages: Python · R
  - [ ] Technical Tools: Git · MS Azure · AnyLogic · MS SQL Server · MS Power BI · Tableau · Qualtrics · LaTeX
  - [ ] Languages: Azerbaijani (Native) · Persian (Native) · English (Full Professional) · Turkish (Full Professional) · German (Intermediate)
- [ ] Language proficiency shown with indicator (dots or bar)

### 4.17 ContactSection
- [ ] Two email addresses displayed (institutional + personal)
- [ ] LinkedIn · Google Scholar · ORCID icon links with aria-labels
- [ ] Physical address: Kackertstraße 7, 52072 Aachen, Germany
- [ ] "Open to collaborations and academic inquiries" call to action

---

## Phase 5 — Separate Pages

### 5.1 Publications Page (`/publications`)
- [ ] Page title: "Publications" with count subtitle
- [ ] Filter bar:
  - [ ] Filter by year (2021, 2022, 2023, 2024, 2025, 2026)
  - [ ] Filter by journal
  - [ ] Filter by topic tag (Power-to-X, Policy, MCDA, Sustainability, Transport, etc.)
  - [ ] Clear all filters button
- [ ] Search input — Fuse.js fuzzy search on title + authors + journal
- [ ] Reverse chronological numbered list
- [ ] Each entry: number · authors (Ali bolded) · title (link to DOI) · journal in italics · year · DOI external link icon
- [ ] Active filter state persisted in URL search params
- [ ] "No results" empty state with clear filters CTA
- [ ] Total count displayed ("Showing X of 22 publications")
- [ ] `generateMetadata()` for SEO

### 5.2 Research Page (`/research`)
- [ ] Overview section: paragraph about research vision
- [ ] 6 research area sections with detailed descriptions:
  - [ ] Sustainable Transport Policy
  - [ ] Power-to-X and Renewable Fuels
  - [ ] Market Diffusion and Agent-Based Modeling
  - [ ] Multi-Criteria Decision Analysis (MCDA)
  - [ ] Policy Coherence Analysis
  - [ ] Operations Research Applications
- [ ] Current grants panel (pulled from `grants.ts`)
- [ ] Active collaborations (RWTH, FZJ, TU Delft, etc.)
- [ ] `generateMetadata()` for SEO

### 5.3 CV Route (`/cv`)
- [ ] Next.js route handler that returns a 307 redirect to `/ali-cv.pdf`
- [ ] Fallback: if PDF not available, redirect to `/publications`

### 5.4 Contact Page (`/contact`)
- [ ] Clean page with contact info centered
- [ ] Two email links (both addresses)
- [ ] Social icon links: LinkedIn · Google Scholar · ORCID
- [ ] No form (mailto links only to avoid spam)
- [ ] `generateMetadata()` for SEO

### 5.5 404 Page (`/not-found.tsx`)
- [ ] Matches site design
- [ ] "Page not found" heading
- [ ] Brief message
- [ ] "Return to Home" and "View Publications" links

---

## Phase 6 — Custom Hooks (`src/hooks/`)

- [ ] `useTheme.ts` — thin wrapper around next-themes `useTheme`
- [ ] `useIntersectionObserver.ts` — triggers animation when section enters viewport
- [ ] `usePublicationSearch.ts` — Fuse.js search over publications array with filter state
- [ ] `useScrollProgress.ts` — scroll percentage (for reading progress bar on publications page)
- [ ] `useActiveSection.ts` — returns current visible section id (for nav active state)
- [ ] `useCopyToClipboard.ts` — for copying email address

---

## Phase 7 — SEO & Metadata

- [ ] Root `layout.tsx` has complete base metadata:
  - [ ] `title: { default: "Ali E. Torkayesh | Postdoctoral Researcher", template: "%s | Ali E. Torkayesh" }`
  - [ ] `description` — one-sentence research summary
  - [ ] `keywords` — research topics, institutions
  - [ ] `authors`, `creator`, `publisher`
  - [ ] `openGraph` — type, locale, url, title, description, image (og-image.png)
  - [ ] `twitter` — card, title, description, images
  - [ ] `robots` — index, follow
  - [ ] `canonical` URL
- [ ] Each separate page has its own `generateMetadata()` export
- [ ] `sitemap.ts` — dynamic sitemap for `/`, `/publications`, `/research`, `/contact`
- [ ] `robots.ts` — allows all crawlers
- [ ] `opengraph-image.png` — 1200×630, name + title + affiliations (auto-generated or static)
- [ ] JSON-LD structured data on homepage (`Person` schema with sameAs for Google Scholar, ORCID, LinkedIn)

---

## Phase 8 — Animations & Interactions

- [ ] `AnimateOnScroll.tsx` — Framer Motion wrapper: fade-in + slight translateY on section entry
- [ ] Hero stat count-up — numbers animate from 0 to final value on page load
- [ ] Section transitions — 200ms ease-in-out on all hover states
- [ ] Publication list — stagger animation on initial render
- [ ] Dark mode toggle — smooth color transition (CSS `transition: color 200ms, background-color 200ms`)
- [ ] NO parallax effects
- [ ] NO auto-playing animations after load
- [ ] `prefers-reduced-motion` media query respected in all animations

---

## Phase 9 — Dark Mode

- [ ] `next-themes` ThemeProvider wraps root layout
- [ ] `ThemeScript` injected before body (no dark mode flash on load)
- [ ] All Tailwind classes include `dark:` variants
- [ ] Color tokens in `globals.css` for both light and dark
- [ ] Dark mode screenshot verified for all sections
- [ ] Dark/light toggle persists to localStorage
- [ ] System preference detected on first visit

---

## Phase 10 — Accessibility

- [ ] `SkipToContent` link is first focusable element in DOM
- [ ] All images have meaningful `alt` attributes (or `alt=""` for decorative)
- [ ] All icon-only interactive elements have `aria-label`
- [ ] All external links have `rel="noopener noreferrer"` and open-in-new-tab warning for screen readers
- [ ] Color contrast ≥ 4.5:1 for all text (verified with Colour Contrast Analyser or browser DevTools)
- [ ] Visible `:focus-visible` rings on all focusable elements — never `outline: none`
- [ ] Tab order is logical (matches visual order)
- [ ] Keyboard navigation tested through: header nav → hero → all sections → footer
- [ ] No content reliant solely on color to convey meaning
- [ ] Publication filter and search is fully keyboard operable
- [ ] All tabs components (supervision) keyboard navigable with arrow keys

---

## Phase 11 — Performance

- [ ] All images via `next/image` — explicit `width` + `height`, `priority` on above-fold photo
- [ ] Fonts via `next/font` — `display: swap`, no external font requests
- [ ] Framer Motion lazy loaded (only imported in client components, `use client`)
- [ ] Fuse.js lazy loaded only on `/publications` page
- [ ] No render-blocking third-party scripts
- [ ] Vercel Analytics script is deferred
- [ ] Run `npm run build` — confirm initial JS bundle < 150kb gzipped
- [ ] All routes statically generated (check `.next/` build output)
- [ ] LCP measured on Vercel preview deploy — target < 1.5s

---

## Phase 12 — Print Stylesheet

- [ ] `@media print` styles in `globals.css`:
  - [ ] Hide header nav, dark mode toggle, CTA buttons, animations
  - [ ] Show all sections on one print flow (no lazy hiding)
  - [ ] Black text on white background (override dark mode)
  - [ ] Page breaks: avoid breaking inside publication entries or timeline items
  - [ ] Display URL next to external links (`a::after { content: " (" attr(href) ")" }`)
  - [ ] Appropriate font sizes for print (10–12pt body)
- [ ] Tested: CMD+P in Chrome prints a clean readable document

---

## Phase 13 — GitHub Actions CI

- [ ] `.github/workflows/ci.yml` created with:
  - [ ] Trigger on push to `main` AND all pull requests
  - [ ] Step 1: `npm ci` — clean install
  - [ ] Step 2: `npx tsc --noEmit` — TypeScript check (fail on errors)
  - [ ] Step 3: `npm run lint` — ESLint check
  - [ ] Step 4: `npm run build` — production build (fail on errors)
  - [ ] Step 5: Vercel preview URL posted as PR comment
- [ ] CI badge in README

---

## Phase 14 — Final QA Pass

### Content Verification
- [ ] All 22 publications verified against CV — titles, authors, journals, years
- [ ] All 10 awards verified
- [ ] All 4 grants verified (amounts, funders, year ranges)
- [ ] All 4 academic positions verified (correct dates, institutions, departments)
- [ ] All 13 supervised students verified
- [ ] All 20+ service journals verified
- [ ] All 25+ conference presentations verified
- [ ] All 5 academic experiences verified
- [ ] All contact info verified (emails, LinkedIn, Google Scholar, ORCID)
- [ ] Ali's name bolded in ALL author lists across the site
- [ ] PDF CV linked correctly and opens in new tab

### Cross-Browser Testing
- [ ] Chrome (latest) — light mode + dark mode
- [ ] Firefox (latest) — light mode + dark mode
- [ ] Safari (macOS) — light mode + dark mode
- [ ] Chrome on iOS — portrait + landscape
- [ ] Safari on iOS — portrait + landscape

### Viewport Testing
- [ ] 320px (smallest mobile) — no horizontal scroll
- [ ] 375px (iPhone SE) — all sections legible
- [ ] 768px (tablet) — two-column layouts kick in correctly
- [ ] 1024px (small laptop) — full layout, header nav visible
- [ ] 1440px (standard desktop) — max-width container centered
- [ ] 2560px (4K) — no stretched layouts

### Accessibility Audit
- [ ] Run axe DevTools browser extension on every page — 0 violations
- [ ] Keyboard-only navigation test (Tab through entire site)
- [ ] VoiceOver (macOS) spot check — Hero, Publications, Contact

### Performance Audit
- [ ] Lighthouse run on deployed Vercel URL:
  - [ ] Performance ≥ 95
  - [ ] Accessibility = 100
  - [ ] Best Practices = 100
  - [ ] SEO = 100
- [ ] WebPageTest: LCP < 1.5s on 4G throttled
- [ ] Bundle size: `npm run build` → confirm < 150kb gzipped initial JS

### SEO Check
- [ ] Google Search Console — submit sitemap after deploy
- [ ] OG image renders correctly (use https://www.opengraph.xyz to verify)
- [ ] JSON-LD schema validated at https://validator.schema.org
- [ ] Meta description length 120–160 characters

---

## Phase 15 — Deployment & Launch

- [ ] `public/ali-cv.pdf` — replace placeholder with real PDF
- [ ] `public/photo.jpg` — replace placeholder with real professional headshot (WebP preferred, < 300KB)
- [ ] `public/og-image.png` — finalized 1200×630 OG image
- [ ] `public/favicon.ico` + `public/icon.png` (512×512) — initials or monogram "AT"
- [ ] Register domain (alitorkayesh.com or torkayesh.com)
- [ ] Connect custom domain to Vercel project
- [ ] Set `NEXT_PUBLIC_SITE_URL` env var in Vercel to production domain
- [ ] Confirm `https://` redirects from `http://`
- [ ] Confirm non-www redirects to www (or vice versa)
- [ ] Final production Lighthouse audit — screenshot for README
- [ ] Enable Vercel Analytics in production (env gate if needed)

---

## Phase 16 — README

- [ ] Project title and description
- [ ] Live URL
- [ ] Tech stack table
- [ ] Screenshot / screen recording of key sections
- [ ] Local setup instructions: `npm install` → `npm run dev`
- [ ] Folder structure overview
- [ ] Key design decisions:
  - [ ] Why Next.js over plain React (SEO rationale)
  - [ ] Why TypeScript data files over CMS
  - [ ] Why Fuse.js for client-side publications search
  - [ ] Academic typography choices (Playfair + Inter)
- [ ] CI badge (GitHub Actions)
- [ ] License (MIT)

---

## Phase 17 — Phase 2 Enhancements (Post-Launch)

- [ ] Live citation count via Google Scholar API (or scraped, with caching)
- [ ] Co-author network visualization (D3.js force graph)
- [ ] BibTeX export button on publications page
- [ ] Interactive world map of conference locations (Mapbox or Leaflet)
- [ ] Blog / commentary posts (MDX-powered)
- [ ] Contact form with Resend API (email delivery, anti-spam)
- [ ] German language version (`/de` route with next-intl)
- [ ] Publication impact metrics (journal impact factor badges)
- [ ] RSS feed for publications updates
- [ ] Playwright E2E tests + accessibility tests (axe-playwright)
- [ ] Vitest unit tests for utility functions and hooks

---

## Launch Gate — Only Go Live When ALL Are True

- [ ] All 22 publications in `publications.ts` — verified against CV
- [ ] All content sections visible and correctly populated
- [ ] PDF CV opens in new tab
- [ ] Dark mode works — no flash on load, persists on refresh
- [ ] Site is navigable keyboard-only from start to finish
- [ ] No console errors or warnings in production build
- [ ] No TypeScript errors (`npx tsc --noEmit` passes)
- [ ] Lighthouse Performance ≥ 95 on deployed URL
- [ ] Lighthouse Accessibility = 100 on deployed URL
- [ ] Lighthouse SEO = 100 on deployed URL
- [ ] Initial JS bundle < 150kb gzipped
- [ ] OG image renders correctly in social preview tools
- [ ] Custom domain live with HTTPS
- [ ] GitHub Actions CI is green
- [ ] README complete with live URL and screenshot

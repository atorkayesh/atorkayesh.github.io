# Claude Project Context

See `AGENTS.md` first. This project uses a newer Next.js version with breaking changes, so consult local Next.js documentation before code changes.

## Project

Academic portfolio for Ali E. Torkayesh, a postdoctoral researcher focused on sustainable transport, renewable fuels, Power-to-X policy analysis, market dynamics, and multi-criteria decision making.

## Stack

- Next.js App Router
- TypeScript with strict mode and `noUncheckedIndexedAccess`
- Tailwind CSS v4
- React 19
- Static typed content is planned under `src/data/` and `src/types/`

## Common Commands

- `npm run dev` - start local development
- `npm run build` - create production build
- `npm run lint` - run ESLint
- `npm start` - start production server after build

## Working Notes

- Keep content source-of-truth in TypeScript data files once the data layer exists.
- Favor quiet, academic UI decisions over marketing-style presentation.
- Preserve SEO and accessibility for all public-facing pages.

# AGENTS.md - Politer AI

## Project Overview

**Politer AI** is a Next.js monolith (Pages Router) that rewrites rude or blunt
messages into polite ones using OpenAI's `gpt-3.5-turbo-instruct` model. It is
deployed automatically to Vercel on every push to `master`.

## Developer Workflows

```bash
npm run dev      # Start local dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
```

No test suite exists. There is no `src/` directory - all source lives at the
project root.

## Environment Variables

`OPENAI_API_KEY` must be set locally (e.g. in `.env.local`). Without it the API
route returns a 401/500 at runtime.

## Architecture & Data Flow

```
Browser (pages/index.tsx)
  → GET /api/polite?prompt=<text>   (pages/api/polite.ts)
    → OpenAI createCompletion (gpt-3.5-turbo-instruct)
    ← { politerMessage: string }
  ← renders polite message in UI
```

- The **only** API route is `pages/api/polite.ts`.
- Prompt validation lives in both the frontend (`index.tsx`) and the API
  handler - keep them in sync with `INPUT_MAX_LENGTH` from `constants.ts`.

## Key Files

| File                  | Purpose                                                                     |
| --------------------- | --------------------------------------------------------------------------- |
| `constants.ts`        | Shared constants (`INPUT_MAX_LENGTH=700`, `DATE_UPDATED`, `TELEGRAM_LINK`)  |
| `pages/api/polite.ts` | OpenAI API call; validates prompt length, returns `{ politerMessage }`      |
| `pages/index.tsx`     | Main UI; form, loading state, result display                                |
| `pages/_app.tsx`      | Global layout: Bootstrap CSS import, Inter font, `NextNProgress` bar        |
| `next.config.js`      | `remotePatterns` allows `play.google.com` images                            |
| `tailwind.config.ts`  | DaisyUI custom `lightTheme` palette; content paths point to `src/` (unused) |

## OpenAI SDK Version

Uses **openai v3** (legacy), not v4. The instantiation pattern is:

```ts
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);
openai.createCompletion({ model: 'gpt-3.5-turbo-instruct', ... });
```

Do **not** use the v4 `new OpenAI()` constructor pattern.

## Styling Conventions

- **Primary**: CSS Modules (`styles/*.module.css`) - all page-level styles live
  here.
- **UI components**: `react-bootstrap` (`Button`, `Form`, `Spinner`,
  `Container`) with Bootstrap CSS imported globally in `_app.tsx`.
- **Tailwind/DaisyUI**: Installed and configured with a custom `lightTheme`, but
  the `content` paths in `tailwind.config.ts` point to `src/` which does not
  exist - Tailwind utilities are **not** purged/applied to current page files.
  Do not introduce Tailwind utility classes in `pages/` without fixing the
  content paths first.
- Prettier enforces `singleQuote: true` for TS/TSX and double quotes for
  CSS/JSON (see `prettier.config.js`).

## Path Alias

`@/` resolves to the project root (`./*`), e.g.
`import styles from '@/styles/Home.module.css'`.

## Installed-but-Unused Dependencies

`next-auth`, `@auth/prisma-adapter`, `prisma`, `@prisma/client`, and `zod` are
in `package.json` but are **not wired up** in any current page or API route. Do
not assume auth or database functionality exists.

## Static Pages

`privacy-policy`, `privacy-policy-android`, `terms-of-service`, `support`,
`404`, `500` are standalone pages with no shared layout component beyond
`_app.tsx`.

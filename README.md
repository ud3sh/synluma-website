# synluma-website

The Synluma consulting brand site — fractional CTO and agentic engineering for seed-stage AI startups. Lives at https://synluma.io.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn-style primitives (vendored under `src/components/ui/`)
- React Router 6 for client-side routing
- Firebase Hosting for static deploy
- Firebase Analytics (lazy-loaded after `window.load`)

## Local development

```sh
bun install
bun run dev
```

Dev server runs on http://localhost:8080.

```sh
bun run lint     # eslint
bun run build    # production build → dist/
bun run preview  # serve the production build locally
```

## Deploy

The site deploys to Firebase project `synluma-5b7c8`. The custom domain `synluma.io` is bound on that project; deploying from this repo updates production.

```sh
# one-time
firebase login

# preview channel (non-production URL, 7-day default expiry)
bun run deploy:preview

# production (replaces synluma.io)
bun run deploy:prod
```

Preview channel URLs look like `https://synluma-5b7c8--review-<hash>.web.app/`. Walk every page on desktop + mobile before running `deploy:prod`.

## Layout

```
src/
├── main.tsx              entry point; mounts App, schedules analytics init after window.load
├── App.tsx               router, layout shell (Navigation + main + Footer)
├── index.css             design tokens (HSL CSS vars), base styles, motion-safe overrides
├── lib/
│   ├── utils.ts          cn() helper
│   ├── firebase.ts       project config (public, browser-side)
│   └── analytics.ts      lazy-loaded Firebase Analytics + trackEvent / trackPageView
├── components/
│   ├── Navigation.tsx    primary nav (sticky, mobile menu)
│   ├── Footer.tsx        footer
│   ├── ScrollToTop.tsx   scroll restoration on route change
│   ├── RouteAnalytics.tsx fires page_view on every route change
│   └── ui/               trimmed shadcn primitives — Button, Card
└── pages/
    ├── Home.tsx          /
    ├── Services.tsx      /services
    ├── About.tsx         /about
    └── NotFound.tsx      404
```

## History

This repo is the successor to `ud3sh/synluma-shine-bright`, which was the marketing site for an earlier Synluma product (AI code review agent). That repo is tagged `v0-code-review-product` and archived.

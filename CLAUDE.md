# synluma-website

Brand and credibility site for Synluma. Three pages plus 404. No backend, no forms, no calendar. Public posture is intentional: new work happens through warm introductions.

## Commands

- `bun install` — install deps
- `bun run dev` — Vite dev server on :8080
- `bun run lint` — ESLint
- `bun run build` — production build into `dist/`
- `bun run deploy:preview` — `vite build && firebase hosting:channel:deploy review`
- `bun run deploy:prod` — `vite build && firebase deploy --only hosting`

## Conventions

- Tailwind utility-first, no inline CSS, no `style` props.
- Design tokens live in `src/index.css` as HSL CSS variables — change palette there, not in components.
- shadcn primitives live in `src/components/ui/`. Only what's used is vendored (Button, Card). Adding a new primitive: copy from shadcn-ui registry, do not introduce parallel patterns.
- All routes mounted in `src/App.tsx`. Each page is a default-export React component under `src/pages/`. Pages should not call `useEffect` for cross-route side effects — that belongs in `src/components/RouteAnalytics.tsx` or `ScrollToTop.tsx`.
- No public form, no calendar embed, no email link. If we add lead capture later, it goes through a careful design pass first — see TODOS.md.

## Deployment topology

```
ud3sh/synluma-website (this repo)
  ├── bun run build → dist/
  └── firebase deploy → project synluma-5b7c8 → synluma.io
```

The Firebase project is shared with the archived predecessor (`ud3sh/synluma-shine-bright`). Custom domain binding lives on the Firebase project, not in this repo. Do not run `firebase deploy` from the old repo or it will clobber production.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

- Architecture/plan questions → `/plan-eng-review`
- Strategy/scope → `/plan-ceo-review`
- Design system / visual review → `/design-consultation` or `/plan-design-review`
- Bugs/errors → `/investigate`
- QA / does this work → `/qa` or `/qa-only`
- Code review on diff → `/review`
- Visual polish on live site → `/design-review`
- Ship / deploy / PR → `/ship` or `/land-and-deploy`
- Save progress → `/context-save`
- Resume context → `/context-restore`

## Testing

The site is static and content-shaped, so testing is build + lint + smoke + Lighthouse, not unit tests per component. Test plan lives at `~/.gstack/projects/ud3sh-synluma-shine-bright/udesh-main-eng-review-test-plan-20260605-121859.md`.

Before any production deploy:
1. `bun run build` succeeds
2. `bun run lint` succeeds
3. Walk every route on the preview channel URL on desktop + mobile
4. Lighthouse: perf ≥90, a11y ≥95, SEO ≥95, best-practices ≥95

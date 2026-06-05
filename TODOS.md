# TODOS

## Before production cutover

- [ ] **Replace founder bio on /about.** Current copy is a placeholder draft. (`src/pages/About.tsx`, search for `TODO(udesh)`.)
- [ ] **Run `/design-consultation`** to lock visual direction (palette, type, motion) before treating the launch design as final. Current tokens are carried over from the predecessor site (cooled cyan accent on dark background) and should be reviewed.
- [ ] **Verify OG image renders correctly** in Twitter card validator, Slack unfurl, LinkedIn share preview. Current `public/og-image.png` is a placeholder rendered from `public/og-image.svg`.
- [ ] **Disconnect Lovable.dev** from the predecessor repo `ud3sh/synluma-shine-bright` BEFORE running `bun run deploy:prod` — if Lovable still has push or deploy access, it can clobber production after cutover.
- [ ] **Re-auth Firebase CLI** (`firebase login --reauth`). The previous session was expired at the time this repo was bootstrapped.

## After launch (next 1-2 months)

- [ ] **Add named case studies** as engagement permissions come in (target: end of summer 2026). The Services and About pages reserve narrative slots — drop them in without IA changes.
- [ ] **Add testimonials/quotes** from past or current founders when permissions land.
- [ ] **Decide on a lead-capture path** once the warm-intro funnel hits capacity. Options: Cal.com booking page, intro form, or stay intro-only. Don't add a contact form preemptively; it changes the posture of the site.
- [ ] **Consider /approach or /writing page** if Udesh starts publishing on agentic systems. The IA reserves space for this without a redesign.

## Later / nice to have

- [ ] **GitHub Actions CI** for build + lint on every push to a branch. Currently we run them locally.
- [ ] **Visual regression baseline** via `gstack browse` screenshots so design changes are diffable.
- [ ] **Privacy / legal page** if Firebase Analytics' cookie usage becomes a concern (currently exempt from most regulators because no PII is collected — but if we add cookies or trackers, revisit).

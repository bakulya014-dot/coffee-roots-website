# Coffee Roots — Project Conventions

Source of truth: SPEC.md in this repo. Always check it before starting new work.

## Standing rules (don't ask, just follow):
- Design tokens are locked: --cream, --warm-beige, --coffee-brown, --charcoal, --caramel.
  Never introduce new colors without being told to.
- Fonts are locked: Manrope (headings), Inter (body). Don't change.
- Tailwind v4 — theme lives in CSS via @theme, not tailwind.config.js.
- Every component: TypeScript, typed props, no `any`.
- Every animation and smooth-scroll must respect prefers-reduced-motion.
- After finishing a phase: run a production build, verify it's clean, then commit
  with a clear message. Don't ask permission to commit — just do it and report
  what you committed.
- Verify claims programmatically (curl/grep/computed styles), not just visually —
  the preview renderer throttles rAF, so don't rely on "it looks right" alone.
- Don't build ahead of the current phase. Stop when the phase's scope is done.
- Skip long explanations of things already established in this file — just execute
  and give a short summary of what changed and how you verified it.

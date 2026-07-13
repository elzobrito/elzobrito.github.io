# Design QA — ESAA runtime animations

## Sources

- `/tmp/codex-clipboard-63ae5970-cf43-4de0-8592-922d0ae61a89.png`
- `/tmp/codex-clipboard-de8da16b-cfc5-4d73-9745-21e9dfd17179.png`
- `/tmp/codex-clipboard-d7bc175e-9109-48ac-b9e9-13c616de8b08.png`
- `/tmp/codex-clipboard-e3dc4962-0c79-4519-b954-4157305ec1b8.png`

## Implementation evidence

- Desktop implementation: `/tmp/esaa-runtime-panel.png`
- Mobile implementation: `/tmp/esaa-runtime-mobile.png`
- Side-by-side comparison: `/tmp/esaa-runtime-comparison.png`
- Route: `http://127.0.0.1:4321/esaa/#workflow`
- Desktop viewport: 1440 × 900
- Mobile viewport: 390 × 844
- State inspected: animated `review` state and replayed `todo` state

## Comparison

The implementation preserves the reference's near-black telemetry panel, thin dividers, compact uppercase mono labels, sequential event highlights, live indicator, state counters, and receipt metaphor. It deliberately uses the site's existing green ESAA accent instead of the reference orange, preserving the product's established identity. The panel is integrated into the existing editorial page rather than copying the reference page structure.

## Interaction and responsive checks

- Pause freezes the current transition for longer than one full 2.2 s cycle.
- Replay returns the task to `todo` and restarts the sequence.
- State, event stream, counters, assigned actor, event sequence, and projection hash update together.
- No browser console errors were observed.
- Mobile document width stays within the viewport (`scrollWidth 375`, `innerWidth 390`).
- `prefers-reduced-motion` disables automatic cycling and transitions.

## Findings and iterations

1. P1: Astro type checking rejected nullable DOM queries and an untyped timer. Fixed with a typed timer and guarded `setText` helper.
2. P1: public artifact audit rejected a literal internal event-log filename. Replaced it with the public conceptual label `EVENT STORE`.
3. Final comparison: no remaining P0, P1, or P2 visual or functional findings.

## Final result

passed

---

# Design QA — canonical `in_progress` label correction

## Evidence

- Source visual truth: `/tmp/codex-remote-attachments/019f57ec-3f1e-7870-b795-0a950dc02552/b5d783a7-b443-4d00-bcb1-0d477b009b4b/1-Photo-1.jpg`
- Browser-rendered implementation: `/tmp/esaa-in-progress-mobile-focused.png`
- Side-by-side comparison: `/tmp/esaa-in-progress-label-comparison.png`
- Viewport: 390 × 844
- State: roadmap projection while the animated task is in `review`

## Required fidelity surfaces

- Typography: unchanged; the canonical label fits the existing mono UI without clipping.
- Spacing and layout: the longer `IN_PROGRESS` label stays inside its grid cell at 390 px.
- Colors and tokens: unchanged and consistent with the ESAA green telemetry palette.
- Image and asset fidelity: no image assets are used by the runtime visualization; the source phone screenshot and browser capture were compared side by side.
- Copy and content: `ACTIVE` was replaced by the exact protocol state `IN_PROGRESS`; state counters and status projection remain synchronized.

## Comparison history

1. P2 — The source screenshot exposed a semantic mismatch: the projection used `ACTIVE`, while the state machine and ESAA protocol use `in_progress`.
2. Fix — Replaced the visible label with `IN_PROGRESS` and renamed the internal counter selector to `data-count="in_progress"`.
3. Post-fix evidence — The combined comparison shows `IN_PROGRESS` in the mobile projection; browser checks found one exact `IN_PROGRESS`, zero exact `ACTIVE`, no console errors, and no horizontal overflow.

## Findings

No remaining P0, P1, or P2 findings. A focused region comparison was used because the correction is a small, text-specific semantic change.

## Final result

passed

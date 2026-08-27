# Asad Ullah Riaz — Portfolio

A personal portfolio built as a technical drawing: every section is a
numbered "sheet" in a drawing set, laid out on a cyanotype-blueprint grid,
with a persistent index rail, drafting rulers, and a real title block at
the bottom. Content is pulled from the résumé provided on 2026-08-25.

## Stack

- React 19 + TypeScript, scaffolded with Vite
- Plain CSS (custom properties for tokens) + CSS Modules per component —
  no UI framework, no Tailwind
- Motion (motion.dev) + GSAP for animation — see "Motion & animation" below
- Active-section tracking via `IntersectionObserver` (`useScrollSpy`)

No backend, no analytics, nothing phones home. It's a static site.

## Motion & animation

Split by what each library is actually good at, not used for its own sake:

- **Motion** (`motion/react`) handles everything component-level and
  declarative: the scroll-triggered stagger/reveal on every section
  (`RevealGroup`/`Reveal` in `src/components/ui/Reveal.tsx`), the nav's
  active-item highlight morphing between items (`layoutId`), hover/tap
  micro-interactions (CTAs, stack chips, contact channels), the Hero
  glyph's SVG line-draw-in, and the count-up stats (`AnimatedStat`).
- **GSAP + ScrollTrigger** (`src/lib/gsap.ts`) is reserved for the two
  effects that need continuous scroll-position scrubbing rather than a
  one-shot viewport trigger, which Motion doesn't do as cleanly: the
  Hero's parallax drift and the System Architecture rail's progress line,
  which fills in exactly as fast as you scroll through the section.
- **Reduced motion** is handled at two levels: globally for Motion via
  `<MotionConfig reducedMotion="user">` in `App.tsx` (auto-disables
  transform/layout animation, keeps opacity fades), and per-effect for
  GSAP via `gsap.matchMedia()` (each ScrollTrigger is wrapped in a
  `'(prefers-reduced-motion: no-preference)'` branch with a `'reduce'`
  branch that jumps straight to the end state). `TiltCard`'s pointer-driven
  tilt is guarded by hand with `useReducedMotion()`, since it drives
  `rotateX`/`rotateY` through raw motion values rather than Motion's
  declarative props, which the app-wide config doesn't reach.
- Every custom easing curve is `EASE_STANDARD` from `src/lib/easing.ts` —
  one fast-out deceleration curve, no bounce/spring wobble anywhere except
  the two places spring physics is the point (the nav highlight morph, the
  Hero glyph's node pop-in). Consistent, not showy — this is a portfolio
  for enterprise/gov work.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # serve the production build locally
npm run lint       # oxlint
```

## Structure

```
src/
  data/          content — profile, experience, skills, projects, education
  types.ts       shared TypeScript interfaces for the data above
  lib/           easing.ts (shared easing curve + durations), gsap.ts
                 (registers ScrollTrigger once, re-exports gsap)
  hooks/         useScrollSpy, useCursorPosition
  components/
    layout/      chrome that isn't part of any one section:
                 BlueprintChrome (grid/rulers/corner marks/cursor readout),
                 SheetNav (sheet-index rail, layoutId-morphed highlight),
                 TitleBlock (footer)
    ui/          small reusable pieces: SheetHeader, StackChip, TiltCard
                 (cursor-tilt wrapper), AnimatedStat (count-up), LayerDiagram,
                 Reveal (RevealGroup/Reveal — the scroll-stagger pair used
                 throughout)
    sections/    the six sheets: Hero, SystemArchitecture,
                 ComponentLibrary, CaseStudies, Specifications, Contact
```

All copy lives in `src/data/*.ts` — update your experience, projects or
skills there and the page re-renders; you shouldn't need to touch a
component to change content.

## Before you publish this

1. **`public/resume.pdf`** — your actual résumé PDF is already dropped in
   here (that's what "Download Spec Sheet" links to). Swap it whenever
   your résumé changes.
2. **Two data corrections** — the source résumé had the Discretelogix end
   date as `02/2022` (overlaps every later role — every other date lines
   up if it's `02/2020`, so that's what shipped) and "Islamabad" prefixed
   onto the 10Pearls job title. Both are called out in a comment at the
   top of `src/data/experience.ts` — confirm they're right before this
   goes live.
3. **Left off on purpose**: phone number (spam/robocall exposure on a
   public page), the References section (a colleague's personal email
   shouldn't go on a public site without asking them first), and the
   Recommendations links (private Google Drive links that won't resolve
   for site visitors). Add any of these back in `src/data/` if you want
   them.
4. **`MS` and `core42`** from your stack weren't on the résumé and I
   wasn't sure what they referred to (Microsoft/Power Platform? a client
   name?), so they're not in the Component Library yet — add them to
   `src/data/skills.ts` once you tell me what they should say.
5. Swap the `--bp-*` custom properties in `src/styles/tokens.css` if you
   ever want to reskin this without touching component code.

## Deploying

It's a static build — `npm run build` outputs `dist/`, which drops
straight onto Vercel, Netlify, GitHub Pages, or any static host. No
environment variables, no server.

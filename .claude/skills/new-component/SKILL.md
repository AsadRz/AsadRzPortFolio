---
name: new-component
description: Scaffold a new React component with its paired CSS module, following this project's conventions (colocated .tsx + .module.css, design tokens, PascalCase). Use when adding a new component to src/components/layout, sections, or ui.
---

# New Component

Scaffold a component the way this codebase already does it — don't invent a new pattern.

## Conventions (from existing components)

- One folder per group: `src/components/layout/`, `src/components/sections/`, `src/components/ui/`. Pick the right one:
  - `layout/` — chrome that wraps every page (nav, cursor readout, title block)
  - `sections/` — a full page section (Hero, Contact, CaseStudies, ...)
  - `ui/` — small reusable pieces (StackChip, TiltCard, AnimatedStat, ...)
- Two files, same base name, colocated: `ComponentName.tsx` + `ComponentName.module.css`
- `.tsx` imports its styles as `import styles from './ComponentName.module.css'`
- Props typed with an inline `interface ComponentNameProps { ... }` directly above the component
- Component is a named export: `export function ComponentName(props: ComponentNameProps) { ... }`
- Animation: use `motion/react` (`import { motion } from 'motion/react'`) for simple transitions, or GSAP (`src/lib/gsap.ts`, `@gsap/react`) for scroll-driven/timeline work. Reuse easing from `src/lib/easing.ts` (e.g. `EASE_STANDARD`) instead of hardcoding cubic-beziers.
- CSS: use the design tokens in `src/styles/tokens.css` and `src/styles/blueprint.css` (e.g. `var(--bp-line)`, `var(--font-mono)`, `var(--border-thin)`) instead of new hardcoded values.
- No default exports, no barrel files — components are imported directly by path.

## Steps

1. Ask (or infer from context) which group the component belongs in and its name.
2. Read one existing sibling in that same folder first (e.g. `StackChip.tsx` for `ui/`, a file in `sections/` for a section) to match its exact shape — spacing, prop style, animation choice.
3. Create `src/components/<group>/<Name>.tsx` and `src/components/<group>/<Name>.module.css`.
4. If the component needs static content (copy, links, lists), put it in `src/data/` alongside `profile.ts`, `projects.ts`, etc. — not inline in the component — matching how existing sections pull data.
5. Wire it into `src/App.tsx` (and `src/data/sections.ts` if it's a nav-able section) if the user wants it live on the page.
6. Run `npm run lint` after creating the files.

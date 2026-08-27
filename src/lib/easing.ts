// Single source of truth for the site's motion feel — a smooth, fast-out
// deceleration curve (no bounce/spring wobble; this is a portfolio for
// enterprise/gov work, not a consumer app). Mirrors --ease-standard in
// tokens.css so CSS-only transitions (e.g. plain :hover) match JS-driven
// ones (Motion, GSAP).
export const EASE_STANDARD = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.5,
  slow: 0.8,
} as const;

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';
import { EASE_STANDARD } from '../../lib/easing';

interface AnimatedStatProps {
  value: string; // e.g. "8+", "80%", "8"
}

/** Counts up to the numeric part of `value` once scrolled into view. Falls
 * straight to the final value for non-numeric strings or reduced motion —
 * and that's also the initial state, so there's nothing to snap away from
 * before the animation has a reason to run. */
export function AnimatedStat({ value }: AnimatedStatProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : '';

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(target ?? 0);

  useEffect(() => {
    if (target === null || !isInView || prefersReducedMotion) return;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: EASE_STANDARD,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, target, prefersReducedMotion]);

  if (target === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

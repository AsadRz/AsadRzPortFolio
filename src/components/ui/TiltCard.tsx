import type { ReactNode, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TILT_RANGE = 5; // degrees — subtle on purpose, this isn't a gaming site

/** Wraps its children in a card that tilts gently toward the cursor.
 * Pointer-only: touch devices never fire mousemove here, so mobile just
 * gets a static card, which is the correct fallback anyway. Under
 * prefers-reduced-motion this renders a plain static div instead — a
 * continuous pointer-driven tilt is exactly what that setting exists to
 * suppress, and it isn't covered by the app-wide <MotionConfig>, which only
 * intercepts declarative animation props (whileHover etc.), not a raw
 * useMotionValue/useSpring chain bound by hand via style. */
export function TiltCard({ children, className }: TiltCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(py, { stiffness: 300, damping: 30, mass: 0.5 });
  const rotateX = useTransform(springY, [0, 1], [TILT_RANGE, -TILT_RANGE]);
  const rotateY = useTransform(springX, [0, 1], [-TILT_RANGE, TILT_RANGE]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

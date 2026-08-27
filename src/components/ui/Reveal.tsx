import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { EASE_STANDARD, DURATION } from '../../lib/easing';

// Parent/child pair: RevealGroup triggers once when scrolled into view and
// staggers whichever <Reveal> children sit inside it — one IntersectionObserver
// per group instead of one per item. Reduced-motion handling is centralized
// once, in <MotionConfig reducedMotion="user"> (see App.tsx), rather than
// repeated in every component that animates.

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_STANDARD },
  },
};

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function RevealGroup({ children, className, stagger = 0.08 }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
      transition={{ staggerChildren: stagger }}
    >
      {children}
    </motion.div>
  );
}

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

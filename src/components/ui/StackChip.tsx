import { motion } from 'motion/react';
import { EASE_STANDARD } from '../../lib/easing';
import styles from './StackChip.module.css';

interface StackChipProps {
  label: string;
  refDes?: string;
  tone?: 'default' | 'accent';
}

export function StackChip({ label, refDes, tone = 'default' }: StackChipProps) {
  return (
    <motion.span
      className={`${styles.chip} ${tone === 'accent' ? styles.accent : ''}`}
      whileHover={{ scale: 1.05, y: -1 }}
      transition={{ duration: 0.15, ease: EASE_STANDARD }}
    >
      {refDes && <span className={styles.refDes}>{refDes}</span>}
      {label}
    </motion.span>
  );
}

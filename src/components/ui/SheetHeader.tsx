import { motion } from 'motion/react';
import { EASE_STANDARD } from '../../lib/easing';
import styles from './SheetHeader.module.css';

interface SheetHeaderProps {
  code: string;
  title: string;
  subtitle?: string;
  scale?: string;
}

export function SheetHeader({ code, title, subtitle, scale = 'N.T.S.' }: SheetHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.meta}>
        <span className={`${styles.tag} mono`}>SHEET {code}/06</span>
        <span className={`${styles.tag} mono`}>SCALE {scale}</span>
      </div>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <motion.div
        className={styles.rule}
        aria-hidden="true"
        style={{ transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.7, ease: EASE_STANDARD }}
      />
    </header>
  );
}

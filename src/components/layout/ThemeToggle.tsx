import { motion } from 'motion/react';
import { useTheme } from '../../hooks/useTheme';
import { EASE_STANDARD } from '../../lib/easing';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.15, ease: EASE_STANDARD }}
    >
      <span className={styles.dot} aria-hidden="true" />
      {isDark ? 'DARK' : 'LIGHT'}
      <span className={styles.printName}>{isDark ? 'CYANOTYPE' : 'DIAZO'}</span>
    </motion.button>
  );
}

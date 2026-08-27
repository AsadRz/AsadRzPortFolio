import { motion } from 'motion/react';
import { SECTIONS, SECTION_IDS } from '../../data/sections';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import styles from './SheetNav.module.css';

export function SheetNav() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <nav className={styles.nav} aria-label="Sheet index">
      <span className={styles.navLabel}>INDEX</span>
      <ol className={styles.list}>
        {SECTIONS.map((section) => {
          const isActive = section.id === activeId;
          return (
            <li key={section.id}>
              <a href={`#${section.id}`} className={styles.item} data-active={isActive}>
                {isActive && (
                  <motion.span
                    layoutId="nav-highlight"
                    className={styles.highlight}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={styles.code}>{section.code}</span>
                <span className={styles.label}>{section.short}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

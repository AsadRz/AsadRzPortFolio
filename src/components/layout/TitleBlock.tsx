import { profile } from '../../data/profile';
import styles from './TitleBlock.module.css';

export function TitleBlock() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.block}>
      <div className={styles.row}>
        <div className={styles.field}>
          <span className={styles.label}>DRAWING NO.</span>
          <span className={styles.value}>AUR-PORTFOLIO-2026</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>TITLE</span>
          <span className={styles.value}>Personal Engineering Portfolio</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>DRAWN BY</span>
          <span className={styles.value}>A. U. RIAZ</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>REV</span>
          <span className={styles.value}>1.0</span>
        </div>
        <div className={styles.field}>
          <span className={styles.label}>SCALE</span>
          <span className={styles.value}>N.T.S.</span>
        </div>
      </div>
      <p className={styles.copyright}>
        © {year} {profile.name}. Built by hand with React, TypeScript &amp; a drafting table.
      </p>
    </footer>
  );
}

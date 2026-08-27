import { CursorReadout } from './CursorReadout';
import styles from './BlueprintChrome.module.css';

const CORNERS = ['tl', 'tr', 'bl', 'br'] as const;

export function BlueprintChrome() {
  return (
    <div aria-hidden="true">
      {CORNERS.map((pos) => (
        <span key={pos} className={styles.cornerMark} data-pos={pos} />
      ))}
      <div className={styles.rulerTop} />
      <div className={styles.rulerLeft} />
      <CursorReadout />
    </div>
  );
}

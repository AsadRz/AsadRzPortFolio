import { useCursorPosition } from '../../hooks/useCursorPosition';
import styles from './CursorReadout.module.css';

export function CursorReadout() {
  const { x, y } = useCursorPosition();

  return (
    <div className={styles.readout} aria-hidden="true">
      <span>X:{String(x).padStart(4, '0')}</span>
      <span>Y:{String(y).padStart(4, '0')}</span>
    </div>
  );
}

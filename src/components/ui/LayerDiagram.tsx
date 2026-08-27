import type { LayerKey } from '../../types';
import styles from './LayerDiagram.module.css';

const LAYERS: { key: LayerKey; label: string }[] = [
  { key: 'frontend', label: 'FRONTEND' },
  { key: 'api', label: 'API' },
  { key: 'data', label: 'DATA' },
  { key: 'infra', label: 'INFRA' },
];

interface LayerDiagramProps {
  active: LayerKey[];
}

export function LayerDiagram({ active }: LayerDiagramProps) {
  const summary = LAYERS.filter((layer) => active.includes(layer.key))
    .map((layer) => layer.label)
    .join(', ');

  return (
    <div className={styles.diagram} role="img" aria-label={`System layers involved: ${summary}`}>
      {LAYERS.map((layer, index) => (
        <div className={styles.segment} key={layer.key}>
          <div className={styles.node} data-active={active.includes(layer.key)}>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.label}>{layer.label}</span>
          </div>
          {index < LAYERS.length - 1 && <span className={styles.connector} aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}

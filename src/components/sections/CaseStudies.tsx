import { caseStudies } from '../../data/projects';
import { SheetHeader } from '../ui/SheetHeader';
import { StackChip } from '../ui/StackChip';
import { LayerDiagram } from '../ui/LayerDiagram';
import { RevealGroup, Reveal } from '../ui/Reveal';
import { TiltCard } from '../ui/TiltCard';
import styles from './CaseStudies.module.css';

export function CaseStudies() {
  return (
    <section id="case-studies" className="sheet">
      <SheetHeader
        code="04"
        title="Case Studies"
        subtitle="Four systems worth a closer look, spanning government platforms and applied 3D/AR work."
      />
      <RevealGroup className={styles.grid} stagger={0.08}>
        {caseStudies.map((study) => (
          <Reveal key={study.id}>
            <TiltCard className={styles.card}>
              <div className={styles.cardHead}>
                <span className={`${styles.code} mono`}>{study.code}</span>
                <span className={`${styles.period} mono`}>{study.period}</span>
              </div>
              <h3 className={styles.name}>{study.name}</h3>
              <p className={styles.org}>
                {study.org} · {study.role}
              </p>
              <p className={styles.description}>{study.description}</p>
              <LayerDiagram active={study.layers} />
              <dl className={styles.impact}>
                {study.impact.map((metric) => (
                  <div key={metric.label} className={styles.impactItem}>
                    <dt className={styles.impactLabel}>{metric.label}</dt>
                    <dd className={styles.impactValue}>{metric.value}</dd>
                  </div>
                ))}
              </dl>
              <div className={styles.stack}>
                {study.stack.map((tech) => (
                  <StackChip key={tech} label={tech} />
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}

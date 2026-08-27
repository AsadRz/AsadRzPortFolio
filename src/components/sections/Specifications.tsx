import { education, certifications, languages } from '../../data/education';
import { SheetHeader } from '../ui/SheetHeader';
import { RevealGroup, Reveal } from '../ui/Reveal';
import styles from './Specifications.module.css';

export function Specifications() {
  return (
    <section id="specifications" className="sheet">
      <SheetHeader
        code="06"
        title="Specifications"
        subtitle="Education, certifications and language calibration."
      />
      <RevealGroup className={styles.grid} stagger={0.1}>
        <Reveal className={styles.block}>
          <h3 className={styles.blockTitle}>Education</h3>
          <div className={styles.eduRow}>
            <span className={styles.eduDegree}>{education.degree}</span>
            <span className={styles.eduSchool}>{education.school}</span>
            <span className={`${styles.eduPeriod} mono`}>{education.period}</span>
          </div>
        </Reveal>

        <Reveal className={styles.block}>
          <h3 className={styles.blockTitle}>Certifications &amp; Training</h3>
          <ul className={styles.certList}>
            {certifications.map((cert) => (
              <li key={cert.name} className={styles.certItem}>
                <span className={styles.certName}>{cert.name}</span>
                <span className={styles.certIssuer}>{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={styles.block}>
          <h3 className={styles.blockTitle}>Languages</h3>
          <ul className={styles.langList}>
            {languages.map((lang) => (
              <li key={lang.name} className={styles.langItem}>
                <span className={styles.langName}>{lang.name}</span>
                <span className={styles.langBar} aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={styles.langCell} data-filled={i < lang.strength} />
                  ))}
                </span>
                <span className={styles.langLevel}>{lang.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </RevealGroup>
    </section>
  );
}

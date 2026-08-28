import { education, certifications, languages } from '../../data/education';
import { SheetHeader } from '../ui/SheetHeader';
import { StackChip } from '../ui/StackChip';
import { RevealGroup, Reveal } from '../ui/Reveal';
import styles from './Specifications.module.css';

const ISSUER_CODE: Record<string, string> = {
  Coursera: 'CR',
  'Apollo GraphQL': 'GQL',
  HackerRank: 'HR',
  'LinkedIn Learning': 'LI',
  'Anthropic Education': 'AN',
};

function issuerCode(issuer: string): string {
  return ISSUER_CODE[issuer] ?? issuer.slice(0, 2).toUpperCase();
}

export function Specifications() {
  const verifiedCerts = certifications.filter((cert) => cert.image);
  const otherCerts = certifications.filter((cert) => !cert.image);

  return (
    <section id="specifications" className="sheet">
      <SheetHeader
        code="06"
        title="Specifications"
        subtitle="Education, certifications and language calibration."
      />

      <RevealGroup className={styles.topGrid} stagger={0.1}>
        <Reveal className={styles.block}>
          <h3 className={styles.blockTitle}>Education</h3>
          <div className={styles.eduRow}>
            <span className={styles.eduDegree}>{education.degree}</span>
            <span className={styles.eduSchool}>{education.school}</span>
            <span className={`${styles.eduPeriod} mono`}>{education.period}</span>
          </div>
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

      <Reveal className={styles.certBlock}>
        <h3 className={styles.blockTitle}>Certifications &amp; Training</h3>

        {verifiedCerts.length > 0 && (
          <div className={styles.verifiedGallery}>
            {verifiedCerts.map((cert) => (
              <a
                key={cert.name}
                className={styles.verifiedCard}
                href={cert.verifyUrl ?? cert.image}
                target="_blank"
                rel="noreferrer"
              >
                <img className={styles.verifiedImage} src={cert.image} alt="" loading="lazy" />
                <span className={styles.verifiedName}>{cert.name}</span>
                <span className={styles.verifiedIssuer}>{cert.issuer} · verified ↗</span>
              </a>
            ))}
          </div>
        )}

        <div className={styles.certCloud}>
          {otherCerts.map((cert) =>
            cert.verifyUrl ? (
              <a
                key={cert.name}
                className={styles.chipLink}
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
              >
                <StackChip label={cert.name} refDes={issuerCode(cert.issuer)} tone="accent" />
              </a>
            ) : (
              <StackChip key={cert.name} label={cert.name} refDes={issuerCode(cert.issuer)} />
            ),
          )}
        </div>
      </Reveal>
    </section>
  );
}

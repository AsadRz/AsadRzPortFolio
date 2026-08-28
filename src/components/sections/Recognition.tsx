import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SheetHeader } from '../ui/SheetHeader';
import { RevealGroup, Reveal } from '../ui/Reveal';
import { EASE_STANDARD } from '../../lib/easing';
import { recommendations } from '../../data/recommendations';
import { achievements } from '../../data/achievements';
import styles from './Recognition.module.css';

const PAGE_SIZE = 2;

function initialsOf(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export function Recognition() {
  const pages = useMemo(() => {
    const chunks: (typeof recommendations)[] = [];
    for (let i = 0; i < recommendations.length; i += PAGE_SIZE) {
      chunks.push(recommendations.slice(i, i + PAGE_SIZE));
    }
    return chunks;
  }, []);

  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const currentPage = pages[pageIndex];

  function go(delta: number) {
    setDirection(delta);
    setPageIndex((i) => (i + delta + pages.length) % pages.length);
  }

  return (
    <section id="recognition" className="sheet">
      <SheetHeader
        code="05"
        title="Recognition"
        subtitle="What colleagues and clients say — plus the record, when there's one to show."
      />

      {achievements.length > 0 && (
        <>
          <h3 className={styles.subHeading}>Achievements</h3>
          <RevealGroup className={styles.achievements} stagger={0.08}>
            {achievements.map((item) => (
              <Reveal key={item.id} className={styles.achievement}>
                {item.image && (
                  <a
                    className={styles.achievementImageLink}
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View source document for ${item.title}`}
                  >
                    <img className={styles.achievementImage} src={item.image} alt="" loading="lazy" />
                    <span className={styles.achievementImageLabel}>VIEW LETTER ↗</span>
                  </a>
                )}
                <span className={styles.achievementTitle}>{item.title}</span>
                <p className={styles.achievementDescription}>{item.description}</p>
                {item.source && <span className={styles.achievementSource}>{item.source}</span>}
              </Reveal>
            ))}
          </RevealGroup>
        </>
      )}

      <h3 className={styles.subHeading}>Recommendations</h3>
      <Reveal className={styles.slider}>
        <div className={styles.sliderHead}>
          <span className={styles.counter}>
            PAGE {String(pageIndex + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}
          </span>
          <div className={styles.sliderControls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => go(-1)}
              aria-label="Previous recommendations"
              disabled={pages.length < 2}
            >
              ←
            </button>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => go(1)}
              aria-label="Next recommendations"
              disabled={pages.length < 2}
            >
              →
            </button>
          </div>
        </div>

        <div className={styles.cardViewport}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={pageIndex}
              className={styles.recommendations}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.3, ease: EASE_STANDARD }}
            >
              {currentPage.map((rec) => (
                <div key={rec.id} className={styles.recCard}>
                  <span className={styles.recMark} aria-hidden="true">
                    &rdquo;
                  </span>
                  <span className={styles.recCode}>{rec.code}</span>
                  <p className={styles.recQuote}>{rec.quote}</p>
                  <div className={styles.recAttribution}>
                    <span className={styles.recAvatar} aria-hidden="true">
                      {initialsOf(rec.name)}
                    </span>
                    <div className={styles.recAttributionText}>
                      <span className={styles.recName}>{rec.name}</span>
                      <span className={styles.recRole}>{rec.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SheetHeader } from '../ui/SheetHeader';
import { RevealGroup, Reveal } from '../ui/Reveal';
import { EASE_STANDARD } from '../../lib/easing';
import { recommendations } from '../../data/recommendations';
import { achievements } from '../../data/achievements';
import styles from './Recognition.module.css';

export function Recognition() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = recommendations[index];

  function go(delta: number) {
    setDirection(delta);
    setIndex((i) => (i + delta + recommendations.length) % recommendations.length);
  }

  return (
    <section id="recognition" className="sheet">
      <SheetHeader
        code="05"
        title="Recognition"
        subtitle="What colleagues and clients say — plus the record, when there's one to show."
      />

      {achievements.length > 0 && (
        <RevealGroup className={styles.achievements} stagger={0.08}>
          {achievements.map((item) => (
            <Reveal key={item.id} className={styles.achievement}>
              <span className={styles.achievementTitle}>{item.title}</span>
              <p className={styles.achievementDescription}>{item.description}</p>
              {item.source && <span className={styles.achievementSource}>{item.source}</span>}
            </Reveal>
          ))}
        </RevealGroup>
      )}

      <Reveal className={styles.slider}>
        <div className={styles.sliderHead}>
          <span className={`${styles.tag} mono`}>{current.code}</span>
          <div className={styles.sliderControls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => go(-1)}
              aria-label="Previous recommendation"
              disabled={recommendations.length < 2}
            >
              ←
            </button>
            <span className={styles.counter}>
              {String(index + 1).padStart(2, '0')} / {String(recommendations.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => go(1)}
              aria-label="Next recommendation"
              disabled={recommendations.length < 2}
            >
              →
            </button>
          </div>
        </div>

        <div className={styles.cardViewport}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              className={styles.card}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.3, ease: EASE_STANDARD }}
            >
              <p className={styles.quote}>&ldquo;{current.quote}&rdquo;</p>
              <div className={styles.attribution}>
                <span className={styles.name}>{current.name}</span>
                <span className={styles.role}>{current.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsap';
import { profile } from '../../data/profile';
import { RevealGroup, Reveal } from '../ui/Reveal';
import { AnimatedStat } from '../ui/AnimatedStat';
import { EASE_STANDARD } from '../../lib/easing';
import styles from './Hero.module.css';

const NODES: [number, number][] = [
  [40, 60],
  [160, 40],
  [280, 90],
  [60, 180],
  [200, 160],
  [300, 220],
  [120, 260],
  [240, 290],
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 4],
  [2, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [5, 7],
];

function HeroGlyph() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg viewBox="0 0 320 320" className={styles.glyph} role="presentation">
      {EDGES.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={NODES[a][0]}
          y1={NODES[a][1]}
          x2={NODES[b][0]}
          y2={NODES[b][1]}
          className={styles.glyphLine}
          initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 + i * 0.06, ease: EASE_STANDARD }}
        />
      ))}
      {NODES.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={i === 4 ? 7 : 4}
          className={i === 4 ? `${styles.glyphNode} ${styles.glyphNodePulse}` : styles.glyphNode}
          initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.9 + i * 0.05,
            type: 'spring',
            stiffness: 300,
            damping: 18,
          }}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const glyphWrapRef = useRef<HTMLDivElement>(null);

  // Subtle GSAP ScrollTrigger parallax — the glyph drifts a little slower
  // than the page as you scroll past. Skipped entirely under reduced motion.
  useGSAP(
    () => {
      if (!heroRef.current || !glyphWrapRef.current) return;
      const hero = heroRef.current;
      const glyph = glyphWrapRef.current;

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to(glyph, {
          y: 50,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: heroRef },
  );

  return (
    <section id="elevation" ref={heroRef} className={`sheet ${styles.hero}`}>
      <div className={styles.layout}>
        <RevealGroup className={styles.copy} stagger={0.1}>
          <Reveal>
            <span className="eyebrow">PERSONNEL SPEC · FILE A.RIAZ-2026 · REV 1.0</span>
          </Reveal>
          <Reveal>
            <h1 className={styles.name}>{profile.name}</h1>
          </Reveal>
          <Reveal>
            <p className={styles.title}>{profile.title}</p>
            <p className={styles.focus}>{profile.focus}</p>
          </Reveal>
          <Reveal>
            <p className={styles.summary}>{profile.summary}</p>
          </Reveal>
          <Reveal>
            <div className={styles.ctaRow}>
              <motion.a
                className={styles.ctaPrimary}
                href="#system-architecture"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0, scale: 0.97 }}
                transition={{ duration: 0.15, ease: EASE_STANDARD }}
              >
                View System Architecture ↓
              </motion.a>
              <motion.a
                className={styles.ctaSecondary}
                href={profile.resumeHref}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0, scale: 0.97 }}
                transition={{ duration: 0.15, ease: EASE_STANDARD }}
              >
                Download Spec Sheet (Résumé)
              </motion.a>
              <motion.a
                className={styles.ctaSecondary}
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0, scale: 0.97 }}
                transition={{ duration: 0.15, ease: EASE_STANDARD }}
              >
                Contact →
              </motion.a>
            </div>
          </Reveal>
          <Reveal>
            <dl className={styles.stats}>
              {profile.stats.map((stat) => (
                <div className={styles.stat} key={stat.label}>
                  <dt className={styles.statLabel}>{stat.label}</dt>
                  <dd className={styles.statValue}>
                    <AnimatedStat value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal>
            <p className={styles.location}>
              <span aria-hidden="true">◈</span> {profile.location}
            </p>
          </Reveal>
        </RevealGroup>
        <div className={styles.diagram} aria-hidden="true" ref={glyphWrapRef}>
          <HeroGlyph />
        </div>
      </div>
    </section>
  );
}

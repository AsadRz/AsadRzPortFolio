import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../lib/gsap';
import { experience } from '../../data/experience';
import { SheetHeader } from '../ui/SheetHeader';
import { StackChip } from '../ui/StackChip';
import { RevealGroup, Reveal } from '../ui/Reveal';
import styles from './SystemArchitecture.module.css';

export function SystemArchitecture() {
  const railRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // The rail's spine draws itself in as you scroll through the section —
  // GSAP's scrub ties it directly to scroll position rather than a one-shot
  // trigger, which plain CSS/Motion can't do as cleanly.
  useGSAP(
    () => {
      if (!railRef.current || !progressRef.current) return;
      const rail = railRef.current;
      const progress = progressRef.current;

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(progress, { height: '0%' });
        gsap.to(progress, {
          height: '100%',
          ease: 'none',
          scrollTrigger: { trigger: rail, start: 'top 75%', end: 'bottom 55%', scrub: 0.6 },
        });
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(progress, { height: '100%' });
      });
      return () => mm.revert();
    },
    { scope: railRef },
  );

  return (
    <section id="system-architecture" className="sheet">
      <SheetHeader
        code="02"
        title="System Architecture"
        subtitle="Eight years of production roles, laid out as a signal chain — most recent first."
      />
      <div className={styles.railWrap} ref={railRef}>
        <div className={styles.railTrack} aria-hidden="true">
          <div className={styles.railTrackBg} />
          <div className={styles.railTrackProgress} ref={progressRef} />
        </div>
        <RevealGroup className={styles.rail} stagger={0.06}>
          {experience.map((entry) => (
            <Reveal key={entry.id} className={styles.node}>
              <div className={styles.gutter}>
                <span className={styles.ref}>{entry.ref}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.head}>
                  <h3 className={styles.role}>{entry.role}</h3>
                  <span className={`${styles.period} mono`}>{entry.period}</span>
                </div>
                <p className={styles.org}>
                  {entry.org} <span className={styles.location}>— {entry.location}</span>
                </p>
                {entry.featured ? (
                  <ul className={styles.bullets}>
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.condensed}>{entry.bullets[0]}</p>
                )}
                <div className={styles.stack}>
                  {entry.stack.map((tech) => (
                    <StackChip key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

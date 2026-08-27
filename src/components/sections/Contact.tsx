import { motion } from 'motion/react';
import { profile } from '../../data/profile';
import { SheetHeader } from '../ui/SheetHeader';
import { RevealGroup, Reveal } from '../ui/Reveal';
import { EASE_STANDARD } from '../../lib/easing';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className="sheet">
      <SheetHeader code="07" title="Contact" subtitle="Open channels — pick one." scale="1:1" />
      <RevealGroup className={styles.grid} stagger={0.08}>
        <Reveal>
          <motion.a
            className={styles.channel}
            href={`mailto:${profile.email}`}
            whileHover={{ y: -3 }}
            whileTap={{ y: 0, scale: 0.98 }}
            transition={{ duration: 0.15, ease: EASE_STANDARD }}
          >
            <span className={styles.channelLabel}>EMAIL</span>
            <span className={styles.channelValue}>{profile.email}</span>
          </motion.a>
        </Reveal>
        <Reveal>
          <motion.a
            className={styles.channel}
            href={profile.linkedinHref}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0, scale: 0.98 }}
            transition={{ duration: 0.15, ease: EASE_STANDARD }}
          >
            <span className={styles.channelLabel}>LINKEDIN</span>
            <span className={styles.channelValue}>{profile.linkedinLabel}</span>
          </motion.a>
        </Reveal>
        <Reveal>
          <div className={styles.channel}>
            <span className={styles.channelLabel}>LOCATION</span>
            <span className={styles.channelValue}>{profile.location}</span>
          </div>
        </Reveal>
      </RevealGroup>
    </section>
  );
}

import { skillCategories } from '../../data/skills';
import { SheetHeader } from '../ui/SheetHeader';
import { RevealGroup, Reveal } from '../ui/Reveal';
import styles from './ComponentLibrary.module.css';

export function ComponentLibrary() {
  return (
    <section id="component-library" className="sheet">
      <SheetHeader
        code="03"
        title="Component Library"
        subtitle="Bill of materials — the stack, grouped by function."
      />
      <RevealGroup className={styles.grid} stagger={0.07}>
        {skillCategories.map((category) => (
          <Reveal key={category.series} className={styles.category}>
            <div className={styles.categoryHead}>
              <span className={styles.categoryCode}>
                {category.series}-SERIES · {category.code}
              </span>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <span className={styles.categoryNote}>{category.note}</span>
            </div>
            <ul className={styles.items}>
              {category.items.map((item) => (
                <li key={item.refDes} className={styles.item}>
                  <span className={styles.refDes}>{item.refDes}</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}

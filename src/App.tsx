import { MotionConfig } from 'motion/react';
import { BlueprintChrome } from './components/layout/BlueprintChrome';
import { SheetNav } from './components/layout/SheetNav';
import { TitleBlock } from './components/layout/TitleBlock';
import { ChatBot } from './components/layout/ChatBot';
import { Hero } from './components/sections/Hero';
import { SystemArchitecture } from './components/sections/SystemArchitecture';
import { ComponentLibrary } from './components/sections/ComponentLibrary';
import { CaseStudies } from './components/sections/CaseStudies';
import { Specifications } from './components/sections/Specifications';
import { Contact } from './components/sections/Contact';
import styles from './App.module.css';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className={styles.skipLink} href="#elevation">
        Skip to content
      </a>
      <BlueprintChrome />
      <SheetNav />
      <div className={styles.page}>
        <main className={styles.main}>
          <Hero />
          <SystemArchitecture />
          <ComponentLibrary />
          <CaseStudies />
          <Specifications />
          <Contact />
        </main>
        <TitleBlock />
      </div>
      <ChatBot />
    </MotionConfig>
  );
}

export default App;

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registering a plugin twice is a harmless no-op in GSAP, but ES module
// caching means this file's top-level code only ever runs once anyway —
// every import gets the same already-registered gsap instance.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

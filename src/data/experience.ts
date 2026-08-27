import type { ExperienceEntry } from '../types';

/**
 * Sourced from Asad's resume (Aug 2026). Two corrections were made to
 * obvious typos in the source document:
 *  - Discretelogix end date read "02/2022", which overlaps every role that
 *    follows it; corrected to "02/2020" to match the chronological sequence.
 *  - The 10Pearls title had "Islamabad" prefixed onto the role name; moved
 *    to the location field where it belongs.
 */
export const experience: ExperienceEntry[] = [
  {
    id: 'adha',
    ref: 'U1',
    role: 'Senior Full Stack Developer',
    org: 'ADHA — Abu Dhabi Housing Authority',
    period: '2024 — Present',
    location: 'Abu Dhabi, UAE',
    bullets: [
      'Build end-to-end housing-platform solutions on NestJS, React, GraphQL, Jest and Oracle DB.',
      'Set up RabbitMQ to keep data synchronized across databases, improving consistency and reliability.',
      'Automated key workflows with Camunda, saving significant manual effort for the team.',
      'Manage content through Strapi CMS, making updates faster and smoother for end users.',
      'Deliver clean, tested, maintainable code in close collaboration with cross-functional teams.',
    ],
    stack: ['React', 'TypeScript', 'NestJS', 'GraphQL', 'Oracle DB', 'RabbitMQ', 'Camunda', 'Strapi', 'Jest'],
    featured: true,
  },
  {
    id: 'adres',
    ref: 'U2',
    role: 'Senior Full Stack Developer',
    org: 'ADRES',
    period: '10/2023 — 05/2024',
    location: 'Abu Dhabi, UAE (Remote)',
    bullets: [
      'Enhanced services and revamped applications on the TAMM platform with React, JavaScript and TypeScript.',
      'Drove a 90% improvement in user experience and system performance alongside the team.',
      'Introduced current design trends and shared code practices that streamlined development.',
      'Supervised project tasks in JIRA, keeping workflows and team communication on track.',
      'Held code quality to an 80% test-coverage bar using Jest, minimizing post-release issues.',
    ],
    stack: ['React', 'TypeScript', 'JavaScript', 'Jest', 'JIRA'],
    featured: true,
  },
  {
    id: 'tahaluf',
    ref: 'U3',
    role: 'Senior Full Stack Consultant',
    org: 'Tahaluf L.L.C',
    period: '11/2022 — 10/2023',
    location: 'Abu Dhabi, UAE (Onsite)',
    bullets: [
      'Built front-end services for DED and DMT (Department of Economic Development / Department of Municipalities and Transport) on the TAMM platform.',
      'Contributed to an 80% improvement in user experience and system performance.',
      'Integrated backend APIs onto TAMM using Node.js and Express.js.',
      'Ran project workflows in JIRA, lifting team productivity by 100%.',
      'Maintained 80% test coverage with Jest, keeping post-release issues to a minimum.',
    ],
    stack: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'JIRA', 'Jest'],
    featured: true,
  },
  {
    id: 'systems-ltd',
    ref: 'U4',
    role: 'Senior Software Engineer',
    org: 'Systems Ltd. (with PwC)',
    period: '10/2021 — 11/2022',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Worked alongside PwC on government projects, improving UX for ADDA via the TAMM platform — a 95% boost in user satisfaction and engagement.',
      'Built Design Layer System (DLS) components on the React-based workbench platform, lifting user engagement and interaction rates by 85%.',
      'Helped consolidate ADG services onto a unified platform, driving a 90% increase in overall user satisfaction.',
    ],
    stack: ['React', 'Design Systems', 'TAMM Platform'],
    featured: true,
  },
  {
    id: '10pearls',
    ref: 'U5',
    role: 'Software Engineer (MERN)',
    org: '10Pearls',
    period: '12/2020 — 10/2021',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Led a high-performing front-end team, lifting client satisfaction by 87% through clear communication and strong UI/UX delivery.',
      'Improved project delivery efficiency by 90% using React, TypeScript, Jest, Material, Ant Design, Azure DevOps and JIRA.',
    ],
    stack: ['React', 'TypeScript', 'Jest', 'Material UI', 'Ant Design', 'Azure DevOps', 'JIRA'],
    featured: false,
  },
  {
    id: 'visionx',
    ref: 'U6',
    role: 'React Developer',
    org: 'VisionX',
    period: '05/2020 — 12/2020',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Built a Building Assessment Management System (React, Redux, REST API), improving data-processing efficiency by 80%.',
      'Led a single-page 3D modeling showcase using AR-Kit, driving a 95% increase in client engagement.',
      'Implemented JS Cache API caching, cutting load times by 70%.',
    ],
    stack: ['React', 'Redux', 'REST API', 'AR-Kit'],
    featured: false,
  },
  {
    id: 'discretelogix',
    ref: 'U7',
    role: 'Web Developer',
    org: 'Discretelogix',
    period: '05/2019 — 02/2020',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Built a Leads Management System and portfolio site with React, Node.js and AWS (EC2, S3), improving data organization and accessibility by 75%.',
      'Sized the LMS for a 5-person call-center team, raising efficiency and accountability by 80%.',
    ],
    stack: ['React', 'Node.js', 'AWS EC2', 'AWS S3'],
    featured: false,
  },
  {
    id: 'c-technologies',
    ref: 'U8',
    role: 'Web Developer',
    org: 'C-Technologies',
    period: '01/2018 — 04/2019',
    location: 'Islamabad, Pakistan',
    bullets: [
      'Built out a Hospital Management System (PHP, JavaScript, HTML, CSS) covering registration, scheduling and records.',
      'Lifted administrative productivity by 70% and cut errors by 78%.',
    ],
    stack: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    featured: false,
  },
];

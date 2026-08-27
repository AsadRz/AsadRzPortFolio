import type { ExperienceEntry } from '../types';

/**
 * Sourced from Asad's resume (Aug 2026). Two corrections were made to
 * obvious typos in the source document:
 *  - Discretelogix end date read "02/2022", which overlaps every role that
 *    follows it; corrected to "02/2020" to match the chronological sequence.
 *  - The 10Pearls title had "Islamabad" prefixed onto the role name; moved
 *    to the location field where it belongs.
 *
 * Bullets are written situation → action → result (STAR) rather than as a
 * flat task list — every fact, number and technology matches the original
 * bullets exactly; only the framing changed.
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
      'Own housing-platform features end to end — from requirements through to a production service on NestJS, React, GraphQL and Oracle DB, covered by Jest.',
      'Databases were drifting out of sync across the platform; set up RabbitMQ as the backbone that keeps them synchronized, improving consistency and reliability platform-wide.',
      'Key internal workflows were eating manual staff time; automated them with Camunda, saving significant effort for the team.',
      'Content updates previously required a developer; moved content management onto Strapi CMS so non-technical teams can publish changes faster and more smoothly.',
      'Delivers clean, tested, maintainable code in close collaboration with cross-functional teams.',
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
      'Took on aging services on the TAMM platform that needed enhancing and revamped them with React, JavaScript and TypeScript.',
      'Drove a 90% improvement in user experience and system performance alongside the team.',
      'Development practices varied across the team; introduced current design trends and shared code practices that streamlined how features got built.',
      'Supervised project tasks in JIRA, keeping workflows and team communication on track.',
      'Held code to an 80% Jest test-coverage bar, minimizing issues that would otherwise have surfaced post-release.',
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
      'Two government departments — Economic Development (DED) and Municipalities & Transport (DMT) — needed front-end services on the shared TAMM platform; built and shipped them.',
      'Contributed to an 80% improvement in user experience and system performance.',
      'Integrated backend APIs onto TAMM using Node.js and Express.js, connecting the front end to the data it needed.',
      'Ran project workflows in JIRA in a way that lifted team productivity by 100%.',
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
      'Worked alongside PwC on government projects to improve UX for ADDA via the TAMM platform, driving a 95% boost in user satisfaction and engagement.',
      'The workbench platform lacked a shared component system; built the Design Layer System (DLS) on React, lifting user engagement and interaction rates by 85%.',
      'ADG services were spread across disconnected experiences; helped consolidate them onto one unified platform, driving a 90% increase in overall user satisfaction.',
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
      'Led a front-end team where client satisfaction needed to improve; lifted it by 87% through clear communication and strong UI/UX delivery.',
      'Standardized the team’s stack around React, TypeScript, Jest, Material, Ant Design, Azure DevOps and JIRA, improving project delivery efficiency by 90%.',
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
      'Built a Building Assessment Management System (React, Redux, REST API) that improved data-processing efficiency by 80%.',
      'Led a single-page 3D modeling showcase using AR-Kit to give the client an interactive way to present their work, driving a 95% increase in client engagement.',
      'Load times were a bottleneck; implemented JS Cache API caching, cutting load times by 70%.',
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
      'Lead data was scattered and hard to access; built a Leads Management System and portfolio site with React, Node.js and AWS (EC2, S3), improving data organization and accessibility by 75%.',
      'Sized the LMS specifically for a 5-person call-center team, raising their efficiency and accountability by 80%.',
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
      'Hospital administration was running on manual processes; built a Hospital Management System (PHP, JavaScript, HTML, CSS) covering registration, scheduling and records.',
      'Lifted administrative productivity by 70% and cut errors by 78%.',
    ],
    stack: ['PHP', 'JavaScript', 'HTML', 'CSS'],
    featured: false,
  },
];

import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'adha-housing',
    code: 'CS-01',
    name: 'ADHA Housing Platform',
    org: 'Abu Dhabi Housing Authority',
    period: '2024 — Present',
    role: 'Senior Full Stack Developer',
    description:
      'End-to-end housing-platform work: a React/TypeScript frontend backed by NestJS services and Oracle DB, with RabbitMQ keeping data consistent across systems and Camunda automating internal workflows.',
    impact: [
      { label: 'Data Sync', value: 'Cross-DB via RabbitMQ' },
      { label: 'Manual Effort', value: 'Cut via Camunda' },
      { label: 'Content Ops', value: 'Self-serve via Strapi' },
    ],
    stack: ['React', 'TypeScript', 'NestJS', 'GraphQL', 'Oracle DB', 'RabbitMQ', 'Camunda', 'Strapi'],
    layers: ['frontend', 'api', 'data', 'infra'],
  },
  {
    id: 'tamm-ded-dmt',
    code: 'CS-02',
    name: 'TAMM — DED & DMT Services',
    org: 'Tahaluf L.L.C',
    period: '11/2022 — 10/2023',
    role: 'Senior Full Stack Consultant',
    description:
      'Frontend services for two government departments — Economic Development and Municipalities & Transport — on the shared TAMM platform, integrating backend APIs over Node.js/Express and holding an 80% Jest coverage bar throughout.',
    impact: [
      { label: 'UX & Performance', value: '+80%' },
      { label: 'Team Productivity', value: '+100%' },
      { label: 'Test Coverage', value: '80%' },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'JIRA', 'Jest'],
    layers: ['frontend', 'api'],
  },
  {
    id: 'dls-adda-adg',
    code: 'CS-03',
    name: 'Design Layer System + ADDA / ADG',
    org: 'Systems Ltd. · with PwC',
    period: '10/2021 — 11/2022',
    role: 'Senior Software Engineer',
    description:
      'A reusable Design Layer System (DLS) built on React for a government workbench platform, then used to bring ADDA — and a wider set of ADG services — onto one consolidated experience.',
    impact: [
      { label: 'ADDA Satisfaction', value: '+95%' },
      { label: 'DLS Engagement', value: '+85%' },
      { label: 'ADG Consolidation', value: '+90% satisfaction' },
    ],
    stack: ['React', 'Design Systems', 'TAMM Platform'],
    layers: ['frontend'],
  },
  {
    id: 'visionx-3d-ar',
    code: 'CS-04',
    name: '3D / AR Showcase + BAMS',
    org: 'VisionX',
    period: '05/2020 — 12/2020',
    role: 'React Developer',
    description:
      'A single-page 3D visualization tool built with React, Redux and AR-Kit, alongside a Building Assessment Management System — with JS Cache API caching cutting load times significantly.',
    impact: [
      { label: 'Client Engagement', value: '+95%' },
      { label: 'Data Processing', value: '+80%' },
      { label: 'Load Time', value: '−70%' },
    ],
    stack: ['React', 'Redux', 'AR-Kit', 'REST API'],
    layers: ['frontend', 'api'],
  },
];

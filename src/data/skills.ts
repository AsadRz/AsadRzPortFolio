import type { SkillCategory } from '../types';

const withRefs = (series: string, names: string[]) =>
  names.map((name, index) => ({ name, refDes: `${series}${index + 1}` }));

export const skillCategories: SkillCategory[] = [
  {
    series: 'U',
    code: '01',
    title: 'Frontend',
    note: 'core logic units',
    items: withRefs('U', [
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'React Hooks',
      'Redux',
      'HTML5',
      'CSS',
      'Gatsby',
      'Ant Design',
      'Material UI',
      'Bootstrap',
      'jQuery',
    ]),
  },
  {
    series: 'Q',
    code: '02',
    title: 'Backend / API',
    note: 'switching layer',
    items: withRefs('Q', ['NestJS', 'Node.js', 'Express.js', 'GraphQL', 'REST API', 'PHP']),
  },
  {
    series: 'C',
    code: '03',
    title: 'Data & Integration',
    note: 'storage elements',
    items: withRefs('C', ['Oracle DB', 'MongoDB', 'RabbitMQ', 'Camunda', 'Strapi CMS']),
  },
  {
    series: 'J',
    code: '04',
    title: 'Cloud & Infra',
    note: 'connectors',
    items: withRefs('J', [
      'AWS EC2',
      'AWS S3',
      'AWS Cognito',
      'AWS CodeCommit',
      'Azure DevOps',
      'AKS',
      'Docker',
      'Keycloak',
    ]),
  },
  {
    series: 'SW',
    code: '05',
    title: 'Tooling & QA',
    note: 'toggles',
    items: withRefs('SW', ['Jest', 'Git', 'GitLab', 'JIRA', 'Babel', 'YARN', 'Agile / Scrum']),
  },
];

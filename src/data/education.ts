import type { CertItem, LanguageItem } from '../types';

export const education = {
  degree: 'B.S. Computer Science',
  school: 'Bahria University',
  period: '2018',
};

export const certifications: CertItem[] = [
  {
    name: 'Meta Front-End Developer Professional',
    issuer: 'Coursera',
    verifyUrl: 'https://coursera.org/verify/professional-cert/5T7GAJVPBSY3',
    image: '/certificates/coursera-meta-front-end-developer.jpg',
  },
  { name: 'GraphQL Developer — Associate', issuer: 'Apollo GraphQL' },
  { name: 'AI For React Developers', issuer: 'Coursera' },
  { name: 'Version Control', issuer: 'Coursera' },
  { name: 'Problem Solving', issuer: 'HackerRank' },
  {
    name: 'JavaScript — Intermediate',
    issuer: 'HackerRank',
    verifyUrl: 'https://www.hackerrank.com/certificates/0f3772f12216',
    image: '/certificates/hackerrank-javascript-intermediate.jpg',
  },
  { name: 'JavaScript — Basic', issuer: 'HackerRank' },
  { name: 'CSS', issuer: 'HackerRank' },
  { name: 'Build a Full-Stack JavaScript Application Using AWS Amplify', issuer: 'LinkedIn Learning' },
  { name: '8 Git Commands You Should Know', issuer: 'LinkedIn Learning' },
  { name: 'React: Working with APIs', issuer: 'LinkedIn Learning' },
  { name: 'AWS and React: Creating Full-Stack Apps', issuer: 'LinkedIn Learning' },
  { name: 'Essentials of CSS for React Developers', issuer: 'LinkedIn Learning' },
  { name: 'Learning Functional Programming with JavaScript', issuer: 'LinkedIn Learning' },
  { name: 'Learning Next.js', issuer: 'LinkedIn Learning' },
  { name: 'Building a GraphQL Project with React.js', issuer: 'LinkedIn Learning' },
  { name: 'Level Up: Advanced SQL', issuer: 'LinkedIn Learning' },
  {
    name: 'Claude with the Anthropic API',
    issuer: 'Anthropic Education',
    verifyUrl: 'https://verify.skilljar.com/c/68iv5qvvfs3a',
    image: '/certificates/anthropic-building-with-claude-api.jpg',
  },
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic Education',
    verifyUrl: 'https://verify.skilljar.com/c/5t9gwbs2zgny',
    image: '/certificates/anthropic-claude-code-in-action.jpg',
  },
  {
    name: 'Claude 101',
    issuer: 'Anthropic Education',
    image: '/certificates/anthropic-claude-101.png',
  },
];

export const languages: LanguageItem[] = [
  { name: 'Urdu', level: 'Native', strength: 5 },
  { name: 'English', level: 'Proficient', strength: 4 },
  { name: 'German', level: 'Beginner', strength: 1 },
];

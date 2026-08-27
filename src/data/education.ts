import type { CertItem, LanguageItem } from '../types';

export const education = {
  degree: 'B.S. Computer Science',
  school: 'Bahria University',
  period: '2018',
};

export const certifications: CertItem[] = [
  { name: 'Meta Front-End Developer Professional', issuer: 'Coursera' },
  { name: 'GraphQL Developer — Associate', issuer: 'Apollo GraphQL' },
  { name: 'AI For React Developers', issuer: 'Coursera' },
  { name: 'Version Control', issuer: 'Coursera' },
  { name: 'Problem Solving', issuer: 'HackerRank' },
  { name: 'JavaScript — Intermediate', issuer: 'HackerRank' },
  { name: 'JavaScript — Basic', issuer: 'HackerRank' },
  { name: 'CSS', issuer: 'HackerRank' },
];

export const languages: LanguageItem[] = [
  { name: 'Urdu', level: 'Native', strength: 5 },
  { name: 'English', level: 'Proficient', strength: 4 },
  { name: 'German', level: 'Beginner', strength: 1 },
];

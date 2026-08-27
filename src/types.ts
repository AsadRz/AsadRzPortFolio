export interface Metric {
  label: string;
  value: string;
}

export interface ExperienceEntry {
  id: string;
  ref: string; // reference designator, e.g. "U1"
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
  featured: boolean; // true = full detail card, false = condensed row
}

export type LayerKey = 'frontend' | 'api' | 'data' | 'infra';

export interface CaseStudy {
  id: string;
  code: string; // "CS-01"
  name: string;
  org: string;
  period: string;
  role: string;
  description: string;
  impact: Metric[];
  stack: string[];
  layers: LayerKey[];
}

export interface SkillItem {
  name: string;
  refDes: string; // e.g. "U1"
}

export interface SkillCategory {
  series: string; // "U", "Q", "C", "J", "SW"
  code: string; // "01".."05"
  title: string;
  note: string;
  items: SkillItem[];
}

export interface CertItem {
  name: string;
  issuer: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  strength: number; // 1-5
}

export interface SectionMeta {
  id: string;
  code: string;
  label: string;
  short: string;
}

export const SECTIONS: SectionMeta[] = [
  { id: 'elevation', code: '01', label: 'Elevation', short: 'Elevation' },
  {
    id: 'system-architecture',
    code: '02',
    label: 'System Architecture',
    short: 'Systems',
  },
  {
    id: 'component-library',
    code: '03',
    label: 'Component Library',
    short: 'Components',
  },
  { id: 'case-studies', code: '04', label: 'Case Studies', short: 'Case Studies' },
  { id: 'recognition', code: '05', label: 'Recognition', short: 'Recognition' },
  { id: 'specifications', code: '06', label: 'Specifications', short: 'Specs' },
  { id: 'contact', code: '07', label: 'Contact', short: 'Contact' },
];

// Computed once at module load so consumers (useScrollSpy, nav) get a
// referentially-stable array instead of a new one on every render.
export const SECTION_IDS = SECTIONS.map((section) => section.id);

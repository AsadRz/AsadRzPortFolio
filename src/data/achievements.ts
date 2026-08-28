import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'imagine-foundation-top-10',
    title: 'Top 10% — Imagine Foundation frontend bootcamp',
    description:
      "Completed Imagine Foundation's highly selective 4-week digital bootcamp for developers and ranked in the top 10% of the peer group, with English communication and technical skills assessed as on par with candidates in Germany.",
    source: 'Recommendation letter — Dr. Johann Daniel Harnoss, Founder & CEO, Imagine Foundation e.V., 05/13/2022',
    image: '/achievements/imagine-foundation-recommendation.png',
  },
  {
    id: 'narraflix-client-recommendation',
    title: 'Client recommendation — Narraflix',
    description:
      'Independently built the web frontend for "Narraflix," an app for Bonn-based studio Stories We Love, contributing directly to the project\'s success and earning a formal recommendation from the company owner.',
    source: 'Recommendation letter — Sören Böckmann, Owner, Stories We Love, 04.01.2022',
    image: '/achievements/narraflix-recommendation.png',
  },
];

import type { Localized } from '@/types'

export const profile = {
  firstName: 'Abdelali',
  lastName: 'AIT-HAMMI',
  initials: 'AA',
  photo: '/avatar.svg',
  email: 'aithammiabdelali@gmail.com',
  phone: '+212 626 78 04 06',
  phoneHref: '+212626780406',
  city: 'Kasr Khamlia, Merzouga',
  region: 'Errachidia',
  country: 'Maroc',
  countryCode: 'MA',
  mapUrl: 'https://www.google.com/maps/place/Merzouga',
  links: {
    github: 'https://github.com/AlixFanaDev',
    linkedin: 'https://linkedin.com/in/abdelali-ait-hammi-8a6505379',
    portfolio: 'https://alixfanana-dev-portfolio.vercel.app',
  },
  /** Roles shown as the rotating headline in the hero */
  role: {
    fr: 'Développeur Web Full Stack',
    en: 'Full Stack Web Developer',
  } as Localized,
  available: true,
} as const

export const resumeMeta = {
  updated: '2026-06',
} as const

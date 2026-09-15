import type {
  EducationItem,
  ExperienceItem,
  InterestGroup,
  LanguageItem,
  Localized,
  SkillGroup,
} from '@/types'

export const summary: Localized = {
  fr: "Technicien spécialisé en développement digital, orienté Web Full Stack, avec une expérience pratique en création de sites et plateformes web, bases de données, débogage et gestion de ressources numériques. Je conçois des interfaces soignées et des back-ends fiables, du prototype Figma jusqu'à la mise en production.",
  en: 'Digital development technician focused on Full Stack Web, with hands-on experience building websites and web platforms, databases, debugging and digital asset management. I craft polished interfaces and reliable back-ends, from the Figma prototype all the way to production.',
}

/** Rotating headline roles used by the hero typewriter */
export const heroRoles: Record<'fr' | 'en', string[]> = {
  fr: [
    'Développeur Web Full Stack',
    'Intégrateur Front-End',
    'Gestionnaire de bases de données',
    'Créateur de sites WordPress',
  ],
  en: [
    'Full Stack Web Developer',
    'Front-End Integrator',
    'Database Administrator',
    'WordPress Site Builder',
  ],
}

export const experience: ExperienceItem[] = [
  {
    role: {
      fr: 'Stagiaire Développement Web',
      en: 'Web Development Intern',
    },
    company: 'Aventuras con Essencia',
    location: {
      fr: 'Kasr Khamlia, Merzouga, Errachidia',
      en: 'Kasr Khamlia, Merzouga, Errachidia',
    },
    period: {
      fr: 'Mars 2026',
      en: 'March 2026',
    },
    current: true,
    bullets: {
      fr: [
        'Création de sites web et de plateformes sur mesure.',
        'Manipulation et gestion des bases de données.',
        'Gestion et organisation des ressources numériques.',
        'Utilisation avancée des logiciels bureautiques.',
        'Débogage et correction de codes sources.',
      ],
      en: [
        'Built custom websites and web platforms.',
        'Handled and managed relational databases.',
        'Managed and organized digital assets.',
        'Used office productivity software at an advanced level.',
        'Debugged and fixed source code.',
      ],
    },
    stack: ['PHP', 'MySQL', 'JavaScript', 'WordPress', 'Figma'],
  },
]

export const education: EducationItem[] = [
  {
    degree: {
      fr: 'Technicien Spécialisé en Développement Digital — option Full Stack',
      en: 'Specialized Technician in Digital Development — Full Stack track',
    },
    school: {
      fr: 'Institut Spécialisé de Technologie Appliquée Mohammed EL FASSE',
      en: 'Mohammed EL FASSE Specialized Institute of Applied Technology',
    },
    location: { fr: 'Errachidia, Maroc', en: 'Errachidia, Morocco' },
    period: { fr: 'Juin 2026', en: 'June 2026' },
    note: { fr: 'Diplôme en cours', en: 'Graduating' },
  },
  {
    degree: {
      fr: 'Baccalauréat scientifique — Sciences de la Vie et de la Terre',
      en: 'Scientific Baccalaureate — Life and Earth Sciences',
    },
    school: {
      fr: 'Lycée Chahid My Taib Ben My Lkbir',
      en: 'Chahid My Taib Ben My Lkbir High School',
    },
    location: { fr: 'Jorf, Maroc', en: 'Jorf, Morocco' },
    period: { fr: 'Juin 2021', en: 'June 2021' },
  },
]

export const skillGroups: SkillGroup[] = [
  {
    labelKey: 'skills.frontend',
    icon: 'layout',
    accent: 'sand',
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    labelKey: 'skills.backend',
    icon: 'database',
    accent: 'ember',
    items: ['PHP', 'MySQL', 'Python', 'MongoDB'],
  },
  {
    labelKey: 'skills.frameworks',
    icon: 'layers',
    accent: 'violet',
    items: ['Tailwind', 'React', 'Laravel'],
  },
  {
    labelKey: 'skills.web',
    icon: 'globe',
    accent: 'sky',
    items: ['WordPress', 'Duplicator'],
  },
  {
    labelKey: 'skills.design',
    icon: 'pen',
    accent: 'rose',
    items: ['Figma', 'Lunacy'],
  },
  {
    labelKey: 'skills.pm',
    icon: 'kanban',
    accent: 'emerald',
    items: ['Google Workspace', 'Obsidian', 'DrawDB'],
  },
  {
    labelKey: 'skills.office',
    icon: 'file',
    accent: 'sand',
    items: ['Word', 'PowerPoint', 'Access'],
  },
  {
    labelKey: 'skills.systems',
    icon: 'terminal',
    accent: 'sky',
    items: ['Linux', 'Windows'],
  },
]

export const languages: LanguageItem[] = [
  {
    name: { fr: 'Arabe', en: 'Arabic' },
    level: { fr: 'Courant', en: 'Fluent' },
    score: 5,
    native: true,
  },
  {
    name: { fr: 'Français', en: 'French' },
    level: { fr: 'Courant', en: 'Fluent' },
    score: 5,
  },
  {
    name: { fr: 'Anglais', en: 'English' },
    level: { fr: 'Courant', en: 'Fluent' },
    score: 5,
  },
  {
    name: { fr: 'Espagnol', en: 'Spanish' },
    level: { fr: 'Intermédiaire', en: 'Intermediate' },
    score: 3,
  },
  {
    name: { fr: 'Tamazight', en: 'Tamazight' },
    level: { fr: 'Intermédiaire', en: 'Intermediate' },
    score: 3,
  },
]

export const interests: InterestGroup[] = [
  {
    title: { fr: 'Veille & Lecture', en: 'Reading & Watchlist' },
    items: {
      fr: ['Journaux', 'GitHub', 'Reddit', 'Wikis'],
      en: ['Journals', 'GitHub', 'Reddit', 'Wikis'],
    },
  },
  {
    title: { fr: 'Sport', en: 'Sport' },
    items: { fr: ['Basketball'], en: ['Basketball'] },
  },
  {
    title: { fr: 'Créatif', en: 'Creative' },
    items: {
      fr: [
        'Bricolage',
        'Restauration',
        'Photographie',
        'Montage vidéo',
        'Retouche photo',
        'Animation',
      ],
      en: [
        'DIY & tinkering',
        'Restoration',
        'Photography',
        'Video editing',
        'Photo retouching',
        'Animation',
      ],
    },
  },
]

/** Extra facts shown in the About card */
export const facts: { label: Localized; value: Localized }[] = [
  {
    label: { fr: 'Basé à', en: 'Based in' },
    value: { fr: 'Merzouga, Maroc', en: 'Merzouga, Morocco' },
  },
  {
    label: { fr: 'Formation', en: 'Education' },
    value: { fr: 'Développement Digital — Full Stack', en: 'Digital Development — Full Stack' },
  },
  {
    label: { fr: 'Disponibilité', en: 'Availability' },
    value: { fr: 'Ouvert aux opportunités', en: 'Open to opportunities' },
  },
  {
    label: { fr: 'Permis', en: 'Driving licence' },
    value: { fr: 'Permis B — 2023', en: 'Category B — 2023' },
  },
]

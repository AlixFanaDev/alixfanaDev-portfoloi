export type Locale = 'fr' | 'en'

export type Localized = Record<Locale, string>

export interface SkillGroup {
  /** i18n key resolved against the UI dictionary */
  labelKey: string
  icon: string
  accent: 'sand' | 'ember' | 'violet' | 'sky' | 'emerald' | 'rose'
  items: string[]
}

export interface ExperienceItem {
  role: Localized
  company: string
  location: Localized
  period: Localized
  current?: boolean
  bullets: Record<Locale, string[]>
  stack: string[]
}

export interface EducationItem {
  degree: Localized
  school: Localized
  location: Localized
  period: Localized
  note?: Localized
}

export interface LanguageItem {
  name: Localized
  level: Localized
  /** 0–5 proficiency, drives the rating meter */
  score: number
  native?: boolean
}

export interface InterestGroup {
  title: Localized
  items: Record<Locale, string[]>
}

export interface UiDictionary {
  nav: Record<string, string>
  hero: Record<string, string>
  sections: Record<string, string>
  headings: {
    about: { title: string; body: string }
    experience: { title: string; body: string }
    skills: { title: string; body: string }
    education: { title: string; body: string }
    languages: { title: string; body: string }
    contact: { title: string; body: string }
  }
  cta: Record<string, string>
  labels: {
    now: string
    stack: string
    native: string
    proficiency: string
    present: string
    skills: Record<string, string>
    footer: { builtWith: string; rights: string }
  }
  a11y: Record<string, string>
}

/** Single source of truth for in-page anchors (nav + section ids). */
export const sections = [
  { id: 'about', key: 'about' },
  { id: 'experience', key: 'experience' },
  { id: 'skills', key: 'skills' },
  { id: 'education', key: 'education' },
  { id: 'languages', key: 'languages' },
  { id: 'contact', key: 'contact' },
] as const

export type SectionId = (typeof sections)[number]['id'] | 'home'

export const sectionIds = sections.map((s) => s.id)
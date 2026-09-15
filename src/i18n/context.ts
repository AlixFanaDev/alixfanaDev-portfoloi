import { createContext } from 'react'

import type { Locale, Localized, UiDictionary } from '@/types'

export interface I18nValue {
  locale: Locale
  /** Switch to another locale (persisted) */
  setLocale: (locale: Locale) => void
  /** Flip between the supported locales */
  toggleLocale: () => void
  /** UI dictionary for the current locale */
  t: UiDictionary
  /** Resolve a localized value for the current locale */
  tr: (value: Localized) => string
}

export const I18nContext = createContext<I18nValue | null>(null)

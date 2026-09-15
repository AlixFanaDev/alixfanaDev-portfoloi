import { useCallback, useEffect, useMemo, useState } from 'react'

import { ui } from '@/data/ui'
import { I18nContext, type I18nValue } from '@/i18n/context'
import { type Locale, type Localized } from '@/types'

const STORAGE_KEY = 'portfolio.locale'
const SUPPORTED: Locale[] = ['fr', 'en']

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'fr'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && (SUPPORTED as string[]).includes(stored)) return stored as Locale

  const browser = window.navigator.language.slice(0, 2).toLowerCase()
  return browser === 'en' ? 'en' : 'fr'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const setLocale = useCallback((next: Locale) => setLocaleState(next), [])

  const toggleLocale = useCallback(
    () => setLocaleState((prev) => (prev === 'fr' ? 'en' : 'fr')),
    [],
  )

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: ui[locale],
      tr: (localized: Localized) => localized[locale],
    }),
    [locale, setLocale, toggleLocale],
  )

  return <I18nContext value={value}>{children}</I18nContext>
}

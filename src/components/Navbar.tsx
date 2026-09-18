import { AnimatePresence, motion } from 'framer-motion'
import { Languages, Menu, ArrowUpRight, X } from 'lucide-react'
import { useCallback, useState } from 'react'

import { GithubIcon } from '@/components/icons/Brand'
import { sections } from '@/data/nav'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollLock, useScrolled } from '@/hooks/useScrollState'
import { useI18n } from '@/i18n/useI18n'

const navIds = [...sections.map((s) => s.id)]

export function Navbar() {
  const { t, locale, toggleLocale } = useI18n()
  const scrolled = useScrolled(24)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navIds, 140)

  useScrollLock(open)

  const close = useCallback(() => setOpen(false), [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-sand-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        {t.nav.about}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/8 bg-ink-950/75 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <nav
          className="container-page flex h-16 items-center justify-between gap-4 sm:h-18"
          aria-label="Primary"
        >
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label={`${profile.firstName} ${profile.lastName} — home`}
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sand-300 via-ember-500 to-violet-500 text-sm font-bold text-ink-950 shadow-lg shadow-ember-500/20 transition-transform duration-300 group-hover:scale-105">
              <img
                src={profile.photo}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="h-9 w-9 rounded-xl object-cover"
              />
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-white sm:block">
              {profile.firstName}
              <span className="text-sand-300">.</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {sections.map((section) => {
              const isActive = active === section.id
              return (
                <li key={section.id} className="relative">
                  <a
                    href={`#${section.id}`}
                    className={`relative z-10 block rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-ink-400 hover:text-white'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {t.nav[section.key]}
                  </a>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full border border-white/10 bg-white/6"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLocale}
              className="hidden h-9 items-center gap-1.5 rounded-full border border-white/10 bg-white/4 px-3 text-xs font-semibold tracking-wide text-ink-200 transition-colors hover:border-sand-400/40 hover:text-white sm:flex"
              aria-label={t.a11y.toggleLang}
            >
              <Languages className="h-3.5 w-3.5" />
              {locale.toUpperCase()}
            </button>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/4 text-ink-200 transition-colors hover:border-sand-400/40 hover:text-white sm:grid"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-sand-300 to-ember-500 px-4 py-2 text-sm font-semibold text-ink-950 shadow-lg shadow-ember-500/20 transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
            >
              {t.cta.contact}
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/4 text-white transition-colors hover:border-sand-400/40 lg:hidden"
              aria-label={open ? t.a11y.closeMenu : t.a11y.toggleMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              tabIndex={-1}
              aria-hidden
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-20 rounded-3xl border border-white/10 bg-ink-900/95 p-5 shadow-2xl shadow-black/50"
            >
              <ul className="flex flex-col gap-1">
                {sections.map((section, index) => (
                  <motion.li
                    key={section.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.045 }}
                  >
                    <a
                      href={`#${section.id}`}
                      onClick={close}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base transition-colors ${
                        active === section.id
                          ? 'bg-white/8 text-white'
                          : 'text-ink-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {t.nav[section.key]}
                      <ArrowUpRight className="h-4 w-4 text-sand-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-4 flex items-center gap-2 border-t border-white/8 pt-4">
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="flex h-10 flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/4 text-sm font-semibold text-ink-200"
                  aria-label={t.a11y.toggleLang}
                >
                  <Languages className="h-4 w-4" />
                  {locale === 'fr' ? 'Français' : 'English'}
                </button>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/4 text-ink-200"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4.5 w-4.5" />
                </a>
                <a
                  href="#contact"
                  onClick={close}
                  className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-sand-300 to-ember-500 text-sm font-semibold text-ink-950"
                >
                  {t.cta.contact}
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
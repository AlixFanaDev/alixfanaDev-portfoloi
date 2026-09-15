import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { useRef } from 'react'

import { GithubIcon, LinkedinIcon } from '@/components/icons/Brand'
import { Typewriter } from '@/components/ui/Typewriter'
import { heroRoles } from '@/data/content'
import { profile } from '@/data/profile'
import { useI18n } from '@/i18n/useI18n'

const orbitChips = [
  { label: 'React', top: '6%', left: '-4%', delay: 0 },
  { label: 'Laravel', top: '72%', left: '-8%', delay: 0.6 },
  { label: 'MySQL', top: '88%', left: '58%', delay: 1.1 },
  { label: 'Figma', top: '-4%', left: '62%', delay: 1.6 },
]

export function Hero() {
  const { t, locale } = useI18n()
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 90])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-backdrop" />
        <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] animate-aurora rounded-full bg-sand-500/18 blur-[130px]" />
        <div
          className="absolute -top-20 right-[-12rem] h-[30rem] w-[30rem] animate-aurora rounded-full bg-ember-500/16 blur-[130px]"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="absolute bottom-[-14rem] left-1/3 h-[28rem] w-[28rem] animate-aurora rounded-full bg-violet-500/14 blur-[130px]"
          style={{ animationDelay: '-11s' }}
        />
      </div>

      <motion.div
        style={reduceMotion ? undefined : { y, opacity }}
        className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
      >
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="chip"
          >
            <Sparkles className="h-3.5 w-3.5 text-sand-300" />
            {t.hero.greeting}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-[4.1rem]"
          >
            {profile.firstName}{' '}
            <span className="text-gradient">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-lg text-ink-200 sm:text-2xl"
          >
            <Typewriter key={locale} phrases={heroRoles[locale]} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sand-300 to-ember-500 px-5 py-3 text-sm font-semibold text-ink-950 shadow-xl shadow-ember-500/25 transition-transform duration-300 hover:scale-[1.03]"
            >
              {t.cta.contact}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-sand-400/40 hover:bg-white/8"
            >
              {t.cta.viewWork}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/cv-abdelali-ait-hammi.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-ink-300 transition-colors duration-300 hover:text-sand-300"
            >
              <Download className="h-4 w-4" />
              {t.cta.resume}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-400"
          >
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {t.hero.availability}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sand-300" />
              {`${profile.city}, ${profile.country}`}
            </span>
            <span className="flex items-center gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-sm"
              >
                <GithubIcon className="h-4 w-4" />
                {t.cta.github}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-sm"
              >
                <LinkedinIcon className="h-4 w-4" />
                {t.cta.linkedin}
              </a>
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {orbitChips.map((chip) => (
            <motion.span
              key={chip.label}
              className="absolute z-20 hidden rounded-full border border-white/12 bg-ink-900/80 px-3 py-1.5 text-xs font-medium text-ink-200 backdrop-blur-md sm:inline-flex"
              style={{ top: chip.top, left: chip.left }}
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: chip.delay,
              }}
            >
              {chip.label}
            </motion.span>
          ))}

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sand-400/20 via-ember-500/10 to-violet-500/20 blur-3xl"
            />
            <div className="surface relative overflow-hidden rounded-3xl p-1.5 shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-ember-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-sand-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-mono text-xs text-ink-500">
                  developer.ts
                </span>
              </div>
              <pre className="overflow-x-auto rounded-2xl bg-ink-950/70 p-4 font-mono text-[0.78rem] leading-relaxed sm:p-5 sm:text-[0.83rem]">
                <code>
                  <span className="text-violet-300">const</span>{' '}
                  <span className="text-sand-300">developer</span>{' '}
                  <span className="text-ink-400">=</span> {'{'}
                  {'\n'}  <span className="text-sky-300">name</span>
                  <span className="text-ink-400">:</span>{' '}
                  <span className="text-emerald-300">'Abdelali AIT-HAMMI'</span>
                  <span className="text-ink-400">,</span>
                  {'\n'}  <span className="text-sky-300">role</span>
                  <span className="text-ink-400">:</span>{' '}
                  <span className="text-emerald-300">'Full Stack'</span>
                  <span className="text-ink-400">,</span>
                  {'\n'}  <span className="text-sky-300">stack</span>
                  <span className="text-ink-400">: [</span>
                  <span className="text-emerald-300">'React'</span>
                  <span className="text-ink-400">, </span>
                  <span className="text-emerald-300">'Laravel'</span>
                  <span className="text-ink-400">, </span>
                  <span className="text-emerald-300">'MySQL'</span>
                  <span className="text-ink-400">],</span>
                  {'\n'}  <span className="text-sky-300">location</span>
                  <span className="text-ink-400">:</span>{' '}
                  <span className="text-emerald-300">'Merzouga, MA'</span>
                  <span className="text-ink-400">,</span>
                  {'\n'}  <span className="text-sky-300">openToWork</span>
                  <span className="text-ink-400">:</span>{' '}
                  <span className="text-sand-300">true</span>
                  <span className="text-ink-400">,</span>
                  {'\n'}
                  {'}'}
                  <span className="text-ink-400">;</span>
                </code>
              </pre>
            </div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/90 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-md sm:-left-6"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-sand-400/12 text-sand-300">
                <Mail className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.7rem] tracking-wide text-ink-500 uppercase">
                  {t.cta.email}
                </span>
                <span className="block max-w-[12rem] truncate text-xs font-medium text-white">
                  {profile.email}
                </span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] tracking-[0.2em] text-ink-500 uppercase transition-colors hover:text-sand-300 md:flex"
        aria-label={t.hero.scroll}
      >
        {t.hero.scroll}
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-sand-300/80 to-transparent"
        />
      </motion.a>
    </section>
  )
}
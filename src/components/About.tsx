import { Code2, Database, Palette, Sparkles } from 'lucide-react'

import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { facts, summary } from '@/data/content'
import { useI18n } from '@/i18n/useI18n'

const pillars = [
  {
    icon: Code2,
    fr: {
      title: 'Front-end soigné',
      body: 'Interfaces responsives et accessibles avec HTML, CSS, JavaScript, React et Tailwind.',
    },
    en: {
      title: 'Polished front-end',
      body: 'Responsive, accessible interfaces with HTML, CSS, JavaScript, React and Tailwind.',
    },
  },
  {
    icon: Database,
    fr: {
      title: 'Back-end fiable',
      body: 'Modélisation et requêtes MySQL / MongoDB, logique serveur en PHP et Python, Laravel.',
    },
    en: {
      title: 'Reliable back-end',
      body: 'MySQL / MongoDB modelling and queries, server logic in PHP and Python, Laravel.',
    },
  },
  {
    icon: Palette,
    fr: {
      title: 'Design & prototypage',
      body: 'Maquettes et systèmes d’interface dans Figma et Lunacy, du wireframe au handoff.',
    },
    en: {
      title: 'Design & prototyping',
      body: 'Mockups and UI systems in Figma and Lunacy, from wireframe to handoff.',
    },
  },
]

export function About() {
  const { t, tr, locale } = useI18n()

  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <div id="about-title">
            <SectionHeading
              eyebrow={t.sections.about}
              title={t.headings.about.title}
              description={t.headings.about.body}
            />
          </div>
          <Reveal delay={0.2}>
            <p className="mt-7 text-base leading-relaxed text-ink-300 sm:text-lg">
              {tr(summary)}
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.label.fr}
                  className="border-l border-white/10 pl-4"
                >
                  <dt className="text-xs tracking-[0.14em] text-ink-500 uppercase">
                    {tr(fact.label)}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink-100">
                    {tr(fact.value)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          <Reveal direction="left" delay={0.1}>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.16em] text-ink-500 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-sand-300" />
              {locale === 'fr' ? "Ce que j'apporte" : 'What I bring'}
            </span>
          </Reveal>

          {pillars.map((pillar, index) => (
            <Reveal key={pillar.en.title} direction="left" delay={0.16 + index * 0.1}>
              <article className="surface surface-hover group relative overflow-hidden rounded-3xl p-6 hover:-translate-y-1">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-sand-400/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sand-300 transition-colors duration-500 group-hover:border-sand-400/40 group-hover:text-sand-200">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {locale === 'fr' ? pillar.fr.title : pillar.en.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">
                      {locale === 'fr' ? pillar.fr.body : pillar.en.body}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
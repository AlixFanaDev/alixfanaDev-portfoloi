import { Briefcase, MapPin } from 'lucide-react'

import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/content'
import { useI18n } from '@/i18n/useI18n'

export function Experience() {
  const { t, tr, locale } = useI18n()

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={t.sections.experience}
        title={t.headings.experience.title}
        description={t.headings.experience.body}
      />

      <div className="mt-12 space-y-6">
        {experience.map((item, index) => (
          <Reveal key={index} delay={0.1 + index * 0.1}>
            <article className="surface surface-hover group relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div
                aria-hidden
                className="absolute top-0 right-0 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-sand-400/10 via-ember-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sand-300">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {tr(item.role)}
                      </h3>
                      <p className="mt-0.5 text-sm text-ink-400">{item.company}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {(item.bullets[locale] ?? item.bullets.fr).map(
                      (bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-400" />
                          {bullet}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end lg:gap-4">
                  <div className="flex items-center gap-2 text-sm text-ink-400">
                    <MapPin className="h-4 w-4 text-ember-400" />
                    {tr(item.location)}
                  </div>
                  <span className="text-sm text-ink-400">{tr(item.period)}</span>
                  {item.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {t.labels.now}
                    </span>
                  ) : null}

                  <div className="mt-1 flex flex-wrap justify-end gap-1.5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/8 bg-white/4 px-2.5 py-1 text-xs text-ink-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
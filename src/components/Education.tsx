import { GraduationCap, MapPin } from 'lucide-react'

import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/data/content'
import { useI18n } from '@/i18n/useI18n'

export function Education() {
  const { t, tr } = useI18n()

  return (
    <Section id="education">
      <SectionHeading
        eyebrow={t.sections.education}
        title={t.headings.education.title}
        description={t.headings.education.body}
      />

      <div className="mt-12 space-y-6">
        {education.map((item, index) => (
          <Reveal key={index} delay={0.1 + index * 0.1}>
            <article className="surface surface-hover group relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div
                aria-hidden
                className="absolute top-0 right-0 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-violet-400/10 via-ember-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-violet-300">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {tr(item.degree)}
                    </h3>
                    <p className="mt-1 text-sm text-ink-400">{tr(item.school)}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:items-end lg:gap-3">
                  <div className="flex items-center gap-2 text-sm text-ink-400">
                    <MapPin className="h-4 w-4 text-violet-300" />
                    {tr(item.location)}
                  </div>
                  <span className="text-sm text-ink-400">{tr(item.period)}</span>
                  {item.note ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sand-400/20 bg-sand-400/10 px-3 py-1 text-xs font-medium text-sand-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-sand-400" />
                      {tr(item.note)}
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
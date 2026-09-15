import { Globe, Heart } from 'lucide-react'

import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { interests, languages } from '@/data/content'
import { useI18n } from '@/i18n/useI18n'

function ProficiencyMeter({ score }: { score: number }) {
  return (
    <div className="flex gap-1" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`h-2 w-5 rounded-full transition-colors ${
            i < score
              ? 'bg-gradient-to-r from-sand-300 to-ember-500'
              : 'bg-white/8'
          }`}
        />
      ))}
    </div>
  )
}

export function Languages() {
  const { t, tr, locale } = useI18n()

  return (
    <Section id="languages">
      <SectionHeading
        eyebrow={t.sections.languages}
        title={t.headings.languages.title}
        description={t.headings.languages.body}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.1}>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div
                key={lang.name.fr}
                className="surface flex items-center justify-between gap-4 rounded-2xl px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-sand-300" />
                  <div>
                    <span className="text-sm font-medium text-white">
                      {tr(lang.name)}
                    </span>
                    {lang.native ? (
                      <span className="ml-2 rounded-full border border-sand-400/20 bg-sand-400/10 px-2 py-0.5 text-[0.65rem] font-medium text-sand-300">
                        {t.labels.native}
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-ink-400">{tr(lang.level)}</span>
                  <ProficiencyMeter score={lang.score} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} direction="left">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.16em] text-ink-500 uppercase">
              <Heart className="h-3.5 w-3.5 text-ember-400" />
              {t.sections.interests}
            </span>
            <div className="space-y-3">
              {interests.map((group) => (
                <div
                  key={group.title.fr}
                  className="surface rounded-2xl px-5 py-4"
                >
                  <h3 className="text-sm font-semibold text-white">
                    {tr(group.title)}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {(group.items[locale] ?? group.items.fr).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 bg-white/4 px-2.5 py-1 text-xs text-ink-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
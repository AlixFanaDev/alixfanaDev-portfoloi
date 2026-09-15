import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillIcon } from '@/components/ui/SkillIcon'
import { accents } from '@/components/ui/skillAccents'
import { skillGroups } from '@/data/content'
import { useI18n } from '@/i18n/useI18n'

export function Skills() {
  const { t } = useI18n()

  return (
    <Section id="skills">
      <SectionHeading
        eyebrow={t.sections.skills}
        title={t.headings.skills.title}
        description={t.headings.skills.body}
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillGroups.map((group, index) => {
          const a = accents[group.accent] ?? accents.sand
          const label = t.labels.skills[group.labelKey.replace('skills.', '')] ?? group.labelKey

          return (
            <Reveal key={group.labelKey} delay={0.1 + index * 0.06}>
              <article className="surface surface-hover group relative flex flex-col gap-4 overflow-hidden rounded-3xl p-5 transition-all">
                <div
                  aria-hidden
                  className={`absolute -top-12 -right-12 h-28 w-28 rounded-full bg-gradient-to-br ${a.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="flex items-center gap-3">
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-2xl border ${a.ring} ${a.bg} ${a.text}`}
                  >
                    <SkillIcon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{label}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-xs font-medium text-ink-200 transition-colors duration-300 hover:border-white/15 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
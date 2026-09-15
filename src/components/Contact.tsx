import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'
import { useI18n } from '@/i18n/useI18n'

export function Contact() {
  const { t } = useI18n()

  const channels = [
    {
      icon: Mail,
      label: t.cta.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      accent: 'text-sand-300',
    },
    {
      icon: Phone,
      label: t.cta.call,
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
      accent: 'text-ember-400',
    },
    {
      icon: MapPin,
      label: profile.city,
      value: profile.country,
      href: profile.mapUrl,
      accent: 'text-violet-300',
      external: true,
    },
  ]

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={t.sections.contact}
        title={t.headings.contact.title}
        description={t.headings.contact.body}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((ch, index) => (
          <Reveal key={ch.label} delay={0.1 + index * 0.08}>
            <a
              href={ch.href}
              target={ch.external ? '_blank' : undefined}
              rel={ch.external ? 'noreferrer noopener' : undefined}
              className="surface surface-hover group flex items-start gap-4 rounded-3xl p-6"
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 ${ch.accent}`}
              >
                <ch.icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <span className="text-xs tracking-wide text-ink-500 uppercase">
                  {ch.label}
                </span>
                <p className="mt-1 text-sm font-medium text-white">{ch.value}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sand-300" />
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.35}>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-sand-400/40 hover:bg-white/8"
          >
            {t.cta.github}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-sand-400/40 hover:bg-white/8"
          >
            {t.cta.linkedin}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sand-300 to-ember-500 px-5 py-3 text-sm font-semibold text-ink-950 shadow-xl shadow-ember-500/25 transition-transform duration-300 hover:scale-[1.03]"
          >
            {t.cta.contact}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
import { Reveal } from '@/components/ui/Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <Reveal>
        <span className="chip">
          <span className="h-1.5 w-1.5 rounded-full bg-sand-400" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="text-base leading-relaxed text-ink-400 sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}

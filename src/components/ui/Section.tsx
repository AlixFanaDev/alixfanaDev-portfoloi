import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  /** Adds the top hairline divider */
  divided?: boolean
}

export function Section({ id, children, className = '', divided = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-28 ${className}`}
      aria-labelledby={`${id}-title`}
    >
      {divided ? (
        <div
          aria-hidden
          className="container-page absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      ) : null}
      <div className="container-page">{children}</div>
    </section>
  )
}

import { useEffect, useState } from 'react'

interface TypewriterProps {
  phrases: string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  holdTime?: number
}

export function Typewriter({
  phrases,
  className,
  typeSpeed = 55,
  deleteSpeed = 28,
  holdTime = 1600,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length] ?? ''

    if (!deleting && text === current) {
      const hold = window.setTimeout(() => setDeleting(true), holdTime)
      return () => window.clearTimeout(hold)
    }

    if (deleting && text === '') {
      const next = window.setTimeout(() => {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % phrases.length)
      }, 0)
      return () => window.clearTimeout(next)
    }

    const timer = window.setTimeout(
      () => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        )
      },
      deleting ? deleteSpeed : typeSpeed,
    )

    return () => window.clearTimeout(timer)
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, holdTime])

  return (
    <span className={className}>
      <span aria-live="polite">{text}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-blink bg-sand-300 align-middle"
      />
    </span>
  )
}

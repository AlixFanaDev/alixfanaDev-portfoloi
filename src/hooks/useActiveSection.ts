import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view to highlight the matching nav link.
 * Uses a root margin biased towards the top of the viewport so the "active"
 * section changes as soon as a heading reaches the reading area.
 */
export function useActiveSection(ids: string[], offset = 120) {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const onScroll = () => {
      const marker = window.scrollY + offset + 1
      let current = elements[0].id

      for (const el of elements) {
        if (el.offsetTop <= marker) current = el.id
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = elements[elements.length - 1].id
      }

      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}

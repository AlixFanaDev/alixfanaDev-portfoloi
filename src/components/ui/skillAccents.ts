/** Tailwind class fragments per accent key */
export const accents = {
  sand: {
    text: 'text-sand-300',
    ring: 'ring-sand-400/20',
    bg: 'bg-sand-400/10',
    glow: 'from-sand-400/25',
    bar: 'from-sand-300 to-sand-500',
  },
  ember: {
    text: 'text-ember-400',
    ring: 'ring-ember-500/20',
    bg: 'bg-ember-500/10',
    glow: 'from-ember-500/25',
    bar: 'from-ember-400 to-ember-600',
  },
  violet: {
    text: 'text-violet-300',
    ring: 'ring-violet-400/20',
    bg: 'bg-violet-400/10',
    glow: 'from-violet-400/25',
    bar: 'from-violet-300 to-violet-500',
  },
  sky: {
    text: 'text-sky-300',
    ring: 'ring-sky-400/20',
    bg: 'bg-sky-400/10',
    glow: 'from-sky-400/25',
    bar: 'from-sky-300 to-sky-500',
  },
  emerald: {
    text: 'text-emerald-300',
    ring: 'ring-emerald-400/20',
    bg: 'bg-emerald-400/10',
    glow: 'from-emerald-400/25',
    bar: 'from-emerald-300 to-emerald-500',
  },
  rose: {
    text: 'text-rose-300',
    ring: 'ring-rose-400/20',
    bg: 'bg-rose-400/10',
    glow: 'from-rose-400/25',
    bar: 'from-rose-300 to-rose-500',
  },
} as const

export type AccentKey = keyof typeof accents
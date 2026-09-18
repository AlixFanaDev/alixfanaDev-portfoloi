import { GithubIcon, LinkedinIcon } from '@/components/icons/Brand'
import { profile } from '@/data/profile'
import { sections } from '@/data/nav'
import { useI18n } from '@/i18n/useI18n'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-8">
      <div
        aria-hidden
        className="container-page absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div className="container-page flex flex-col items-center gap-8 py-12 sm:py-16">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label={`${profile.firstName} ${profile.lastName} — ${t.nav.home}`}
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sand-300 via-ember-500 to-violet-500 text-sm font-bold text-ink-950 transition-transform duration-300 group-hover:scale-105">
            {/* {profile.initials} */}
            <img
              src={profile.photo}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="h-9 w-9 rounded-xl object-cover"
            />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-white">
            {profile.firstName}
            <span className="text-sand-300">.</span>
          </span>
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-ink-400 transition-colors hover:text-sand-300"
                >
                  {t.nav[section.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-500 transition-colors hover:text-sand-300"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-500 transition-colors hover:text-sand-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>

        <p className="text-center text-xs text-ink-500">
          {t.labels.footer.builtWith}{' '}
          <span className="font-medium text-ink-300">
            {profile.firstName} {profile.lastName}
          </span>
          <span className="mx-1.5 text-ink-700">&middot;</span>
          {year}
          <span className="mx-1.5 text-ink-700">&middot;</span>
          {t.labels.footer.rights}
        </p>
      </div>
    </footer>
  )
}
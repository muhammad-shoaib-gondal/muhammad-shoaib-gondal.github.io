import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Moon, Sun } from 'lucide-react'
import { links, profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const sections = [
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Sidebar() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [active, setActive] = useState('education')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-25% 0px -60% 0px' },
    )
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:justify-between lg:py-20"
    >
      <div>
        <a href="#top" className="font-display block text-4xl leading-none font-light tracking-tight">
          {profile.shortName}
        </a>
        <p className="mt-3 text-sm text-muted">{profile.role}</p>

        <p className="mt-6 max-w-xs text-sm leading-relaxed text-pretty text-muted lg:mt-8">
          {profile.statement}
        </p>

        <nav className="mt-8 hidden lg:block">
          <ul className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center gap-3 py-1 text-sm transition-colors"
                  style={{ color: active === s.id ? 'var(--fg)' : 'var(--muted)' }}
                >
                  <span
                    aria-hidden
                    className="h-px transition-all duration-300"
                    style={{
                      width: active === s.id ? '2rem' : '1rem',
                      backgroundColor: active === s.id ? 'var(--fg)' : 'var(--line)',
                    }}
                  />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-1 lg:mt-0">
        {[
          { href: links.github, icon: GithubIcon, label: 'GitHub' },
          { href: links.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
          { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
        ].map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="grid size-9 place-items-center rounded-full text-faint transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
          >
            <Icon className="size-4" />
          </a>
        ))}

        <button
          type="button"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle color theme"
          className="grid size-9 place-items-center rounded-full text-faint transition-colors hover:bg-[var(--panel)] hover:text-[var(--fg)]"
        >
          {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </div>
    </motion.header>
  )
}

import { ArrowUpRight } from 'lucide-react'
import { links, profile } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

const elsewhere = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Curriculum vitae', href: links.resume },
]

export function Contact() {
  return (
    <Section id="contact" index="06" title="Contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <div>
            <p className="font-display max-w-md text-2xl leading-snug font-light tracking-tight text-balance sm:text-[1.75rem]">
              Open to research collaborations and engineering internships. If you are working on
              something that has to be correct, I would like to hear about it.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block font-mono text-sm link-underline"
            >
              {profile.email}
            </a>
            <p className="mt-2 font-mono text-sm text-faint">{profile.phone}</p>
            <p className="mt-1 font-mono text-sm text-faint">{profile.location}</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="lg:mt-2">
            {elsewhere.map((entry) => (
              <li key={entry.label}>
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-t py-4 text-sm transition-colors first:border-t-0 first:pt-0"
                >
                  {entry.label}
                  <ArrowUpRight className="size-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--fg)]" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

import { profile, skills } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" index="05" title="About">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-4">
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-pretty text-muted">
                {paragraph}
              </p>
            ))}
            <p className="border-t pt-4 text-sm leading-relaxed text-pretty text-faint">
              {profile.footnote}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="space-y-7">
            {skills.map((group) => (
              <div key={group.group} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <p className="label sm:pt-1">{group.group}</p>
                <p className="text-sm leading-relaxed text-pretty">{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

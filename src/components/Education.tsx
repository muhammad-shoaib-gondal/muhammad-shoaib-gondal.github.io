import { education } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" index="01" title="Education">
      <Reveal>
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <h3 className="font-display text-2xl leading-tight font-light tracking-tight sm:text-3xl">
              {education.degree}
            </h3>
            <p className="mt-2 text-base text-muted">
              {education.school} · {education.location}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] text-accent">
              <span aria-hidden className="size-1.5 rounded-full bg-current" />
              {education.graduating}
            </p>
          </div>

          <dl className="flex gap-8 sm:flex-col sm:gap-4 sm:text-right">
            <div>
              <dt className="label">GPA</dt>
              <dd className="font-display mt-1 text-2xl font-light">{education.gpa}</dd>
            </div>
            <div>
              <dt className="label">Term</dt>
              <dd className="mt-1 font-mono text-sm text-muted">{education.period}</dd>
            </div>
          </dl>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-10 border-t pt-6">
          <p className="label">Selected coursework</p>
          <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {education.coursework.map((course) => (
              <li key={course} className="flex items-baseline gap-3 text-sm">
                <span aria-hidden className="size-1 shrink-0 rounded-full bg-[var(--faint)]" />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}

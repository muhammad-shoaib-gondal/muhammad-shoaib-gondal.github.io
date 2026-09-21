import type { Role } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

type Props = {
  id: string
  index: string
  title: string
  roles: Role[]
}

export function Roles({ id, index, title, roles }: Props) {
  return (
    <Section id={id} index={index} title={title}>
      <div>
        {roles.map((role, i) => (
          <Reveal key={role.role + role.org} delay={i * 0.05}>
            <article className="grid gap-3 border-t py-8 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <p className="font-mono text-xs text-faint sm:pt-1.5">{role.period}</p>

              <div>
                <h3 className="font-display text-xl leading-snug font-normal tracking-tight">
                  {role.role}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {role.org} · {role.location}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {role.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-pretty text-muted">
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {role.stack.map((tech) => (
                    <li key={tech} className="font-mono text-[11px] text-faint">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

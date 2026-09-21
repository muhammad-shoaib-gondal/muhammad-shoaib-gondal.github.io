import { projects } from '../data/content'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" index="04" title="Selected Work">
      <div>
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <article className="group grid gap-3 border-t py-8 first:border-t-0 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="sm:pt-1.5">
                <p className="font-mono text-xs text-faint">{project.period}</p>
                {project.status ? (
                  <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
                    <span aria-hidden className="size-1.5 rounded-full bg-current" />
                    {project.status}
                  </p>
                ) : null}
              </div>

              <div>
                <h3 className="font-display text-xl leading-snug font-normal tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-pretty">{project.blurb}</p>

                <ul className="mt-4 space-y-2.5">
                  {project.points.map((point) => (
                    <li key={point} className="text-sm leading-relaxed text-pretty text-muted">
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {project.stack.map((tech) => (
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

import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-16 border-t pt-8 pb-20 sm:pb-24">
      <Reveal>
        <div className="mb-10 flex items-baseline gap-4">
          <span className="label">{index}</span>
          <h2 className="label">{title}</h2>
        </div>
      </Reveal>
      {children}
    </section>
  )
}

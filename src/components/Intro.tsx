import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { education, links, profile } from '../data/content'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Intro() {
  return (
    <section id="top" className="flex min-h-[85svh] flex-col justify-center pt-4 pb-20 lg:min-h-svh lg:pt-20">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="label">
          {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display mt-6 max-w-2xl text-4xl leading-[1.12] font-extralight tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
        >
          Building software that is <em className="text-accent italic">provably</em> correct — from Coq
          proofs to production systems.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl border-l pl-5 text-base leading-relaxed text-pretty text-muted"
        >
          {education.degree} at {education.school}, <strong className="font-medium text-[var(--fg)]">graduating December 2027</strong>. Currently
          researching formally verified reasoning in the Koncordant Lab.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)]"
          >
            Get in touch
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-[var(--fg)]"
          >
            <span className="link-underline">Curriculum vitae</span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

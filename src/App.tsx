import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Intro } from './components/Intro'
import { Projects } from './components/Projects'
import { Roles } from './components/Roles'
import { Sidebar } from './components/Sidebar'
import { experience, profile, research } from './data/content'

export default function App() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-10">
      <div className="lg:grid lg:grid-cols-[19rem_1fr] lg:gap-16 xl:gap-24">
        <Sidebar />

        <main className="lg:py-20">
          <Intro />
          <Education />
          <Roles id="research" index="02" title="Research & Teaching" roles={research} />
          <Roles id="experience" index="03" title="Experience" roles={experience} />
          <Projects />
          <About />
          <Contact />

          <footer className="flex flex-col gap-2 border-t py-8 font-mono text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
            <p>Manhattan, Kansas</p>
          </footer>
        </main>
      </div>
    </div>
  )
}

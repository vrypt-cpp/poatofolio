import { Github, Mail, ArrowUpRight, Terminal } from 'lucide-react'
import { profile, stack, projects, links } from './data.js'

function Section({ id, label, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-3xl px-6 py-20 sm:px-8">
      {label && (
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-sm text-signal">{label}</span>
          <span className="h-px flex-1 bg-line" />
        </div>
      )}
      {children}
    </section>
  )
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mute">
      {children}
    </span>
  )
}

function Header() {
  return (
    <header className="mx-auto w-full max-w-3xl px-6 pt-20 sm:px-8">
      <div className="flex items-center gap-2 font-mono text-sm text-mute">
        <Terminal size={16} className="text-signal" />
        <span>~/{profile.handle}</span>
      </div>

      <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-2 font-mono text-sm text-signal">{profile.role}</p>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
        {profile.summary}
      </p>

      <blockquote className="mt-6 border-l-2 border-line pl-4 font-mono text-sm italic text-mute">
        “{profile.tagline}”
      </blockquote>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-4 py-2 text-sm font-medium transition-colors hover:border-signal hover:text-signal"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href={links.email}
          className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-mute transition-colors hover:border-signal hover:text-signal"
        >
          <Mail size={16} />
          Contact
        </a>
      </div>
    </header>
  )
}

function Stack() {
  return (
    <Section id="stack" label="// stack">
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-line bg-panel p-6 transition-colors hover:border-signal"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-mono text-lg font-semibold">{project.name}</h3>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-mute transition-colors group-hover:text-signal"
        />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-mute">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </a>
  )
}

function Projects() {
  return (
    <Section id="projects" label="// projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6 py-10 sm:px-8">
      <div className="flex flex-col items-center gap-4 border-t border-line pt-8 text-center font-mono text-xs text-mute sm:flex-row sm:justify-between sm:text-left">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-signal"
        >
          github.com/{profile.handle}
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Stack />
      <Projects />
      <Footer />
    </main>
  )
}

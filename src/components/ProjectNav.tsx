import { SectionLink } from './Nav'
import { Arrow, Container } from './ui'

/** Bottom of a project page: back to all work, or on to the next project. */
export function ProjectNav({ next }: { next: { label: string; title: string; href: string } }) {
  return (
    <div className="border-t border-ivory/10 bg-ink text-ivory">
      <Container className="grid sm:grid-cols-2">
        <SectionLink id="work" className="group flex items-center gap-4 py-10 sm:border-r sm:border-ivory/10 sm:py-14">
          <Arrow className="rotate-180 opacity-60 transition-transform duration-500 group-hover:-translate-x-1" />
          <span className="eyebrow">All work</span>
        </SectionLink>
        <a href={next.href} className="group flex flex-col items-start gap-3 border-t border-ivory/10 py-10 sm:items-end sm:border-t-0 sm:py-14">
          <span className="eyebrow text-ivory/50">{next.label}</span>
          <span className="display flex items-center gap-4 text-4xl transition-colors duration-500 group-hover:text-clay sm:text-5xl">
            {next.title} <Arrow />
          </span>
        </a>
      </Container>
    </div>
  )
}

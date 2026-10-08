import { person } from '../content/site'
import { SectionLink } from './Nav'
import { Container } from './ui'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink py-8 text-ivory/45">
      <Container className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <p className="eyebrow !text-[0.6rem]">
          © {year} {person.fullName} · {person.roleShort}
        </p>
        <SectionLink id="" className="eyebrow !text-[0.6rem] transition-colors hover:text-ivory">
          Back to top ↑
        </SectionLink>
      </Container>
    </footer>
  )
}

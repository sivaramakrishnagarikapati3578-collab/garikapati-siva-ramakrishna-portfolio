import { SectionLink } from '../components/Nav'
import { ProjectNav } from '../components/ProjectNav'
import { Arrow, Container, SectionLabel, Status } from '../components/ui'
import { delay } from '../lib/motion'
import { attack, myself, person } from '../content/site'
import { asks } from '../lib/links'
import { projectHref } from '../lib/router'

/** Charcoal + signal red — a military-thriller treatment within the site's palette. */
const red = 'text-[#c0392b]'

export function AttackPage() {
  const facts: [string, string][] = [
    ['Format', 'Feature Film'],
    ['Language', 'Telugu'],
    ['Genre', attack.genre],
    ['Status', attack.status],
    ['Written by', person.fullName],
  ]
  return (
    <>
      {/* Title */}
      <header className="relative flex min-h-[82svh] flex-col justify-end overflow-hidden bg-ink pt-32 pb-14 text-ivory sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(192,57,43,0.22),transparent_55%)]" />
        <Container className="relative">
          <SectionLink id="work" className="rise eyebrow inline-flex items-center gap-3 text-ivory/60 hover:text-ivory">
            <Arrow className="rotate-180" /> All work
          </SectionLink>
          <p className="rise eyebrow mt-12 flex flex-wrap items-center gap-4 text-ivory/60" style={delay(150)}>
            <span className={red}>Project {attack.number}</span> {attack.type} · {attack.genre}
          </p>
          <h1 className="rise mt-6 font-sans text-[5rem] leading-[0.85] font-semibold tracking-[0.04em] uppercase sm:text-[9rem] lg:text-[12rem]" style={delay(300)}>
            {attack.title}
          </h1>
          <span className="rise mt-6 block h-[3px] w-24 bg-[#c0392b]" style={delay(400)} />
          <div className="rise mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between" style={delay(500)}>
            <p className="eyebrow text-ivory/70">Written by {person.fullName}</p>
            <Status>{attack.status}</Status>
          </div>
          <div className="rise mt-10" style={delay(620)}>
            <a href={asks.attack} className="btn-light-solid">
              Discuss the project <Arrow />
            </a>
          </div>
        </Container>
      </header>

      {/* Logline + information */}
      <section className="bg-ivory py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel className="text-stone">Logline</SectionLabel>
            <p data-reveal style={delay(100)} className="display mt-8 text-[2rem] leading-[1.12] sm:text-[2.8rem]">
              {attack.logline}
            </p>
          </div>
          <div className="self-end lg:col-span-5 lg:col-start-8">
            <SectionLabel className="text-stone">Project information</SectionLabel>
            <dl data-reveal style={delay(150)} className="mt-6 border-t border-ink/15">
              {facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/15 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="eyebrow pt-1 text-stone">{k}</dt>
                  <dd className="leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="bg-ink py-20 text-ivory sm:py-28 lg:py-36">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel className="text-ivory/50">About the project</SectionLabel>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p data-reveal className="font-display text-[1.7rem] leading-snug sm:text-[2.2rem]">
              {attack.about}
            </p>
            <ul data-reveal style={delay(120)} className="mt-12 grid gap-x-8 gap-y-3 border-t border-ivory/15 pt-8 text-ivory/75 sm:grid-cols-2">
              {attack.elements.map((e) => (
                <li key={e} className="flex gap-3">
                  <span className="mt-[0.7em] h-px w-3 shrink-0 bg-[#c0392b]" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="bg-ivory py-20 sm:py-28">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel className="text-stone">For producers, directors and actors</SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-8 max-w-2xl text-5xl sm:text-6xl">
              ATTACK is in development. Let’s talk.
            </h2>
          </div>
          <div data-reveal style={delay(200)}>
            <a href={asks.attack} className="btn-dark-solid">
              Discuss the project <Arrow />
            </a>
          </div>
        </Container>
      </section>

      <ProjectNav next={{ label: `Next — Project ${myself.number}`, title: `Myself – ${myself.subtitle}`, href: projectHref(myself.slug) }} />
    </>
  )
}

import { SectionLink } from '../components/Nav'
import { ProjectNav } from '../components/ProjectNav'
import { Arrow, Container, SectionLabel, Status } from '../components/ui'
import { delay } from '../lib/motion'
import { attack, person, swargam } from '../content/site'
import { asks } from '../lib/links'
import { projectHref } from '../lib/router'

/** Midnight navy + amber — the same treatment as the synopsis PDF. */
const navy = 'bg-[#121a2b]'
const gold = 'text-[#c9973f]'

function SynopsisButton({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <a href={swargam.synopsisPdf} target="_blank" rel="noopener" className={tone === 'light' ? 'btn-light-solid' : 'btn-dark-solid'}>
      Read synopsis (PDF) <Arrow />
    </a>
  )
}

export function SwargamPage() {
  const facts: [string, string][] = [
    ['Format', swargam.type],
    ['Genre', swargam.genre],
    ['Setting', swargam.setting],
    ['Credit', `${swargam.roles.join(' | ')} — ${person.fullName}`],
    ['Status', swargam.status],
  ]
  return (
    <>
      {/* Title */}
      <header className={`relative flex min-h-[88svh] flex-col justify-end overflow-hidden ${navy} pt-32 pb-14 text-ivory sm:pb-20`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_5%,rgba(201,151,63,0.22),transparent_55%)]" />
        <Container className="relative">
          <SectionLink id="work" className="rise eyebrow inline-flex items-center gap-3 text-ivory/60 hover:text-ivory">
            <Arrow className="rotate-180" /> All work
          </SectionLink>
          <p className="rise eyebrow mt-12 flex flex-wrap items-center gap-4 text-ivory/60" style={delay(150)}>
            <span className={gold}>Project {swargam.number}</span> {swargam.type} · {swargam.genreShort} · Written by {person.fullName}
          </p>
          <h1 className="rise mt-6 font-sans text-[3.6rem] leading-[0.88] font-semibold tracking-[-0.02em] uppercase sm:text-[7rem] lg:text-[10rem]" style={delay(300)}>
            Software
            <br />
            Swargam
          </h1>
          <p className={`rise mt-6 flex items-center gap-4 text-sm font-medium tracking-[0.4em] uppercase sm:text-base ${gold}`} style={delay(420)}>
            <span className="h-px w-10 bg-[#c9973f]" />
            {swargam.subtitle}
          </p>
          <div className="rise mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between" style={delay(550)}>
            <p className="max-w-xl text-ivory/70">{swargam.genre}</p>
            <Status>{swargam.status}</Status>
          </div>
          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={delay(650)}>
            <SynopsisButton />
            <a href={asks.swargam} className="btn-light">
              Discuss the project
            </a>
          </div>
        </Container>
      </header>

      {/* Logline + facts */}
      <section className="bg-ivory py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel className="text-stone">Logline</SectionLabel>
            <p data-reveal style={delay(100)} className="display mt-8 text-[2rem] leading-[1.12] sm:text-[2.8rem]">
              {swargam.logline}
            </p>
          </div>
          <dl data-reveal style={delay(150)} className="self-end border-t border-ink/15 lg:col-span-5 lg:col-start-8">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-ink/15 py-4 sm:grid-cols-[8rem_1fr]">
                <dt className="eyebrow pt-1 text-stone">{k}</dt>
                <dd className="leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Characters */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionLabel className="text-stone">Characters</SectionLabel>
          <ul className="mt-12 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {swargam.characters.map((c, i) => (
              <li key={c.name} data-reveal style={delay(i * 70)} className="border-b border-ink/15 py-7 sm:px-6 sm:odd:pl-0 lg:odd:pl-6 lg:first:pl-0">
                <span className="eyebrow tabular-nums text-stone">{String(i + 1).padStart(2, '0')}</span>
                <span className="display mt-4 block text-5xl">{c.name}</span>
                <span className="mt-3 block text-sm leading-relaxed text-ink/65">{c.note}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Story */}
      <section className={`${navy} py-20 text-ivory sm:py-28 lg:py-36`}>
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel className="text-ivory/50">The story</SectionLabel>
            <p data-reveal style={delay(100)} className="mt-8 max-w-xs text-sm leading-relaxed text-ivory/55">
              A condensed version of the two-page synopsis. The full document is available as a PDF.
            </p>
            <div data-reveal style={delay(160)} className="mt-8">
              <SynopsisButton />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-[1.04rem] leading-[1.8] text-ivory/80">
              {swargam.story.map((p, i) => (
                <p key={i} data-reveal style={delay(i * 60)}>
                  {p}
                </p>
              ))}
            </div>
            <details data-reveal className="group mt-10 border-t border-ivory/15 pt-6">
              <summary className={`eyebrow flex cursor-pointer list-none items-center justify-between gap-4 ${gold} [&::-webkit-details-marker]:hidden`}>
                <span>How it ends — contains the climax</span>
                <span aria-hidden="true" className="text-lg transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-6 space-y-6 text-[1.04rem] leading-[1.8] text-ivory/80">
                {swargam.ending.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="bg-ivory py-20 sm:py-28">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel className="text-stone">For producers, directors and actors</SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-8 max-w-2xl text-5xl sm:text-6xl">
              Read the synopsis, then let’s talk.
            </h2>
          </div>
          <div data-reveal style={delay(200)} className="flex flex-col gap-3 sm:flex-row">
            <SynopsisButton tone="dark" />
            <a href={asks.swargam} className="btn-dark">
              Discuss the project
            </a>
          </div>
        </Container>
      </section>

      <ProjectNav next={{ label: `Next — Project ${attack.number}`, title: attack.title, href: projectHref(attack.slug) }} />
    </>
  )
}

import { SectionLink } from '../components/Nav'
import { MaterialCard } from '../components/Material'
import { ProjectNav } from '../components/ProjectNav'
import { Arrow, Container, SectionLabel, Status } from '../components/ui'
import { delay } from '../lib/motion'
import { myself, pentayya, pentayyaFacts } from '../content/site'
import { asks, whatsapp } from '../lib/links'
import { projectHref } from '../lib/router'

export function PentayyaPage() {
  const wa = whatsapp('Hello Siva, I would like to know more about PENTAYYA.')
  return (
    <>
      {/* Title */}
      <header className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-earth pt-32 pb-14 text-ivory sm:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(184,105,58,0.4),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(20,18,16,0.6),transparent_60%)]" />
        <p
          aria-hidden="true"
          className="pointer-events-none absolute top-[12%] -right-6 font-telugu text-[9rem] leading-none text-ivory/[0.06] select-none sm:text-[16rem] lg:text-[24rem]"
        >
          {pentayya.titleTelugu}
        </p>
        <Container className="relative">
          <SectionLink id="work" className="rise eyebrow inline-flex items-center gap-3 text-ivory/60 hover:text-ivory">
            <Arrow className="rotate-180" /> All work
          </SectionLink>
          <p className="rise eyebrow mt-12 flex flex-wrap items-center gap-4 text-ivory/60" style={delay(150)}>
            <span className="text-clay">Project {pentayya.number}</span> {pentayya.type} · Written by Garikapati Siva Ramakrishna
          </p>
          <h1 className="rise display mt-6 text-[5rem] sm:text-[10rem] lg:text-[14rem]" style={delay(300)}>
            {pentayya.title}
          </h1>
          <div className="rise mt-6 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between" style={delay(500)}>
            <p className="font-telugu text-4xl text-ivory/75 sm:text-5xl">{pentayya.titleTelugu}</p>
            <Status>{pentayya.status}</Status>
          </div>
          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={delay(650)}>
            <a href={asks.pentayyaNarration} className="btn-light-solid">
              Request a narration <Arrow />
            </a>
            <a href={asks.pentayyaScreenplay} className="btn-light">
              Request the screenplay
            </a>
          </div>
        </Container>
      </header>

      {/* Facts */}
      <section className="bg-ivory py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel className="text-stone">The film</SectionLabel>
            <p data-reveal style={delay(100)} className="display mt-8 text-[2.3rem] leading-[1.08] sm:text-5xl">
              A Telugu drama — rural and emotional — set in Pedhapuram, in the Palnadu region of Andhra Pradesh.
            </p>
          </div>
          <dl data-reveal style={delay(150)} className="border-t border-ink/15 lg:col-span-6 lg:col-start-7">
            {[...pentayyaFacts, ['Language', 'Telugu'] as [string, string], ['Status', pentayya.status] as [string, string]].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-ink/15 py-4 sm:grid-cols-[10rem_1fr]">
                <dt className="eyebrow pt-1 text-stone">{k}</dt>
                <dd className="leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Characters */}
      <section className="bg-paper py-20 sm:py-28 lg:py-36">
        <Container>
          <SectionLabel className="text-stone">Characters</SectionLabel>
          <ul className="mt-12 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {pentayya.characters.map((c, i) => (
              <li
                key={c.name}
                data-reveal
                style={delay(i * 70)}
                className={`flex min-h-[9rem] flex-col justify-between border-b border-ink/15 py-7 sm:min-h-[12rem] sm:px-6 sm:[&:nth-child(2n+1)]:pl-0 lg:[&:nth-child(2n+1)]:pl-6 lg:[&:nth-child(3n+1)]:pl-0 ${
                  i === 0 ? 'bg-earth !px-6 text-ivory sm:!px-8' : ''
                }`}
              >
                <span className={`eyebrow tabular-nums ${i === 0 ? 'text-clay' : 'text-stone'}`}>{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="display block text-5xl sm:text-6xl">{c.name}</span>
                  {c.note && <span className={`mt-3 block text-sm ${i === 0 ? 'text-ivory/70' : 'text-ink/60'}`}>{c.note}</span>}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Materials */}
      <section className="bg-ink py-20 text-ivory sm:py-28 lg:py-36">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel className="text-ivory/50">Project materials</SectionLabel>
              <h2 data-reveal style={delay(100)} className="display mt-7 text-5xl sm:text-7xl">
                The package
              </h2>
            </div>
            <p data-reveal style={delay(200)} className="max-w-sm text-ivory/60 sm:text-right">
              The screenplay is complete. Visual materials are being prepared and will be added here.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {pentayya.materials.map((m, i) => (
              <div key={m.label} data-reveal style={delay((i % 3) * 90)} className={m.src && m.shape === 'wide' ? 'col-span-2' : ''}>
                <MaterialCard m={m} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Narration request */}
      <section className="bg-earth py-24 text-ivory sm:py-32">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel className="text-ivory/55">Narration</SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-8 text-5xl sm:text-7xl">
              Hear Pentayya, scene by scene.
            </h2>
            <p data-reveal style={delay(200)} className="mt-6 max-w-lg leading-relaxed text-ivory/70">
              For producers, directors and production houses — request a narration or the screenplay directly from the writer.
            </p>
          </div>
          <div data-reveal style={delay(250)} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-5 lg:justify-end">
            <a href={asks.pentayyaNarration} className="btn-light-solid">
              Request a narration <Arrow />
            </a>
            <a href={asks.pentayyaScreenplay} className="btn-light">
              Request the screenplay
            </a>
            {wa && (
              <a href={wa} target="_blank" rel="noreferrer" className="btn-light">
                WhatsApp
              </a>
            )}
          </div>
        </Container>
      </section>

      <ProjectNav next={{ label: `Next — Project ${myself.number}`, title: `Myself – ${myself.subtitle}`, href: projectHref(myself.slug) }} />
    </>
  )
}

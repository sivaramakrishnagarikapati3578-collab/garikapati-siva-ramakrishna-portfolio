import { SectionLink } from '../components/Nav'
import { MaterialCard } from '../components/Material'
import { Picture } from '../components/Picture'
import { ProjectNav } from '../components/ProjectNav'
import { VideoFrame } from '../components/VideoFrame'
import { Arrow, Container, Credit, SectionLabel, Status } from '../components/ui'
import { delay } from '../lib/motion'
import { myself, pentayya } from '../content/site'
import { asks } from '../lib/links'
import { projectHref } from '../lib/router'
import { Triptych } from '../sections/MyselfFeature'

export function MyselfPage() {
  const facts: [string, string][] = [
    ['Format', myself.type],
    ['Year', myself.year],
    ['Genre', myself.genre],
    ['Language', 'Telugu'],
    ['Status', myself.status],
  ]
  return (
    <>
      {/* Title */}
      <header className="bg-ink pt-28 pb-16 text-ivory sm:pt-36 sm:pb-24">
        <Container>
          <SectionLink id="work" className="rise eyebrow inline-flex items-center gap-3 text-ivory/60 hover:text-ivory">
            <Arrow className="rotate-180" /> All work
          </SectionLink>
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="rise eyebrow flex flex-wrap gap-4 text-ivory/60" style={delay(150)}>
                <span className="text-clay">Project {myself.number}</span> {myself.type} · {myself.year}
              </p>
              <h1 className="rise display mt-6 text-[5rem] sm:text-[9rem] lg:text-[10.5rem]" style={delay(300)}>
                Myself
                <span className="block text-[2.6rem] text-ivory/60 italic sm:text-7xl">– {myself.subtitle}</span>
              </h1>
            </div>
            <div className="rise space-y-5 lg:col-span-5 lg:pb-4" style={delay(500)}>
              <p className="font-display text-2xl leading-snug sm:text-3xl">{myself.logline}</p>
              <Credit items={myself.roles} className="text-ivory/70" />
              <Status>{myself.status}</Status>
            </div>
          </div>
          <div className="mt-14 sm:mt-20">
            <Triptych tall eagerLoad />
            <p className="eyebrow mt-4 text-ivory/45">Production stills</p>
          </div>
        </Container>
      </header>

      {/* Concept */}
      <section className="bg-ivory py-20 sm:py-28 lg:py-36">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel className="text-stone">The concept</SectionLabel>
            <div className="mt-8 space-y-6">
              <p data-reveal style={delay(100)} className="display text-[2.2rem] leading-[1.1] sm:text-5xl">
                {myself.concept[0]}
              </p>
              <p data-reveal style={delay(200)} className="max-w-lg text-[1.05rem] leading-[1.8] text-ink/75">
                {myself.concept[1]}
              </p>
              <p data-reveal style={delay(260)} className="max-w-lg text-[1.05rem] leading-[1.8] text-ink/75">
                Written and directed by Garikapati Siva Ramakrishna, who is also handling the film’s cinematography and editing.
              </p>
            </div>
          </div>
          <dl data-reveal style={delay(200)} className="self-end border-t border-ink/15 lg:col-span-5 lg:col-start-8">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-ink/15 py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="eyebrow pt-1 text-stone">{k}</dt>
                <dd className="leading-relaxed">{v}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[7rem_1fr] gap-4 py-4 sm:grid-cols-[9rem_1fr]">
              <dt className="eyebrow pt-1 text-stone">Credits</dt>
              <dd className="leading-relaxed">{myself.roles.join(', ')} — Garikapati Siva Ramakrishna</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Watch */}
      <section className="bg-ink py-20 text-ivory sm:py-28 lg:py-36">
        <Container>
          <SectionLabel className="text-ivory/50">Watch</SectionLabel>
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-8">
              <VideoFrame url={myself.trailerUrl} label="Trailer" note="Trailer in preparation" />
            </div>
            <div data-reveal style={delay(120)} className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-4 lg:grid-cols-1">
              {myself.materials.map((m) => (
                <MaterialCard key={m.label} m={{ ...m, shape: m.shape === 'poster' ? 'poster' : 'page' }} />
              ))}
            </div>
          </div>
          <div data-reveal className="mt-10 lg:w-2/3">
            <VideoFrame url={myself.filmUrl} label="Full film" note="Full film — to be released" />
          </div>
        </Container>
      </section>

      {/* Stills */}
      <section className="bg-ink pb-20 text-ivory sm:pb-28 lg:pb-36">
        <Container>
          <div className="border-t border-ivory/10 pt-16">
            <SectionLabel className="text-ivory/50">Film stills</SectionLabel>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
              {myself.stills.map((s, i) => (
                <figure key={s.src} data-reveal="image" style={delay(i * 100)} className={`zoom relative aspect-video overflow-hidden bg-ink-3 ${i === 0 ? 'sm:col-span-2' : ''}`}>
                  <Picture photo={s} sizes={i === 0 ? '100vw' : '(min-width:640px) 50vw, 100vw'} />
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-ivory/10 pt-16">
            <SectionLabel className="text-ivory/50">Behind the scenes</SectionLabel>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-6">
              {myself.bts.map((s, i) => (
                <figure key={s.src} data-reveal="image" style={delay(i * 100)}>
                  <div className="zoom relative aspect-[4/3] overflow-hidden bg-ink-3">
                    <Picture photo={s} sizes="(min-width:640px) 33vw, 100vw" />
                  </div>
                  <figcaption className="mt-3 text-xs text-ivory/50">{s.alt}</figcaption>
                </figure>
              ))}
              <div data-reveal="fade" className="cropmarks flex aspect-[4/3] items-center justify-center border border-ivory/15 p-6 text-center text-ivory/60">
                <span className="font-display text-2xl italic">{myself.btsNote}</span>
              </div>
            </div>
          </div>

          <div data-reveal className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-ivory/10 pt-12 sm:flex-row sm:items-center">
            <p className="font-display text-3xl sm:text-4xl">Interested in the film?</p>
            <a href={asks.myself} className="btn-light-solid">
              Get in touch <Arrow />
            </a>
          </div>
        </Container>
      </section>

      <ProjectNav next={{ label: `Next — Project ${pentayya.number}`, title: pentayya.title, href: projectHref(pentayya.slug) }} />
    </>
  )
}

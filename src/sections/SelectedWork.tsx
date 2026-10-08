import type { ReactNode } from 'react'
import { Picture } from '../components/Picture'
import { Arrow, Container, Credit, SectionLabel, Status } from '../components/ui'
import { delay } from '../lib/motion'
import { contact, myself, pentayya, tfi } from '../content/site'
import { asks } from '../lib/links'
import { projectHref } from '../lib/router'

type Cta = { label: string; href: string; external?: boolean; primary?: boolean }
type Row = {
  number: string
  type: string
  title: ReactNode
  credits: string[]
  status: string
  href: string
  external?: boolean
  ctas: Cta[]
  visual: ReactNode
  lead?: boolean
}

/** Pentayya has no images yet — a typographic title card instead of a fake still. */
function PentayyaCard() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-earth p-6 sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(184,105,58,0.35),transparent_60%)]" />
      <p className="eyebrow relative flex justify-between text-ivory/60">
        <span>A feature screenplay</span>
        <span>≈ 136 pages</span>
      </p>
      <div className="relative">
        <p className="font-telugu text-[4.2rem] leading-none text-ivory sm:text-[7rem] lg:text-[8.5rem]">{pentayya.titleTelugu}</p>
        <p className="eyebrow mt-5 text-ivory/60">{pentayya.setting}</p>
      </div>
    </div>
  )
}

function TfiCard() {
  if (tfi.image) return <img src={tfi.image} alt={`${tfi.title} – ${tfi.subtitle}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-ink-3">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(143,42,28,0.35),transparent_60%)]" />
      <div className="relative text-center">
        <p className="display text-[6rem] text-transparent sm:text-[10rem]" style={{ WebkitTextStroke: '1px rgba(243,237,226,0.55)' }}>
          {tfi.title}
        </p>
        <p className="eyebrow mt-3 text-ivory/55">{tfi.subtitle}</p>
      </div>
    </div>
  )
}

const tfiHref = tfi.watchUrl || contact.youtubeUrl

const rows: Row[] = [
  {
    number: pentayya.number,
    type: `${pentayya.type} · Primary project`,
    title: pentayya.title,
    credits: [pentayya.role],
    status: pentayya.status,
    href: projectHref(pentayya.slug),
    ctas: [
      { label: 'Request a narration', href: asks.pentayyaNarration, primary: true },
      { label: 'View project', href: projectHref(pentayya.slug) },
      { label: 'Request the screenplay', href: asks.pentayyaScreenplay },
    ],
    visual: <PentayyaCard />,
    lead: true,
  },
  {
    number: myself.number,
    type: `${myself.type} · ${myself.year}`,
    title: (
      <>
        Myself <span className="text-ivory/60 italic">– {myself.subtitle}</span>
      </>
    ),
    credits: myself.roles,
    status: myself.status,
    href: projectHref(myself.slug),
    ctas: [{ label: 'View project', href: projectHref(myself.slug) }],
    visual: <Picture photo={myself.characters[2].photo} sizes="(min-width:1024px) 58vw, 100vw" />,
  },
  {
    number: tfi.number,
    type: `${tfi.type} · ${tfi.year}`,
    title: (
      <>
        TFI <span className="text-ivory/60 italic">– {tfi.subtitle}</span>
      </>
    ),
    credits: tfi.roles,
    status: tfi.status,
    href: tfiHref,
    external: true,
    ctas: [{ label: tfi.watchUrl ? 'Watch the film' : 'Watch on YouTube', href: tfiHref, external: true }],
    visual: <TfiCard />,
  },
]

const ext = (on?: boolean) => (on ? { target: '_blank', rel: 'noreferrer' } : {})

export function SelectedWork() {
  return (
    <section id="work" className="bg-ink py-24 text-ivory sm:py-32 lg:py-40">
      <Container>
        <div className="flex flex-col justify-between gap-8 border-b border-ivory/10 pb-12 sm:flex-row sm:items-end">
          <div>
            <SectionLabel index="02" className="text-ivory/50">
              Selected Work
            </SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-7 text-6xl sm:text-8xl">
              Work
            </h2>
          </div>
          <p data-reveal style={delay(200)} className="max-w-sm text-ivory/60 sm:text-right">
            A completed feature screenplay, a short film in production, and a released first film.
          </p>
        </div>

        <div className="divide-y divide-ivory/10">
          {rows.map((r, i) => (
            <article key={r.number} className="zoom group grid gap-8 py-14 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-12">
              <a
                href={r.href}
                {...ext(r.external)}
                tabIndex={-1}
                aria-hidden="true"
                data-reveal="image"
                className={`relative block aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:col-span-7 ${i % 2 ? 'lg:order-2 lg:col-start-6' : ''}`}
              >
                {r.visual}
              </a>
              <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-1 lg:col-start-1 lg:row-start-1' : ''}`}>
                <p data-reveal className="eyebrow flex items-center gap-4 text-ivory/50">
                  <span className="text-clay">{r.number}</span>
                  {r.type}
                </p>
                <h3 data-reveal style={delay(100)} className={`display mt-6 ${r.lead ? 'text-6xl sm:text-8xl' : 'text-5xl sm:text-7xl'}`}>
                  <a href={r.href} {...ext(r.external)} className="transition-colors duration-500 hover:text-clay/90">
                    {r.title}
                  </a>
                </h3>
                <div data-reveal style={delay(200)}>
                  <Credit items={r.credits} className="mt-6 text-ivory/75" />
                  <div className="mt-6">
                    <Status>{r.status}</Status>
                  </div>
                  {r.lead ? (
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {r.ctas.map((c) => (
                        <a key={c.label} href={c.href} {...ext(c.external)} className={c.primary ? 'btn-light-solid' : 'btn-light'}>
                          {c.label} {c.primary && <Arrow />}
                        </a>
                      ))}
                    </div>
                  ) : (
                    r.ctas.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        {...ext(c.external)}
                        className="eyebrow mt-10 inline-flex items-center gap-4 text-ivory transition-[gap] duration-500 hover:gap-6"
                      >
                        {c.label} <Arrow />
                      </a>
                    ))
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

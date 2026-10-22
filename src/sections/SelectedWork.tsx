import type { ReactNode } from 'react'
import { Picture } from '../components/Picture'
import { Arrow, Container, Credit, SectionLabel, Status } from '../components/ui'
import { delay } from '../lib/motion'
import { attack, contact, myself, pentayya, swargam, tfi } from '../content/site'
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
  description?: string
}

/** Pentayya has no images yet — a typographic title card instead of a fake still. */
function PentayyaCard() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-earth p-6 sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(184,105,58,0.35),transparent_60%)]" />
      <p className="eyebrow relative flex justify-between text-ivory/60">
        <span>A feature screenplay</span>
        <span>{pentayya.pages}</span>
      </p>
      <div className="relative">
        <p className="font-telugu text-[4.2rem] leading-none text-ivory sm:text-[7rem] lg:text-[8.5rem]">{pentayya.titleTelugu}</p>
        <p className="eyebrow mt-5 text-ivory/60">{pentayya.setting}</p>
      </div>
    </div>
  )
}

/** Software Swargam — typographic title card in the synopsis PDF's navy and amber. */
function SwargamCard() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-[#121a2b] p-6 sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(201,151,63,0.25),transparent_60%)]" />
      <p className="eyebrow relative flex justify-between text-ivory/55">
        <span>A feature film project</span>
        <span>Hyderabad</span>
      </p>
      <div className="relative">
        <p className="font-sans text-[2.6rem] leading-[0.9] font-semibold tracking-[-0.02em] text-ivory uppercase sm:text-6xl lg:text-7xl">
          Software
          <br />
          Swargam
        </p>
        <p className="mt-4 flex items-center gap-3 text-[0.65rem] font-medium tracking-[0.38em] text-[#c9973f] uppercase sm:text-xs">
          <span className="h-px w-8 bg-[#c9973f]" />
          {swargam.subtitle}
        </p>
      </div>
    </div>
  )
}

/** ATTACK — typographic card in charcoal and signal red. No poster: the film is in development. */
function AttackCard() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-[#151515] p-6 sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,rgba(192,57,43,0.28),transparent_60%)]" />
      <p className="eyebrow relative flex justify-between text-ivory/55">
        <span>A feature film project</span>
        <span className="hidden sm:inline">{attack.status}</span>
      </p>
      <div className="relative">
        <p className="font-sans text-[3.6rem] leading-[0.85] font-semibold tracking-[0.04em] text-ivory uppercase sm:text-[6rem] lg:text-[7.5rem]">{attack.title}</p>
        <span className="mt-5 block h-[3px] w-16 bg-[#c0392b]" />
        <p className="eyebrow mt-4 text-ivory/55">
          {attack.type} · {attack.genre}
        </p>
      </div>
    </div>
  )
}

function TfiCard() {
  // Portrait poster in a landscape frame: show it whole (contain), never cropped.
  if (tfi.image)
    return (
      <div className="absolute inset-0 bg-ink-3">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,rgba(143,42,28,0.35),transparent_60%)]" />
        <img
          src={tfi.image}
          alt={`${tfi.title} – ${tfi.subtitle} poster`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain py-4 sm:py-6"
        />
      </div>
    )
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
    type: `${pentayya.type} · ${pentayya.genre}`,
    title: pentayya.title,
    credits: pentayya.roles,
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
    number: swargam.number,
    type: `${swargam.type} · ${swargam.genreShort}`,
    title: (
      <>
        Software Swargam
        <span className="mt-3 block text-[0.42em] tracking-[0.02em] text-ivory/60 italic">Not for Employees</span>
      </>
    ),
    credits: ['Written by Garikapati Siva Ramakrishna'],
    status: swargam.status,
    href: projectHref(swargam.slug),
    description: swargam.description,
    ctas: [
      { label: 'View project', href: projectHref(swargam.slug) },
      { label: 'Read synopsis (PDF)', href: swargam.synopsisPdf, external: true },
    ],
    visual: <SwargamCard />,
  },
  {
    number: attack.number,
    type: `${attack.type} · ${attack.genre}`,
    title: attack.title,
    credits: ['Written by Garikapati Siva Ramakrishna'],
    status: attack.status,
    href: projectHref(attack.slug),
    description: attack.short,
    ctas: [{ label: 'View project', href: projectHref(attack.slug) }],
    visual: <AttackCard />,
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
            Three feature film projects, a short film in production, and a released first film.
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
                  {r.description && <p className="mt-6 max-w-md leading-relaxed text-ivory/65">{r.description}</p>}
                  {r.lead ? (
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      {r.ctas.map((c) => (
                        <a key={c.label} href={c.href} {...ext(c.external)} className={c.primary ? 'btn-light-solid' : 'btn-light'}>
                          {c.label} {c.primary && <Arrow />}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
                      {r.ctas.map((c) => (
                        <a
                          key={c.label}
                          href={c.href}
                          {...ext(c.external)}
                          className="eyebrow inline-flex items-center gap-4 text-ivory transition-[gap] duration-500 hover:gap-6"
                        >
                          {c.label} <Arrow />
                        </a>
                      ))}
                    </div>
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

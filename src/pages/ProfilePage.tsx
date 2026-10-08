import { SectionLink } from '../components/Nav'
import { ProfileSheet } from '../components/ProfileSheet'
import { Arrow, Container } from '../components/ui'
import { profile } from '../content/profile'
import { delay } from '../lib/motion'

function DownloadButton({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <a href={profile.pdf.href} download={profile.pdf.fileName} className={tone === 'light' ? 'btn-light-solid' : 'btn-dark-solid'}>
      Download filmmaker profile <Arrow className="rotate-90" />
    </a>
  )
}

function Label({ children }: { children: string }) {
  return <h2 className="eyebrow text-clay">{children}</h2>
}

/** Phone / tablet: the same profile, recomposed for a narrow screen. */
function ProfileWeb() {
  const p = profile
  return (
    <div className="profile-web bg-ivory lg:hidden">
      {/* Name + identity, then the photograph */}
      <header className="bg-ink pt-28 text-ivory sm:pt-32">
        <Container>
          <p className="rise eyebrow text-ivory/50">Filmmaker Profile</p>
          <h1 className="rise display mt-5" style={delay(120)}>
            <span className="block text-3xl text-ivory/70 italic sm:text-4xl">{p.name.first}</span>
            <span className="block text-[3.3rem] sm:text-7xl">{p.name.last}</span>
          </h1>
          <p className="rise eyebrow mt-6 flex flex-wrap gap-x-3 text-[0.75rem] text-ivory" style={delay(240)}>
            {p.roles.map((r, i) => (
              <span key={r} className="flex gap-3">
                {i > 0 && <span className="text-ember">|</span>}
                {r}
              </span>
            ))}
          </p>
          <p className="rise mt-3 font-display text-xl text-ivory/65" style={delay(300)}>
            {p.positioning.join(' • ')}
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={delay(380)}>
            <DownloadButton />
          </div>
        </Container>
        <div className="relative mt-10 aspect-[4/5] overflow-hidden sm:aspect-[16/11]">
          <img src={p.portrait.webSrc} alt={p.portrait.alt} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: p.portrait.webPosition }} />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
        </div>
      </header>

      {/* Bio + philosophy */}
      <section className="bg-ink pb-16 text-ivory">
        <Container>
          <p data-reveal className="font-display text-[1.6rem] leading-snug sm:text-3xl">
            {p.bio[0]}
          </p>
          <p data-reveal className="mt-6 leading-relaxed text-ivory/75">
            {p.bio[1]}
          </p>
          <figure data-reveal className="mt-12 border-l border-ember pl-5">
            <blockquote className="font-display text-2xl leading-snug italic">“{p.quote}”</blockquote>
            <figcaption className="eyebrow mt-3 text-ivory/45">Director’s note</figcaption>
          </figure>
        </Container>
      </section>

      {/* Selected work */}
      <section className="py-16 sm:py-20">
        <Container>
          <Label>Selected work</Label>
          <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
            {p.work.map((w) => (
              <article key={w.key} data-reveal className="grid grid-cols-[5.5rem_1fr] gap-5 py-7 sm:grid-cols-[7rem_1fr] sm:gap-7">
                {w.image ? (
                  <img src={w.image} alt={`${w.title} poster`} loading="lazy" className="aspect-[2/3] w-full object-cover" />
                ) : (
                  <div className="flex aspect-[2/3] w-full items-center justify-center bg-earth font-telugu text-lg text-ivory" aria-hidden="true">
                    {'titleTelugu' in w ? w.titleTelugu : ''}
                  </div>
                )}
                <div>
                  <h3 className="display text-[1.9rem] leading-[1.02] sm:text-4xl">{w.title}</h3>
                  <p className="eyebrow mt-2 !text-[0.6rem] text-stone">{w.meta}</p>
                  <p className="eyebrow mt-1 !text-[0.6rem] text-ember">{w.roles}</p>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/75">
                    <strong className="font-semibold text-ink">{w.note}</strong> {w.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Writing, interests, availability */}
      <section className="bg-paper py-16 sm:py-20">
        <Container className="grid gap-12 sm:grid-cols-2">
          <div data-reveal className="sm:col-span-2">
            <Label>Writing</Label>
            <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {p.writing.map(([t, d]) => (
                <div key={t} className="border-t border-ink/15 pt-3">
                  <dt className="font-display text-2xl">{t}</dt>
                  <dd className="mt-1 text-sm text-stone">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div data-reveal>
            <Label>Creative interests</Label>
            <p className="mt-4 leading-relaxed text-ink/80">{p.interests.join(' · ')}</p>
          </div>
          <div data-reveal>
            <Label>Available for</Label>
            <p className="mt-4 leading-relaxed text-ink/80">{p.availableFor.join(' · ')}</p>
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="bg-ink py-16 text-ivory sm:py-20">
        <Container>
          <Label>Contact</Label>
          <p className="display mt-6 text-4xl">{`${p.name.first} ${p.name.last}`}</p>
          <p className="eyebrow mt-3 text-ivory/55">{p.roles.join(' | ')}</p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {(
              [
                ['Phone', p.contact.phoneDisplay, `tel:${p.contact.phoneLink}`],
                ['Email', p.contact.email, `mailto:${p.contact.email}`],
                ['Instagram', p.contact.instagramHandle, p.contact.instagramUrl],
                ['Portfolio', p.contact.portfolioDisplay, p.contact.portfolioUrl],
              ] as [string, string, string][]
            ).map(([k, v, href]) => (
              <div key={k}>
                <dt className="eyebrow text-ivory/45">{k}</dt>
                <dd className="mt-2">
                  <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} className="link-line text-lg text-ivory/90 [overflow-wrap:anywhere]">
                    {v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <DownloadButton />
            <SectionLink id="" className="btn-light">
              Back to portfolio
            </SectionLink>
          </div>
        </Container>
      </section>
    </div>
  )
}

export function ProfilePage() {
  return (
    <>
      {/* Desktop: the actual A4 one-sheet, as it prints */}
      <section className="profile-preview hidden bg-ink pt-32 pb-24 lg:block">
        <div className="profile-screen-only mx-auto mb-10 flex w-[210mm] items-end justify-between gap-8 text-ivory">
          <div>
            <p className="eyebrow text-ivory/50">Filmmaker Profile · A4 one-sheet</p>
            <p className="mt-3 max-w-md font-display text-3xl leading-snug">For producers, directors, casting and creative teams.</p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-3">
            <DownloadButton />
            <SectionLink id="" className="eyebrow link-line pb-1 text-ivory/60 hover:text-ivory">
              Back to portfolio
            </SectionLink>
          </div>
        </div>
        <div className="mx-auto w-fit shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
          <ProfileSheet />
        </div>
      </section>

      <ProfileWeb />
    </>
  )
}

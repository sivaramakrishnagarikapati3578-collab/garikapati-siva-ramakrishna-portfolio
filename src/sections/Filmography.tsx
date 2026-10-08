import { Arrow, Container, SectionLabel } from '../components/ui'
import { delay } from '../lib/motion'
import { contact, filmography, tfi } from '../content/site'

export function Filmography() {
  return (
    <section id="filmography" className="bg-ivory pt-24 sm:pt-32 lg:pt-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="05" className="text-stone">
              Filmography
            </SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-8 text-6xl sm:text-7xl">
              Films
            </h2>
          </div>
          <ol className="border-t border-ink/15 lg:col-span-8">
            {filmography.map((f, i) => {
              const href = f.href || tfi.watchUrl || contact.youtubeUrl
              const external = href.startsWith('http')
              return (
                <li key={f.title} data-reveal style={delay(i * 90)} className="border-b border-ink/15">
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-x-4 gap-y-2 py-7 sm:grid-cols-[5rem_1fr_auto] sm:py-9"
                  >
                    <span className="font-display text-2xl text-clay tabular-nums sm:text-3xl">{f.year}</span>
                    <span>
                      <span className="display block text-[2rem] leading-[1.05] transition-colors duration-500 group-hover:text-earth-2 sm:text-5xl">{f.title}</span>
                      <span className="mt-3 block text-[0.92rem] text-ink/70">{f.credits}</span>
                      <span className="eyebrow mt-3 block text-stone">
                        {f.format} — {f.status}
                      </span>
                    </span>
                    <Arrow className="self-center text-ink/40 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-ink" />
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}

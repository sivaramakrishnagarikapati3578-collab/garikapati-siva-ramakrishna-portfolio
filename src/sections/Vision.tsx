import { Picture } from '../components/Picture'
import { Container, SectionLabel } from '../components/ui'
import { delay } from '../lib/motion'
import { person, photos, vision } from '../content/site'
import { useParallax } from '../hooks/useParallax'

export function Vision() {
  const img = useParallax<HTMLDivElement>(0.07)
  return (
    <section id="vision" className="bg-ink text-ivory">
      <div className="relative h-[78svh] min-h-[460px] overflow-hidden sm:h-[88svh]">
        <div ref={img} className="absolute inset-0 will-change-transform">
          <Picture photo={photos.vision} sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40 lg:bg-gradient-to-r lg:from-ink/95 lg:via-ink/50 lg:to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-14 lg:justify-center lg:pb-0">
          <SectionLabel index="07" className="text-ivory/60">
            Director’s Vision
          </SectionLabel>
          <blockquote data-reveal style={delay(150)} className="display mt-8 max-w-[15ch] text-[2.5rem] leading-[1.02] sm:text-6xl lg:max-w-[16ch] lg:text-[5rem]">
            “{vision.pullQuote}”
          </blockquote>
        </Container>
      </div>

      <Container className="grid gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:py-36">
        <p data-reveal className="eyebrow text-clay lg:col-span-3">
          Filmmaker’s statement
        </p>
        <div className="lg:col-span-7 lg:col-start-5">
          <p data-reveal className="font-display text-[1.9rem] leading-snug sm:text-[2.5rem]">
            {vision.statement[0]}
          </p>
          <div className="mt-10 space-y-6 text-[1.06rem] leading-[1.8] text-ivory/75">
            {vision.statement.slice(1).map((p, i) => (
              <p key={i} data-reveal style={delay(i * 60)}>
                {p}
              </p>
            ))}
          </div>
          <p data-reveal className="mt-12 font-display text-2xl text-ivory/90 italic">— {person.fullName}</p>
        </div>
      </Container>
    </section>
  )
}

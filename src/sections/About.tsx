import { SectionLink } from '../components/Nav'
import { Picture } from '../components/Picture'
import { Arrow, Container, SectionLabel } from '../components/ui'
import { delay } from '../lib/motion'
import { about, photos, vision } from '../content/site'

export function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32 lg:py-44">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div data-reveal="image" className="relative aspect-[4/5] overflow-hidden bg-paper">
            <Picture photo={photos.about} sizes="(min-width:1024px) 40vw, 100vw" />
          </div>
          <p className="eyebrow mt-4 text-stone">Guntur → Hyderabad</p>
        </div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <SectionLabel index="01" className="text-stone">
            About
          </SectionLabel>
          <h2 data-reveal style={delay(100)} className="display mt-8 text-[2.6rem] sm:text-6xl lg:text-[4.2rem]">
            {about.heading}
          </h2>
          <div className="mt-10 max-w-xl space-y-5 text-[1.05rem] leading-[1.75] text-ink/80">
            {about.intro.map((p, i) => (
              <p key={i} data-reveal style={delay(200 + i * 80)}>
                {p}
              </p>
            ))}
          </div>

          <dl data-reveal style={delay(300)} className="mt-12 grid grid-cols-2 border-t border-ink/15">
            {about.facts.map(([k, v], i) => (
              <div key={k} className={`border-b border-ink/15 py-5 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-5'}`}>
                <dt className="eyebrow text-stone">{k}</dt>
                <dd className="mt-2 font-display text-xl leading-snug sm:text-2xl">{v}</dd>
              </div>
            ))}
          </dl>

          <blockquote data-reveal style={delay(400)} className="mt-12 border-l border-ember pl-6">
            <p className="font-display text-2xl leading-snug italic sm:text-[1.75rem]">“{vision.pullQuote}”</p>
            <SectionLink id="vision" className="eyebrow mt-5 inline-flex items-center gap-3 text-stone transition-colors hover:text-ink">
              Read the director’s vision <Arrow />
            </SectionLink>
          </blockquote>
        </div>
      </Container>
    </section>
  )
}

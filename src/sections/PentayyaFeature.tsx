import { Arrow, Container, SectionLabel } from '../components/ui'
import { delay } from '../lib/motion'
import { pentayya, pentayyaFacts } from '../content/site'
import { asks } from '../lib/links'
import { projectHref } from '../lib/router'

export function PentayyaFeature() {
  return (
    <section id="pentayya" className="relative overflow-hidden bg-earth py-24 text-ivory sm:py-32 lg:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_0%,rgba(184,105,58,0.28),transparent_55%)]" />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 bottom-0 font-telugu text-[11rem] leading-none text-ivory/[0.05] select-none sm:text-[18rem] lg:text-[26rem]"
      >
        {pentayya.titleTelugu}
      </p>

      <Container className="relative">
        <SectionLabel index="03" className="text-ivory/55">
          Primary feature project
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 data-reveal style={delay(100)} className="display text-[4.6rem] sm:text-[8rem] lg:text-[10.5rem]">
              {pentayya.title}
            </h2>
            <p data-reveal style={delay(180)} className="mt-6 font-telugu text-3xl text-ivory/70 sm:mt-8 sm:text-4xl">
              {pentayya.titleTelugu}
            </p>
            <p data-reveal style={delay(260)} className="mt-10 max-w-xl font-display text-2xl leading-snug text-ivory/90 sm:text-[2rem]">
              A Telugu feature set in Pedhapuram, in the Palnadu region of Andhra Pradesh — centred on a 29-year-old agricultural labourer.
            </p>
            <p data-reveal style={delay(320)} className="eyebrow mt-8 text-clay">
              {pentayya.status}
            </p>
            <div data-reveal style={delay(380)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={asks.pentayyaNarration} className="btn-light-solid">
                Request a narration <Arrow />
              </a>
              <a href={projectHref(pentayya.slug)} className="btn-light">
                View project
              </a>
              <a href={asks.pentayyaScreenplay} className="btn-light">
                Request the screenplay
              </a>
            </div>
          </div>

          <dl data-reveal style={delay(200)} className="self-end border-t border-ivory/15 lg:col-span-5">
            {pentayyaFacts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-ivory/15 py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="eyebrow pt-1 text-ivory/50">{k}</dt>
                <dd className="text-[0.98rem] leading-relaxed text-ivory/90">{v}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-4 sm:grid-cols-[9rem_1fr]">
              <dt className="eyebrow pt-1 text-ivory/50">Characters</dt>
              <dd className="font-display text-xl leading-snug text-ivory/90">{pentayya.characters.map((c) => c.name).join(' · ')}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  )
}

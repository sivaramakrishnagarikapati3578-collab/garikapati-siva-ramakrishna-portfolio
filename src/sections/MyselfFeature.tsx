import { Picture } from '../components/Picture'
import { Arrow, Container, Credit, SectionLabel, Status } from '../components/ui'
import { delay } from '../lib/motion'
import { myself } from '../content/site'
import { projectHref } from '../lib/router'

/** Siva · Brain · Heart — three frames of the same actor. */
export function Triptych({ tall = false, eagerLoad = false }: { tall?: boolean; eagerLoad?: boolean }) {
  return (
    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
      {myself.characters.map((c, i) => (
        <figure
          key={c.name}
          data-reveal="image"
          style={delay(i * 140)}
          className={`zoom relative overflow-hidden bg-ink-3 ${tall ? 'aspect-[9/16] sm:aspect-[3/5]' : 'aspect-[3/4.4]'}`}
        >
          <Picture photo={c.photo} eager={eagerLoad} sizes="(min-width:1024px) 22vw, 34vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-3 text-ivory sm:p-5">
            <span className="display block text-2xl sm:text-4xl">{c.name}</span>
            <span className="mt-1 hidden text-xs text-ivory/70 sm:block">{c.line}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function MyselfFeature() {
  return (
    <section id="myself" className="bg-paper py-24 sm:py-32 lg:py-44">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 lg:pt-6">
            <SectionLabel index="04" className="text-stone">
              In production · {myself.year}
            </SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-8 text-[4.2rem] sm:text-[7rem]">
              Myself
              <span className="mt-2 block text-[2.4rem] text-earth-2 italic sm:text-6xl">– {myself.subtitle}</span>
            </h2>
            <p data-reveal style={delay(200)} className="mt-10 font-display text-[1.7rem] leading-snug sm:text-[2rem]">
              One actor. Three characters. The everyday fight between logic and emotion.
            </p>
            <p data-reveal style={delay(260)} className="mt-6 max-w-md leading-relaxed text-ink/75">
              {myself.concept[1]}
            </p>
            <div data-reveal style={delay(320)} className="mt-10 space-y-5">
              <Credit items={myself.roles} className="text-ink/70" />
              <p className="eyebrow text-stone">{myself.genre} · Independent short film</p>
              <Status tone="dark">{myself.status}</Status>
            </div>
            <a data-reveal style={delay(380)} href={projectHref(myself.slug)} className="btn-dark-solid mt-10">
              View project <Arrow />
            </a>
          </div>
          <div className="self-start lg:sticky lg:top-28 lg:col-span-7">
            <Triptych />
            <p className="eyebrow mt-4 text-stone">Production stills — Siva, Brain and Heart are played by the same actor</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

import { Container, SectionLabel } from '../components/ui'
import { delay } from '../lib/motion'
import { filmmaker } from '../content/site'

export function Filmmaker() {
  return (
    <section id="filmmaker" className="bg-paper py-24 sm:py-32 lg:py-44">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionLabel index="09" className="text-stone">
            About the Filmmaker
          </SectionLabel>
          <h2 data-reveal style={delay(100)} className="display mt-8 text-6xl sm:text-7xl">
            The journey so far
          </h2>
          <div className="mt-10 max-w-2xl space-y-6 text-[1.05rem] leading-[1.8] text-ink/80">
            {filmmaker.bio.map((p, i) => (
              <p key={i} data-reveal style={delay(i * 60)}>
                {p}
              </p>
            ))}
          </div>

          <ol className="mt-14 border-t border-ink/15">
            {filmmaker.journey.map(([when, what], i) => (
              <li key={when} data-reveal style={delay(i * 60)} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-ink/15 py-4 sm:grid-cols-[11rem_1fr]">
                <span className="eyebrow pt-1 text-stone">{when}</span>
                <span className="font-display text-xl leading-snug">{what}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-14 lg:col-span-4 lg:col-start-9 lg:pt-28">
          <div data-reveal>
            <p className="eyebrow text-stone">Education</p>
            <ul className="mt-5 space-y-5">
              {filmmaker.education.map((e) => (
                <li key={e.degree} className="border-t border-ink/15 pt-4">
                  <p className="text-[0.95rem] font-medium">{e.degree}</p>
                  {e.place && <p className="mt-1 text-sm text-ink/70">{e.place}</p>}
                  <p className="mt-1 text-xs tracking-wide text-stone">
                    {e.years} | {e.score}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <p className="eyebrow text-stone">Professional background</p>
            <div className="mt-5 border-t border-ink/15 pt-4">
              <p className="text-[0.95rem] font-medium">{filmmaker.career.company}</p>
              <p className="mt-1 text-sm text-ink/70">{filmmaker.career.role}</p>
              <p className="mt-1 text-xs tracking-wide text-stone">{filmmaker.career.years}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/60">{filmmaker.career.note}</p>
            </div>
          </div>
        </aside>
      </Container>
    </section>
  )
}

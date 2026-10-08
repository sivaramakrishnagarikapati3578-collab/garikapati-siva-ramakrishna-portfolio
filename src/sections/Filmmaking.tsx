import { Container, SectionLabel } from '../components/ui'
import { delay } from '../lib/motion'
import { disciplines } from '../content/site'

export function Filmmaking() {
  return (
    <section id="filmmaking" className="bg-ivory py-24 sm:py-32 lg:py-44">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel index="08" className="text-stone">
              Filmmaking
            </SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-8 text-6xl sm:text-7xl">
              From the page to the cut
            </h2>
          </div>
          <p data-reveal style={delay(200)} className="max-w-md self-end leading-relaxed text-ink/75 lg:col-span-5 lg:col-start-8">
            Learned by making. On MYSELF – Brain vs Heart he wrote and directed the film, and is also handling its cinematography and editing.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 border-t border-ink/15 lg:mt-24 lg:grid-cols-5">
          {disciplines.map((d, i) => (
            <div
              key={d.title}
              data-reveal
              style={delay(i * 90)}
              className="border-b border-ink/15 py-8 pr-4 even:border-l even:pl-5 last:col-span-2 last:border-l-0 last:pl-0 sm:pr-6 sm:even:pl-6 lg:border-b-0 lg:border-l lg:px-6 lg:py-10 lg:last:col-span-1 lg:last:border-l lg:last:pl-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="eyebrow tabular-nums text-clay">0{i + 1}</p>
              <h3 className="display mt-5 text-[1.65rem] leading-[1.05] sm:text-[2rem] lg:min-h-[2.2em]">{d.title}</h3>
              <ul className="mt-6 space-y-2.5 text-[0.88rem] text-ink/75 sm:text-[0.95rem]">
                {d.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink/30" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

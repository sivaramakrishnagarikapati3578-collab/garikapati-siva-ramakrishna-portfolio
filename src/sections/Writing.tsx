import { Container, SectionLabel } from '../components/ui'
import { delay } from '../lib/motion'
import { person, writing } from '../content/site'

/** A screenplay title page, the way it actually looks on paper. */
function TitlePage({ title, telugu, kind, state, i }: { title: string; telugu?: string; kind: string; state: string; i: number }) {
  return (
    <article
      data-reveal
      style={delay(i * 120)}
      className="group relative flex aspect-[8.5/11] flex-col bg-[#f8f4ec] px-3 py-4 font-script text-ink shadow-[0_1px_0_rgba(20,18,16,0.08),0_30px_60px_-40px_rgba(20,18,16,0.5)] transition-transform duration-700 hover:-translate-y-1.5 sm:px-10 sm:py-12"
    >
      <span className="self-end font-sans text-[0.52rem] tracking-[0.22em] text-stone uppercase sm:text-[0.6rem]">{state}</span>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-base font-bold tracking-wider uppercase sm:text-2xl">{title}</p>
        {telugu && <p className="mt-2 font-telugu text-lg text-ink/60">{telugu}</p>}
        <p className="mt-6 text-[0.7rem] sm:mt-8 sm:text-sm">Written by</p>
        <p className="mt-1.5 text-[0.7rem] leading-snug sm:mt-2 sm:text-sm">{person.fullName}</p>
      </div>
      <p className="text-left text-[0.6rem] text-ink/50 sm:text-xs">{kind}</p>
    </article>
  )
}

export function Writing() {
  return (
    <section id="writing" className="bg-ivory py-24 sm:py-32 lg:py-44">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="06" className="text-stone">
              Writing
            </SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-8 text-6xl sm:text-7xl">
              On the page
            </h2>
            <p data-reveal style={delay(200)} className="mt-8 max-w-sm leading-relaxed text-ink/75">
              Everything starts with the screenplay. Two feature screenplays are complete, and the next one is being written.
            </p>

            <div data-reveal style={delay(300)} className="mt-12 border-t border-ink/15 pt-6">
              <p className="eyebrow text-stone">{writing.other.role}</p>
              <p className="mt-3 font-display text-3xl leading-snug">{writing.other.what}</p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="eyebrow mb-6 text-stone">Completed feature screenplays</p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
              {writing.completed.map((w, i) => (
                <TitlePage key={w.title} title={w.title} telugu={w.titleTelugu} kind={w.kind} state={w.state} i={i} />
              ))}
              {writing.developing.map((w, i) => (
                <div key={w.title} className="col-span-2 md:col-span-1">
                  <p className="eyebrow mb-6 text-stone md:hidden">Currently developing</p>
                  <article
                    data-reveal
                    style={delay(240 + i * 120)}
                    className="cropmarks flex aspect-[8.5/5] flex-col items-center justify-center border border-dashed border-ink/25 px-6 text-center font-script text-ink/70 md:aspect-[8.5/11]"
                  >
                    <span className="absolute top-5 right-5 font-sans text-[0.6rem] tracking-[0.24em] text-clay uppercase">{w.state}</span>
                    <p className="text-xl font-bold tracking-wider uppercase">{w.title}</p>
                    <p className="mt-3 text-sm">{w.kind}</p>
                    <p className="mt-6 text-sm">
                      <span className="inline-block h-4 w-[2px] animate-pulse bg-ink/60 align-middle" />
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

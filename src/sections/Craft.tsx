import { Picture } from '../components/Picture'
import { VideoFrame } from '../components/VideoFrame'
import { Container, SectionLabel } from '../components/ui'
import { acting, craft, dialogue } from '../content/site'
import { delay } from '../lib/motion'

function FocusList({ items, tone }: { items: string[]; tone: 'light' | 'dark' }) {
  return (
    <ul className={`mt-8 grid gap-x-6 gap-y-2.5 text-[0.95rem] sm:grid-cols-2 ${tone === 'light' ? 'text-ivory/80' : 'text-ink/75'}`}>
      {items.map((it) => (
        <li key={it} className="flex gap-3">
          <span className={`mt-[0.7em] h-px w-3 shrink-0 ${tone === 'light' ? 'bg-ivory/35' : 'bg-ink/30'}`} />
          {it}
        </li>
      ))}
    </ul>
  )
}

/** Writer · director · actor as one approach — plus acting and Telugu dialogue as named strengths. */
export function Craft() {
  return (
    <section id="craft" className="bg-paper py-24 sm:py-32 lg:py-44">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel index="07" className="text-stone">
              Craft
            </SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-8 text-6xl sm:text-7xl">
              {craft.heading}
            </h2>
          </div>
          <p data-reveal style={delay(200)} className="max-w-md self-end leading-relaxed text-ink/75 lg:col-span-5 lg:col-start-8">
            {craft.intro}
          </p>
        </div>

        <ol className="mt-14 grid border-t border-ink/15 sm:grid-cols-3 lg:mt-20">
          {craft.disciplines.map(([title, text], i) => (
            <li
              key={title}
              data-reveal
              style={delay(i * 90)}
              className="border-b border-ink/15 py-7 sm:border-b-0 sm:border-l sm:px-6 sm:py-9 sm:first:border-l-0 sm:first:pl-0"
            >
              <p className="eyebrow text-clay">{title}</p>
              <p className="mt-4 font-display text-[1.45rem] leading-snug sm:text-2xl">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-2">
          {/* Acting & Character */}
          <article data-reveal className="flex flex-col bg-ink p-7 text-ivory sm:p-10 lg:p-12">
            <p className="eyebrow text-clay">Performance</p>
            <h3 className="display mt-5 text-4xl sm:text-5xl">{acting.heading}</h3>
            <blockquote className="mt-8 border-l border-ember pl-5 font-display text-[1.45rem] leading-snug italic sm:text-2xl">
              “{acting.idea}”
            </blockquote>
            <p className="mt-6 leading-relaxed text-ivory/70">{acting.text}</p>
            <FocusList items={acting.focus} tone="light" />

            <div className="mt-auto pt-10">
              <p className="eyebrow text-ivory/45">Acting credit</p>
              {acting.credits.map((c) => (
                <p key={c.title} className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-ivory/15 pt-3">
                  <span className="font-display text-2xl">
                    {c.title} <span className="text-ivory/50">({c.year})</span>
                  </span>
                  <span className="eyebrow !text-[0.6rem] text-ivory/60">{c.credit}</span>
                </p>
              ))}
            </div>

            {/* Shown only once real material is added in site.ts → acting */}
            {acting.reelUrl && (
              <div className="mt-10">
                <VideoFrame url={acting.reelUrl} label="Acting showreel" note="" />
              </div>
            )}
            {acting.photos.length > 0 && (
              <figure className="mt-8">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {acting.photos.map((p) => (
                    <div key={p.src} className="relative aspect-[4/5] overflow-hidden bg-ink-3">
                      <Picture photo={p} sizes="(min-width:1024px) 12vw, 30vw" />
                    </div>
                  ))}
                </div>
                <figcaption className="eyebrow mt-3 !text-[0.6rem] text-ivory/45">{acting.photosCaption}</figcaption>
              </figure>
            )}
          </article>

          {/* Telugu Dialogue & Language Craft */}
          <article data-reveal style={delay(120)} className="relative overflow-hidden border border-ink/15 bg-ivory p-7 sm:p-10 lg:p-12">
            <p
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -bottom-6 font-telugu text-[7rem] leading-none text-ink/[0.05] select-none sm:text-[10rem]"
            >
              {dialogue.headingTelugu}
            </p>
            <div className="relative">
              <p className="eyebrow text-clay">Language</p>
              <h3 className="display mt-5 text-4xl sm:text-5xl">{dialogue.heading}</h3>
              <p className="mt-8 text-[1.05rem] leading-[1.8] text-ink/80">{dialogue.text}</p>
              <FocusList items={dialogue.focus} tone="dark" />
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}

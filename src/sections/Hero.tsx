import { Picture } from '../components/Picture'
import { SectionLink } from '../components/Nav'
import { Arrow } from '../components/ui'
import { delay } from '../lib/motion'
import { myself, pentayya, person, photos } from '../content/site'
import { projectHref } from '../lib/router'

export function Hero() {
  return (
    <section id="top" className="letterbox relative isolate flex flex-col overflow-hidden bg-ink text-ivory lg:min-h-[100svh]">
      {/* Photograph — full-bleed on phones, right-hand frame on desktop */}
      <div className="relative h-[64svh] min-h-[420px] overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:min-h-0 lg:w-[62%]">
        <Picture photo={{ ...photos.hero, position: photos.hero.positionMobile }} eager sizes="100vw" className="hero-img lg:hidden" />
        <Picture photo={photos.hero} eager sizes="62vw" className="hero-img hidden lg:block" />
        {/* tone the sky down and let the frame fall into black */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent via-45% to-ink lg:bg-gradient-to-r lg:from-ink lg:via-ink/10 lg:to-transparent" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-ink/80 via-transparent to-ink/30 lg:block" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] -mt-32 flex-1 flex-col px-5 pb-12 sm:-mt-40 sm:px-8 lg:mt-0 lg:justify-center lg:px-14 lg:pt-28 lg:pb-28">
        <div className="max-w-[44rem]">
          <p className="rise eyebrow mb-5 text-clay sm:mb-6" style={delay(900)}>
            Telugu Cinema — {person.basedIn}
          </p>
          <h1 className="display">
            <span className="rise block text-[2.1rem] text-ivory/75 italic sm:text-5xl lg:text-[3.4rem]" style={delay(1100)}>
              {person.firstLine}
            </span>
            <span className="rise block text-[3.6rem] sm:text-[6rem] lg:text-[7.4rem] xl:text-[8.4rem]" style={delay(1250)}>
              {person.name.split(' ').map((w) => (
                <span key={w} className="block">
                  {w}
                </span>
              ))}
            </span>
          </h1>

          <p className="rise eyebrow mt-7 flex flex-wrap gap-x-3 text-ivory sm:mt-9 sm:text-[0.78rem]" style={delay(1550)}>
            {person.roles.map((r, i) => (
              <span key={r} className="flex gap-3">
                {i > 0 && <span className="text-ember">|</span>}
                {r}
              </span>
            ))}
          </p>
          <p className="rise mt-5 max-w-[30rem] text-[1.02rem] leading-relaxed text-ivory/70 sm:text-lg" style={delay(1700)}>
            {person.supportingLine}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={delay(1900)}>
            <SectionLink id="work" className="btn-light-solid">
              Explore my work <Arrow />
            </SectionLink>
            <SectionLink id="contact" className="btn-light">
              Contact
            </SectionLink>
          </div>
        </div>
      </div>

      {/* Now showing — what he has made, at a glance */}
      <div className="rise relative z-10 border-t border-ivory/10" style={delay(2200)}>
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-5 sm:grid-cols-2 sm:px-8 lg:px-14">
          <a href={projectHref(pentayya.slug)} className="group flex items-center justify-between gap-6 py-4 sm:border-r sm:border-ivory/10 sm:pr-8">
            <span className="eyebrow text-ivory/45">Feature screenplay</span>
            <span className="flex items-center gap-3 font-display text-xl whitespace-nowrap transition-colors group-hover:text-clay sm:text-2xl">
              {pentayya.title} <Arrow className="opacity-50" />
            </span>
          </a>
          <a href={projectHref(myself.slug)} className="group flex items-center justify-between gap-6 border-t border-ivory/10 py-4 sm:border-t-0 sm:pl-8">
            <span className="eyebrow text-ivory/45">Short film<span className="hidden lg:inline"> · {myself.year}</span></span>
            <span className="flex items-center gap-3 font-display text-xl whitespace-nowrap transition-colors group-hover:text-clay sm:text-2xl">
              Myself – {myself.subtitle} <Arrow className="opacity-50" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

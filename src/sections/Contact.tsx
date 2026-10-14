import { Picture } from '../components/Picture'
import { Arrow, Container, SectionLabel } from '../components/ui'
import { delay } from '../lib/motion'
import { profile } from '../content/profile'
import { availability, contact, isAvailabilityShown, person, photos, tfi } from '../content/site'
import { asks } from '../lib/links'
import { profileHref } from '../lib/router'

export function Contact() {
  const details: [string, string, string][] = [
    ['Email', contact.email, `mailto:${contact.email}`],
    ['Phone', contact.phoneDisplay, `tel:${contact.phoneLink}`],
    ['Instagram', contact.instagramHandle, contact.instagramUrl],
    ['YouTube', contact.youtubeDisplay, contact.youtubeUrl],
  ]
  return (
    <section id="contact" className="relative overflow-hidden bg-ink pt-24 pb-16 text-ivory sm:pt-32 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_100%,rgba(143,42,28,0.25),transparent_55%)]" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index="11" className="text-ivory/50">
              Contact
            </SectionLabel>
            <h2 data-reveal style={delay(100)} className="display mt-10 max-w-[13ch] text-[3.3rem] sm:text-[6.5rem] lg:text-[7.6rem]">
              Let’s create something <span className="text-clay italic">worth watching.</span>
            </h2>

            <div data-reveal style={delay(200)} className="mt-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={asks.project} className="btn-light-solid">
                Discuss a project <Arrow />
              </a>
              <a href={asks.pentayyaNarration} className="btn-light">
                Request a narration
              </a>
              <a href={tfi.watchUrl || contact.youtubeUrl} target="_blank" rel="noreferrer" className="btn-light">
                Watch my work
              </a>
            </div>
            <p data-reveal style={delay(260)} className="eyebrow mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-ivory/60">
              <a href={profile.pdf.href} download={profile.pdf.fileName} className="inline-flex items-center gap-3 text-ivory transition-colors hover:text-clay">
                Download filmmaker profile <Arrow className="rotate-90" />
              </a>
              <a href={profileHref} className="link-line pb-0.5 transition-colors hover:text-ivory">
                View one-page profile
              </a>
            </p>
          </div>
          <div data-reveal="image" style={delay(200)} className="relative aspect-[4/5] max-h-[78svh] overflow-hidden sm:aspect-[16/11] lg:col-span-4 lg:aspect-[4/5]">
            <Picture photo={photos.contact} sizes="(min-width:1024px) 30vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-ivory/10 pt-12 lg:mt-28 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-4">
            <p className="display text-3xl">{person.fullName}</p>
            <p className="eyebrow mt-4 text-ivory/55">{person.roleShort}</p>
            <p className="mt-2 text-sm text-ivory/55">From {person.from}</p>
            {isAvailabilityShown() && (
              <div className="mt-8 border-l border-ember pl-4">
                <p className="eyebrow text-ivory/45">Availability</p>
                {availability.lines.map(([what, when]) => (
                  <p key={what} className="mt-2 text-sm leading-relaxed text-ivory/85">
                    <span className="text-ivory/55">{what}:</span> {when}
                  </p>
                ))}
                <p className="mt-2 text-xs text-ivory/50">{availability.basedIn}</p>
              </div>
            )}
          </div>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {details.map(([k, v, href], i) => (
              <div key={k} data-reveal style={delay(i * 70)}>
                <dt className="eyebrow text-ivory/45">{k}</dt>
                <dd className="mt-2">
                  <a
                    href={href}
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="link-line text-lg break-all text-ivory/90 sm:text-xl sm:break-normal"
                  >
                    {v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

import { profile } from '../content/profile'
import '../profile.css'

/** Small poster / title tile for a selected-work entry. Pentayya has no poster yet → typographic tile. */
function WorkThumb({ w }: { w: (typeof profile.work)[number] }) {
  if (w.thumb) return <img className="sheet-thumb" src={w.thumb} alt={`${w.title} poster`} />
  return (
    <div className="sheet-thumb sheet-thumb-type" aria-hidden="true">
      <span>{'titleTelugu' in w ? w.titleTelugu : w.title}</span>
    </div>
  )
}

/** Inline list that never breaks inside an item, and never starts a line with a separator. */
function Items({ items }: { items: string[] }) {
  return (
    <p className="sheet-list">
      {items.map((it, i) => (
        <span key={it}>
          <span>
            {it}
            {i < items.length - 1 && ' ·'}
          </span>{' '}
        </span>
      ))}
    </p>
  )
}

/**
 * The one-page filmmaker profile, laid out on a fixed A4 sheet (210 × 297 mm).
 * Used as the desktop preview on #/profile and as the source of the printed PDF.
 */
export function ProfileSheet() {
  const p = profile
  return (
    <article className="sheet" aria-label="Filmmaker profile — A4 one-sheet">
      {/* ── Left: portrait + philosophy + contact ─────────────────────────── */}
      <aside className="sheet-side">
        <div className="sheet-portrait">
          <img src={p.portrait.src} alt={p.portrait.alt} style={{ objectPosition: p.portrait.position }} />
        </div>

        <div className="sheet-side-body">
          <figure className="sheet-quote">
            <blockquote>“{p.quote}”</blockquote>
            <figcaption>Director’s note</figcaption>
          </figure>

          <section>
            <h3 className="sheet-label">Creative interests</h3>
            <Items items={p.interests} />
          </section>

          <section>
            <h3 className="sheet-label">Available for</h3>
            <Items items={p.availableFor} />
          </section>

          <section className="sheet-side-writing">
            <h3 className="sheet-label">Writing</h3>
            <dl>
              {p.writing.map(([t, d]) => (
                <div key={t}>
                  <dt>{t}</dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="sheet-contact">
            <h3 className="sheet-label">Contact</h3>
            <p className="sheet-contact-name">{`${p.name.first} ${p.name.last}`}</p>
            <p className="sheet-contact-role">{p.roles.join(' | ')}</p>
            <dl>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${p.contact.phoneLink}`}>{p.contact.phoneDisplay}</a>
              </dd>
              <dt>Email</dt>
              <dd className="sheet-email">
                <a href={`mailto:${p.contact.email}`}>{p.contact.email}</a>
              </dd>
              <dt>Instagram</dt>
              <dd>
                <a href={p.contact.instagramUrl}>{p.contact.instagramHandle}</a>
              </dd>
            </dl>
          </section>
        </div>
      </aside>

      {/* ── Right: identity, bio, work, writing ───────────────────────────── */}
      <div className="sheet-main">
        <header className="sheet-head">
          <p className="sheet-kicker">
            <span>Filmmaker Profile</span>
            <span>Telugu Cinema</span>
          </p>
          <h1 className="sheet-name">
            <span>{p.name.first}</span>
            <span>{p.name.last}</span>
          </h1>
          <p className="sheet-roles">
            {p.roles.map((r, i) => (
              <span key={r}>
                {i > 0 && <i>|</i>}
                {r}
              </span>
            ))}
          </p>
          <p className="sheet-positioning">{p.positioning.join(' • ')}</p>
        </header>

        <section className="sheet-bio">
          {p.bio.map((para) => (
            <p key={para.slice(0, 20)}>{para}</p>
          ))}
        </section>

        <section className="sheet-work">
          <h2 className="sheet-label sheet-label-rule">Selected work</h2>
          {p.work.map((w) => (
            <div key={w.key} className="sheet-work-item">
              <WorkThumb w={w} />
              <div>
                <h3 className="sheet-work-title">{w.title}</h3>
                <p className="sheet-work-meta">{w.meta}</p>
                <p className="sheet-work-roles">{w.roles}</p>
                <p className="sheet-work-text">
                  <strong>{w.note}</strong> {w.text}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="sheet-craft">
          <h2 className="sheet-label sheet-label-rule">Craft</h2>
          <div className="sheet-craft-grid">
            {p.craft.map((c) => (
              <div key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="sheet-foot">
          <span>Portfolio</span>
          <a href={p.contact.portfolioUrl}>{p.contact.portfolioDisplay}</a>
        </footer>
      </div>
    </article>
  )
}

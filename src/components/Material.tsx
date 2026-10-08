import type { Material } from '../content/site'

const shapes = {
  poster: 'aspect-[2/3]',
  wide: 'aspect-[16/10]',
  page: 'aspect-[4/5]',
}

/**
 * A project material: shows the real poster / document / text when it exists,
 * otherwise an understated "in preparation" frame.
 */
export function MaterialCard({ m, tone = 'dark' }: { m: Material; tone?: 'dark' | 'light' }) {
  const shape = shapes[m.shape ?? 'page']
  const frame = tone === 'dark' ? 'border-ivory/15 text-ivory/70' : 'border-ink/15 text-ink/60'

  if (m.src) {
    return (
      <figure>
        <div className={`relative overflow-hidden ${shape}`}>
          <img src={m.src} alt={m.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <figcaption className="eyebrow mt-4 opacity-70">{m.label}</figcaption>
      </figure>
    )
  }

  if (m.text) {
    return (
      <article className={`border p-6 sm:p-8 ${frame}`}>
        <p className="eyebrow mb-5 opacity-70">{m.label}</p>
        <div className="space-y-4 text-[0.95rem] leading-relaxed opacity-90">
          {m.text.split('\n\n').map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </article>
    )
  }

  // Placeholders share one shape so the grid stays calm until real materials arrive.
  const inner = (
    <div className={`cropmarks flex aspect-[4/5] flex-col justify-between border p-5 sm:p-6 ${frame}`}>
      <span className="eyebrow">{m.label}</span>
      <span className="font-display text-2xl leading-tight italic opacity-80 sm:text-[1.7rem]">{m.note}</span>
    </div>
  )

  if (m.href) {
    return (
      <a href={m.href} target="_blank" rel="noreferrer" className="group block">
        <div className={`cropmarks flex aspect-[4/5] flex-col justify-between border p-5 transition-colors duration-500 group-hover:border-clay sm:p-6 ${frame}`}>
          <span className="eyebrow">{m.label}</span>
          <span className="font-display text-3xl leading-tight">Open {m.label.toLowerCase()} →</span>
        </div>
      </a>
    )
  }
  return inner
}

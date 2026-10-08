import { embedUrl } from '../lib/links'

/** Embeds a YouTube / Vimeo link, or shows a quiet 16:9 placeholder. */
export function VideoFrame({ url, label, note }: { url: string; label: string; note: string }) {
  const src = embedUrl(url)
  return (
    <figure>
      <div className="relative aspect-video overflow-hidden bg-ink-2">
        {src ? (
          <iframe
            src={src}
            title={label}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <div className="cropmarks absolute inset-0 flex flex-col items-center justify-center gap-5 border border-ivory/10 text-ivory/70">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory/30">
              <svg viewBox="0 0 12 14" className="ml-1 h-3.5 w-3.5" aria-hidden="true">
                <path d="M0 0l12 7-12 7z" fill="currentColor" />
              </svg>
            </span>
            <span className="font-display text-2xl italic sm:text-3xl">{note}</span>
          </div>
        )}
      </div>
      <figcaption className="eyebrow mt-4 text-ivory/60">{label}</figcaption>
    </figure>
  )
}

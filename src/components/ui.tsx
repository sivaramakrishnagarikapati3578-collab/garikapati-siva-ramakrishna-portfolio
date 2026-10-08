import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14 ${className}`}>{children}</div>
}

/** Section index, like a slate: "03 — Selected Work" */
export function SectionLabel({ index, children, className = '' }: { index?: string; children: ReactNode; className?: string }) {
  return (
    <p data-reveal className={`eyebrow flex items-center gap-4 ${className}`}>
      {index && <span className="tabular-nums opacity-60">{index}</span>}
      {index && <span className="h-px w-8 bg-current opacity-40" />}
      <span>{children}</span>
    </p>
  )
}

export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg className={`h-[0.7em] w-[1.6em] ${className}`} viewBox="0 0 32 12" fill="none" aria-hidden="true">
      <path d="M0 6h30M25 1l5 5-5 5" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function Credit({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <p className={`eyebrow flex flex-wrap gap-x-3 gap-y-1 ${className}`}>
      {items.map((it, i) => (
        <span key={it} className="flex gap-3">
          {i > 0 && <span className="opacity-40">|</span>}
          {it}
        </span>
      ))}
    </p>
  )
}

export function Status({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2.5 border px-3 py-2 !text-[0.6rem] ${
        tone === 'light' ? 'border-ivory/25 text-ivory/85' : 'border-ink/20 text-ink/75'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-ember" />
      {children}
    </span>
  )
}

import { useEffect, useState, type ReactNode } from 'react'
import { person } from '../content/site'
import { navItems, scrollToSection, sectionHref } from '../lib/router'

/** Section link that also works when the hash is already the same. */
export function SectionLink({
  id,
  className,
  children,
  onNavigate,
  ...rest
}: { id: string; className?: string; children: ReactNode; onNavigate?: () => void; 'aria-label'?: string }) {
  const href = sectionHref(id)
  return (
    <a
      {...rest}
      href={href}
      className={className}
      onClick={(e) => {
        onNavigate?.()
        if (window.location.hash === href) {
          e.preventDefault()
          scrollToSection(id)
        }
      }}
    >
      {children}
    </a>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled && !open
  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,padding] duration-700 ${
          solid ? 'border-b border-ink/10 bg-ivory py-3.5 text-ink' : 'border-b border-transparent py-5 text-ivory sm:py-7'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <SectionLink id="" className="group flex items-baseline gap-2.5" onNavigate={() => setOpen(false)} aria-label="Home — Garikapati Siva Ramakrishna">
            <span className="font-display text-[1.35rem] leading-none tracking-tight">G. Siva Ramakrishna</span>
            <span className="eyebrow hidden !text-[0.58rem] opacity-60 md:inline">{person.roleShort}</span>
          </SectionLink>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {navItems.map(([id, label]) => (
              <SectionLink key={label} id={id} className="eyebrow link-line pb-1 opacity-80 transition-opacity hover:opacity-100">
                {label}
              </SectionLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="eyebrow relative z-10 -mr-2 flex items-center gap-3 p-2 lg:hidden"
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span className="relative block h-2.5 w-6" aria-hidden="true">
              <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ${open ? 'top-1/2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ${open ? 'top-1/2 -rotate-45' : 'bottom-0'}`} />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink text-ivory transition-[opacity,visibility] duration-700 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-6 sm:px-10">
          {navItems.map(([id, label], i) => (
            <SectionLink
              key={label}
              id={id}
              onNavigate={() => setOpen(false)}
              className={`flex items-baseline gap-5 py-1.5 transition-[opacity,transform] duration-700 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <span className="eyebrow w-6 tabular-nums text-ivory/40">0{i + 1}</span>
              <span className="display text-[2.9rem] sm:text-6xl" style={{ transitionDelay: `${open ? 80 + i * 60 : 0}ms` }}>
                {label}
              </span>
            </SectionLink>
          ))}
        </nav>
        <p className="eyebrow border-t border-ivory/10 px-6 py-6 text-ivory/50 sm:px-10">
          {person.fullName} — {person.basedIn}
        </p>
      </div>
    </>
  )
}

import { useEffect, useRef } from 'react'

/** Gentle vertical drift for an image inside an overflow-hidden frame. */
export function useParallax<T extends HTMLElement>(strength = 0.08) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const update = () => {
      frame = 0
      const r = el.parentElement!.getBoundingClientRect()
      const raw = (r.top + r.height / 2 - window.innerHeight / 2) * -strength
      const offset = Math.max(-60, Math.min(60, raw))
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.12)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [strength])
  return ref
}

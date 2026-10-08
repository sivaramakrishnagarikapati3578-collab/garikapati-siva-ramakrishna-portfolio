import { useEffect, useState } from 'react'

/**
 * Tiny hash router — works on any static host with no server config.
 *   #/            → home
 *   #/about       → home, scrolled to the "about" section
 *   #/work/myself → project page
 *   #/profile     → one-page filmmaker profile (A4 one-sheet)
 */
export type Route = { page: 'home'; section: string | null } | { page: 'project'; slug: string } | { page: 'profile' }

export function parseHash(hash: string): Route {
  const path = hash.replace(/^#\/?/, '')
  const project = path.match(/^work\/([\w-]+)/)
  if (project) return { page: 'project', slug: project[1] }
  if (path === 'profile') return { page: 'profile' }
  return { page: 'home', section: path || null }
}

export function useRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export const sectionHref = (id: string) => `#/${id}`
export const projectHref = (slug: string) => `#/work/${slug}`
export const profileHref = '#/profile'

export function scrollToSection(id: string, smooth = true) {
  if (!id) return window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
}

/** Main navigation: [section id, label]. Empty id = top of the home page. */
export const navItems = [
  ['', 'Home'],
  ['about', 'About'],
  ['work', 'Work'],
  ['writing', 'Writing'],
  ['vision', 'Vision'],
  ['contact', 'Contact'],
] as const

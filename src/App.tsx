import { useEffect, useLayoutEffect, useRef } from 'react'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { myself, pentayya, person, seo } from './content/site'
import { useReveal } from './hooks/useReveal'
import { scrollToSection, useRoute } from './lib/router'
import { Home } from './pages/Home'
import { MyselfPage } from './pages/MyselfPage'
import { PentayyaPage } from './pages/PentayyaPage'

const projectPages: Record<string, { el: () => React.JSX.Element; title: string }> = {
  [pentayya.slug]: { el: PentayyaPage, title: `${pentayya.title} — Feature Film | ${person.fullName}` },
  [myself.slug]: { el: MyselfPage, title: `Myself – ${myself.subtitle} — Short Film | ${person.fullName}` },
}

export default function App() {
  const route = useRoute()
  const project = route.page === 'project' ? projectPages[route.slug] : undefined
  const pageKey = project ? `project:${route.page === 'project' ? route.slug : ''}` : 'home'
  const lastPage = useRef(pageKey)

  useReveal(pageKey)

  // New page → start at the top (like a cut). Same page → scroll to the section.
  useLayoutEffect(() => {
    const changedPage = lastPage.current !== pageKey
    lastPage.current = pageKey
    if (route.page === 'home' && route.section) {
      requestAnimationFrame(() => scrollToSection(route.section!, !changedPage))
    } else if (changedPage) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [route, pageKey])

  useEffect(() => {
    document.title = project?.title ?? seo.title
  }, [project])

  const Page = project?.el ?? Home
  return (
    <div className="grain">
      <Nav />
      <main key={pageKey} className="page-enter">
        <Page />
      </main>
      <Footer />
    </div>
  )
}

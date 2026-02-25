import { useEffect, useState } from 'react'

import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import Hero     from './components/Hero'
import Stats    from './components/Stats'
import Projects from './components/Projects'
import Skills   from './components/Skills'
import Contact  from './components/Contact'

export default function App() {
  const [scrolled, setScrolled]           = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
  }

  return (
    <div className="bg-zinc-950 text-zinc-400 min-h-screen overflow-x-hidden">
      <Navbar scrolled={scrolled} activeSection={activeSection} onNavigate={navigateTo} />
      <main>
        <Hero     onNavigate={navigateTo} />
        <Stats    />
        <Projects />
        <Skills   />
        <Contact  />
      </main>
      <Footer />
    </div>
  )
}

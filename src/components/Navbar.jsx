import { NAV_LINKS } from '../data'

/**
 * Barre de navigation fixe — devient opaque avec blur au scroll.
 */
export default function Navbar({ scrolled, activeSection, onNavigate }) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-5 transition-all duration-500 ${
      scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900' : 'bg-transparent'
    }`}>
      <button
        onClick={() => onNavigate('accueil')}
        className="font-serif text-xl text-white tracking-tight hover:opacity-80 transition-opacity"
      >
        Rasolofoson <span className="text-lime-400">Tokiana</span>
      </button>

      <nav className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`font-mono text-xs tracking-widest uppercase pb-0.5 border-b transition-all duration-200 ${
              activeSection === link.id
                ? 'text-lime-400 border-lime-400'
                : 'text-zinc-600 border-transparent hover:text-zinc-300 hover:border-zinc-600'
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  )
}

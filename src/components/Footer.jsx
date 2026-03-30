const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/Tookras17' },
]

/**
 * Pied de page minimaliste avec liens sociaux.
 */
export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 px-10 border-t border-zinc-900 py-7">
      <small className="font-mono text-xs tracking-wider text-zinc-700">
        © {new Date().getFullYear()} Took — Tous droits réservés
      </small>
      <nav className="flex gap-8">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-wider transition-colors duration-200 text-zinc-700 hover:text-lime-400"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

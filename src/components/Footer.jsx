const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'Twitter',  href: 'https://twitter.com' },
]

/**
 * Pied de page minimaliste avec liens sociaux.
 */
export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-10 py-7 flex flex-wrap justify-between items-center gap-4">
      <small className="font-mono text-xs text-zinc-700 tracking-wider">
        © {new Date().getFullYear()} Took — Tous droits réservés
      </small>
      <nav className="flex gap-8">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-zinc-700 tracking-wider hover:text-lime-400 transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

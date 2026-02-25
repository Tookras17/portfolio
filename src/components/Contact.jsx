/**
 * Section contact avec CTA et badge de disponibilité.
 */
export default function Contact() {
  return (
    <section id="contact" className="relative px-10 py-32 border-t border-zinc-900 overflow-hidden">
      {/* Lueur */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-96 h-96 rounded-full bg-lime-400/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="section-label">04 — Contact</span>
        <h2
          className="font-serif text-white font-normal tracking-tighter leading-none mb-10"
          style={{ fontSize: 'clamp(48px, 8vw, 100px)' }}
        >
          Travaillons<br />ensemble.
        </h2>
        <p className="text-zinc-600 text-sm leading-relaxed mb-14 max-w-md mx-auto">
          Vous avez un projet ambitieux ? Je serais ravi d'en discuter.
          Disponible pour des missions freelance et des collaborations long terme.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="mailto:rasolofosontokiana@gmail.com" className="btn-primary">
            rasolofosontokiana@gmail.com
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* Badge disponibilité */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <span className="animate-blink w-2 h-2 rounded-full bg-lime-400 block" />
        <span className="font-mono text-xs text-zinc-600 tracking-widest">DISPONIBLE — Q1 2026</span>
      </div>
    </section>
  )
}

/**
 * Section héro plein-écran avec typographie expressive.
 */
export default function Hero({ onNavigate }) {
  return (
    <section id="accueil" className="relative min-h-screen flex flex-col justify-end px-10 pb-20 overflow-hidden">
      {/* Grille de fond */}
      <div className="absolute inset-0 pointer-events-none grid-bg" />

      {/* Chiffre fantôme */}
      <span
        className="absolute right-0 top-1/2 -translate-y-2/3 font-serif leading-none select-none pointer-events-none text-white/[0.025]"
        style={{ fontSize: '22vw' }}
        aria-hidden="true"
      >04</span>

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl">
        <p className="animate-fade-up-1 font-mono text-xs tracking-widest text-lime-400 uppercase mb-8">
          — Développeur frontend
        </p>
        <h1
          className="animate-fade-up-2 font-serif font-normal text-white tracking-tight leading-none mb-10"
          style={{ fontSize: 'clamp(52px, 9vw, 128px)' }}
        >
          Créer<br />
          <span className="text-stroke-zinc">l'exception</span><br />
          digitale.
        </h1>
        <div className="animate-fade-up-3 flex flex-wrap items-center gap-10">
          <button onClick={() => onNavigate('projets')} className="btn-primary">
            Voir les projets →
          </button>
          <span className="font-mono text-xs text-zinc-600 tracking-wider">Basé à Antananarivo, MG</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in absolute right-10 bottom-20 flex flex-col items-center gap-2" aria-hidden="true">
        <span className="font-mono text-xs text-zinc-700 tracking-widest writing-vertical">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-zinc-700 to-transparent" />
      </div>
    </section>
  )
}

import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Carte de projet avec animation d'entrée au scroll et hover interactif.
 */
export default function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollReveal()
  const [hovered, setHovered] = useState(false)

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="py-10 cursor-pointer border-t"
      style={{
        borderColor: hovered ? project.accentColor : '#27272a',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s ease ${index * 120}ms, border-color 0.3s ease`,
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <span className={`font-mono text-xs tracking-widest uppercase border px-3 py-1 ${project.accent}`}>
            {project.category}
          </span>
          <span className="font-mono text-xs text-zinc-600">{project.year}</span>
        </div>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm transition-all duration-300 ${
          hovered ? `border-current ${project.accent.split(' ')[0]} rotate-45` : 'border-zinc-700 text-zinc-600'
        }`}>→</div>
      </div>

      <h3 className={`font-serif text-4xl font-normal tracking-tight mb-3 transition-colors duration-300 ${
        hovered ? 'text-white' : 'text-zinc-400'
      }`}>
        {project.title}
      </h3>

      <p className="text-zinc-600 text-sm leading-relaxed max-w-xl mb-5">
        {project.description}
      </p>

      <div className="flex gap-4 flex-wrap">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs text-zinc-700">#{tag}</span>
        ))}
      </div>
    </article>
  )
}

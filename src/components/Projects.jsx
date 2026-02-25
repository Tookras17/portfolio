import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data'

/**
 * Section listant tous les projets.
 */
export default function Projects() {
  return (
    <section id="projets" className="px-10 py-24">
      <div className="mb-16">
        <span className="section-label">02 — Projets</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
          Travaux récents
        </h2>
      </div>

      <div>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

    </section>
  )
}

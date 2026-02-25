import SkillBar from './SkillBar'
import { SKILLS, TECH } from '../data'

/**
 * Section compétences : stack + barres de progression.
 */
export default function Skills() {
  return (
    <section id="competences" className="bg-black border-t border-zinc-900 px-10 py-24 grid md:grid-cols-2 gap-20">
      {/* Colonne gauche */}
      <div>
        <span className="section-label">03 — Compétences</span>
        <h2 className="section-title mb-4" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
          Mon arsenal<br />technique
        </h2>
        <p className="text-sm text-zinc-600 leading-relaxed max-w-sm mb-12">
          Du concept à la mise en production, je maîtrise l'ensemble de la chaîne créative et technique.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {TECH.map((tech) => (
            <div key={tech} className="border border-zinc-900 px-4 py-3 font-mono text-xs text-zinc-600 hover:border-zinc-700 hover:text-zinc-400 transition-colors duration-200 cursor-default">
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Colonne droite */}
      <div className="pt-16">
        {SKILLS.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}

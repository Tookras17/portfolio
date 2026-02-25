import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Barre de compétence animée au scroll.
 */
export default function SkillBar({ name, level, delay = 0 }) {
  const [ref, visible] = useScrollReveal()

  return (
    <div ref={ref} className="mb-7">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">{name}</span>
        <span className="font-mono text-xs text-lime-400">{level}%</span>
      </div>
      <div className="h-px bg-zinc-800 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-lime-400 to-lime-300"
          style={{
            width: visible ? `${level}%` : '0%',
            transition: `width 1.2s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

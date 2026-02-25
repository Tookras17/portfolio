import AnimatedCounter from './AnimatedCounter'
import { STATS } from '../data'

/**
 * Bande de statistiques avec compteurs animés.
 */
export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 border-t border-zinc-900 divide-x divide-zinc-900">
      {STATS.map((stat, i) => (
        <div key={i} className="px-8 py-12">
          <div className="font-serif text-white tracking-tighter leading-none mb-2" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>
            <AnimatedCounter value={stat.value} />
            <span className="text-lime-400" style={{ fontSize: '0.5em' }}>{stat.suffix}</span>
          </div>
          <div className="font-mono text-xs text-zinc-600 tracking-widest uppercase">{stat.label}</div>
        </div>
      ))}
    </section>
  )
}

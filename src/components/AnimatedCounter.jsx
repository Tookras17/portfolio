import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Compteur animé de 0 → value au scroll.
 */
export default function AnimatedCounter({ value, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useScrollReveal()

  useEffect(() => {
    if (!visible) return
    let current = 0
    const step = value / (duration / 16)
    const timer = setInterval(() => {
      current += step
      if (current >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 16)
    return () => clearInterval(timer)
  }, [visible, value, duration])

  return <span ref={ref}>{count}</span>
}

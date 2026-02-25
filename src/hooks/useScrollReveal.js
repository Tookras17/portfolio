import { useEffect, useRef, useState } from 'react'

/**
 * Déclenche une révélation quand l'élément entre dans le viewport.
 * @param {number} threshold - Fraction visible avant déclenchement (0–1)
 * @returns {[React.RefObject, boolean]}
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}

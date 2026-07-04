import { useEffect, useRef, useState } from 'react'

/**
 * Eases a number from 0 up to `target` over `duration` ms, once `start`
 * becomes true. Uses the same cubic ease-out as the original vanilla JS.
 */
export function useCounter({ target, decimals = 0, suffix = '', duration = 1500, start }) {
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return undefined
    startedRef.current = true

    let raf
    let startTs = null

    function step(ts) {
      if (startTs === null) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return (decimals ? value.toFixed(decimals) : Math.round(value)) + suffix
}

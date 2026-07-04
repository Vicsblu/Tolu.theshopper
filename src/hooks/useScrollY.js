import { useEffect, useState } from 'react'

/** Current window.scrollY, updated on scroll and batched via rAF. */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(() => (typeof window !== 'undefined' ? window.scrollY : 0))

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollY
}

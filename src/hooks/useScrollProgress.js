import { useEffect, useState } from 'react'

/** Page scroll progress as a 0–100 percentage, for the top progress bar. */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement
      const scrollable = h.scrollHeight - h.clientHeight
      const scrolled = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0
      setProgress(scrolled)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}

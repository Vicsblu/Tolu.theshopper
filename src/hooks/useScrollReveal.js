import { useEffect, useRef, useState } from 'react'

/**
 * Mirrors the original's IntersectionObserver reveal behavior: watches an
 * element, flips `inView` to true the first time it crosses the threshold,
 * then stops observing (the reveal only ever plays once per element).
 */
export function useScrollReveal({ threshold = 0.14, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}

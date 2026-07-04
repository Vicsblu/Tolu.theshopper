import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'

export default function Counter({ target, decimals = 0, suffix = '' }) {
  const [ref, inView] = useScrollReveal({ threshold: 0.6, rootMargin: '0px' })
  const display = useCounter({ target, decimals, suffix, start: inView })

  return <span ref={ref}>{display}</span>
}

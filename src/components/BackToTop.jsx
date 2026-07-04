import { useScrollY } from '../hooks/useScrollY'
import { ArrowUpIcon } from './icons'

export default function BackToTop() {
  const scrollY = useScrollY()
  const visible = scrollY > 600

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full glass shadow-soft grid place-items-center transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUpIcon className="w-4 h-4" />
    </button>
  )
}

import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Wraps children with the same `data-reveal` fade/slide-up behavior the
 * original page applied via IntersectionObserver + CSS transitions
 * (see `[data-reveal]` in index.css). `index` maps to the `--i` custom
 * property that staggers each element's transition-delay.
 *
 * Renders as a `div` by default; pass `as="a"` (plus `href`, etc.) for
 * the category cards, which need to be anchors.
 */
export default function Reveal({ as: Tag = 'div', index = 0, className = '', children, ...rest }) {
  const [ref, inView] = useScrollReveal()

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={`${inView ? 'in-view' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--i': index }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

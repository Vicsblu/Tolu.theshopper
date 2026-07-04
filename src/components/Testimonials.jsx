import Reveal from './Reveal'
import { testimonials } from '../data/content'
import { StarIcon } from './icons'

const accentClasses = {
  blush: { bg: 'bg-blush/20', text: 'text-blush-dark dark:text-blush' },
  gold: { bg: 'bg-gold/20', text: 'text-gold' },
}

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-ink dark:bg-navy-light text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blush mb-4">Kind Words</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Trusted by clients across Lagos &amp; beyond.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const accent = accentClasses[t.accent]
            return (
              <Reveal
                key={t.name}
                index={i % 3}
                className="bg-cream/5 border border-cream/10 rounded-2xl p-7 backdrop-blur-sm"
              >
                <div className="flex text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-cream/80 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full grid place-items-center font-display font-semibold text-sm ${accent.bg} ${accent.text}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-cream/50">{t.location}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

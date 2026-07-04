import Reveal from './Reveal'
import { markets } from '../data/content'

export default function Markets() {
  return (
    <section id="markets" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blush-dark dark:text-blush mb-4">
            Where We Shop
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Markets we shop from.</h2>
          <p className="mt-4 text-ink/65 dark:text-cream/60">
            Lagos&apos;s biggest markets, and every trusted boutique in between.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((market, i) => (
            <Reveal
              key={market.title}
              index={i % 3}
              className="flex items-start gap-4 bg-[var(--card-bg)] rounded-2xl p-6 shadow-soft hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`shrink-0 w-11 h-11 rounded-full grid place-items-center ${market.iconWrapClassName}`}>
                <market.Icon className={`w-5 h-5 ${market.iconClassName}`} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{market.title}</h3>
                <p className="text-sm text-ink/60 dark:text-cream/55 leading-relaxed">{market.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

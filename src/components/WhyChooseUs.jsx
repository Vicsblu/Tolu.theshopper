import Reveal from './Reveal'
import Counter from './Counter'
import { features, stats } from '../data/content'

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blush-dark dark:text-blush mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Shopping, minus everything you hate about it.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              index={i % 4}
              className="glass rounded-2xl p-6 hover:-translate-y-1.5 transition-transform duration-300"
            >
              <feature.Icon className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-display text-lg font-semibold mb-1.5">{feature.title}</h3>
              <p className="text-sm text-ink/65 dark:text-cream/60 leading-relaxed">{feature.description}</p>
            </Reveal>
          ))}
        </div>

        {/* animated stats strip */}
        <Reveal className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-semibold text-blush-dark dark:text-blush">
                <Counter target={stat.target} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

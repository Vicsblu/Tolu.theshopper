import Reveal from './Reveal'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-blush-light/25 dark:bg-navy-light/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blush-dark dark:text-blush mb-4">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Services built around your list.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              index={i % 3}
              className="group relative bg-[var(--card-bg)] rounded-2xl p-7 shadow-soft hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-5 right-6 font-display text-5xl font-semibold text-ink/5 dark:text-cream/5 group-hover:text-gold/20 transition-colors">
                {service.number}
              </span>
              <div className="relative w-12 h-12 rounded-xl bg-blush-light dark:bg-blush/15 grid place-items-center mb-5">
                <service.Icon className="w-6 h-6 text-blush-dark dark:text-blush" />
              </div>
              <h3 className="relative font-display text-xl font-semibold mb-2">{service.title}</h3>
              <p className="relative text-sm text-ink/65 dark:text-cream/60 leading-relaxed">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

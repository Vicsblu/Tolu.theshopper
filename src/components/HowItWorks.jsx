import Reveal from './Reveal'
import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blush-dark dark:text-blush mb-4">
            The Process
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            From your list to your door.
          </h2>
        </Reveal>

        <div className="relative">
          {/* center timeline rail */}
          <div className="hidden sm:block absolute left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-blush-dark/30 dark:via-blush/20 to-transparent -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-4">
            {steps.map((step, i) => {
              const isEven = i % 2 === 1
              return (
                <div key={step.number} className="relative sm:grid sm:grid-cols-2 sm:gap-10 sm:items-center">
                  {/* center dot */}
                  <div className="hidden sm:grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-cream dark:ring-navy z-10" />

                  <Reveal
                    index={i}
                    className={isEven ? 'sm:order-2 sm:pl-14' : 'sm:pr-14 sm:text-right'}
                  >
                    <div className="glass rounded-2xl p-6 sm:p-7 inline-block w-full sm:w-auto">
                      <span className="font-display text-3xl font-semibold text-gold">{step.number}</span>
                      <h3 className="font-display text-xl font-semibold mt-2 mb-1.5">{step.title}</h3>
                      <p className="text-sm text-ink/65 dark:text-cream/60 leading-relaxed">{step.description}</p>
                    </div>
                  </Reveal>

                  <div className={isEven ? 'hidden sm:block sm:order-1' : 'hidden sm:block'} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

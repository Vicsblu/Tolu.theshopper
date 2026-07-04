import Reveal from './Reveal'
import { aboutStats } from '../data/content'
import { StarIcon } from './icons'
import owner from '../assets/images/owner.jpg'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-blush-light/25 dark:bg-navy-light/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-3 bg-gradient-to-tr from-gold/25 via-transparent to-blush-light/50 rounded-[2.5rem] -z-10 blur-sm" />
            <img
              src={owner}
              alt="Tolu, Founder and Lead shopper"
              className="w-full aspect-[3/4] object-cover object-top rounded-[2.25rem] shadow-soft ring-1 ring-gold/20"
            />
            <div className="absolute -bottom-6 left-6 right-6 glass rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-soft">
              <div>
                <p className="font-display font-semibold text-sm">Tolu</p>
                <p className="text-[11px] text-ink/55 dark:text-cream/55">Founder &amp; Lead Shopper</p>
              </div>
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal index={1} className="order-1 lg:order-2">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blush-dark dark:text-blush mb-4">
            Meet Your Shopper
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">Hi, I&apos;m Tolu.</h2>
          <div className="space-y-4 text-ink/75 dark:text-cream/70 leading-relaxed">
            <p>
              I started Tolu the Shopper because I know exactly what it feels like to lose an entire day to
              traffic, market runs, and price haggling only to still come home without the one thing you actually
              wanted.
            </p>
            <p>
              Today, I handle that so you don&apos;t have to. Whether it&apos;s fabric for a big event, the newest
              gadget, or your family&apos;s monthly essentials, I shop with the same care I&apos;d use for my own
              home: honest prices, a quality check on every item, and updates you can actually rely on.
            </p>
            <p className="font-medium text-ink dark:text-cream">You send the list. I get your day back.</p>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-4 max-w-md">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="ticket-stub pt-3">
                <p className="font-display text-2xl font-semibold text-blush-dark dark:text-blush">{stat.value}</p>
                <p className="text-xs text-ink/55 dark:text-cream/55 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

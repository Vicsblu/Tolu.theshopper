import Reveal from './Reveal'
import { trustBadges, WHATSAPP_BOOKING_URL } from '../data/content'
import { ArrowRightIcon, WhatsAppOutlineIcon, CheckIcon } from './icons'
import logo from '../assets/images/logo.png'
import owner from '../assets/images/owner.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -top-20 -left-24 w-96 h-96 rounded-full bg-blush-light/60 dark:bg-blush/10 blur-3xl blob" />
      <div
        className="pointer-events-none absolute top-40 -right-24 w-[28rem] h-[28rem] rounded-full bg-gold/20 dark:bg-gold/10 blur-3xl blob"
        style={{ animationDelay: '-4s' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        {/* copy */}
        <Reveal>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blush-dark dark:text-blush bg-blush-light/50 dark:bg-blush/10 px-4 py-2 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Lagos &middot; Nationwide &middot; Worldwide
          </div>
          <h1 className="font-display text-[2.75rem] leading-[1.08] sm:text-6xl sm:leading-[1.06] font-semibold tracking-tight">
            Your trusted <span className="italic text-blush-dark dark:text-blush">personal shopper</span> in Lagos.
          </h1>
          <p className="mt-4 font-display italic text-xl text-blush-dark dark:text-blush">We Shop. You Relax.</p>
          <p className="mt-5 text-lg text-ink/70 dark:text-cream/70 max-w-lg leading-relaxed">
            From Balogun Market to your favourite boutique - tell us what you need, and relax while we source it,
            inspect it, and deliver it to your door, We also pickup from warehouses for you.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-ink dark:bg-blush text-cream dark:text-ink font-semibold px-7 py-3.5 rounded-full shadow-soft hover:-translate-y-0.5 hover:shadow-gold transition-all duration-300"
            >
              Book a Shopper
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink/15 dark:border-cream/20 font-semibold px-7 py-3.5 rounded-full hover:border-gold hover:text-blush-dark dark:hover:text-blush transition-colors duration-300"
            >
              <WhatsAppOutlineIcon className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink/60 dark:text-cream/55">
            {trustBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-gold" />
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        {/* portrait */}
        <Reveal index={1} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 bg-gradient-to-br from-blush-light via-gold/30 to-transparent rounded-[2.5rem] -z-10 blur-sm" />
            <img
              src={owner}
              alt="Tolu, founder of Tolu the Shopper"
              className="w-full aspect-[4/5] object-cover rounded-[2.25rem] shadow-soft ring-1 ring-gold/20"
            />

            {/* est. badge */}
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="absolute -top-6 -right-6 w-20 h-20 rounded-full shadow-gold ring-4 ring-cream dark:ring-navy float-anim"
              style={{ '--rot': '8deg' }}
            />

            {/* receipt ticket */}
            <div
              className="ticket absolute -bottom-9 -left-8 w-60 bg-[var(--card-bg)] rounded-2xl shadow-soft px-5 pt-6 pb-4 -rotate-3 float-anim"
              style={{ '--rot': '-3deg', animationDelay: '-2s' }}
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-ink/40 dark:text-cream/40 mb-2">
                Order No. 001
              </p>
              <ul className="text-xs font-medium space-y-1.5 text-ink/80 dark:text-cream/80">
                <li className="flex justify-between">
                  <span>Personal Shopper</span>
                  <span>&times;1</span>
                </li>
                <li className="flex justify-between">
                  <span>Peace of mind</span>
                  <span className="text-gold">&#10003;</span>
                </li>
                <li className="flex justify-between">
                  <span>Delivered with care</span>
                  <span className="text-gold">&#10003;</span>
                </li>
              </ul>
              <div className="ticket-stub mt-3 pt-2 flex justify-between items-center">
                <span className="text-[10px] tracking-widest uppercase text-ink/40 dark:text-cream/40">Status</span>
                <span className="text-[11px] font-semibold text-blush-dark dark:text-blush">On the way</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

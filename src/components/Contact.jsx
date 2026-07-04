import Reveal from './Reveal'
import CTABanner from './CTABanner'
import { WHATSAPP_DISPLAY, WHATSAPP_BASE_URL, EMAIL } from '../data/content'
import { WhatsAppGlyphIcon, MailIcon, GlobeIcon } from './icons'
import owner from '../assets/images/owner.jpg'

export default function Contact() {
  return (
    <section id="contact" className="pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center pb-20">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blush-dark dark:text-blush mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Let&apos;s get your list started.
          </h2>
          <p className="text-ink/70 dark:text-cream/65 leading-relaxed mb-9 max-w-md">
            Reach out on WhatsApp for the fastest response, or send an email if that&apos;s easier — either way,
            I&apos;ll reply personally.
          </p>

          <div className="space-y-4">
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[var(--card-bg)] rounded-2xl p-5 shadow-soft hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="shrink-0 w-11 h-11 rounded-full bg-blush-light dark:bg-blush/15 grid place-items-center text-blush-dark dark:text-blush">
                <WhatsAppGlyphIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink/45 dark:text-cream/45">WhatsApp</p>
                <p className="font-semibold">{WHATSAPP_DISPLAY}</p>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 bg-[var(--card-bg)] rounded-2xl p-5 shadow-soft hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="shrink-0 w-11 h-11 rounded-full bg-blush-light dark:bg-blush/15 grid place-items-center text-blush-dark dark:text-blush">
                <MailIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink/45 dark:text-cream/45">Email</p>
                <p className="font-semibold break-all">{EMAIL}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-[var(--card-bg)] rounded-2xl p-5 shadow-soft">
              <div className="shrink-0 w-11 h-11 rounded-full bg-blush-light dark:bg-blush/15 grid place-items-center text-blush-dark dark:text-blush">
                <GlobeIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink/45 dark:text-cream/45">Service Areas</p>
                <p className="font-semibold">Lagos &middot; Nationwide &middot; Worldwide</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal index={1} className="relative hidden lg:block">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-3 bg-gradient-to-tl from-gold/25 via-transparent to-blush-light/50 rounded-[2.5rem] -z-10 blur-sm" />
            <img
              src={owner}
              alt="Tolu, ready to take your order"
              className="w-full aspect-[4/5] object-cover rounded-[2.25rem] shadow-soft ring-1 ring-gold/20"
            />
          </div>
        </Reveal>
      </div>

      <CTABanner />
    </section>
  )
}

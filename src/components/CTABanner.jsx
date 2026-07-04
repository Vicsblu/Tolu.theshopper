import Reveal from './Reveal'
import { WHATSAPP_BOOKING_URL } from '../data/content'
import { ArrowRightIcon, WhatsAppGlyphIcon } from './icons'

export default function CTABanner() {
  return (
    <div className="torn-edge relative mt-20 rounded-t-[2.5rem] sm:rounded-t-[3rem] bg-gradient-to-br from-cocoa via-ink to-navy px-8 py-16 sm:py-20 text-center overflow-hidden">
      <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blush/10 blur-3xl" />

      <Reveal className="relative max-w-xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-cream tracking-tight">
          Ready to get your time back?
        </h2>
        <p className="mt-3 text-cream/65">
          Send your list on WhatsApp and let&apos;s get started... no obligation, just a quick chat about what you need.
        </p>
        <a
          href={WHATSAPP_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-gold text-ink font-semibold px-7 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-gold transition-all duration-300"
        >
          <WhatsAppGlyphIcon className="w-4 h-4" />
          Chat on WhatsApp
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </Reveal>
    </div>
  )
}

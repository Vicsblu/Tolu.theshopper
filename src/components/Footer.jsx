import { navLinks, WHATSAPP_BASE_URL, EMAIL } from '../data/content'
import { WhatsAppGlyphIcon, InstagramIcon, TikTokIcon } from './icons'
import logo from '../assets/images/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
          <div className="lg:col-span-2 max-w-xs">
            <a href="#home" className="inline-flex items-center gap-3 mb-4">
              <img src={logo} alt="Tolu the Shopper logo" className="w-11 h-11 rounded-full shadow-soft" />
              <span className="font-display font-semibold text-lg">
                Tolu <span className="italic font-normal text-blush">the</span> Shopper
              </span>
            </a>
            <p className="text-sm text-cream/55 leading-relaxed">
              Premium personal shopping &amp; errand service based in Lagos, Nigeria. We Shop. You Relax.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 grid place-items-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition-colors"
              >
                <WhatsAppGlyphIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/tolu.theshopper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 grid place-items-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@tolu_theshopper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 grid place-items-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/45 mb-4">Explore</p>
            <ul className="space-y-2.5 text-sm text-cream/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-cream/45 mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li>
                <a href={WHATSAPP_BASE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
              <li className="text-cream/55">Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/45">
          <p>&copy; {year} Tolu the Shopper. All rights reserved.</p>
          <p>Shop. Slay. Repeat.</p>
        </div>
      </div>
    </footer>
  )
}

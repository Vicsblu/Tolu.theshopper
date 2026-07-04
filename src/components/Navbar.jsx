import { useState } from 'react'
import { useScrollY } from '../hooks/useScrollY'
import { navLinks, WHATSAPP_BOOKING_URL } from '../data/content'
import { SunIcon, MoonIcon, MenuIcon, WhatsAppIcon } from './icons'
import logo from '../assets/images/logo.png'

export default function Navbar({ isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollY = useScrollY()
  const scrolled = scrollY > 30

  return (
    <header
      id="nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-soft' : ''}`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[76px]">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Tolu the Shopper logo"
            className="w-11 h-11 rounded-full shadow-soft ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display font-semibold text-lg sm:text-xl tracking-tight">
            Tolu <span className="italic font-normal text-blush-dark dark:text-blush">the</span> Shopper
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9 font-body text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-10 h-10 grid place-items-center rounded-full border border-ink/10 dark:border-cream/15 hover:border-gold transition-colors"
          >
            {isDark ? <MoonIcon className="w-[18px] h-[18px]" /> : <SunIcon className="w-[18px] h-[18px]" />}
          </button>

          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-ink dark:bg-cream text-cream dark:text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blush hover:text-ink dark:hover:bg-blush transition-colors duration-300"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Chat on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="lg:hidden w-10 h-10 grid place-items-center"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-1 px-5 pb-6 pt-2 glass border-t border-ink/5 dark:border-cream/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-3 text-center bg-ink dark:bg-cream text-cream dark:text-ink font-semibold py-3 rounded-full"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}

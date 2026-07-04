import { WHATSAPP_BOOKING_URL } from '../data/content'
import { WhatsAppIcon } from './icons'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="pulse-ring fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-soft hover:scale-105 transition-transform duration-300"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  )
}

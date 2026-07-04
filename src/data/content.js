import {
  ShieldIcon,
  BadgeCheckIcon,
  TagIcon,
  HeartIcon,
  TruckIcon,
  LocationPinIcon,
  GlobeIcon,
  StarIcon,
  ShoppingBagIcon,
  BasketIcon,
  GiftIcon,
  SparkleIcon,
  DiamondIcon,
  DeviceIcon,
  DropletIcon,
  GroceryBagIcon,
  HouseIcon,
} from '../components/icons'

/* ---------- Contact constants ---------- */
export const WHATSAPP_NUMBER = '2348133716539'
export const WHATSAPP_DISPLAY = '+234 813 371 6539'
export const EMAIL = 'olamidetoluwalope@gmail.com'

/** Builds a wa.me deep link with a pre-filled, URL-encoded message. */
export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const WHATSAPP_BOOKING_URL = waLink("Hi Tolu, I'd like to book a personal shopper")
export const WHATSAPP_BASE_URL = waLink()

/* ---------- Navigation ---------- */
export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#markets', label: 'Markets' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

/* ---------- Hero trust badges ---------- */
export const trustBadges = [
  'Every item inspected',
  'You approve before we buy',
  'Transparent pricing',
]

/* ---------- About "meet your shopper" mini-stats ---------- */
export const aboutStats = [
  { value: '3+', label: 'Years sourcing' },
  { value: 'Lagos', label: 'Born & raised' },
  { value: '100%', label: 'Items inspected' },
]

/* ---------- Why Choose Us ---------- */
export const features = [
  {
    Icon: ShieldIcon,
    title: 'Trusted Shopping',
    description: "Your money handled like it's ours; transparent pricing and honest receipts, always.",
  },
  {
    Icon: BadgeCheckIcon,
    title: 'Quality Assurance',
    description: 'Every item inspected before it leaves the market; wrong fit or poor quality never reaches you.',
  },
  {
    Icon: TagIcon,
    title: 'Affordable Pricing',
    description: 'Fair service fees and real market relationships; often cheaper than shopping solo.',
  },
  {
    Icon: HeartIcon,
    title: 'Personalized Service',
    description: 'One-on-one communication throughout; you approve every item before I buy.',
  },
  {
    Icon: TruckIcon,
    title: 'Fast Delivery',
    description: 'Most Lagos orders sourced and delivered within 24–72 hours.',
  },
  {
    Icon: LocationPinIcon,
    title: 'Nationwide Shipping',
    description: 'From Lagos to Abuja, Port Harcourt and beyond; reliable, wherever you are in Nigeria.',
  },
  {
    Icon: GlobeIcon,
    title: 'Worldwide Delivery',
    description: 'Diaspora clients shop Nigerian markets from anywhere in the world.',
  },
  {
    Icon: StarIcon,
    title: 'Customer Satisfaction',
    description: 'Real relationships, repeat clients, and reviews that speak for themselves.',
  },
]

/* ---------- Animated stats strip ---------- */
export const stats = [
  { target: 200, suffix: '+', decimals: 0, label: 'Orders Delivered' },
  { target: 5, suffix: '', decimals: 0, label: 'Markets Covered' },
  { target: 48, suffix: 'h', decimals: 0, label: 'Avg. Turnaround' },
  { target: 4.9, suffix: '', decimals: 1, label: 'Client Rating' },
]

/* ---------- Services ---------- */
export const services = [
  {
    number: '01',
    Icon: ShoppingBagIcon,
    title: 'Personal Shopping',
    description: "Tell me your list, your budget, your taste and We'll shop it exactly as if it were our own.",
  },
  {
    number: '02',
    Icon: BasketIcon,
    title: 'Market Runs',
    description: 'Oyingbo to Alaba; We know which stalls have the best quality and the fairest prices.',
  },
  {
    number: '03',
    Icon: GiftIcon,
    title: 'Gift Shopping',
    description: 'Birthdays, anniversaries, thank-yous, thoughtful gifts, sourced and wrapped.',
  },
  {
    number: '04',
    Icon: SparkleIcon,
    title: 'Festive Celebration Shopping',
    description: 'Christmas, weddings, owambe; We handle the shopping list so you handle the guest list.',
  },
  {
    number: '05',
    Icon: DiamondIcon,
    title: 'Luxury Fashion & Wears',
    description: 'From boutique fits to statement pieces, sourced with an eye for quality and fit.',
  },
  {
    number: '06',
    Icon: DeviceIcon,
    title: 'Gadgets & Electronics',
    description: 'Genuine, verified electronics sourced from Alaba; no fakes, no regrets.',
  },
  {
    number: '07',
    Icon: DropletIcon,
    title: 'Beauty & Skincare',
    description: 'Your exact brand and shade, sourced and authenticated before it reaches you.',
  },
  {
    number: '08',
    Icon: GroceryBagIcon,
    title: 'Everyday Essentials',
    description: 'Groceries and household items, restocked without you lifting a finger.',
  },
  {
    number: '09',
    Icon: TruckIcon,
    title: 'Local Deliveries',
    description: "Fast, careful delivery across Lagos, handled like it's fragile, because it matters.",
  },
  {
    number: '10',
    Icon: TruckIcon,
    title: 'Warehouse Pickup',
    description: "We also pickup items or goods from warehouses to your locations. Fast, careful delivery .",
  },
]

/* ---------- How It Works ---------- */
export const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Send your list by WhatsApp, call, or message as detailed or as you like.',
  },
  {
    number: '02',
    title: 'We Source the Best Options',
    description: 'I compare stalls, shops, and prices to find the best match for your budget.',
  },
  {
    number: '03',
    title: 'We Purchase',
    description: 'Once you approve, We buy with your money treated like our own.',
  },
  {
    number: '04',
    title: 'We Inspect Every Item',
    description: 'Quality, size, and authenticity checked before anything leaves the market.',
  },
  {
    number: '05',
    title: 'We Deliver Safely',
    description: 'Packed with care and delivered to your door, in Lagos, across Nigeria, or worldwide.',
  },
]

/* ---------- Featured Categories ---------- */
export const categories = [
  {
    title: 'Luxury Fashion',
    Icon: DiamondIcon,
    href: waLink("Hi Tolu, I'd like to shop Luxury Fashion"),
    cardClassName: 'bg-gradient-to-br from-ink to-cocoa text-cream',
    iconClassName: 'text-gold',
    linkClassName: 'text-cream/60 group-hover:text-gold transition-colors',
  },
  {
    title: 'Beauty Products',
    Icon: DropletIcon,
    href: waLink("Hi Tolu, I'd like to shop Beauty Products"),
    cardClassName: 'bg-gradient-to-br from-blush to-blush-dark text-ink',
    iconClassName: 'text-ink/70',
    linkClassName: 'text-ink/60',
  },
  {
    title: 'Electronics',
    Icon: DeviceIcon,
    href: waLink("Hi Tolu, I'd like to shop Electronics"),
    cardClassName: 'bg-gradient-to-br from-navy to-ink text-cream',
    iconClassName: 'text-gold',
    linkClassName: 'text-cream/60 group-hover:text-gold transition-colors',
  },
  {
    title: 'Groceries',
    Icon: GroceryBagIcon,
    href: waLink("Hi Tolu, I'd like to shop Groceries"),
    cardClassName: 'bg-gradient-to-br from-gold-light to-gold text-ink',
    iconClassName: 'text-ink/70',
    linkClassName: 'text-ink/60',
  },
  {
    title: 'Gifts',
    Icon: GiftIcon,
    href: waLink("Hi Tolu, I'd like to shop Gifts"),
    cardClassName: 'bg-gradient-to-br from-cocoa to-ink text-cream',
    iconClassName: 'text-gold',
    linkClassName: 'text-cream/60 group-hover:text-gold transition-colors',
  },
  {
    title: 'Home Essentials',
    Icon: HouseIcon,
    href: waLink("Hi Tolu, I'd like to shop Home Essentials"),
    cardClassName: 'bg-gradient-to-br from-blush-light to-blush text-ink',
    iconClassName: 'text-ink/70',
    linkClassName: 'text-ink/60',
  },
  {
    title: 'Warehouse Pickup',
    Icon: TruckIcon,
    href: waLink("Hi Tolu, I'd like to pickup an item"),
    cardClassName: 'bg-gradient-to-br from-navy to-ink text-cream',
    iconClassName: 'text-gold',
    linkClassName: 'text-cream/60 group-hover:text-gold transition-colors',
  },
]

/* ---------- Markets We Shop From ---------- */
export const markets = [
  {
    title: 'Oyingbo Market',
    description: 'Fresh produce, foodstuff, and everyday essentials.',
    Icon: LocationPinIcon,
    iconWrapClassName: 'bg-blush-light dark:bg-blush/15',
    iconClassName: 'text-blush-dark dark:text-blush',
  },
  {
    title: 'Balogun Market',
    description: 'Fabrics, fashion, and accessories at unbeatable prices.',
    Icon: LocationPinIcon,
    iconWrapClassName: 'bg-blush-light dark:bg-blush/15',
    iconClassName: 'text-blush-dark dark:text-blush',
  },
  {
    title: 'Trade Fair Market',
    description: 'Bulk goods, household items, and wholesale deals.',
    Icon: LocationPinIcon,
    iconWrapClassName: 'bg-blush-light dark:bg-blush/15',
    iconClassName: 'text-blush-dark dark:text-blush',
  },
  {
    title: 'Alaba International Market',
    description: 'Genuine electronics and gadgets, verified before purchase.',
    Icon: LocationPinIcon,
    iconWrapClassName: 'bg-blush-light dark:bg-blush/15',
    iconClassName: 'text-blush-dark dark:text-blush',
  },
  {
    title: 'Yaba Market',
    description: 'Tech accessories, fashion, and everyday finds.',
    Icon: LocationPinIcon,
    iconWrapClassName: 'bg-blush-light dark:bg-blush/15',
    iconClassName: 'text-blush-dark dark:text-blush',
  },
  {
    title: 'Luxury Shops, Warehouses & Boutiques',
    description: "Curated fashion and gifting from Lagos's finest boutiques and warehouse pickup.",
    Icon: StarIcon,
    iconWrapClassName: 'bg-gold/20',
    iconClassName: 'text-gold',
  },
]

/* ---------- Testimonials ---------- */
export const testimonials = [
  {
    quote: "I sent one voice note and my mum's birthday gifts were sourced, wrapped, and delivered before I even finished work. An actual lifesaver.",
    name: 'Ngozi A.',
    location: 'Lekki, Lagos',
    initials: 'NA',
    accent: 'blush',
  },
  {
    quote: 'Living abroad, I was skeptical about someone else buying my things. Tolu sent photos of everything before purchase, gave me total peace of mind.',
    name: 'Victor O.',
    location: 'London, UK',
    initials: 'VO',
    accent: 'gold',
  },
  {
    quote: 'My monthly grocery run used to eat my whole Saturday. Now I just send a list. It genuinely gave me my weekends back.',
    name: 'Amaka E.',
    location: 'Ikeja, Lagos',
    initials: 'AE',
    accent: 'blush',
  },
  {
    quote: 'Needed a last-minute gift and had zero time. Tolu found something even better than what I originally asked for.',
    name: 'Segun B.',
    location: 'Victoria Island, Lagos',
    initials: 'SB',
    accent: 'gold',
  },
  {
    quote: 'Ordered electronics through Tolu after being burned by fakes before. Everything was verified genuine, will use again.',
    name: 'Funmi E.',
    location: 'Egbeda, Lagos',
    initials: 'FE',
    accent: 'blush',
  },
  {
    quote: 'Nationwide delivery to Abuja was smooth and fast. Tolu even called to confirm sizing before buying. Rare level of care.',
    name: 'Chidi E.',
    location: 'Abuja, Nigeria',
    initials: 'CE',
    accent: 'gold',
  },
]

/* ---------- FAQ ---------- */
export const faqs = [
  {
    question: 'How do I place an order?',
    answer: "Send your list on WhatsApp, by call, or by email as detailed or as you like. We'll confirm prices and options before anything is purchased.",
  },
  {
    question: 'Which areas do you cover?',
    answer: 'Everywhere in Lagos, nationwide across Nigeria, and internationally for diaspora clients shopping for family or themselves back home.',
  },
  {
    question: 'How is pricing worked out?',
    answer: 'A transparent service fee is added to the cost of your items and shared with you upfront, before any purchase is made, no hidden charges.',
  },
  {
    question: 'How do you ensure quality and authenticity?',
    answer: 'Every item is personally inspected before purchase. For higher-value items, I send photos for your approval before buying.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Most Lagos orders are sourced and delivered within 24–72 hours. Nationwide and international orders take longer depending on destination.',
  },
  {
    question: "What if I'm not happy with an item?",
    answer: "Because most items are approved by photo before I buy, this is rare but if there's ever an issue, reach out straight away and we'll sort it together.",
  },
  {
    question: 'Do you shop internationally?',
    answer: 'Yes - diaspora clients regularly use Tolu the Shopper to source from Nigerian markets and boutiques, wherever they are in the world.',
  },
]

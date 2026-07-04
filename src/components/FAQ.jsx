import { useState } from 'react'
import Reveal from './Reveal'
import { faqs } from '../data/content'
import { ChevronDownIcon } from './icons'

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal index={index} className="border-b border-ink/10 dark:border-cream/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="faq-trigger w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg font-semibold">{question}</span>
        <ChevronDownIcon className="chev w-5 h-5 shrink-0 text-blush-dark dark:text-blush" />
      </button>
      <div className="faq-panel">
        <div>
          <p className="pb-6 text-ink/65 dark:text-cream/60 leading-relaxed pr-8">{answer}</p>
        </div>
      </div>
    </Reveal>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blush-dark dark:text-blush mb-4">
            Questions
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Frequently asked.</h2>
        </Reveal>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} index={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

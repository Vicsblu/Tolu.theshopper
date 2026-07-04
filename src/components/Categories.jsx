import Reveal from './Reveal'
import { categories } from '../data/content'
import { ArrowRightIcon } from './icons'

export default function Categories() {
  return (
    <section className="py-24 sm:py-32 bg-blush-light/25 dark:bg-navy-light/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blush-dark dark:text-blush mb-4">
            Shop by Category
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Whatever&apos;s on your list.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, i) => (
            <Reveal
              key={category.title}
              as="a"
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              index={i % 3}
              className={`group relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-[180px] hover:-translate-y-1.5 transition-transform duration-300 ${category.cardClassName}`}
            >
              <category.Icon className={`w-8 h-8 ${category.iconClassName}`} />
              <div>
                <h3 className="font-display text-xl font-semibold mb-1">{category.title}</h3>
                <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${category.linkClassName}`}>
                  Shop this category
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

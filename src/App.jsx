import Loader from './components/Loader'
import ProgressBar from './components/ProgressBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Categories from './components/Categories'
import Markets from './components/Markets'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const [isDark, toggleTheme] = useTheme()

  return (
    <>
      <Loader />
      <ProgressBar />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main id="home">
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <HowItWorks />
        <Categories />
        <Markets />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}

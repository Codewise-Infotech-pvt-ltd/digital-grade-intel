import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Solutions from './components/Solutions'
import WhyDGI from './components/WhyDGI'
import Industries from './components/Industries'
import HowItWorks from './components/HowItWorks'
import Statistics from './components/Statistics'
import About from './components/About'
import Careers from './components/Careers'
import Footer from './components/Footer'
import Contact from './components/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false,
      touchMultiplier: 2,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#071B3B' }}>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Solutions />
        <WhyDGI />
        <Industries />
        <HowItWorks />
        <Statistics />
        <About />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

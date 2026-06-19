import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

function DGILogo() {
  return (
    <img
      src="/LOGO_1.png"
      alt="Digital Grade Intelligence"
      className="h-14 w-auto object-contain rounded"
    />
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = useCallback((href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(7, 27, 59, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
              <DGILogo />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 tracking-wide relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollTo('#contact')}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-4 py-2 border border-white/10 rounded hover:border-white/25 tracking-wide"
              >
                Talk to Sales
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="text-sm font-semibold text-white px-5 py-2 rounded tracking-wide transition-all duration-200"
                style={{ backgroundColor: '#0D8A66' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#14B86A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0D8A66'}
              >
                Free Trial
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block w-6 h-0.5 bg-white origin-center"
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white"
                animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white origin-center"
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm flex flex-col"
              style={{ backgroundColor: '#0A2348' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/08">
                <DGILogo />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col p-6 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left text-lg font-medium text-slate-200 hover:text-white py-4 px-4 rounded-lg hover:bg-white/05 transition-all duration-200 border-b border-white/05 last:border-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer CTAs */}
              <div className="p-6 flex flex-col gap-3 border-t border-white/08">
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full text-center text-sm font-medium text-slate-300 py-3 border border-white/15 rounded-lg hover:border-white/30 hover:text-white transition-all"
                >
                  Talk to Sales
                </button>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="w-full text-center text-sm font-semibold text-white py-3 rounded-lg transition-all"
                  style={{ backgroundColor: '#0D8A66' }}
                >
                  Start Free Trial
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

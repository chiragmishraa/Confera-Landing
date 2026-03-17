import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const APP_URL = 'https://conferabychirag.vercel.app'
const SIGNUP_URL = 'https://conferabychirag.vercel.app/signup'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'bg-white/60 dark:bg-gray-950/80 backdrop-blur-2xl shadow-[0_2px_32px_rgba(97,114,243,0.10)] border-b border-white/80 dark:border-white/10 saturate-150'
            : 'bg-white/30 dark:bg-gray-950/40 backdrop-blur-xl border-b border-white/40 dark:border-white/10'
        }`}
        style={{
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          backdropFilter: 'blur(24px) saturate(180%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <img
                src="/Confera.png"
                alt="Confera"
                className="w-8 h-8 rounded-xl object-cover shadow-md group-hover:shadow-brand-200 transition-shadow duration-300"
              />
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Confera
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={APP_URL}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Sign in
              </a>

              {/* Dark mode toggle */}
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="relative w-9 h-9 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all duration-300"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {dark ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <Sun className="w-4 h-4 " />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <Moon className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <a
                href={SIGNUP_URL}
                className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-md hover:shadow-brand-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Get started free
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Dark mode toggle - mobile */}
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="relative w-9 h-9 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:shadow-md transition-all duration-300"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {dark ? (
                    <motion.span key="sun" initial={{ rotate: -90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: 90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }} className="absolute">
                      <Sun className="w-4 h-4 " />
                    </motion.span>
                  ) : (
                    <motion.span key="moon" initial={{ rotate: 90, opacity: 0, scale: 0.5 }} animate={{ rotate: 0, opacity: 1, scale: 1 }} exit={{ rotate: -90, opacity: 0, scale: 0.5 }} transition={{ duration: 0.2 }} className="absolute">
                      <Moon className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/60 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/60 shadow-xl md:hidden"
            style={{
              background: dark ? 'rgba(3,7,18,0.85)' : 'rgba(255,255,255,0.75)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              backdropFilter: 'blur(24px) saturate(180%)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={APP_URL}
                  className="px-4 py-3 text-center text-base font-medium text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  Sign in
                </a>
                <a
                  href={SIGNUP_URL}
                  className="px-4 py-3 text-center text-base font-semibold text-white rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 shadow-md"
                >
                  Get started free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

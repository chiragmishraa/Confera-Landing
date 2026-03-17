import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const APP_URL = 'https://conferabychirag.vercel.app'
const SIGNUP_URL = 'https://conferabychirag.vercel.app/signup'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-accent-700" />

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full dark:hidden bg-white/[0.02] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-400/20 blur-3xl" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-24 text-center">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex w-16 h-16 rounded-2xl backdrop-blur-sm border border-white/20 items-center justify-center mb-8"
              style={{ background: 'transparent' }}
            >
              <img src="/Confera.png" alt="Confera" className="w-10 h-10 rounded-xl object-cover" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
            >
              Ready to connect?
              <br />
              <span className="text-white/70">Start your first Assembly.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-xl mx-auto text-lg text-white/60 mb-10"
            >
              Join thousands of teams already using Confera. Free to start, no credit card required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={SIGNUP_URL}
                className="group flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-brand-700 dark:text-white rounded-2xl bg-white keep-white dark:bg-white/15 hover:bg-gray-50 dark:hover:bg-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
              >
                <Sparkles className="w-4 h-4 text-brand-600 dark:text-white" />
                Get started free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href={SIGNUP_URL}
                className="flex items-center gap-2 px-8 py-4 text-base font-semibold text-white/80 hover:text-white rounded-2xl border border-white/20 dark:border-white/30 hover:border-white/40 transition-all duration-300 w-full sm:w-auto justify-center"
                style={{ background: 'transparent' }}
              >
                Sign in to your account
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white dark:text-white"
            >
              {['No credit card required', 'Free forever plan', 'Cancel anytime'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'white' }} />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

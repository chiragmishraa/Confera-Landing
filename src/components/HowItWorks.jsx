import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { UserPlus, Link2, Video, Sparkles } from 'lucide-react'

const APP_URL = 'https://conferabychirag.vercel.app'
const SIGNUP_URL = 'https://conferabychirag.vercel.app/signup'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create your account',
    description: 'Sign up in seconds with your name, username, and email. No credit card required. Your profile is ready instantly.',
    color: 'from-brand-500 to-brand-600',
    bg: 'bg-brand-50',
    darkBg: 'dark:bg-gradient-to-br dark:from-brand-500 dark:to-brand-600',
    iconColor: 'text-brand-600',
    darkIconColor: 'dark:text-white',
    detail: 'Free forever / No credit card',
  },
  {
    number: '02',
    icon: Link2,
    title: 'Start or join an Assembly',
    description: 'Create a new Assembly and get a unique 10-character code. Share it with anyone and they join in one click.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    darkBg: 'dark:bg-gradient-to-br dark:from-violet-500 dark:to-violet-600',
    iconColor: 'text-violet-600',
    darkIconColor: 'dark:text-white',
    detail: 'Unique code / Instant access',
  },
  {
    number: '03',
    icon: Video,
    title: 'Collaborate in real time',
    description: 'Video, audio, screen sharing, chat, and breakout rooms. Everything you need for a productive session.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    darkBg: 'dark:bg-gradient-to-br dark:from-emerald-500 dark:to-emerald-600',
    iconColor: 'text-emerald-600',
    darkIconColor: 'dark:text-white',
    detail: 'WebRTC / Peer-to-peer',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            Simple by design
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
          >
            Up and running in{' '}
            <span className="text-gradient-static">60 seconds</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-lg text-gray-500 dark:text-gray-400"
          >
            Three steps. That's all it takes to go from zero to a live video Assembly with your team.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.darkBg} flex items-center justify-center shadow-sm border border-white dark:border-transparent`}>
                      <Icon className={`w-7 h-7 ${step.iconColor} ${step.darkIconColor}`} strokeWidth={1.75} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-300">{i + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 max-w-xs">{step.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border dark:border-gray-700 px-3 py-1.5 rounded-full">
                    {step.detail}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-lg hover:shadow-2xl hover:shadow-brand-200 transition-all duration-300 hover:-translate-y-1"
          >
            Start your first Assembly
            <Sparkles className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

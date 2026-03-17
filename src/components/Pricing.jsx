import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Sparkles, Zap, Building2 } from 'lucide-react'

const SIGNUP_URL = 'https://conferabychirag.vercel.app/signup'
const CONTACT_URL = 'https://chiragmishra.vercel.app/components/contact'

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    price: 'Free',
    period: 'forever',
    description: 'Perfect for individuals and small teams getting started.',
    bg: 'bg-gray-50',
    iconColor: 'text-gray-600',
    cta: 'Get started free',
    ctaHref: SIGNUP_URL,
    ctaStyle: 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-transparent hover:text-gray-900 dark:hover:text-white',
    features: [
      'Unlimited Assemblies',
      'Up to 10 participants',
      'HD video and audio',
      'Screen sharing',
      'Live chat',
      'Session history',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    icon: Zap,
    price: '$599',
    period: 'per month',
    description: 'For growing teams that need more power and control.',
    bg: 'bg-brand-50',
    iconColor: 'text-brand-600',
    cta: 'Start free trial',
    ctaHref: SIGNUP_URL,
    ctaStyle: 'bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-lg hover:shadow-brand-200 hover:shadow-xl hover:from-brand-500 hover:to-accent-500',
    features: [
      'Everything in Starter',
      'Up to 50 participants',
      'Breakout rooms (Slides)',
      'Password protection',
      'Host controls',
      'Priority support',
      'Custom Assembly codes',
      'Analytics dashboard',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: 'Custom',
    period: 'contact us',
    description: 'For large organizations with advanced security needs.',
    bg: 'bg-gray-50',
    iconColor: 'text-gray-700',
    cta: 'Contact sales',
    ctaHref: CONTACT_URL,
    ctaStyle: 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-transparent hover:text-gray-900 dark:hover:text-white',
    features: [
      'Everything in Pro',
      'Unlimited participants',
      'SSO and SAML',
      'Dedicated infrastructure',
      'Uptime guarantee',
      'Custom integrations',
      'Audit logs',
      'Dedicated account manager',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-gray-800 border border-brand-100 dark:border-gray-700 text-brand-700 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            Simple pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
          >
            Start free, scale when ready
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-lg text-gray-500 dark:text-gray-400"
          >
            No hidden fees. No surprise charges. Cancel anytime.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-3xl border p-8 transition-all duration-300 ${
                  plan.popular
                    ? 'border-brand-200 dark:border-brand-800 bg-gradient-to-b from-brand-50/50 dark:from-brand-950/50 to-white dark:to-gray-950 shadow-glow-lg scale-[1.02]'
                    : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-card hover:shadow-card-hover hover:-translate-y-1'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 text-white text-xs font-bold shadow-md">
                      Most popular
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${plan.bg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${plan.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900 dark:text-white">{plan.name}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{plan.description}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-sm text-gray-400 dark:text-gray-500">/{plan.period}</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  target={plan.ctaHref.startsWith('http') ? '_blank' : undefined}
                  rel={plan.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`block w-full text-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 mb-8 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-brand-100' : 'bg-gray-100'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-brand-600' : 'text-gray-500'}`} strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-10 space-y-2"
        >
          <p className="text-sm text-gray-400">
            All plans include HTTPS encryption and 24/7 server monitoring.
          </p>
          <p className="text-xs text-gray-400">
            SSL (Secure Sockets Layer) means all data between you and Confera is encrypted in transit. Your passwords, video streams, and messages are always protected.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

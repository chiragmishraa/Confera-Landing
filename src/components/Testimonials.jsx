import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Engineering Lead',
    company: 'TechFlow',
    avatar: 'AM',
    color: 'from-brand-500 to-brand-700',
    rating: 5,
    text: 'Confera replaced our entire video stack. The breakout rooms feature alone saved us hours of coordination every week. The latency is genuinely impressive.',
  },
  {
    name: 'Sophie Chen',
    role: 'Product Designer',
    company: 'Designify',
    avatar: 'SC',
    color: 'from-accent-500 to-accent-700',
    rating: 5,
    text: 'I\'ve tried every video tool out there. Confera is the first one that actually feels premium. The UI is gorgeous and it just works. No setup, no downloads.',
  },
  {
    name: 'Marcus Williams',
    role: 'Startup Founder',
    company: 'LaunchPad',
    avatar: 'MW',
    color: 'from-emerald-500 to-emerald-700',
    rating: 5,
    text: 'We run all our investor calls on Confera. The password protection and host controls give us the confidence we need for sensitive conversations.',
  },
  {
    name: 'Priya Sharma',
    role: 'Remote Team Manager',
    company: 'Distributed Co.',
    avatar: 'PS',
    color: 'from-rose-500 to-rose-700',
    rating: 5,
    text: 'The speaking indicators and ping display are small details that make a huge difference. Our team actually enjoys our standups now.',
  },
  {
    name: 'David Park',
    role: 'Senior Developer',
    company: 'CodeCraft',
    avatar: 'DP',
    color: 'from-amber-500 to-amber-700',
    rating: 5,
    text: 'Screen sharing with audio passthrough at 128kbps is a game changer for code reviews. The quality is noticeably better than anything else I\'ve used.',
  },
  {
    name: 'Lena Fischer',
    role: 'UX Researcher',
    company: 'Insight Labs',
    avatar: 'LF',
    color: 'from-cyan-500 to-cyan-700',
    rating: 5,
    text: 'Running user research sessions on Confera is seamless. The chat panel stays out of the way but is always there when I need it. Brilliant design.',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 dark:text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Loved by teams worldwide
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
          >
            Don't take our word for it
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto text-lg text-gray-500 dark:text-gray-400"
          >
            Hundreds of teams use Confera every day. Here's what they have to say.
          </motion.p>
        </div>

        {/* Testimonial grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <Stars count={t.rating} />
                <Quote className="w-5 h-5 text-gray-200 group-hover:text-brand-200 transition-colors" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{t.role} at {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: '100+', label: 'Assemblies hosted' },
            { value: '4.9/5', label: 'Average rating' },
            { value: '10+', label: 'Cities' },
            { value: '99.9%', label: 'Server uptime' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-card">
              <div className="text-3xl font-extrabold text-gradient-static mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

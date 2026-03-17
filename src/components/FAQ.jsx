import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MessageCircle } from 'lucide-react'

const CONTACT_URL = 'https://chiragmishra.vercel.app/components/contact'

const faqs = [
  {
    q: 'Do I need to download anything to use Confera?',
    a: 'No. Confera runs entirely in your browser using WebRTC technology. Just open the link and you are in. No plugins, no apps, no installs required.',
  },
  {
    q: 'What is an Assembly?',
    a: 'An Assembly is what we call a video session in Confera. It is a private, real-time space where participants can connect via video, audio, chat, and screen sharing. Each Assembly gets a unique 10-character code.',
  },
  {
    q: 'How many people can join an Assembly?',
    a: 'The free Starter plan supports up to 10 participants. The Pro plan scales to 50, and Enterprise plans support unlimited participants with dedicated infrastructure.',
  },
  {
    q: 'What are Breakout Rooms?',
    a: 'Breakout Rooms (called Slides in Confera) are virtual sub-rooms within an Assembly. You can create multiple rooms, move participants between them, and optionally isolate audio so each group only hears their own room.',
  },
  {
    q: 'Is my video call encrypted?',
    a: 'Yes. All connections use WebRTC built-in DTLS-SRTP encryption. Additionally, our API uses JWT authentication, HTTPS, and multiple layers of security middleware to keep your data safe.',
  },
  {
    q: 'Can I password-protect my Assembly?',
    a: 'Absolutely. As the host, you can set a password on any Assembly at any time. Participants will be prompted to enter it before joining.',
  },
  {
    q: 'What happens to my data after a session ends?',
    a: 'Session metadata such as participant count and duration is stored for your history. No video or audio is ever recorded or stored on our servers. All media flows directly peer-to-peer between participants.',
  },
  {
    q: 'Can I remove a participant from my Assembly?',
    a: 'Yes. As the host, you have full control. You can remove any participant at any time from the host controls panel inside the Assembly.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 hover:border-gray-200 dark:hover:border-gray-600 transition-colors duration-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-gray-900 dark:text-white">{item.q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
          open ? 'bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5 text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-50 dark:border-gray-700 pt-4">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="py-24 lg:py-32 bg-gray-50/50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 dark:text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm"
          >
            Got questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
          >
            Frequently asked
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500"
          >
            Everything you need to know about Confera.
          </motion.p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </div>

        {/* More questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-card"
        >
          <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-gray-700 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6 text-brand-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Still have questions?</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            Can't find the answer you're looking for? Reach out and we'll get back to you.
          </p>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            Tell us your question
          </a>
        </motion.div>
      </div>
    </section>
  )
}

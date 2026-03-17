import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Video, Mic, Monitor, MessageSquare, Users, Lock,
  Zap, Globe, Shield, LayoutGrid, Volume2, Wifi
} from 'lucide-react'

const features = [
  {
    icon: Video,
    title: 'Crystal-clear video',
    description: 'Adaptive bitrate streaming ensures your video stays sharp even on slower connections. Up to 2.5 Mbps per stream.',
    color: 'from-brand-500 to-brand-600',
    bg: 'bg-brand-50',
    iconColor: 'text-brand-600',
  },
  {
    icon: Mic,
    title: 'Smart audio detection',
    description: 'Real-time speaking indicators with debounced audio analysis. Know who\'s talking at a glance.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Monitor,
    title: 'Screen sharing',
    description: 'Share your entire screen or a specific window with high-fidelity 128kbps audio passthrough.',
    color: 'from-emerald-500 to-emerald-600',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: LayoutGrid,
    title: 'Breakout rooms',
    description: 'Split into focused groups with our Slides feature. Move participants between rooms seamlessly.',
    color: 'from-amber-500 to-amber-600',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: MessageSquare,
    title: 'Live chat',
    description: 'Draggable, resizable chat panel with unread message badges. Never miss a message.',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Lock,
    title: 'Password protection',
    description: 'Lock your Assembly with a password. Only invited participants can join your private session.',
    color: 'from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Zap,
    title: 'Ultra-low latency',
    description: 'WebRTC peer-to-peer connections with ICE candidate queuing for sub-50ms audio/video delay.',
    color: 'from-yellow-500 to-yellow-600',
    bg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Users,
    title: 'Host controls',
    description: 'Remove participants, manage access, and control your Assembly with powerful host tools.',
    color: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: Shield,
    title: 'Secure by default',
    description: 'JWT authentication, rate limiting, XSS protection, and MongoDB sanitization built in.',
    color: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: Volume2,
    title: 'Spatial audio',
    description: 'Hear all participants or only those in your breakout room. Full audio isolation control.',
    color: 'from-pink-500 to-pink-600',
    bg: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    icon: Wifi,
    title: 'Ping monitoring',
    description: 'Real-time latency display per participant. Always know the quality of your connection.',
    color: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: Globe,
    title: 'No downloads',
    description: 'Runs entirely in your browser. Share a link and anyone can join instantly. No installs needed.',
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}
    >
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50/0 to-gray-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className={`inline-flex w-11 h-11 rounded-xl ${feature.bg} items-center justify-center mb-4`}>
          <Icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={2} />
        </div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-900 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="features" className="py-24 lg:py-32 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            Everything you need
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4"
          >
            Built for real collaboration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400"
          >
            Every feature is crafted with care. From the WebRTC signaling layer to the pixel-perfect UI. No compromises.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

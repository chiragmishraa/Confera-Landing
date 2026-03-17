import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Shield, Zap } from 'lucide-react'

const APP_URL = 'https://conferabychirag.vercel.app'
const SIGNUP_URL = 'https://conferabychirag.vercel.app/signup'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 lg:pt-40 pb-16 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-brand-100 to-accent-400/20 blur-3xl opacity-60 animate-float-slow" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-50 to-accent-400/10 blur-3xl opacity-50 animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-r from-brand-50/80 to-accent-50/80 blur-3xl opacity-40" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#6172f3 1px, transparent 1px), linear-gradient(to right, #6172f3 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 dark:text-gray-900 text-xs sm:text-sm font-medium mb-8 max-w-[90vw] overflow-hidden">
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate text-brand-700 dark:text-gray-900">Introducing Confera: The future of collaboration</span>
          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-[2.25rem] sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.05] mb-6 w-full"
        >
          Connect without{' '}
          <span className="relative inline-block">
            <span className="text-gradient">limits.</span>
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
            >
              <path
                d="M2 8 Q75 2 150 8 Q225 14 298 8"
                stroke="url(#underline-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                  <stop offset="0%" stopColor="#6172f3" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.3)}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 dark:text-gray-400 leading-relaxed mb-10 px-2"
        >
          Crystal-clear video, real-time collaboration, and breakout rooms. All in one beautifully crafted platform. No downloads. No friction. Just connect.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={SIGNUP_URL}
            className="group flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-brand-600 to-accent-600 hover:from-brand-500 hover:to-accent-500 shadow-lg hover:shadow-brand-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            Start for free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#how-it-works"
            className="group flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-200 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center">
              <Play className="w-3 h-3 text-brand-600 fill-brand-600 ml-0.5" />
            </div>
            See how it works
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-400"
        >
          {[
            { icon: Shield, text: 'End-to-end encrypted' },
            { icon: Zap, text: 'No downloads required' },
            { icon: Sparkles, text: 'Free to get started' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-1.5">
              <Icon className="w-4 h-4 text-brand-400" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative max-w-5xl mx-auto w-full lg:px-16"
        >
          {/* Glow behind card */}
          <div className="absolute inset-x-10 -top-6 h-40 bg-gradient-to-r from-brand-400/30 to-accent-400/30 blur-3xl rounded-full" />

          {/* Mock UI card */}
          <div className="relative rounded-3xl border border-gray-200/80 dark:border-gray-700/80 bg-white dark:bg-gray-900 shadow-card overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-3 sm:px-5 py-3 sm:py-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/80">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center min-w-0">
                <div className="px-2 sm:px-4 py-1 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-xs text-gray-400 dark:text-gray-300 font-mono truncate max-w-full">
                  conferabychirag.vercel.app/conference/XK9P2M
                </div>
              </div>
            </div>

            {/* Mock conference UI */}
            <div className="bg-gray-950 p-4 sm:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* Video tiles */}
                {[
                  { name: 'Chirag S.', color: 'from-brand-500 to-brand-700', active: true },
                  { name: 'Priya M.', color: 'from-accent-500 to-accent-700', active: false },
                  { name: 'Alex K.', color: 'from-emerald-500 to-emerald-700', active: true },
                  { name: 'Sara L.', color: 'from-rose-500 to-rose-700', active: false },
                  { name: 'Dev R.', color: 'from-amber-500 to-amber-700', active: true },
                  { name: 'Mia T.', color: 'from-cyan-500 to-cyan-700', active: false },
                ].map((user, i) => (
                  <motion.div
                    key={user.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                    className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${user.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {user.name.charAt(0)}
                      </div>
                    </div>
                    {/* Speaking indicator */}
                    {user.active && (
                      <div className="absolute inset-0 rounded-2xl border-2 border-green-400 animate-pulse-slow" />
                    )}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                      <span className="text-white text-[10px] sm:text-xs font-medium bg-black/40 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 rounded-lg truncate max-w-[80%]">
                        {user.name}
                      </span>
                      {user.active && (
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Controls bar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-4 flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap"
              >
                {['Mic', 'Camera', 'Screen', 'Chat', 'Leave'].map((ctrl, i) => (
                  <div
                    key={ctrl}
                    className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-medium transition-colors ${
                      ctrl === 'Leave'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : i === 0
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'bg-white/5 text-gray-400 border border-white/10'
                    }`}
                  >
                    {ctrl}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 sm:-left-12 top-1/3 glass dark:glass-dark rounded-2xl px-4 py-3 shadow-card hidden sm:flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-900 dark:text-white">6 participants</div>
              <div className="text-xs text-gray-400 dark:text-gray-400">Assembly active</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -right-4 sm:-right-12 top-1/4 glass dark:glass-dark rounded-2xl px-4 py-3 shadow-card hidden sm:flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-xl bg-brand-100 dark:bg-brand-500/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-900 dark:text-white">12ms latency</div>
              <div className="text-xs text-gray-400 dark:text-gray-400">Ultra-low delay</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Video, VideoOff, Mic, MicOff, Monitor, MessageSquare,
  PhoneOff, Users, Lock, Copy, Check, LayoutGrid, Wifi
} from 'lucide-react'

const tabs = ['Video call', 'Breakout rooms', 'Chat', 'Host controls']

const participants = [
  { name: 'Chirag S.', initials: 'CS', color: 'from-brand-500 to-brand-700', speaking: true, cam: true, mic: true },
  { name: 'Priya M.', initials: 'PM', color: 'from-accent-500 to-accent-700', speaking: false, cam: false, mic: true },
  { name: 'Alex K.', initials: 'AK', color: 'from-emerald-500 to-emerald-700', speaking: false, cam: true, mic: false },
  { name: 'Sara L.', initials: 'SL', color: 'from-rose-500 to-rose-700', speaking: false, cam: false, mic: false },
]

const chatMessages = [
  { user: 'Priya M.', text: 'Can everyone see my screen?', time: '2:34 PM', self: false },
  { user: 'Alex K.', text: 'Yes, looks great!', time: '2:34 PM', self: false },
  { user: 'You', text: 'Perfect, let\'s continue 👍', time: '2:35 PM', self: true },
  { user: 'Sara L.', text: 'The breakout rooms feature is amazing', time: '2:36 PM', self: false },
]

const breakoutRooms = [
  { name: 'Main Room', count: 2, active: true },
  { name: 'Design Team', count: 1, active: false },
  { name: 'Engineering', count: 1, active: false },
]

function VideoCallTab() {
  return (
    <div className="bg-gray-950 rounded-2xl p-4 h-full">
      <div className="grid grid-cols-2 gap-2 mb-3">
        {participants.map((p) => (
          <div key={p.name} className="relative aspect-video rounded-xl overflow-hidden bg-gray-800">
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-70`} />
            {p.speaking && <div className="absolute inset-0 rounded-xl border-2 border-green-400 animate-pulse-slow" />}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm">
                {p.initials}
              </div>
            </div>
            <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
              <span className="text-white text-xs font-medium bg-black/50 px-1.5 py-0.5 rounded-md">{p.name}</span>
              <div className="flex gap-1">
                {!p.mic && <MicOff className="w-3 h-3 text-red-400" />}
                {!p.cam && <VideoOff className="w-3 h-3 text-red-400" />}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        {[
          { icon: Mic, active: true, label: 'Mic' },
          { icon: Video, active: true, label: 'Cam' },
          { icon: Monitor, active: false, label: 'Share' },
          { icon: MessageSquare, active: false, label: 'Chat' },
        ].map(({ icon: Icon, active, label }) => (
          <button
            key={label}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
              active ? 'bg-white/10 text-white' : 'bg-white/5 text-gray-500'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
        <button className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium bg-red-500/20 text-red-400">
          <PhoneOff className="w-4 h-4" />
          Leave
        </button>
      </div>
    </div>
  )
}

function BreakoutTab() {
  return (
    <div className="bg-gray-950 rounded-2xl p-4 h-full flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-white text-sm font-semibold">Breakout Rooms</span>
        <button className="text-xs text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-lg">+ New Room</button>
      </div>
      {breakoutRooms.map((room) => (
        <div
          key={room.name}
          className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
            room.active
              ? 'bg-brand-500/10 border-brand-500/30'
              : 'bg-white/5 border-white/10 hover:bg-white/10'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${room.active ? 'bg-green-400' : 'bg-gray-600'}`} />
            <span className="text-white text-sm font-medium">{room.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">{room.count} participant{room.count !== 1 ? 's' : ''}</span>
            {!room.active && (
              <button className="text-xs text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-md">Move</button>
            )}
          </div>
        </div>
      ))}
      <div className="mt-auto pt-2 border-t border-white/10">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Wifi className="w-3.5 h-3.5" />
          <span>Audio isolation per room</span>
        </div>
      </div>
    </div>
  )
}

function ChatTab() {
  return (
    <div className="bg-gray-950 rounded-2xl p-4 h-full flex flex-col">
      <div className="flex-1 flex flex-col gap-2 overflow-hidden mb-3">
        {chatMessages.map((msg, i) => (
          <div key={i} className={`flex flex-col ${msg.self ? 'items-end' : 'items-start'}`}>
            {!msg.self && <span className="text-xs text-gray-500 mb-1 ml-1">{msg.user}</span>}
            <div
              className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                msg.self
                  ? 'bg-brand-600 text-white rounded-br-sm'
                  : 'bg-white/10 text-gray-200 rounded-bl-sm'
              }`}
            >
              {msg.text}
            </div>
            <span className="text-xs text-gray-600 mt-1 mx-1">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/10">
        <input
          className="flex-1 bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none"
          placeholder="Type a message..."
          readOnly
        />
        <button className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
          <MessageSquare className="w-3.5 h-3.5 text-white" />
        </button>
      </div>
    </div>
  )
}

function HostTab() {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gray-950 rounded-2xl p-4 h-full flex flex-col gap-3">
      <span className="text-white text-sm font-semibold">Host Controls</span>

      {/* Meeting code */}
      <div className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2.5 border border-white/10">
        <div>
          <div className="text-xs text-gray-500 mb-0.5">Assembly code</div>
          <div className="text-white font-mono font-bold tracking-widest text-sm">XK9P2M4R7T</div>
        </div>
        <button onClick={handleCopy} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
        </button>
      </div>

      {/* Lock */}
      <div className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2.5 border border-white/10">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-300">Password lock</span>
        </div>
        <div className="w-10 h-5 rounded-full bg-brand-600 flex items-center justify-end px-0.5">
          <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
        </div>
      </div>

      {/* Participants */}
      <div className="flex-1">
        <div className="text-xs text-gray-500 mb-2">Participants ({participants.length})</div>
        <div className="flex flex-col gap-1.5">
          {participants.map((p) => (
            <div key={p.name} className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {p.initials.charAt(0)}
                </div>
                <span className="text-sm text-gray-300">{p.name}</span>
              </div>
              <button className="text-xs text-red-400 hover:text-red-300 transition-colors">Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const tabContent = [VideoCallTab, BreakoutTab, ChatTab, HostTab]

export default function AssemblyDemo() {
  const [activeTab, setActiveTab] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const ActiveContent = tabContent[activeTab]

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-gray-800 border border-brand-100 dark:border-gray-700 text-brand-700 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Live preview
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
            >
              Everything in one{' '}
              <span className="text-gradient-static">beautiful</span> interface
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8"
            >
              From video tiles to breakout rooms, chat to host controls. Confera packs everything into a clean, distraction-free interface that gets out of your way.
            </motion.p>

            {/* Tab selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-brand-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Right: mock UI */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-accent-400/20 blur-3xl rounded-3xl" />

            <div className="relative rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-card-hover overflow-hidden">
              {/* Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 py-1 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-xs text-gray-400 font-mono">
                    Assembly · XK9P2M4R7T
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="h-full"
                  >
                    <ActiveContent />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

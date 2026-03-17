import { useState } from 'react'
import { Github, Linkedin, Instagram, ExternalLink, Video, ChevronDown, ChevronUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

function SnapchatIcon({ className }) {
  // Font Awesome 5 fa-snapchat-ghost path — the exact ghost silhouette
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M256.1 8C116 8 8.6 119.2 8.6 256c0 136.9 107.4 248 247.5 248S503.6 392.9 503.6 256C503.6 119.2 396.2 8 256.1 8zm114.4 325.6c-3.3 9.1-19.2 15.8-48.6 20.4-2.1 3.1-4.3 20.5-10.2 20.5-5.5 0-11.1-2.9-22.5-2.9-11.9 0-20.1 3.1-31.1 3.1-28.5 0-50.5-19.1-73.5-19.1-11.4 0-17 2.9-22.5 2.9-5.9 0-7.9-17.4-10.2-20.5-29.4-4.6-45.3-11.3-48.6-20.4-1-2.8.2-5.9 3-6.9 27.4-9.7 44.8-27.1 55.9-46.5 2.1-3.7 2.5-7 1.1-9.4-5.5-9.7-6.5-19.8-2.9-28.3 2.5-5.9 7.1-9.5 13.2-9.5 2.5 0 4.9.5 7.1 1.5-.5-5.5-.8-11.3-.8-17.3 0-52.5 36.5-95.1 81.5-95.1s81.5 42.6 81.5 95.1c0 6-.3 11.8-.8 17.3 2.2-1 4.6-1.5 7.1-1.5 6.1 0 10.7 3.6 13.2 9.5 3.6 8.5 2.6 18.6-2.9 28.3-1.4 2.4-1 5.7 1.1 9.4 11.1 19.4 28.5 36.8 55.9 46.5 2.8 1 4 4.1 3 6.9z"/>
    </svg>
  )
}

const APP_URL = 'https://conferabychirag.vercel.app'
const SIGNUP_URL = 'https://conferabychirag.vercel.app/signup'
const CONTACT_URL = 'https://chiragmishra.vercel.app/components/contact'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/chiragmishraa' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/chiragsupermacy' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/chiragmishra.cm/?__pwa=1' },
  { icon: SnapchatIcon, label: 'Snapchat', href: 'https://www.snapchat.com/add/whitesoucepasta?share_id=HPWWySgQH8g&locale=en-US' },
]

// Expandable footer sections for links that don't have dedicated pages
const footerSections = {
  Product: {
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', expandable: true, content: 'Confera is actively developed. Recent updates include breakout rooms (Slides), host controls, password-protected Assemblies, speaking indicators, and real-time ping monitoring. More features are on the way.' },
    ],
  },
  Company: {
    links: [
      { label: 'About', expandable: true, content: 'Confera is built by Chirag Mishra, a developer passionate about real-time communication and beautiful software. The goal is to make video collaboration feel effortless and premium for everyone.' },
      { label: 'Blog', expandable: true, content: 'The Confera blog is coming soon. It will cover topics like WebRTC internals, real-time architecture, and product updates.' },
      { label: 'Careers', expandable: true, content: 'Confera is a solo project for now. Interested in collaborating? Reach out via the contact page.' },
      { label: 'Press', expandable: true, content: 'For press inquiries or media coverage, please use the contact form. We are happy to share more about the project.' },
    ],
  },
  Support: {
    links: [
      { label: 'Documentation', expandable: true, content: 'Full documentation is in progress. For now, the app is intuitive enough to use without a guide. Create an account, start an Assembly, and share the code with anyone.' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Status', expandable: true, content: 'Confera is hosted on Vercel (frontend) and a Node.js server (backend). The service is monitored 24/7. If you experience issues, please reach out via the contact page.' },
      { label: 'Contact', href: CONTACT_URL, external: true },
    ],
  },
  Legal: {
    links: [
      { label: 'Privacy Policy', expandable: true, content: 'Confera collects only the data needed to run the service: your name, username, email, and session metadata. No video or audio is ever stored. Your data is never sold or shared with third parties.' },
      { label: 'Terms of Service', expandable: true, content: 'By using Confera, you agree to use it responsibly and lawfully. Do not use Confera for harassment, illegal activity, or to violate the privacy of others. The service is provided as-is.' },
      { label: 'Cookie Policy', expandable: true, content: 'Confera uses only essential cookies required for authentication (JWT token stored in localStorage). No tracking or advertising cookies are used.' },
      { label: 'Security', expandable: true, content: 'Confera uses HTTPS encryption, JWT authentication, bcrypt password hashing, rate limiting, XSS protection, and MongoDB sanitization. All video and audio flows peer-to-peer via WebRTC with built-in DTLS-SRTP encryption.' },
    ],
  },
}

function ExpandableLink({ link }) {
  const [open, setOpen] = useState(false)

  if (link.href) {
    return (
      <a
        href={link.href}
        target={link.external ? '_blank' : undefined}
        rel={link.external ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200"
      >
        {link.label}
        {link.external && <ExternalLink className="w-3 h-3 opacity-50" />}
      </a>
    )
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200 text-left"
      >
        {link.label}
        {open ? <ChevronUp className="w-3 h-3 opacity-50" /> : <ChevronDown className="w-3 h-3 opacity-50" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-xs text-gray-400 leading-relaxed border-l-2 border-brand-800 pl-3">
              {link.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 border-b border-white/5">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <img
                src="/Confera.png"
                alt="Confera"
                className="w-8 h-8 rounded-xl object-cover"
              />
              <span className="text-xl font-bold text-white tracking-tight">Confera</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              Premium real-time video conferencing. Connect without limits.
            </p>
            {/* Socials */}
            <div className="flex gap-3 flex-wrap">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerSections).map(([category, { links }]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <ExpandableLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-400 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Confera. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href={APP_URL} className="text-xs text-gray-400 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
              Sign in
            </a>
            <a
              href={SIGNUP_URL}
              className="text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 px-4 py-2 rounded-lg transition-colors"
            >
              Get started free
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

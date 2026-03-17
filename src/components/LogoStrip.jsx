const techStack = [
  { name: 'React', color: '#61DAFB', bg: '#e8f9fd' },
  { name: 'JavaScript', color: '#F7DF1E', bg: '#fefce8' },
  { name: 'Node.js', color: '#339933', bg: '#f0fdf4' },
  { name: 'MongoDB', color: '#47A248', bg: '#f0fdf4' },
  { name: 'Socket.io', color: '#010101', bg: '#f3f4f6' },
  { name: 'WebRTC', color: '#333333', bg: '#f3f4f6' },
  { name: 'Tailwind CSS', color: '#06B6D4', bg: '#ecfeff' },
  { name: 'Vite', color: '#646CFF', bg: '#f0f0ff' },
  { name: 'Express.js', color: '#000000', bg: '#f3f4f6' },
  { name: 'JWT', color: '#D63AFF', bg: '#fdf4ff' },
  { name: 'Framer Motion', color: '#FF0055', bg: '#fff0f5' },
  { name: 'Vercel', color: '#000000', bg: '#f3f4f6' },
  { name: 'GitHub', color: '#181717', bg: '#f3f4f6' },
  { name: 'Git', color: '#F05032', bg: '#fff4f0' },
  { name: 'HTML5', color: '#E34F26', bg: '#fff4f0' },
  { name: 'CSS3', color: '#1572B6', bg: '#eff8ff' },
  { name: 'Mongoose', color: '#880000', bg: '#fff0f0' },
  { name: 'bcrypt', color: '#4A90D9', bg: '#eff8ff' },
  { name: 'Lucide', color: '#F97316', bg: '#fff7ed' },
  { name: 'REST API', color: '#6172f3', bg: '#f0f4ff' },
]

// Duplicate for seamless infinite loop
const items = [...techStack, ...techStack]

export default function LogoStrip() {
  return (
    <section className="py-14 border-y border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          Built with modern, production-grade technology
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 items-center"
          style={{
            animation: 'marquee 40s linear infinite',
            width: 'max-content',
          }}
        >
          {items.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-200 whitespace-nowrap select-none cursor-default"
              style={{ minWidth: 'max-content' }}
            >
              <div
                className="w-5 h-5 rounded-md flex-shrink-0"
                style={{ backgroundColor: tech.bg, border: `1.5px solid ${tech.color}22` }}
              >
                <div
                  className="w-full h-full rounded-md opacity-70"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

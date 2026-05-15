import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stack = {
  Frontend: [
    { name: 'React.js', color: '#61DAFB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Tailwind CSS', color: '#38BDF8' },
    { name: 'HTML5 / CSS3', color: '#E34F26' },
    { name: 'Redux', color: '#764ABC' },
    { name: 'GSAP', color: '#88CE02' },
    { name: 'Shadcn/UI', color: '#ffffff' },
    { name: 'Framer Motion', color: '#FF0080' },
  ],
  Backend: [
    { name: 'Node.js', color: '#68A063' },
    { name: 'Express.js', color: '#ffffff' },
    { name: 'MongoDB', color: '#4DB33D' },
    { name: 'REST APIs', color: '#FF6B6B' },
    { name: 'JWT Auth', color: '#6366f1' },
    { name: 'Firebase', color: '#FFCA28' },
  ],
  Tools: [
    { name: 'Git', color: '#F05032' },
    { name: 'GitHub', color: '#ffffff' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Postman', color: '#FF6C37' },
    { name: 'MongoDB Atlas', color: '#4DB33D' },
    { name: 'Cloudinary', color: '#3448C5' },
    { name: 'C++', color: '#00599C' },
    { name: 'Python', color: '#3776AB' },
  ],
}

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stack" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">02. Tech Stack</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            What I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(stack).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15, duration: 0.6 }}
              className="glass rounded-2xl p-6 gradient-border"
            >
              <h3 className="font-display font-semibold text-white text-lg mb-6 flex items-center gap-3">
                <span className="w-6 h-0.5 bg-primary rounded-full" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.1 + i * 0.05 + 0.3 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-default"
                    style={{
                      background: `${item.color}15`,
                      color: item.color,
                      border: `1px solid ${item.color}30`,
                      boxShadow: `0 0 0 0 ${item.color}40`,
                    }}
                    whileHover={{ boxShadow: `0 0 12px ${item.color}30` }}
                  >
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

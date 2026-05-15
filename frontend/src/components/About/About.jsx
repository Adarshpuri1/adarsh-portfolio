import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Node.js + Express', level: 85 },
  { name: 'MongoDB', level: 82 },
  { name: 'JavaScript (ES6+)', level: 92 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Python', level: 70 },
  { name: 'AI Integration', level: 78 },
  { name: 'Git & GitHub', level: 88 },
]

const stats = [
  { value: '200+', label: 'LeetCode Problems' },
  { value: '2+', label: 'Years Coding' },
  { value: '5+', label: 'Projects Built' },
  { value: '6.29', label: 'CGPA at LPU' },
]

function SkillBar({ name, level, inView }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300 font-body">{name}</span>
        <span className="text-xs text-primary font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          style={{ boxShadow: '0 0 8px rgba(99,102,241,0.5)' }}
        />
      </div>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">01. About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 gradient-border space-y-5">
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm a passionate full-stack developer currently pursuing{' '}
                <span className="text-primary font-medium">B.Tech in Computer Science</span> at
                Lovely Professional University. I specialize in building scalable MERN applications
                and AI-powered tools.
              </p>
              <p className="text-slate-400 leading-relaxed">
                From building a Claude-like AI chatbot (DoraAI) to a full-featured e-commerce platform
                with Gemini AI, I love solving real-world problems with clean, efficient code.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Outside of coding, I've solved <span className="text-secondary">200+ problems on LeetCode</span>,
                achieved a <span className="text-accent">Top 10 position</span> in a hackathon, and
                completed virtual internships with industry-standard practices.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-5 text-center glass-hover"
                >
                  <div className="font-display text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 gradient-border space-y-6"
          >
            <h3 className="font-display text-xl font-semibold text-white mb-8">
              Technical Proficiency
            </h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} inView={inView} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

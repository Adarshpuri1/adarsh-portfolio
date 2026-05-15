import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import ParticleBackground from './ParticleBackground'
import FloatingIcons from './FloatingIcons'


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      <ParticleBackground />
      <FloatingIcons />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-sm text-slate-300 mb-8 font-mono"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6"
        >
          Hi, I'm{' '}
          <span className="gradient-text text-glow">Adarsh Puri</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-mono text-xl md:text-2xl text-slate-400 mb-4 h-8"
        >
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              2000,
              'AI Builder',
              2000,
              'Problem Solver',
              2000,
              'Open Source Learner',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building scalable web applications and AI-powered tools that matter.
          CS Engineering student at LPU with a passion for clean code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="/Adarsh_cv.pdf"
            download
            className="px-8 py-4 rounded-2xl font-semibold text-white glass gradient-border transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/30 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-6 mb-20"
        >
          {[
            { icon: <FiGithub size={20} />, href: 'https://github.com/Adarshpuri1', label: 'GitHub' },
            { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/adarsh-puri', label: 'LinkedIn' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors"
            >
              {item.icon}
              <span className="text-sm font-mono">{item.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <FiArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  )
}

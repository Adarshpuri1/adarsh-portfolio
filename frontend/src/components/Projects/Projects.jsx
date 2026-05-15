import { useEffect, useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar, FiGitBranch, FiX } from 'react-icons/fi'
import axios from 'axios'

function ProjectCard({ repo, onClick }) {
  const langColors = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    HTML: '#E34F26',
    CSS: '#1572B6',
    'C++': '#00599C',
  }
  const color = langColors[repo.language] || '#6366f1'

  return (
    <motion.div
      layout
      whileHover={{ y: -6, scale: 1.01 }}
      onClick={() => onClick(repo)}
      className="glass rounded-2xl p-6 gradient-border cursor-pointer group transition-all duration-300 hover:shadow-lg"
      style={{ '--hover-color': color }}
    >
      <div className="flex items-start justify-between mb-4">
        <FiGithub className="text-slate-400 group-hover:text-primary transition-colors" size={20} />
        <div className="flex gap-3 text-slate-500 text-xs font-mono">
          <span className="flex items-center gap-1">
            <FiStar size={12} /> {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <FiGitBranch size={12} /> {repo.forks_count}
          </span>
        </div>
      </div>

      <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-primary transition-colors">
        {repo.name.replace(/-/g, ' ')}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {repo.description || 'No description available.'}
      </p>

      <div className="flex items-center justify-between">
        {repo.language && (
          <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color }}>
            <span className="w-2 h-2 rounded-full" style={{ background: color }} />
            {repo.language}
          </span>
        )}
        <div className="flex gap-2 ml-auto">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <FiGithub size={15} />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <FiExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Modal({ repo, onClose }) {
  if (!repo) return null
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9995] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={e => e.stopPropagation()}
        className="glass rounded-3xl p-8 max-w-xl w-full gradient-border relative max-h-[80vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center glass rounded-lg text-slate-400 hover:text-white"
        >
          <FiX />
        </button>

        <h2 className="font-display text-2xl font-bold text-white mb-2">
          {repo.name.replace(/-/g, ' ')}
        </h2>
        <p className="text-slate-400 mb-6">{repo.description || 'No description.'}</p>

        <div className="space-y-4">
          <div className="flex gap-6 text-sm">
            <div className="text-center">
              <div className="text-xl font-bold gradient-text">{repo.stargazers_count}</div>
              <div className="text-slate-500 text-xs">Stars</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold gradient-text">{repo.forks_count}</div>
              <div className="text-slate-500 text-xs">Forks</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold gradient-text">{repo.watchers}</div>
              <div className="text-slate-500 text-xs">Watchers</div>
            </div>
          </div>

          {repo.topics?.length > 0 && (
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Topics</p>
              <div className="flex flex-wrap gap-2">
                {repo.topics.map(t => (
                  <span key={t} className="px-2 py-1 rounded-lg text-xs bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/80 transition-colors"
            >
              <FiGithub /> View on GitHub
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-slate-300 text-sm font-medium hover:text-white transition-colors"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    axios
      .get('https://api.github.com/users/Adarshpuri1/repos?sort=updated&per_page=12')
      .then(res => setRepos(res.data))
      .catch(() => setRepos([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">04. All Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            GitHub Repositories
          </h2>
          <p className="text-slate-400 mt-3">Live from GitHub · Click any card to see details</p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass rounded-2xl p-6 h-44 animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 }}
              >
                <ProjectCard repo={repo} onClick={setSelected} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected && <Modal repo={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

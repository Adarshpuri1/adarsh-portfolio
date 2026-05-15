import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import axios from 'axios'
import { FiGithub, FiStar, FiGitBranch, FiCode } from 'react-icons/fi'

export default function GitHubStats() {
  const [stats, setStats] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    Promise.all([
      axios.get('https://api.github.com/users/Adarshpuri1'),
      axios.get('https://api.github.com/users/Adarshpuri1/repos?per_page=100'),
    ]).then(([userRes, reposRes]) => {
      const repos = reposRes.data
      const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0)
      const languages = {}
      repos.forEach(r => {
        if (r.language) languages[r.language] = (languages[r.language] || 0) + 1
      })
      const topLangs = Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)

      setStats({
        user: userRes.data,
        totalStars,
        topLangs,
        repoCount: repos.length,
      })
    }).catch(() => {})
  }, [])

  const GITHUB_USER = 'Adarshpuri1'

  return (
    <section id="github" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">06. GitHub</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Coding Activity
          </h2>
        </motion.div>

        {/* Stats cards */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Public Repos', value: stats.repoCount, icon: <FiCode />, color: '#6366f1' },
              { label: 'Total Stars', value: stats.totalStars, icon: <FiStar />, color: '#F7DF1E' },
              { label: 'Followers', value: stats.user.followers, icon: <FiGithub />, color: '#8b5cf6' },
              { label: 'Following', value: stats.user.following, icon: <FiGitBranch />, color: '#06b6d4' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center glass-hover"
              >
                <div className="flex items-center justify-center mb-3 text-xl" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="font-display text-3xl font-bold gradient-text">{item.value}</div>
                <div className="text-slate-400 text-xs mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        )}

        {/* GitHub contribution graph via ghchart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-6 gradient-border mb-8"
        >
          <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
            <FiGithub className="text-primary" />
            Contribution Graph
          </h3>
          <div className="overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/6366f1/${GITHUB_USER}`}
              alt="GitHub contribution chart"
              className="w-full rounded-lg opacity-90"
              style={{ minWidth: '600px', filter: 'brightness(1.2)' }}
            />
          </div>
        </motion.div>

        {/* GitHub stats cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-4 gradient-border overflow-hidden"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="glass rounded-2xl p-4 gradient-border overflow-hidden"
          >
          </motion.div>
        </div>
      </div>
    </section>
  )
}

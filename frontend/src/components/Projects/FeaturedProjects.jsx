import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const featured = [
  {
    number: '01',
    title: 'DevSwarm',
    subtitle: 'Multi-Agent AI Developer Team',
    description:
      'DevSwarm is a multi-agent AI development platform that simulates a collaborative software development team. The system creates specialized AI agents such as a Frontend Developer, Backend Developer, QA Tester, and Code Reviewer that work together to build software features. When a user provides a feature request, the system automatically distributes tasks among agents, enables inter-agent communication, and runs an iterative development loop where code is built, tested, reviewed, and improved. The platform provides a chat-based workflow interface to visualize how AI agents collaborate, making the development process transparent and efficient.',

    problem:
      'Building software requires collaboration between multiple developers such as frontend, backend, QA, and reviewers. Managing tasks, communication, and development cycles manually can be time-consuming and inefficient.',

    solution:
      'DevSwarm simulates a full AI-powered developer team where multiple AI agents collaborate, divide tasks, communicate, test, review, and iteratively improve the software automatically.',

    tech: [
      'React (Vite)',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
      'bcrypt',
      'OpenAI API / LLM API',
      'LangGraph / CrewAI'
    ],

    features: [
      'Multiple AI roles such as Frontend Developer, Backend Developer, QA Tester, and Reviewer',
      'Automatic task distribution among AI agents',
      'Inter-agent communication for collaborative development',
      'Iterative development workflow (build → test → review → improve)',
      'Conflict resolution between AI agents',
      'Chat-based workflow UI to visualize agent collaboration',
      'Secure authentication system using JWT'
    ],

    github: 'https://github.com/Adarshpuri1/MultiAgent.1', // replace with repo if available
    live: 'https://multiagent-1-frontend.onrender.com/', // add deployment link if deployed
    accent: '#8b5cf6',
    date: 'May 2026'
  },
  {
    number: '02',
    title: 'Archmind',
    subtitle: 'visualizations dependency graphs',
    description:
      'The platform provides visualizations such as dependency graphs, architecture diagrams, and data flow graphs to help developers understand how different components of a system interact. It improves code maintainability, scalability, and system design by highlighting architectural risks and suggesting improvements',
    problem: 'Developers find it difficult to understand and analyze the architecture of large software projects.',
    solution: 'ArchMind helps developers analyze and understand complex software architecture using AI-powered analysis and visualization tools.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    features: ['User authentication', 'LLM APIs for architecture explanation', 'Graph-based architecture analysis', 'Responsive UI'],
    github: 'https://github.com/Adarshpuri1/Archmind',
    live: 'https://archmind-frontend.onrender.com',
    accent: '#06b6d4',
    date: 'Apr 2025',
  },
  {
    number: '03',
    title: 'DoraAI',
    subtitle: 'Claude-like AI Web Application',
    description:
      'An AI-powered web application similar to Anthropic\'s Claude AI. Users can enter prompts to generate project ideas, code, and solutions. Features secure Firebase Authentication with Google Sign-Up.',
    problem: 'Developers needed a free, AI-powered coding assistant accessible via the browser.',
    solution: 'Built a MERN-stack AI app with a custom AI API layer, Firebase auth, and a clean chat interface.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Tailwind CSS', 'AI API'],
    features: ['AI prompt → code generation', 'Google OAuth', 'Session history', 'Syntax highlighting'],
    github: 'https://github.com/Adarshpuri1',
    live: 'https://dora-ai-1.onrender.com',
    accent: '#6366f1',
    date: 'Mar 2026',
  },
  {
    number: '04',
    title: 'Shopping-Ekart',
    subtitle: 'Full-Stack E-Commerce Platform',
    description:
      'A secure and scalable MERN-based e-commerce platform with responsive UI. Features role-based access control, admin panel with full CRUD, Gemini AI chatbot for product recommendations.',
    problem: 'Building a production-grade e-commerce site with AI-powered assistance for shoppers.',
    solution: 'Implemented a complete store with JWT auth, cart management, order tracking, and an integrated Gemini AI chatbot.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Gemini AI', 'Shadcn/UI', 'Tailwind'],
    features: ['Role-based access control', 'AI chatbot for recommendations', 'Cart + Order tracking', 'Admin dashboard'],
    github: 'https://github.com/Adarshpuri1',
    live: 'https://shopping-ekart-frontend.onrender.com',
    accent: '#8b5cf6',
    date: 'Jan 2026',
  },
]

export default function FeaturedProjects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="featured" className="py-32 px-6 relative" ref={ref}>
      {/* subtle bg */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">03. Featured Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Projects I'm Proud Of
          </h2>
        </motion.div>

        <div className="space-y-12">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="glass rounded-3xl p-8 md:p-10 gradient-border relative overflow-hidden group"
            >
              {/* Number watermark */}
              <div
                className="absolute top-4 right-8 font-display text-8xl font-bold opacity-5 select-none"
                style={{ color: project.accent }}
              >
                {project.number}
              </div>

              <div className="grid md:grid-cols-5 gap-8">
                {/* Left col: title + desc */}
                <div className="md:col-span-3 space-y-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs" style={{ color: project.accent }}>
                        {project.date}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-slate-300 leading-relaxed">{project.description}</p>

                  {/* Problem / Solution */}
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-xs font-mono text-red-400 mt-0.5 shrink-0">Problem</span>
                      <p className="text-slate-400 text-sm">{project.problem}</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-xs font-mono mt-0.5 shrink-0" style={{ color: project.accent }}>
                        Solution
                      </span>
                      <p className="text-slate-400 text-sm">{project.solution}</p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      <FiGithub /> GitHub
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-white transition-colors"
                        style={{ color: project.accent }}
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right col: tech + features */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <p className="font-mono text-xs text-slate-500 mb-3 uppercase tracking-widest">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono"
                          style={{
                            background: `${project.accent}15`,
                            color: project.accent,
                            border: `1px solid ${project.accent}25`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-slate-500 mb-3 uppercase tracking-widest">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {project.features.map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: project.accent }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

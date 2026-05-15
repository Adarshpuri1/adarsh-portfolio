import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg gradient-text">AP.</div>
        <p className="text-slate-500 text-sm font-mono">
          © 2025 Adarsh Puri. Built with React + Vite
        </p>
        <div className="flex gap-4">
          {[
            { icon: <FiGithub />, href: 'https://github.com/Adarshpuri1' },
            { icon: <FiLinkedin />, href: 'https://linkedin.com/in/adarsh-puri' },
            { icon: <FiMail />, href: 'mailto:adarshpuri2004@gmail.com' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

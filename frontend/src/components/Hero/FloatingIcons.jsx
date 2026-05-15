import { motion } from 'framer-motion'

const icons = [
  { label: 'React', color: '#61DAFB', pos: 'top-[20%] left-[8%]', delay: 0 },
  { label: 'Node', color: '#68A063', pos: 'top-[35%] right-[10%]', delay: 0.5 },
  { label: 'MongoDB', color: '#4DB33D', pos: 'bottom-[30%] left-[12%]', delay: 1 },
  { label: 'JS', color: '#F7DF1E', pos: 'top-[15%] right-[20%]', delay: 1.5 },
  { label: 'AI', color: '#8b5cf6', pos: 'bottom-[20%] right-[15%]', delay: 2 },
  { label: 'Git', color: '#F05032', pos: 'top-[60%] left-[5%]', delay: 2.5 },
]

export default function FloatingIcons() {
  return (
    <>
      {icons.map((icon) => (
        <motion.div
          key={icon.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7],
            scale: [0, 1, 1],
            y: [0, -15, 0],
          }}
          transition={{
            delay: icon.delay + 0.5,
            duration: 4,
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: icon.delay },
            opacity: { duration: 0.5, delay: icon.delay + 0.5 },
            scale: { duration: 0.5, delay: icon.delay + 0.5 },
          }}
          className={`absolute ${icon.pos} hidden lg:flex items-center justify-center w-12 h-12 rounded-xl glass pointer-events-none z-10`}
          style={{ borderColor: `${icon.color}30`, boxShadow: `0 0 20px ${icon.color}20` }}
        >
          <span
            className="font-mono text-xs font-bold"
            style={{ color: icon.color }}
          >
            {icon.label}
          </span>
        </motion.div>
      ))}
    </>
  )
}

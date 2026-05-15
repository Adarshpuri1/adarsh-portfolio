import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-darker"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-8"
      >
        {/* Logo */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 rounded-full border-2 border-transparent"
            style={{ borderTopColor: '#6366f1', borderRightColor: '#8b5cf6' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-bold text-xl gradient-text">AP</span>
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <motion.h1
            className="font-display text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Adarsh Puri
          </motion.h1>
          <motion.p
            className="text-slate-400 font-mono text-sm mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading portfolio...
          </motion.p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiSend, FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi'
import axios from 'axios'
import toast from 'react-hot-toast'

const contactLinks = [
  { icon: <FiMail />, label: 'adarshpuri2004@gmail.com', href: 'mailto:adarshpuri2004@gmail.com', color: '#6366f1' },
  { icon: <FiGithub />, label: 'github.com/Adarshpuri1', href: 'https://github.com/Adarshpuri1', color: '#8b5cf6' },
  { icon: <FiLinkedin />, label: 'linkedin.com/in/adarsh-puri', href: 'https://linkedin.com/in/adarsh-puri', color: '#06b6d4' },
  { icon: <FiPhone />, label: '+91 7856029189', href: 'tel:+917856029189', color: '#10b981' },
]

function InputField({ label, name, type = 'text', value, onChange, textarea = false }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-mono text-slate-400">{label}</label>
      {textarea ? (
        <motion.textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          whileFocus={{ scale: 1.01 }}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200 resize-none font-body"
          placeholder={`Your ${label.toLowerCase()}`}
          required
        />
      ) : (
        <motion.input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          whileFocus={{ scale: 1.01 }}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all duration-200 font-body"
          placeholder={`Your ${label.toLowerCase()}`}
          required
        />
      )}
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    try {
      await axios.post('/api/contact', form)
      toast.success('Message sent! I\'ll get back to you soon.')
      setForm({ name: '', email: '', message: '' })
    } catch {
      toast.error('Failed to send. Please email me directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">07. Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Let's Build Something
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl">
            Open to full-time roles, freelance projects, and collaborations. Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 gradient-border space-y-6"
          >
            <InputField label="Name" name="name" value={form.name} onChange={handleChange} />
            <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
            <InputField label="Message" name="message" value={form.message} onChange={handleChange} textarea />

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              {sending ? (
                <span className="font-mono text-sm">Sending...</span>
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 gradient-border space-y-5">
              <h3 className="font-display text-xl font-semibold text-white">Get In Touch</h3>
              {contactLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors text-sm font-mono">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Achievement highlight */}
            <div className="glass rounded-2xl p-6 gradient-border">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏆</span>
                <h4 className="font-display font-semibold text-white">Achievement Highlight</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Top 10 position in a hackathon · 200+ LeetCode problems solved · Rank ~960K on LeetCode
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

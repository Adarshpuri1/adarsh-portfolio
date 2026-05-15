const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const rateLimit = require('express-rate-limit')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet())
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://adarsh-portfolio-d1wu.onrender.com', 'https://adarsh-portfolio-d1wu.onrender.com'] 
    : ['https://adarsh-portfolio-d1wu.onrender.com', 'https://adarsh-portfolio-d1wu.onrender.com'],
  methods: ['GET', 'POST'],
}))
app.use(express.json({ limit: '10kb' }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
})
app.use('/api/', limiter)

// Routes
app.use('/api/contact', require('./routes/contact'))
app.use('/api/github', require('./routes/github'))

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// MongoDB connect (optional — only if you want to persist messages)
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err))
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})

const express = require('express')
const router = express.Router()
const { getStats } = require('../controllers/githubController')

router.get('/stats', getStats)

module.exports = router

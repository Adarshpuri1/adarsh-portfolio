const https = require('https')

const fetchGitHub = (url) => new Promise((resolve, reject) => {
  https.get(url, {
    headers: { 'User-Agent': 'portfolio-app' }
  }, (res) => {
    let data = ''
    res.on('data', chunk => data += chunk)
    res.on('end', () => {
      try { resolve(JSON.parse(data)) }
      catch (e) { reject(e) }
    })
  }).on('error', reject)
})

exports.getStats = async (req, res) => {
  try {
    const [user, repos] = await Promise.all([
      fetchGitHub('https://api.github.com/users/Adarshpuri1'),
      fetchGitHub('https://api.github.com/users/Adarshpuri1/repos?per_page=100'),
    ])

    const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
    const languages = {}
    repos.forEach(r => {
      if (r.language) languages[r.language] = (languages[r.language] || 0) + 1
    })

    res.json({
      username: user.login,
      name: user.name,
      bio: user.bio,
      avatar: user.avatar_url,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      topLanguages: Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([lang, count]) => ({ lang, count })),
    })
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GitHub stats' })
  }
}

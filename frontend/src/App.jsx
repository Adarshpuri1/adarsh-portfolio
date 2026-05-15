import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import TechStack from './components/TechStack/TechStack'
import Projects from './components/Projects/Projects'
import FeaturedProjects from './components/Projects/FeaturedProjects'
import Experience from './components/Experience/Experience'
import GitHubStats from './components/GitHubStats/GitHubStats'
import Contact from './components/Contact/Contact'
import CustomCursor from './components/UI/CustomCursor'
import LoadingScreen from './components/UI/LoadingScreen'
import Footer from './components/UI/Footer'
import ScrollProgress from './components/UI/ScrollProgress'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="noise-bg">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <TechStack />
            <FeaturedProjects />
            <Projects />
            <Experience />
            <GitHubStats />
            <Contact />
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1a1a2e',
                color: '#e2e8f0',
                border: '1px solid rgba(99,102,241,0.3)',
              },
            }}
          />
        </div>
      )}
    </>
  )
}

export default App

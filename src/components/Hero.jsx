import { useState, useEffect } from 'react'
import './Hero.css'

const roles = ['ML Developer', 'React Developer', 'Problem Solver', 'CS Undergraduate']

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        )
      }, isDeleting ? 40 : 80)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content container">
        <div className="hero-badge fade-in">
          <span className="badge-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-title fade-in">
          Hi, I'm{' '}
          <span className="hero-name">Rudra Mehta</span>
        </h1>

        <div className="hero-typing fade-in">
          <span className="typing-prefix">I'm a </span>
          <span className="typing-text">{text}</span>
          <span className="typing-cursor">|</span>
        </div>

        <p className="hero-description fade-in">
          Computer Science undergraduate at Nirma University, passionate about
          building intelligent systems with Machine Learning and crafting
          beautiful web experiences with React.
        </p>

        <div className="hero-buttons fade-in">
          <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            View My Work
          </a>
          <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
        </div>

        <div className="hero-stats fade-in">
          <div className="stat">
            <span className="stat-number">8.29</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero

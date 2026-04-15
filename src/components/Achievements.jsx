import './Achievements.css'

const achievements = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
    ),
    title: '98.99 Percentile in HSC',
    description: 'Gujarat Board — Top 1% statewide performance',
    highlight: '98.99%',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>
    ),
    title: 'CGPA 8.29',
    description: 'Nirma University — B.Tech Computer Science',
    highlight: '8.29',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    title: 'LeetCode Problem Solver',
    description: 'Actively solving DSA problems on LeetCode',
    highlight: 'X+',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    title: 'Competitive Programming',
    description: 'Active participant in coding contests and hackathons',
    highlight: 'Active',
  },
]

function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <h2 className="section-title fade-in">Achievements</h2>
        <p className="section-subtitle fade-in">Milestones along the way</p>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div
              key={item.title}
              className="achievement-card fade-in"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-content">
                <div className="achievement-highlight">{item.highlight}</div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

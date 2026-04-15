import './Skills.css'

const skillCategories = [
  {
    title: 'Languages',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    skills: ['C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    ),
    skills: ['React JS', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Tools & Platforms',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'MySQL'],
  },
]

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title fade-in">Skills & Technologies</h2>
        <p className="section-subtitle fade-in">Technologies I work with</p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="skill-card fade-in"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="skill-card-header">
                <div className="skill-card-icon">{category.icon}</div>
                <h3 className="skill-card-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

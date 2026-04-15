import './Projects.css'

const projects = [
  {
    title: 'IPL Final Score Predictor',
    description:
      'Machine Learning model to predict IPL T20 cricket scores using an ensemble of Ridge Regression, Decision Tree, and SVR. Achieved an impressive R² score of 0.89 on test data.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
    github: 'https://github.com/yourusername/ipl-score-predictor',
    demo: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
    ),
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This portfolio website built with React JS. Features a modern dark/light theme, smooth scroll animations, responsive design, and EmailJS-powered contact form.',
    tech: ['React JS', 'CSS3', 'EmailJS', 'Vite'],
    github: 'https://github.com/yourusername/Personal-Portfolio-Website',
    demo: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
    ),
  },
  {
    title: 'Student Grade Management System',
    description:
      'Full-stack CRUD application with Flask and MySQL for managing student records. Features role-based access control for admins and teachers with secure authentication.',
    tech: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/yourusername/student-grade-system',
    demo: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <p className="section-subtitle fade-in">Some things I've built</p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="project-card fade-in"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="project-card-top">
                <div className="project-icon">{project.icon}</div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-icon"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-icon"
                    aria-label="Live Demo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-tech-tag">
                    {t}
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

export default Projects

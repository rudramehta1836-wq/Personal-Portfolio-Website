import './About.css'

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <p className="section-subtitle fade-in">Get to know me better</p>

        <div className="about-grid">
          <div className="about-avatar-wrapper fade-in">
            <div className="about-avatar">
              <span className="avatar-initials">RM</span>
            </div>
            <div className="about-avatar-ring" />
            <div className="about-avatar-dots">
              <span style={{ '--delay': '0s', '--position': '30deg' }} />
              <span style={{ '--delay': '0.5s', '--position': '150deg' }} />
              <span style={{ '--delay': '1s', '--position': '270deg' }} />
            </div>
          </div>

          <div className="about-content fade-in">
            <div className="about-intro">
              <h3 className="about-heading">
                A passionate developer building the future with
                <span className="about-highlight"> code & intelligence</span>
              </h3>
              <p className="about-text">
                I'm Rudra Mehta, a Computer Science undergraduate at <strong>Nirma University</strong> (B.Tech CSE, 2023–2027)
                with a CGPA of <strong>8.29</strong>. I'm passionate about exploring the intersection of
                Machine Learning and Web Development.
              </p>
              <p className="about-text">
                From building ML models that predict IPL match scores to crafting responsive
                web applications with React, I love turning complex problems into elegant,
                user-friendly solutions. I'm always eager to learn new technologies and
                contribute to impactful projects.
              </p>
            </div>

            <div className="about-details">
              <div className="about-detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Ahmedabad, India</span>
              </div>
              <div className="about-detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg>
                <span>Nirma University, B.Tech CSE</span>
              </div>
              <div className="about-detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>rudramehta1836@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

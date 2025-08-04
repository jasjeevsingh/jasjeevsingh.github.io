import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'] },
    { category: 'Frontend', items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'VS Code', 'Linux'] }
  ]

  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          {/* Hero Section */}
          <section className="about-hero">
            <h1 className="page-title">About Me</h1>
            <div className="subtitle-container">
              <h2 className="subtitle">Professional Ponderer & Semi-vibe Coder</h2>
            </div>
          </section>

          {/* Main Content */}
          <div className="about-grid">
            {/* Personal Story */}
            <section className="story-section chalk-effect">
              <h3>My Story</h3>
              <div className="story-content">
                <p>
                  Welcome to my corner of the digital universe! I'm a software developer 
                  who believes that the best code comes from thoughtful pondering and a 
                  healthy dose of creative vibes.
                </p>
                <p>
                  My journey in tech started with curiosity and a love for problem-solving. 
                  I find joy in turning complex challenges into elegant solutions, one line 
                  of code at a time. When I'm not coding, you'll find me exploring new 
                  technologies, reading about innovative ideas, or contemplating the 
                  intersection of technology and human experience.
                </p>
                <p>
                  I approach development with a mix of analytical thinking and creative 
                  intuition—hence the "semi-vibe" coding style. Every project is an 
                  opportunity to learn something new and build something meaningful.
                </p>
              </div>
            </section>

            {/* Philosophy */}
            <section className="philosophy-section chalk-effect">
              <h3>My Philosophy</h3>
              <div className="philosophy-items">
                <div className="philosophy-item">
                  <span className="philosophy-icon">🤔</span>
                  <div>
                    <h4>Think First, Code Second</h4>
                    <p>Great software starts with understanding the problem deeply.</p>
                  </div>
                </div>
                <div className="philosophy-item">
                  <span className="philosophy-icon">🎨</span>
                  <div>
                    <h4>Code is Art</h4>
                    <p>Clean, readable code is as beautiful as any masterpiece.</p>
                  </div>
                </div>
                <div className="philosophy-item">
                  <span className="philosophy-icon">🌱</span>
                  <div>
                    <h4>Continuous Learning</h4>
                    <p>Technology evolves, and so should we. Always stay curious.</p>
                  </div>
                </div>
                <div className="philosophy-item">
                  <span className="philosophy-icon">🤝</span>
                  <div>
                    <h4>Collaboration Over Competition</h4>
                    <p>The best solutions emerge when brilliant minds work together.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Skills Section */}
          <section className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group chalk-effect">
                  <h4 className="skill-category">{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Personal Interests */}
          <section className="interests-section chalk-effect">
            <h3>Beyond Code</h3>
            <div className="interests-grid">
              <div className="interest-item">
                <span className="interest-icon">📚</span>
                <h4>Reading</h4>
                <p>Philosophy, technology trends, and science fiction</p>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🎵</span>
                <h4>Music</h4>
                <p>Discovering new genres and creating coding playlists</p>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🏃‍♂️</span>
                <h4>Fitness</h4>
                <p>Running, hiking, and staying active</p>
              </div>
              <div className="interest-item">
                <span className="interest-icon">🌍</span>
                <h4>Travel</h4>
                <p>Exploring new cultures and perspectives</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="cta-section">
            <div className="cta-content chalk-effect">
              <h3>Let's Connect!</h3>
              <p>
                I'm always interested in discussing new ideas, technologies, or potential 
                collaborations. Whether you have a project in mind or just want to chat 
                about the latest in tech, feel free to reach out!
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="cta-button primary">Get In Touch</a>
                <a href="/projects" className="cta-button secondary">View My Work</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About

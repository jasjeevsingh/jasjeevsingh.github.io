import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './Projects.css'

const Projects = () => {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "A chalkboard-themed personal website built with React and Vite. Features dark mode aesthetics, responsive design, and smooth animations.",
      technologies: ["React", "Vite", "CSS3", "JavaScript"],
      status: "completed",
      featured: false
    },
    {
      id: 2,
      title: "Kanosym",
      description: "A quantum-classical copilot for financial reasoning, built to augment high-stakes decision-making with statistical rigor and computational depth.",
      technologies: ["Python", "Qiskit", "PostgreSQL", "React", "TypeScript", "Next.js"],
      liveUrl: "https://kanosym.com",
      status: "in-progress",
      featured: true
    },
    {
      id: 3,
      title: "Ramanujan",
      description: "An interactive research and learning platform that helps curious minds build foundational knowledge and explore real-world research problems.",
      technologies: ["React", "TypeScript", "Python", "PostgreSQL", "Next.js", "Tailwind CSS", "Supabase", "GPT-4 API"],
      status: "in-progress"
    },
    {
      id: 4,
      title: "Extemplify",
      description: "The only AI-powered tool for extemp prep that actually generates source-backed award-winning outlines. ",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "in-progress"
    },
    {
      id: 5,
      title: "Trial",
      description: "A gamified short-form video platform where creators compete for permanence and viewers act as judges, deciding which videos survive or disappear.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "in-progress"
    },
    {
      id: 6,
      title: "RANI",
      description: "An AI-powered research copilot designed to support researchers in learning, annotating, exploring, and experimenting with new ideas through real-time dialogue, paper analysis, and hands-on practice.",
      technologies: ["Python", "TypeScript", "React", "Node.js", "LangChain", "PyMuPDF", "PostgreSQL", "WebRTC", "OpenAI API", "PDF.js", "Whisper", "Hugging Face Transformers"],
      status: "planning"
    },
    {
      id: 7,
      title: "Onli",
      description: "A generative video platform where every piece of content is created in real time, entirely unique, and designed to exist 'only for you, only once.'",
      technologies: ["Python", "TypeScript", "Next.js", "React", "PostgreSQL", "Replicate API", "Vercel"],
      status: "planning"
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-content">
          {/* Hero Section */}
          <section className="projects-hero">
            <h1 className="page-title">My Projects</h1>
            <p className="page-description">
              A collection of my work, experiments, and creative endeavors. 
              Each project represents a journey of learning and problem-solving.
            </p>
          </section>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <section className="featured-section">
              <h2 className="section-title">Featured Work</h2>
              <div className="featured-grid">
                {featuredProjects.map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    featured={true}
                  />
                ))}
              </div>
            </section>
          )}

          {/* All Projects */}
          <section className="all-projects-section">
            <h2 className="section-title">All Projects</h2>
            <div className="projects-grid">
              {projects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                />
              ))}
            </div>
          </section>

          {/* Coming Soon */}
          <section className="coming-soon-section chalk-effect">
            <h3>More Projects Coming Soon</h3>
            <p>
              I'm constantly working on new ideas and experiments. Check back regularly 
              to see what I'm building next, or follow me on GitHub for real-time updates!
            </p>
            <div className="coming-soon-buttons">
              <a 
                href="https://github.com/jasjeevsingh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-button"
              >
                Follow on GitHub
              </a>
              <a href="/contact" className="contact-button">
                Suggest a Project
              </a>
            </div>
          </section>

          {/* Skills Showcase */}
          <section className="skills-showcase">
            <h3 className="showcase-title">Technologies I Work With</h3>
            <div className="tech-cloud">
              {[
                'React', 'TypeScript', 'Python', 
                'Node.js', 'PostgreSQL', 'Git',
                'TailwindCSS'
              ].map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Projects

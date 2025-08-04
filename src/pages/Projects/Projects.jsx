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
      githubUrl: "https://github.com/jasjeevsingh/jasjeevsingh.github.io",
      liveUrl: "https://jasjeevsingh.github.io",
      status: "completed",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A full-stack task management application with real-time updates, user authentication, and collaborative features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/jasjeevsingh/task-manager",
      status: "in-progress"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using OpenWeatherMap API.",
      technologies: ["Vue.js", "TypeScript", "TailwindCSS", "API Integration"],
      githubUrl: "https://github.com/jasjeevsingh/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.netlify.app",
      status: "completed"
    },
    {
      id: 4,
      title: "Code Snippet Manager",
      description: "A tool for developers to organize, search, and share code snippets with syntax highlighting and tagging system.",
      technologies: ["Python", "Django", "PostgreSQL", "React"],
      githubUrl: "https://github.com/jasjeevsingh/snippet-manager",
      status: "in-progress"
    },
    {
      id: 5,
      title: "Data Visualization Tool",
      description: "Interactive data visualization tool for analyzing and presenting complex datasets with customizable charts.",
      technologies: ["D3.js", "JavaScript", "CSV Parser", "SVG"],
      githubUrl: "https://github.com/jasjeevsingh/data-viz-tool",
      status: "planning"
    },
    {
      id: 6,
      title: "Mobile Expense Tracker",
      description: "A cross-platform mobile app for tracking personal expenses with budget management and spending analytics.",
      technologies: ["React Native", "Expo", "SQLite", "Charts"],
      githubUrl: "https://github.com/jasjeevsingh/expense-tracker",
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
                'React', 'Vue.js', 'JavaScript', 'TypeScript', 'Python', 
                'Node.js', 'Django', 'MongoDB', 'PostgreSQL', 'Git',
                'Docker', 'AWS', 'TailwindCSS', 'D3.js', 'Socket.io'
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

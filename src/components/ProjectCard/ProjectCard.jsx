import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project, featured = false }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'var(--chalk-red)'
      case 'in-progress': return 'var(--chalk-yellow)'
      case 'planning': return 'var(--chalk-blue)'
      default: return 'var(--chalk-white)'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      case 'planning': return 'Planning'
      default: return 'Unknown'
    }
  }

  return (
    <div className={`project-card ${featured ? 'featured' : ''}`}>
      {/* Status Badge */}
      <div className="status-badge" style={{ color: getStatusColor(project.status) }}>
        <span className="status-dot" style={{ background: getStatusColor(project.status) }}></span>
        {getStatusText(project.status)}
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="featured-badge">
          <span>⭐ Featured</span>
        </div>
      )}

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Technologies */}
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="project-links">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              <span className="link-icon">🔗</span>
              GitHub
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link live-link"
            >
              <span className="link-icon">🚀</span>
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Card Decoration */}
      <div className="card-decoration"></div>
    </div>
  )
}

export default ProjectCard

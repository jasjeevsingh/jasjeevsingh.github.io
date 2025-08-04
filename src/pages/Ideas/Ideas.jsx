import React, { useState } from 'react'
import './Ideas.css'

// Sample ideas data - in a real app, this could come from a CMS or API
const ideas = [
  {
    id: 1,
    title: "Code Poetry Generator",
    category: "tool",
    status: "pondering",
    description: "A tool that converts regular code into poetic formats while maintaining functionality. Imagine writing a function that reads like haiku.",
    techStack: ["JavaScript", "AST Parsing", "NLP"],
    inspiration: "Inspired by the beauty of well-structured code and the rhythm of programming patterns.",
    feasibility: "medium",
    timeframe: "weekend project",
    notes: [
      "Could use AST parsing to understand code structure",
      "Apply poetic constraints (syllable counts, rhythm)",
      "Maintain semantic meaning while improving readability"
    ]
  },
  {
    id: 2,
    title: "Terminal-Themed Social Network",
    category: "app",
    status: "brewing",
    description: "A social platform that looks and feels like a terminal interface. All interactions happen through command-line style interfaces.",
    techStack: ["React", "Node.js", "WebSocket", "ASCII Art"],
    inspiration: "Missing the simplicity and focus of terminal interfaces in our social interactions.",
    feasibility: "high",
    timeframe: "3-6 months",
    notes: [
      "Commands like 'post \"Hello world\"' to create posts",
      "ASCII art profiles and decorations",
      "Tab completion for discovering people and topics",
      "Man pages for platform features"
    ]
  },
  {
    id: 3,
    title: "Meditation for Developers",
    category: "experiment",
    status: "active",
    description: "A meditation app specifically designed for programmers, with guided sessions about debugging mindfulness and code clarity.",
    techStack: ["React Native", "Audio Processing", "Timer APIs"],
    inspiration: "The parallel between debugging and self-reflection.",
    feasibility: "high",
    timeframe: "2-3 months",
    notes: [
      "Sessions themed around common dev experiences",
      "Breathing exercises synchronized with build times",
      "Mantras about embracing bugs as learning opportunities",
      "Progress tracking like commit streaks"
    ]
  },
  {
    id: 4,
    title: "AI-Powered Code Review Buddy",
    category: "ai",
    status: "researching",
    description: "An AI assistant that provides thoughtful, context-aware code reviews focusing on readability and maintainability rather than just bugs.",
    techStack: ["Python", "OpenAI API", "Git Hooks", "Static Analysis"],
    inspiration: "Most code review tools focus on finding bugs, but miss opportunities to improve code poetry.",
    feasibility: "medium",
    timeframe: "ongoing",
    notes: [
      "Analyze code for readability patterns",
      "Suggest more expressive variable names",
      "Identify opportunities for elegant abstractions",
      "Learn from team coding style over time"
    ]
  },
  {
    id: 5,
    title: "Digital Minimalism Toolkit",
    category: "lifestyle",
    status: "pondering",
    description: "A suite of tools to help developers maintain focus and reduce digital noise. Includes distraction blockers, notification managers, and focus timers.",
    techStack: ["Electron", "System APIs", "Browser Extensions"],
    inspiration: "The constant ping of notifications destroying deep work sessions.",
    feasibility: "medium",
    timeframe: "4-6 months",
    notes: [
      "Smart notification filtering based on context",
      "Pomodoro timer with code-aware breaks",
      "Website blocker that understands development workflows",
      "Daily digital consumption reports"
    ]
  },
  {
    id: 6,
    title: "Collaborative Code Canvas",
    category: "collaboration",
    status: "dreaming",
    description: "A visual programming environment where multiple developers can work together in real-time, like Figma but for code architecture.",
    techStack: ["WebRTC", "Canvas API", "CRDT", "TypeScript"],
    inspiration: "Whiteboard sessions are great for architecture, but the results are lost. What if the whiteboard was the code?",
    feasibility: "low",
    timeframe: "6+ months",
    notes: [
      "Real-time collaborative diagramming",
      "Generate code from architectural diagrams",
      "Version control for visual elements",
      "Integration with existing IDEs"
    ]
  }
]

const Ideas = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Get unique categories and statuses
  const categories = ['all', ...new Set(ideas.map(idea => idea.category))]
  const statuses = ['all', ...new Set(ideas.map(idea => idea.status))]

  // Filter ideas
  const filteredIdeas = ideas.filter(idea => {
    const categoryMatch = selectedCategory === 'all' || idea.category === selectedCategory
    const statusMatch = selectedStatus === 'all' || idea.status === selectedStatus
    return categoryMatch && statusMatch
  })

  const getStatusColor = (status) => {
    const colors = {
      'pondering': 'var(--chalk-gray)',
      'brewing': 'var(--pale-coral)',
      'researching': 'var(--chalk-blue)',
      'active': 'var(--warm-brick)',
      'dreaming': 'var(--chalk-purple)'
    }
    return colors[status] || 'var(--chalk-white)'
  }

  const getFeasibilityIcon = (feasibility) => {
    const icons = {
      'low': '🌙',
      'medium': '⚡',
      'high': '🚀'
    }
    return icons[feasibility] || '❓'
  }

  return (
    <div className="ideas-container">
      <div className="ideas-header">
        <h1 className="ideas-title">Idea Greenhouse</h1>
        <p className="ideas-subtitle">
          A collection of half-baked thoughts, future projects, and digital experiments. 
          Some will bloom, others will compost into better ideas.
        </p>
      </div>

      {/* Filters */}
      <div className="ideas-filters">
        <div className="filter-group">
          <label className="filter-label">Category:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label">Status:</label>
          <select 
            value={selectedStatus} 
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="filter-select"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Statuses' : status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="ideas-grid">
        {filteredIdeas.map(idea => (
          <div key={idea.id} className="idea-card">
            <div className="idea-header">
              <div className="idea-title-row">
                <h3 className="idea-title">{idea.title}</h3>
                <span className="feasibility-icon" title={`${idea.feasibility} feasibility`}>
                  {getFeasibilityIcon(idea.feasibility)}
                </span>
              </div>
              <div className="idea-meta">
                <span className="idea-category">{idea.category}</span>
                <span 
                  className="idea-status" 
                  style={{ color: getStatusColor(idea.status) }}
                >
                  {idea.status}
                </span>
                <span className="idea-timeframe">{idea.timeframe}</span>
              </div>
            </div>

            <p className="idea-description">{idea.description}</p>

            <div className="idea-inspiration">
              <strong>Inspiration:</strong> {idea.inspiration}
            </div>

            <div className="idea-tech-stack">
              <strong>Tech Stack:</strong>
              <div className="tech-tags">
                {idea.techStack.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="idea-notes">
              <strong>Notes:</strong>
              <ul className="notes-list">
                {idea.notes.map((note, index) => (
                  <li key={index} className="note-item">{note}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {filteredIdeas.length === 0 && (
        <div className="no-ideas">
          <p>No ideas match the current filters. Try adjusting your selection!</p>
        </div>
      )}

      {/* Call to Action */}
      <div className="ideas-cta">
        <h3>Have an idea to share?</h3>
        <p>I love collaborating on interesting projects. If any of these spark your interest, or if you have ideas of your own, let's chat!</p>
        <a href="/contact" className="cta-button">Let's Build Something</a>
      </div>
    </div>
  )
}

export default Ideas

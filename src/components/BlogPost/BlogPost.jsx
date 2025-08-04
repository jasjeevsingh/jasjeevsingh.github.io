import React from 'react'
import './BlogPost.css'

const BlogPost = ({ post, onBack }) => {
  // Function to render markdown-like content
  const renderContent = (content) => {
    // Simple markdown parsing for headings and paragraphs
    const lines = content.trim().split('\n')
    const elements = []
    let currentParagraph = []

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()
      
      if (trimmedLine === '') {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="blog-paragraph">
              {currentParagraph.join(' ')}
            </p>
          )
          currentParagraph = []
        }
      } else if (trimmedLine.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="blog-paragraph">
              {currentParagraph.join(' ')}
            </p>
          )
          currentParagraph = []
        }
        elements.push(
          <h2 key={`h2-${index}`} className="blog-heading">
            {trimmedLine.substring(3)}
          </h2>
        )
      } else if (trimmedLine.startsWith('1. ') || trimmedLine.startsWith('- ')) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p key={`p-${index}`} className="blog-paragraph">
              {currentParagraph.join(' ')}
            </p>
          )
          currentParagraph = []
        }
        elements.push(
          <li key={`li-${index}`} className="blog-list-item">
            {trimmedLine.substring(2).replace(/^\*\*(.+?)\*\*/, '<strong>$1</strong>')}
          </li>
        )
      } else {
        currentParagraph.push(trimmedLine)
      }
    })

    if (currentParagraph.length > 0) {
      elements.push(
        <p key="final-p" className="blog-paragraph">
          {currentParagraph.join(' ')}
        </p>
      )
    }

    return elements
  }

  return (
    <div className="blog-post-container">
      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        ← Back to Blog
      </button>

      {/* Post Header */}
      <header className="blog-post-header">
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          <span className="blog-post-date">
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
          <span className="blog-post-read-time">{post.readTime}</span>
        </div>
        <div className="blog-post-tags">
          {post.tags.map(tag => (
            <span key={tag} className="blog-post-tag">{tag}</span>
          ))}
        </div>
      </header>

      {/* Post Content */}
      <article className="blog-post-content">
        {renderContent(post.content)}
      </article>

      {/* Post Footer */}
      <footer className="blog-post-footer">
        <div className="post-divider"></div>
        <p className="post-signature">
          Thanks for reading! Feel free to <a href="/contact" className="signature-link">reach out</a> if you have thoughts on this.
        </p>
        <button className="back-button secondary" onClick={onBack}>
          ← Back to Blog
        </button>
      </footer>
    </div>
  )
}

export default BlogPost

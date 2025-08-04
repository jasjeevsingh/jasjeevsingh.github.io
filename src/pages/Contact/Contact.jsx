import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jasjeevsingh',
      icon: '🐙',
      description: 'Check out my code and contributions'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jasjeevsingh',
      icon: '💼',
      description: 'Connect with me professionally'
    },
    {
      name: 'Email',
      url: 'mailto:jasjeev@upenn.edu',
      icon: '📧',
      description: 'Send me a direct message'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/jasjeevsiingh',
      icon: '📸',
      description: 'Follow my visual journey'
    }
  ]

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-content">
          {/* Hero Section */}
          <section className="contact-hero">
            <h1 className="page-title">Let's Connect</h1>
            <p className="page-description">
              Whether you have a project idea, want to collaborate, or just want to chat 
              about technology, I'd love to hear from you!
            </p>
          </section>

          <div className="contact-grid">
            {/* Contact Form */}
            <section className="contact-form-section chalk-effect">
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, idea, or just say hello!"
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  <span className="button-icon">📤</span>
                  Send Message
                </button>
              </form>
            </section>

            {/* Contact Info */}
            <section className="contact-info-section">
              <div className="contact-info chalk-effect">
                <h2>Get In Touch</h2>
                <div className="contact-methods">
                  <div className="contact-method">
                    <span className="method-icon">📧</span>
                    <div>
                      <h4>Email</h4>
                      <p>jasjeev@upenn.edu</p>
                      <small>I typically respond within 24 hours</small>
                    </div>
                  </div>

                  <div className="contact-method">
                    <span className="method-icon">🌍</span>
                    <div>
                      <h4>Location</h4>
                      <p>Currently the good ol' US of A 🇺🇸</p>
                      <small>Open to friends worldwide</small>
                    </div>
                  </div>

                  <div className="contact-method">
                    <span className="method-icon">⏰</span>
                    <div>
                      <h4>Response Time</h4>
                      <p>24-48 hours</p>
                      <small>Usually a lot faster!</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-section chalk-effect">
                <h3>Find Me Online</h3>
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <span className="social-icon">{link.icon}</span>
                      <div className="social-info">
                        <h4>{link.name}</h4>
                        <p>{link.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <section className="faq-section chalk-effect">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>💼 Are you available for freelance work?</h4>
                <p>
                  Yes! I'm always interested in exciting projects. Feel free to 
                  reach out with details about your project.
                </p>
              </div>

              <div className="faq-item">
                <h4>🤝 Do you mentor or provide code reviews?</h4>
                <p>
                  I enjoy helping other developers learn and grow. Contact me to 
                  discuss mentoring opportunities or code reviews.
                </p>
              </div>

              <div className="faq-item">
                <h4>📝 Can I guest post on your blog?</h4>
                <p>
                  Once my blog is live, I'd love to feature guest posts from the 
                  community. Stay tuned for submission guidelines!
                </p>
              </div>

              <div className="faq-item">
                <h4>🚀 Do you have any startup ideas to share?</h4>
                <p>
                  I'm working on a dedicated section for startup ideas and innovation. 
                  Feel free to share your ideas too!
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contact

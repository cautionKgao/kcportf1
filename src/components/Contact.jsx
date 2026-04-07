import { useState } from 'react'
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { FiSend, FiMail } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Build mailto link
    const mailtoLink = `mailto:scaution311@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailtoLink)
    setSent(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag pink"><FiMail /> Get In Touch</div>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Open to new opportunities, collaborations, or just a chat about data!
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <a className="contact-item" href="mailto:scaution311@gmail.com">
              <span className="contact-item-icon"><FaEnvelope /></span>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">scaution311@gmail.com</div>
              </div>
            </a>
            <a className="contact-item" href="tel:0815188091">
              <span className="contact-item-icon"><FaPhone /></span>
              <div>
                <div className="contact-item-label">Mobile</div>
                <div className="contact-item-value">069 961 2025</div>
              </div>
            </a>
            <a
              className="contact-item"
              href="https://www.linkedin.com/in/caution-sekgobela-0942821b5/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-item-icon"><FaLinkedin /></span>
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">caution-sekgobela</div>
              </div>
            </a>
            <div className="contact-item" style={{ cursor: 'default' }}>
              <span className="contact-item-icon">📍</span>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">South Africa</div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text" id="name" name="name"
                  placeholder="John Doe"
                  value={form.name} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email" id="email" name="email"
                  placeholder="john@example.com"
                  value={form.email} onChange={handleChange} required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text" id="subject" name="subject"
                placeholder="Opportunity / Collaboration / Hello"
                value={form.subject} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                placeholder="Tell me about the opportunity or project..."
                value={form.message} onChange={handleChange} required
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>
              <FiSend />
              {sent ? 'Opening Email Client...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

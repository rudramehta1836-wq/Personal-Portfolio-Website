import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// TODO: Replace these with your actual EmailJS credentials
// 1. Go to https://www.emailjs.com and create a free account
// 2. Create an Email Service (e.g., Gmail)
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Copy your Service ID, Template ID, and Public Key below
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ from_name: '', from_email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <p className="section-subtitle fade-in">
          Have a question or want to work together? Drop me a message!
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info fade-in">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Let's connect</h3>
              <p className="contact-info-text">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="contact-details">
                <a href="mailto:rudramehta1836@gmail.com" className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Email</div>
                    <div className="contact-detail-value">rudramehta1836@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+919099067590" className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Phone</div>
                    <div className="contact-detail-value">+91 9099067590</div>
                  </div>
                </a>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="contact-detail-label">Location</div>
                    <div className="contact-detail-value">Ahmedabad, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            className="contact-form fade-in"
            onSubmit={handleSubmit}
            id="contact-form"
          >
            <div className="form-group">
              <label htmlFor="from_name" className="form-label">Name</label>
              <input
                id="from_name"
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email" className="form-label">Email</label>
              <input
                id="from_email"
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows="5"
                className="form-input form-textarea"
              />
            </div>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === 'success' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                )}
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={loading}
              id="submit-btn"
            >
              {loading ? (
                <>
                  <span className="spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

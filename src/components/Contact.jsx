import { useState, useEffect, useRef } from 'react'
import './Contact.css'

const contactInfo = [
  {
    id: 'contact-email',
    label: 'Email',
    value: 'rahman241-35-418@diu.edu.bd',
    href: 'mailto:rahman241-35-418@diu.edu.bd',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'github.com/Habibur119360',
    href: 'https://github.com/Habibur119360',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/habibur-rahman-243656415',
    href: 'https://www.linkedin.com/in/habibur-rahman-243656415',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: 'contact-facebook',
    label: 'Facebook',
    value: 'facebook.com/Habibur Rahman',
    href: 'https://www.facebook.com/share/1BsD2Ain7j/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'
  const [loading, setLoading] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    reveals?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (status) setStatus(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setLoading(true)
    // Simulate async send
    setTimeout(() => {
      setLoading(false)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section id="contact" className="section contact" ref={sectionRef} aria-labelledby="contact-title">
      <div className="bg-dots" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header">
          <p className="section-tag reveal">// contact</p>
          <h2 className="section-title reveal" id="contact-title" style={{ transitionDelay: '0.1s' }}>
            Get In Touch
          </h2>
          <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            I am open to internships, collaborations, and academic discussions. Feel free to reach out!
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="contact__info">
            <h3 className="contact__info-title reveal-left" style={{ transitionDelay: '0.2s' }}>Contact Details</h3>
            <div className="contact__items">
              {contactInfo.map((item, idx) => (
                <a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact__item glass-card reveal-left"
                  style={{ transitionDelay: `${idx * 0.1 + 0.3}s` }}
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="contact__item-icon">{item.icon}</div>
                  <div className="contact__item-text">
                    <span className="contact__item-label">{item.label}</span>
                    <span className="contact__item-value">{item.value}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact__item-arrow" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form-wrapper reveal-right" style={{ transitionDelay: '0.3s' }}>
            <form className="contact__form glass-card" onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <h3 className="contact__form-title">Send a Message</h3>

              <div className="contact__form-group">
                <label htmlFor="contact-name" className="contact__label">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-email" className="contact__label">Email Address</label>
                <input
                  id="contact-email-input"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="contact-message" className="contact__label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__textarea"
                  placeholder="Write your message here..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="contact__success" role="alert" aria-live="polite">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Message sent successfully! I will get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                id="contact-submit-btn"
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <span className="contact__spinner" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

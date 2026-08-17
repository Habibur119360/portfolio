import { useEffect, useRef } from 'react'
import './Hero.css'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Habibur119360',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/habibur-rahman-243656415',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1BsD2Ain7j/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const reveals = heroRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    reveals?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero" ref={heroRef} aria-label="Introduction">
      <div className="hero__bg-glow" aria-hidden="true"></div>
      <div className="bg-dots" aria-hidden="true"></div>

      <div className="container hero__container">
        {/* Text Content */}
        <div className="hero__content">
          <p className="hero__greeting reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="hero__greeting-dot"></span>
            Available for Internships
          </p>

          <h1 className="hero__name reveal" style={{ transitionDelay: '0.2s' }}>
            Hi, I&apos;m <span className="hero__name-accent">Md Habibur Rahman</span>
          </h1>

          <p className="hero__title reveal" style={{ transitionDelay: '0.3s' }}>
            Software Engineering Student &amp; Aspiring{' '}
            <span className="hero__title-highlight">Cyber Security Professional</span>
          </p>

          <p className="hero__intro reveal" style={{ transitionDelay: '0.4s' }}>
            I am a Software Engineering student at{' '}
            <strong>Daffodil International University</strong>, passionate about software
            development, computer networking, and cyber security. I enjoy building projects
            that solve real-world problems and am continuously expanding my technical skill set
            toward a career in securing digital systems.
          </p>

          <div className="hero__actions reveal" style={{ transitionDelay: '0.5s' }}>
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
              id="hero-btn-projects"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              View My Projects
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
              id="hero-btn-contact"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              Contact Me
            </button>
          </div>

          <div className="hero__socials reveal" style={{ transitionDelay: '0.6s' }}>
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                aria-label={`Visit ${link.name} profile`}
                title={link.name}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero__image-wrapper reveal-right" style={{ transitionDelay: '0.3s' }}>
          <div className="hero__image-ring" aria-hidden="true"></div>
          <div className="hero__image-ring hero__image-ring--2" aria-hidden="true"></div>
          <div className="hero__image-container">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Md Habibur Rahman - Software Engineering Student at Daffodil International University"
              className="hero__image"
              loading="eager"
            />
          </div>
          <div className="hero__image-badge" aria-hidden="true">
            <span>🔐</span>
            <span>Cyber Security</span>
          </div>
          <div className="hero__image-badge hero__image-badge--2" aria-hidden="true">
            <span>💻</span>
            <span>Software Dev</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll down</span>
      </div>
    </section>
  )
}

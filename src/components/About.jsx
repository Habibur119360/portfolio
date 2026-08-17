import { useEffect, useRef } from 'react'
import './About.css'

const infoCards = [
  { label: 'Student ID', value: '241-35-418', icon: '🎓' },
  { label: 'University', value: 'Daffodil International University', icon: '🏛️' },
  { label: 'Department', value: 'Software Engineering', icon: '💻' },
  { label: 'Batch', value: '42', icon: '📅' },
  { label: 'Section', value: 'E', icon: '📋' },
  { label: 'Career Goal', value: 'Cyber Security', icon: '🔐' },
]

export default function About() {
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

  return (
    <section id="about" className="section about" ref={sectionRef} aria-labelledby="about-title">
      <div className="bg-dots" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header">
          <p className="section-tag reveal">// about me</p>
          <h2 className="section-title reveal" id="about-title" style={{ transitionDelay: '0.1s' }}>
            Who Am I?
          </h2>
          <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            A passionate software engineering student driven by curiosity and a love for technology.
          </p>
        </div>

        <div className="about__grid">
          {/* Bio */}
          <div className="about__bio reveal-left" style={{ transitionDelay: '0.2s' }}>
            <div className="about__image-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Md Habibur Rahman - About photo"
                className="about__image"
              />
              <div className="about__image-overlay" aria-hidden="true"></div>
            </div>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-num">4+</span>
                <span className="about__stat-label">Projects</span>
              </div>
              <div className="about__stat-divider" aria-hidden="true"></div>
              <div className="about__stat">
                <span className="about__stat-num">42</span>
                <span className="about__stat-label">Batch</span>
              </div>
              <div className="about__stat-divider" aria-hidden="true"></div>
              <div className="about__stat">
                <span className="about__stat-num">1+</span>
                <span className="about__stat-label">Years Study</span>
              </div>
            </div>
          </div>

          {/* Text & Cards */}
          <div className="about__text-col">
            <div className="about__text reveal-right" style={{ transitionDelay: '0.2s' }}>
              <p>
                I am <strong>Md Habibur Rahman</strong>, a Software Engineering student at{' '}
                <strong>Daffodil International University</strong>, currently enrolled in Batch 42,
                Section E. I have a deep passion for technology, software development, computer
                networking, and cyber security.
              </p>
              <p>
                My academic journey has equipped me with a solid foundation in programming
                languages, web technologies, embedded systems, and the principles of
                computer science. I enjoy building projects that are both technically
                challenging and meaningful.
              </p>
              <p>
                My long-term career goal is to build a professional career in{' '}
                <strong>Cyber Security</strong> — working on secure and reliable digital
                systems that protect individuals and organizations from digital threats.
                I am committed to continuous learning and professional growth in this field.
              </p>
            </div>

            {/* Info Cards */}
            <div className="about__cards">
              {infoCards.map((card, idx) => (
                <div
                  className="about__card glass-card reveal"
                  key={card.label}
                  style={{ transitionDelay: `${0.1 * idx + 0.3}s` }}
                >
                  <span className="about__card-icon" aria-hidden="true">{card.icon}</span>
                  <div>
                    <p className="about__card-label">{card.label}</p>
                    <p className="about__card-value">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

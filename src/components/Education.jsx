import { useEffect, useRef } from 'react'
import './Education.css'

const courses = [
  'Software Engineering Principles',
  'Object-Oriented Programming',
  'Database Systems',
  'Computer Networking',
  'Software Quality Assurance',
  'Web Development',
  'Software Design & Architecture',
  'Data Structures & Algorithms',
]

export default function Education() {
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
    <section id="education" className="section education" ref={sectionRef} aria-labelledby="education-title">
      <div className="container">
        <div className="section-header">
          <p className="section-tag reveal">// education</p>
          <h2 className="section-title reveal" id="education-title" style={{ transitionDelay: '0.1s' }}>
            Academic Journey
          </h2>
          <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            My educational background and areas of academic focus.
          </p>
        </div>

        <div className="edu__timeline">
          {/* Current Education */}
          <div className="edu__timeline-line" aria-hidden="true"></div>

          <div className="edu__item reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="edu__dot" aria-hidden="true">
              <span>🎓</span>
            </div>

            <div className="edu__card glass-card">
              <div className="edu__card-header">
                <div className="edu__badge">Current</div>
                <span className="edu__period">2023 – Present</span>
              </div>

              <h3 className="edu__degree">B.Sc. in Software Engineering</h3>
              <p className="edu__institution">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                Daffodil International University
              </p>

              <div className="edu__details">
                <div className="edu__detail-item">
                  <span className="edu__detail-label">Batch</span>
                  <span className="edu__detail-value">42</span>
                </div>
                <div className="edu__detail-item">
                  <span className="edu__detail-label">Section</span>
                  <span className="edu__detail-value">E</span>
                </div>
                <div className="edu__detail-item">
                  <span className="edu__detail-label">Student ID</span>
                  <span className="edu__detail-value">241-35-418</span>
                </div>
                <div className="edu__detail-item">
                  <span className="edu__detail-label">Department</span>
                  <span className="edu__detail-value">Software Engineering</span>
                </div>
              </div>

              <div className="edu__courses-section">
                <p className="edu__courses-title">Relevant Areas of Study</p>
                <div className="edu__courses">
                  {courses.map(course => (
                    <span className="edu__course-tag" key={course}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="edu__focus">
                <div className="edu__focus-item">
                  <div className="edu__focus-icon" aria-hidden="true">🔐</div>
                  <div>
                    <strong>Cyber Security Focus</strong>
                    <p>Working towards a professional career in cyber security and secure system design.</p>
                  </div>
                </div>
                <div className="edu__focus-item">
                  <div className="edu__focus-icon" aria-hidden="true">🌐</div>
                  <div>
                    <strong>Networking &amp; Systems</strong>
                    <p>Studying computer networks, embedded systems, and IoT concepts through academic projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

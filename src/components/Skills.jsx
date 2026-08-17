import { useState, useEffect, useRef } from 'react'
import './Skills.css'

const allSkills = [
  // Development
  { name: 'HTML5', level: 75, category: 'Development', icon: '🌐' },
  { name: 'CSS3', level: 70, category: 'Development', icon: '🎨' },
  { name: 'JavaScript', level: 60, category: 'Development', icon: '⚡' },
  { name: 'React.js', level: 50, category: 'Development', icon: '⚛️' },
  { name: 'Web Development', level: 60, category: 'Development', icon: '💻' },
  // Programming
  { name: 'Java', level: 55, category: 'Programming', icon: '☕' },
  { name: 'C', level: 60, category: 'Programming', icon: '⚙️' },
  { name: 'C++', level: 55, category: 'Programming', icon: '🔧' },
  // Database
  { name: 'MySQL', level: 55, category: 'Database', icon: '🗄️' },
  // Networking & Security
  { name: 'Computer Networking', level: 60, category: 'Networking', icon: '🌐' },
  { name: 'Cyber Security Fundamentals', level: 45, category: 'Cyber Security', icon: '🔐' },
  { name: 'Linux', level: 40, category: 'Cyber Security', icon: '🐧' },
  // Tools
  { name: 'Git & GitHub', level: 65, category: 'Tools', icon: '🔀' },
  { name: 'ESP32 / Embedded', level: 45, category: 'Tools', icon: '🤖' },
]

const categories = ['All', 'Development', 'Programming', 'Database', 'Networking', 'Cyber Security', 'Tools']

function SkillBar({ skill, animate }) {
  return (
    <div className="skill-card glass-card">
      <div className="skill-card__header">
        <span className="skill-card__icon" aria-hidden="true">{skill.icon}</span>
        <span className="skill-card__name">{skill.name}</span>
        <span className="skill-card__percent">{skill.level}%</span>
      </div>
      <div className="skill-card__bar-bg" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.name} proficiency: ${skill.level}%`}>
        <div
          className="skill-card__bar-fill"
          style={{ width: animate ? `${skill.level}%` : '0%' }}
        ></div>
      </div>
      <div className="skill-card__level">
        <span>{skill.level < 50 ? 'Learning' : skill.level < 65 ? 'Developing' : 'Comfortable'}</span>
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  const filtered = activeCategory === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            setAnimate(true)
          }
        })
      },
      { threshold: 0.15 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    reveals?.forEach(el => observer.observe(el))
    const section = sectionRef.current
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleCategoryChange = (cat) => {
    setAnimate(false)
    setActiveCategory(cat)
    setTimeout(() => setAnimate(true), 50)
  }

  return (
    <section id="skills" className="section skills" ref={sectionRef} aria-labelledby="skills-title">
      <div className="bg-dots" aria-hidden="true"></div>
      <div className="container">
        <div className="section-header">
          <p className="section-tag reveal">// skills</p>
          <h2 className="section-title reveal" id="skills-title" style={{ transitionDelay: '0.1s' }}>
            Technical Skills
          </h2>
          <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            Technologies and tools I am actively learning and developing as a Software Engineering student.
          </p>
        </div>

        {/* Category Filter */}
        <div className="skills__filter reveal" style={{ transitionDelay: '0.3s' }} role="group" aria-label="Filter skills by category">
          {categories.map(cat => (
            <button
              key={cat}
              className={`skills__filter-btn${activeCategory === cat ? ' skills__filter-btn--active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
              aria-pressed={activeCategory === cat}
              id={`skill-filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills__grid" aria-label={`${activeCategory} skills`}>
          {filtered.map((skill, idx) => (
            <div
              key={skill.name}
              className="reveal"
              style={{ transitionDelay: `${idx * 0.06}s` }}
            >
              <SkillBar skill={skill} animate={animate} />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="skills__note reveal" style={{ transitionDelay: '0.5s' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          These percentages reflect my current student-level proficiency and areas of active development — not professional expertise.
        </p>
      </div>
    </section>
  )
}

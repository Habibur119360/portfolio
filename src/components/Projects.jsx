import { useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  {
    id: 'hr-gadget-zone',
    title: 'HR Gadget Zone',
    description:
      'An e-commerce website concept for browsing and selling gadgets and accessories. Designed with a focus on clean UI, product listings, and user-friendly navigation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Habibur119360',
    type: 'Web Development',
    icon: '🛒',
    color: 'accent',
  },
  {
    id: 'rf-signal-detection',
    title: 'RF Signal Detection Project',
    description:
      'An academic project concept focused on detecting RF signals in an examination environment to help maintain exam integrity using embedded hardware.',
    tags: ['ESP32', 'Embedded Systems', 'RF'],
    github: 'https://github.com/Habibur119360',
    type: 'Embedded Systems',
    icon: '📡',
    color: 'accent-2',
  },
  {
    id: 'library-noise-patrol',
    title: 'Library Noise Patrol Robot',
    description:
      'A robotics project designed to help monitor noise levels in a library environment, promoting a quiet and productive study atmosphere through automated alerts.',
    tags: ['ESP32', 'Robotics', 'Sensors'],
    github: 'https://github.com/Habibur119360',
    type: 'Robotics',
    icon: '🤖',
    color: 'accent-3',
  },
  {
    id: 'sewer-gas-robot',
    title: 'Smart Sewer Gas Detection Robot',
    description:
      'A safety-focused robotics project concept for remotely detecting hazardous sewer gases, reducing the risk to workers performing inspections in dangerous environments.',
    tags: ['IoT', 'Sensors', 'Robotics'],
    github: 'https://github.com/Habibur119360',
    type: 'IoT / Robotics',
    icon: '⚗️',
    color: 'accent',
  },
]

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function Projects() {
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
    <section id="projects" className="section projects" ref={sectionRef} aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header">
          <p className="section-tag reveal">// projects</p>
          <h2 className="section-title reveal" id="projects-title" style={{ transitionDelay: '0.1s' }}>
            Academic Projects
          </h2>
          <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            Personal and academic projects I have developed to apply and strengthen my technical skills.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, idx) => (
            <article
              className="project-card glass-card reveal"
              key={project.id}
              id={`project-${project.id}`}
              style={{ transitionDelay: `${idx * 0.1 + 0.2}s` }}
              aria-label={`Project: ${project.title}`}
            >
              <div className="project-card__top">
                <div className={`project-card__icon project-card__icon--${project.color}`} aria-hidden="true">
                  {project.icon}
                </div>
                <span className="project-card__type">{project.type}</span>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map(tag => (
                  <span className="project-card__tag" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-card__footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                  aria-label={`View ${project.title} on GitHub`}
                  id={`project-${project.id}-github`}
                >
                  <GitHubIcon />
                  View on GitHub
                </a>
                <span className="project-card__academic">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  Academic Project
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__cta reveal" style={{ transitionDelay: '0.6s' }}>
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/Habibur119360"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="projects-github-profile"
          >
            <GitHubIcon />
            Visit My GitHub Profile
            <ExternalIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

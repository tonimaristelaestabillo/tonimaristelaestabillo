import { useEffect } from 'react'
import { resume } from '../data/resume'

export function Experience() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.timeline__item'))

    if (!items.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Experience</p>
        <h2>Career timeline</h2>
      </div>

      <div className="timeline">
        {resume.experience.map((role) => (
          <article key={`${role.company}-${role.title}`} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <div className="timeline__header">
                <div>
                  <h3>{role.company}</h3>
                  <p className="timeline__title">{role.title}</p>
                </div>
                <div className="timeline__meta">
                  <span>{role.dates}</span>
                  <span>{role.location}</span>
                </div>
              </div>

              <ul className="timeline__bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="tag-list">
                {role.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

import { resume } from '../data/resume'

export function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero__nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Project</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="hero__content">
        <p className="hero__greeting">Hi</p>
        <h1>
          <span>I&apos;M</span>
          <span className="hero__stacked">TONI</span>
          <span className="hero__stacked hero__stacked--last">ESTABILLO</span>
        </h1>

        <p className="hero__title">{resume.title}</p>
        <p className="hero__pitch">{resume.pitch}</p>

        <div className="hero__cta-row">
          <a className="button button--primary" href={resume.social.resume} target="_blank" rel="noreferrer">
            Download Resume
          </a>

          <div className="hero__social-links" aria-label="Social links">
            <a className="social-link" href={resume.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.9v8.7H5.5V9.8Zm4.7 0h2.8v1.2h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.52 1.95 3.52 4.49v4.56h-2.9v-4.28c0-1.02-.02-2.33-1.42-2.33-1.42 0-1.64 1.11-1.64 2.25v4.36H10.2V9.8Z" />
              </svg>
            </a>
            <a className="social-link" href={resume.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.47.09.64-.2.64-.45v-1.59c-2.6.57-3.15-1.11-3.15-1.11-.42-1.08-1.03-1.37-1.03-1.37-.85-.58.06-.57.06-.57.94.07 1.44.97 1.44.97.84 1.44 2.2 1.02 2.74.78.08-.61.33-1.02.6-1.25-2.08-.24-4.27-1.04-4.27-4.63 0-1.02.36-1.85.95-2.5-.1-.24-.42-1.22.09-2.54 0 0 .79-.25 2.59.96a8.9 8.9 0 0 1 4.71 0c1.79-1.21 2.58-.96 2.58-.96.51 1.32.19 2.3.1 2.54.6.65.95 1.48.95 2.5 0 3.6-2.2 4.39-4.29 4.62.34.29.64.86.64 1.74v2.58c0 .25.17.55.65.45A9.5 9.5 0 0 0 12 2.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="hero__visual" aria-label="Profile summary">
        {/* <div className="hero__portrait-shell" aria-hidden="true" /> */}

        <ul className="hero__metrics" aria-label="Key metrics">
          {resume.highlights.slice(0, 3).map((item) => (
            <li key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

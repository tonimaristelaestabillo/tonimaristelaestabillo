import { resume } from '../data/resume'

export function Contact() {
  return (
    <footer id="contact" className="section-shell contact-shell cta-bg">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2>Let’s build something together.</h2>
      </div>

      <div className="contact-row">
        <a href={`tel:${resume.social.phone.replace(/\s+/g, '')}`}>{resume.social.phone}</a>
        <a href={`mailto:${resume.social.email}`}>{resume.social.email}</a>
        <a href={resume.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        {/* <a href={resume.social.personal} target="_blank" rel="noreferrer">
          Personal
        </a> */}
      </div>

      <div className="hero__actions hero__actions--footer">
        <a className="button button--primary" href={resume.social.resume} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
    </footer>
  )
}

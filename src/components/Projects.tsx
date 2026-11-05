import defaultPortfolioPreview from '../assets/portfolio/default-preview.svg'
import andyPreview from '../assets/portfolio/andy-preview.png'
import pearlpayPreview from '../assets/portfolio/pearlpay-preview.jpg'
import piiPreview from '../assets/portfolio/pii.jpg'
import riskManagementToolkitPreview from '../assets/portfolio/risk-management-toolkit.jpg'
import { resume } from '../data/resume'

const previewMap: Record<string, string> = {
  Andy: andyPreview,
  'PearlPay MBS': pearlpayPreview,
  'Process Improvement & Initiatives Tool': piiPreview,
  'Arcadis Risk Governance Platform': riskManagementToolkitPreview,
}

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Product portfolio</p>
        <h2>Featured work</h2>
      </div>

      <div className="projects-grid">
        {resume.projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card__content">
              <div className="project-card__meta">{project.type}</div>
              <h3>{project.title}</h3>
              <p className="project-card__role">Role: {project.role}</p>

              <div className="project-card__copy">
                <p>
                  <strong>Problem:</strong> {project.problem}
                </p>
                <p>
                  <strong>Solution:</strong> {project.solution}
                </p>
                <p>
                  <strong>Result:</strong> {project.result}
                </p>
              </div>

              <div className="tag-list">
                {project.stack.map((tech) => (
                  <span key={`${project.title}-${tech}`} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="project-card__visual" aria-label={`${project.title} app preview`}>
              <div className="project-preview app-only">
                <div className="project-preview__screen">
                  <img src={previewMap[project.title] ?? defaultPortfolioPreview} alt={`${project.title} preview`} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

import { resume } from '../data/resume'

export function Highlights() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Highlights</p>
        <h2>Key impact</h2>
      </div>

      <div className="highlights-grid">
        {resume.highlights.map((item) => (
          <article key={item.label} className="stat-card">
            <div className="stat-card__value">{item.value}</div>
            <div className="stat-card__label">{item.label}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

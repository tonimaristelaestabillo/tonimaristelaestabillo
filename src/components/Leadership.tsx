import { resume } from '../data/resume'

export function Leadership() {
  return (
    <section id="leadership" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Leadership</p>
        <h2>Leadership and mentoring</h2>
      </div>

      <div className="leadership-grid">
        {resume.leadership.map((item) => (
          <article key={item.title} className="leadership-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

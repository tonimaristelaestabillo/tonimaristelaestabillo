import { resume } from '../data/resume'

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Skills</p>
        <h2>Core strengths</h2>
      </div>

      <div className="skills-grid">
        {resume.skills.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={`${group.title}-${item}`} className="tag tag--soft">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

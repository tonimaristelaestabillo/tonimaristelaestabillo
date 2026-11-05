export function About() {
  const capabilities = [
    {
      title: 'Software Engineering',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 8.5V6.8A1.8 1.8 0 0 1 8.8 5h6.4A1.8 1.8 0 0 1 17 6.8v1.7m-10 0h10M7 8.5l-2 9.7h14l-2-9.7M9.5 12.5h5M9.5 15.5h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      bullets: [
        'I build enterprise apps and automated workflows with SPFx, Power Platform and Azure that make company operations faster.',
      ]
    },
    {
      title: 'UI/UX Prototyping',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v9A2.5 2.5 0 0 1 16.5 19h-9A2.5 2.5 0 0 1 5 16.5v-9Zm2.5 2.5h9M8 13.5h8M8 16h5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      bullets: [
        'I turn ideas into user-friendly prototypes and products, from mobile banking apps to startup MVPs.',
      ]
    },
    {
      title: 'Branding',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4.5v15m-6-9h12M6.5 7.5h11a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 15.5v-6a1.5 1.5 0 0 1 1.5-1.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      bullets: [
        'I help businesses get noticed with branding, social media and SEO that bring in more customers.'
      ]
    }
  ]

  return (
    <section id="about" className="section-shell experience-summary">
      <div className="section-heading">
        <p className="section-kicker">Experience Summary</p>
        <h2>Senior software engineer with product, platform, and startup experience</h2>
      </div>

      <div className="experience-summary__grid">
        {capabilities.map((item) => (
          <article key={item.title} className="experience-summary__card">
            <div className="experience-summary__icon" aria-hidden="true">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

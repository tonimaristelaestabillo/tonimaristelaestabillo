const creativeWorks = [
  {
    title: 'Freelance Creative Portfolio',
    label: 'Brand direction',
    src: new URL('../assets/creatives/Freelance Creative Portfolio.png', import.meta.url).href,
  },
  {
    title: 'Creative Storyboard',
    label: 'Visual system',
    src: new URL('../assets/creatives/Freelance Creative Portfolio (1).png', import.meta.url).href,
  },
  {
    title: 'Campaign Layout',
    label: 'Editorial design',
    src: new URL('../assets/creatives/Freelance Creative Portfolio (2).png', import.meta.url).href,
  },
  {
    title: 'Brandbook',
    label: 'Identity',
    src: new URL('../assets/creatives/Final Brandbook.png', import.meta.url).href,
  },
  {
    title: 'Portfolio Spread',
    label: 'Social art direction',
    src: new URL('../assets/creatives/Freelance Creative Portfolio (3).png', import.meta.url).href,
  },
]

export function CreativePortfolio() {
  return (
    <section id="creative-portfolio" className="section-shell creatives-shell">
      <div className="section-heading">
        <p className="section-kicker">Creatives Portfolio</p>
        <h2>Creatives Portfolio</h2>
      </div>

      <div className="creative-gallery">
        {creativeWorks.map((work, index) => (
          <figure
            key={`${work.title}-${index}`}
            className={`creative-card ${index === 0 || index === 2 ? 'creative-card--wide' : 'creative-card--compact'}`}
          >
            <img src={work.src} alt={work.title} />
            <figcaption>
              <span>{work.label}</span>
              <strong>{work.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

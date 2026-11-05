import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CreativePortfolio } from './components/CreativePortfolio'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="page-shell">
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <CreativePortfolio />
        <Contact />
      </main>
    </div>
  )
}

export default App

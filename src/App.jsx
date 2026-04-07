import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider color="cyan" />
      <About />
      <SectionDivider color="orange" />
      <Skills />
      <SectionDivider color="orange" />
      <Experience />
      <SectionDivider color="purple" />
      <Education />
      <SectionDivider color="green" />
      <Certifications />
      <SectionDivider color="cyan" />
      <Projects />
      <SectionDivider color="pink" />
      <Contact />
      <SectionDivider color="cyan" />
      <footer className="footer">
        <p>Built with <span>React</span> &amp; Vite &middot; &copy; 2026 Kgaogelo Caution Sekgobela</p>
      </footer>
    </>
  )
}

export default App

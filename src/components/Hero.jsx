import { FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaEnvelope, FaAws } from 'react-icons/fa'
import { TbChartBar } from 'react-icons/tb'
import profileImg from '../assets/image.jpeg'
import { generateCV } from '../utils/generateCV'

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tag">
            <FaAws /> Data Engineer · BMW Group
          </div>
          <h1 className="hero-name">
            <span className="first">Kgaogelo<br /></span>
            <span className="last">Sekgobela</span>
          </h1>
          <p className="hero-title">
            <strong>Data Engineer</strong> &amp; Data Analyst
          </p>
          <p className="hero-desc">
            A highly analytical Data Engineer with a strong foundation in SQL, Python, AWS, Data Modelling, BI tools and Analytics. Experienced in building ETL pipelines and analysing complex datasets to drive business value.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">
              <FiDownload /> Get in Touch
            </a>
            <button className="btn-outline" onClick={generateCV}>
              <FiDownload /> Download CV
            </button>
            <a href="#experience" className="btn-ghost">
              <TbChartBar /> View Work
            </a>
          </div>
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/caution-sekgobela-0942821b5/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:scaution311@gmail.com" className="social-link" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/cautionKgao" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar">
            <img
              src={profileImg}
              alt="Kgaogelo Caution Sekgobela"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                borderRadius: '50%',
              }}
            />
          </div>
          <div className="hero-social" style={{ marginTop: '1.5rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace' }}>
              📍 South Africa · Open to opportunities
            </span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <FiArrowDown />
      </div>
    </section>
  )
}

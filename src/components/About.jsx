import { FiTarget, FiUsers, FiClock, FiMessageSquare, FiZap, FiRefreshCw, FiTrendingUp, FiMonitor, FiBookOpen, FiUser } from 'react-icons/fi'

const competencies = [
  { icon: <FiTarget />, text: 'Problem Solver — strategic thinker that quickly finds solutions' },
  { icon: <FiBookOpen />, text: 'Analytical Thinking — data-driven decision making' },
  { icon: <FiUsers />, text: 'Teamwork — keen collaborator on cross-functional teams' },
  { icon: <FiMessageSquare />, text: 'Communication — confident across all levels and cultures' },
  { icon: <FiClock />, text: 'Time Management — prioritise tasks efficiently to meet deadlines' },
  { icon: <FiZap />, text: 'Adaptability — diverse software projects and teams' },
  { icon: <FiRefreshCw />, text: 'Resilience — persistent, tries different approaches' },
  { icon: <FiTrendingUp />, text: 'Critical Thinking — informed, logical decision-making' },
  { icon: <FiMonitor />, text: 'Presentation Skills — conveys ideas to diverse audiences' },
]

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: 'BMW', label: 'Current Employer' },
  { number: 'Honours', label: 'Computer Science' },
  { number: '10+', label: 'Certifications' },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag cyan"><FiUser /> About Me</div>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            Data Engineer at BMW Group Quality Management · BSc Hons Computer Science
          </p>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong style={{ color: 'var(--primary)' }}>Kgaogelo Caution Sekgobela</strong>, a Data Engineer currently working at BMW Group in the Quality Management department, where I use data-driven insights to enhance automotive quality standards.
            </p>
            <p>
              My technical foundation spans SQL, Python, AWS cloud services, ETL pipeline development, and a range of BI and analytics tools. I hold a BSc Honours degree in Computer Science from the University of Limpopo with research focused on speech recognition.
            </p>
            <p>
              Beyond data engineering, my background includes QA testing, software engineering, and computer networking — giving me a well-rounded perspective on building and maintaining reliable systems.
            </p>
            <div className="competency-list">
              {competencies.map((c, i) => (
                <div className="competency-item" key={i}>
                  <span className="competency-icon">{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="about-stats">
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

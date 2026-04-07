import { TbNetwork, TbBrain, TbChartBar, TbDatabase, TbCode, TbFolder } from 'react-icons/tb'
import { SiPython } from 'react-icons/si'

const projects = [
  {
    type: 'de',
    typeLabel: 'Data Engineering',
    icon: '⚙️',
    name: 'AWS ETL Data Pipeline',
    desc: 'End-to-end ETL pipeline using AWS Glue, Lambda, and S3 for automotive quality data processing at BMW. Automated data ingestion, transformation, and loading for quality reporting dashboards.',
    tech: ['AWS Glue', 'Lambda', 'S3', 'Athena', 'Python', 'SQL'],
  },
  {
    type: 'da',
    typeLabel: 'Data Analytics',
    icon: '📊',
    name: 'Quality Analytics Dashboard',
    desc: 'Interactive Power BI and Oracle Apex dashboards for BMW Quality Management department. Visualises vehicle defect trends, inventory data, and quality KPIs for decision-making.',
    tech: ['Power BI', 'Oracle Apex', 'SQL', 'Python', 'DAX'],
  },
  {
    type: 'cs',
    typeLabel: 'Honours Research',
    icon: '🎤',
    name: 'IsiZulu Speech Recognition',
    desc: 'Honours research project implementing a Tri-phone Acoustic Model for IsiZulu speech recognition using hidden Markov models and acoustic feature extraction techniques.',
    tech: ['Python', 'NLP', 'HMM', 'Acoustic Modelling', 'Research'],
  },
  {
    type: 'cs',
    typeLabel: 'Software Engineering',
    icon: '🧪',
    name: 'Financial Systems QA Automation',
    desc: 'Developed an automated testing framework for Absa financial applications using Selenium WebDriver with Java. Covered functional, regression, and performance test scenarios.',
    tech: ['Selenium', 'Java', 'TestNG', 'Functional Testing', 'Regression'],
  },
  {
    type: 'cs',
    typeLabel: 'Computer Networking',
    icon: '🌐',
    name: 'Network Infrastructure Design',
    desc: 'Designed and configured network topologies as part of Huawei Network Track certification. Covered routing protocols, switching, and network security fundamentals.',
    tech: ['Huawei', 'Routing', 'Switching', 'TCP/IP', 'Network Security'],
  },
  {
    type: 'de',
    typeLabel: 'Data Engineering',
    icon: '🐍',
    name: 'Data Analysis Automation — Python',
    desc: 'Built Python scripts for automated data cleaning, feature engineering and business analytics reporting. Uses Pandas, NumPy and Matplotlib for data transformation and visualisation.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Cleaning'],
  },
]

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag cyan"><TbFolder /> Portfolio</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A mix of data engineering, analytics, software engineering, and computer science projects
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className={`project-card-header ${p.type}`}>
                <div className="project-icon">{p.icon}</div>
                <div className={`project-type ${p.type}`}>{p.typeLabel}</div>
              </div>
              <div className="project-card-body">
                <div className="project-name">{p.name}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t, j) => (
                    <span className="tech-badge" key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

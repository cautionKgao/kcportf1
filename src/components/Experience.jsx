import { FaAws } from 'react-icons/fa'
import { TbChartBar, TbBuildingBank, TbCar, TbBriefcase } from 'react-icons/tb'
import { FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    theme: 'aws-theme',
    dot: 'aws',
    role: 'Graduate Data Engineer',
    company: 'BMW Group',
    companyIcon: <TbCar />,
    period: '2025 — Present',
    badge: 'Current',
    desc: 'Working in the Quality Management department, leveraging data-driven insights to enhance automotive quality standards. Analysing inventory and quality-related data to support decision-making and process improvements.',
    points: [
      'Collaborate with cross-functional teams to analyse data related to vehicle quality and performance',
      'Build and maintain ETL pipelines using AWS services (S3, Glue, Lambda, Athena)',
      'Develop interactive dashboards and reports using Oracle Apex and Power BI',
      'Apply Python and SQL for data transformation and analysis tasks',
      'Support data modelling and warehousing initiatives',
    ],
    awsServices: ['S3', 'Glue', 'Lambda', 'Athena', 'EMR', 'QuickSight'],
    extraIcon: <FaAws />,
  },
  {
    theme: 'analytics-theme',
    dot: 'analytics',
    role: 'Junior Learner — Quality Engineer',
    company: 'Absa',
    companyIcon: <TbBuildingBank />,
    period: '2024 — 2025',
    badge: 'Previous',
    desc: 'Involved in testing and ensuring the quality of financial systems and applications at Absa, contributing to delivering reliable and seamless digital solutions.',
    points: [
      'Collaborated closely with developers and business analysts to understand requirements',
      'Developed and maintained detailed test cases ensuring thorough coverage and accuracy',
      'Conducted functional, regression and performance testing for financial applications',
      'Used Selenium WebDriver to automate test scenarios',
      'Maintained strong attention to detail, contributing to customer satisfaction and positive UX',
    ],
    awsServices: [],
    extraIcon: <TbChartBar />,
  },
]

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag orange"><FaAws /> Work History</div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Building data solutions and quality systems across automotive and financial industries
          </p>
        </div>
        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div className={`exp-card ${exp.theme}`} key={i}>
              <div className={`exp-dot ${exp.dot}`} />
              <div className="exp-header">
                <div className="exp-header-top">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">
                      {exp.companyIcon} {exp.company}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                    <span className="exp-badge">{exp.badge}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
              <div className="exp-body">
                <p className="exp-desc">{exp.desc}</p>
                <ul className="exp-points">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                {exp.awsServices.length > 0 && (
                  <div className="exp-aws-icons">
                    {exp.awsServices.map((svc, k) => (
                      <div className="aws-service" key={k}>
                        <FaAws style={{ fontSize: '0.9rem' }} />
                        {svc}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

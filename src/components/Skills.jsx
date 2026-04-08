import { SiPython, SiApachekafka, SiDocker, SiGit, SiJavascript, SiReact, SiSelenium } from 'react-icons/si'
import { TbBrandAws, TbDatabase, TbChartBar, TbCloud, TbCode } from 'react-icons/tb'
import { FiLayers, FiCpu } from 'react-icons/fi'

const categories = [
  {
    icon: <TbDatabase style={{ color: '#00d4ff' }} />,
    title: 'Data Engineering & ETL',
    tags: [
      { label: 'ETL/ELT', color: 'blue' },
      { label: 'Data Pipelines', color: 'blue' },
      { label: 'Pentaho', color: 'blue' },
      { label: 'AWS Glue', color: 'orange' },
      { label: 'AWS S3', color: 'orange' },
      { label: 'AWS Lambda', color: 'orange' },
      { label: 'AWS EMR', color: 'orange' },
      { label: 'Data Modelling', color: 'blue' },
      { label: 'Data Warehousing', color: 'blue' },
      { label: 'MS SQL', color: 'blue' },
      { label: 'NoSQL', color: 'green' },
    ],
  },
  {
    icon: <TbChartBar style={{ color: '#ec4899' }} />,
    title: 'Analytics & BI',
    tags: [
      { label: 'Power BI', color: 'purple' },
      { label: 'AWS QuickSight', color: 'orange' },
      { label: 'Oracle Apex', color: 'pink' },
      { label: 'QlikSense', color: 'green' },
      { label: 'Pandas', color: 'blue' },
      { label: 'NumPy', color: 'blue' },
      { label: 'Matplotlib', color: 'blue' }
    ],
  },
  {
    icon: <TbCloud style={{ color: '#ff9900' }} />,
    title: 'Cloud — AWS',
    tags: [
      { label: 'S3', color: 'orange' },
      { label: 'Glue', color: 'orange' },
      { label: 'Lambda', color: 'orange' },
      { label: 'Athena', color: 'orange' },
      { label: 'EMR', color: 'orange' },
      { label: 'QuickSight', color: 'orange' },
      { label: 'EC2', color: 'orange' },
      { label: 'IAM', color: 'orange' },
      { label: 'VPC', color: 'orange' },
      { label: 'ECS', color: 'orange' },
      { label: 'ECR', color: 'orange' },
      { label: 'Route53', color: 'orange' },
    ],
  },
  {
    icon: <TbCode style={{ color: '#a78bfa' }} />,
    title: 'Programming',
    tags: [
      { label: 'Python', color: 'blue' },
      { label: 'SQL', color: 'blue' },
      { label: 'Java', color: 'purple' },
      { label: 'JavaScript', color: 'green' },
      { label: 'React', color: 'blue' },
      { label: 'Selenium', color: 'green' },
      { label: 'Machine Learning', color: 'pink' },
    ],
  },
  {
    icon: <FiLayers style={{ color: '#34d399' }} />,
    title: 'Software & Testing',
    tags: [
      { label: 'QA Testing', color: 'green' },
      { label: 'Functional Testing', color: 'green' },
      { label: 'Regression Testing', color: 'green' },
      { label: 'Performance Testing', color: 'green' },
      { label: 'Test Case Design', color: 'blue' },
    ],
  },
  {
    icon: <TbBrandAws style={{ color: '#ff9900' }} />,
    title: 'Networking & Infrastructure',
    tags: [
      { label: 'Computer Networks', color: 'purple' },
      { label: 'Kubernetes', color: 'blue' },
      { label: 'OpenShift', color: 'orange' },
      { label: 'Containers', color: 'blue' },
      { label: 'Huawei Network', color: 'pink' },
      { label: 'Cyber Security', color: 'green' },
      { label: 'IBM Cloud', color: 'blue' },
    ],
  },
  {
    icon: <FiLayers style={{ color: '#00d4ff' }} />,
    title: 'Tools',
    tags: [
      { label: 'Selenium WebDriver', color: 'green' },
      { label: 'Git', color: 'purple' },
      { label: 'Docker', color: 'blue' },
      { label: 'Jupyter Notebook', color: 'orange' },
      { label: 'Linux (Ubuntu)', color: 'green' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag orange"><FiCpu /> Tech Stack</div>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            From cloud infrastructure to analytics and software engineering
          </p>
        </div>
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className="skill-category" key={i}>
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <span className="skill-cat-title">{cat.title}</span>
              </div>
              <div className="skill-tags">
                {cat.tags.map((t, j) => (
                  <span className={`skill-tag ${t.color}`} key={j}>{t.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

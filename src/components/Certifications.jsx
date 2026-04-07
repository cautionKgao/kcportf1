import { SiUdemy, SiHuawei } from 'react-icons/si'
import { FiAward } from 'react-icons/fi'
import { TbCertificate, TbRosette } from 'react-icons/tb'

const certs = [
  { year: '2025', icon: '🐍', name: 'Python For Data Analysis and Business Analytics', issuer: 'Udemy', iconEl: <SiUdemy /> },
  { year: '2024', icon: '💻', name: 'NQF5 Systems Development', issuer: 'MindWorx', iconEl: <FiAward /> },
  { year: '2024', icon: '🔐', name: 'Cyber Security Fundamentals', issuer: 'IBM SkillsBuild', iconEl: <TbCertificate /> },
  { year: '2024', icon: '🤖', name: 'Selenium WebDriver Java', issuer: 'Udemy', iconEl: <SiUdemy /> },
  { year: '2023', icon: '🌐', name: 'Network Track', issuer: 'Huawei', iconEl: <SiHuawei /> },
  { year: '2022', icon: '☁️', name: 'Introduction to Cloud', issuer: 'IBM', iconEl: <TbCertificate /> },
  { year: '2021', icon: '📱', name: 'MTN Business App Academy', issuer: 'MTN', iconEl: <FiAward /> },
  { year: '2021', icon: '⚙️', name: 'Intro to Containers, Kubernetes & OpenShift', issuer: 'IBM', iconEl: <TbCertificate /> },
  { year: '2021', icon: '☕', name: 'Java Classes and Objects', issuer: 'Coursera', iconEl: <FiAward /> },
]

export default function Certifications() {
  return (
    <section className="certs-section" id="certifications">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag green"><TbRosette /> Continuous Learning</div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Academic transcripts and certificates available on request
          </p>
        </div>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-icon">{c.icon}</div>
              <div>
                <div className="cert-year">{c.year}</div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

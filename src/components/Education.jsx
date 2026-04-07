import { TbSchool } from 'react-icons/tb'
import { FiAward, FiBook } from 'react-icons/fi'

const education = [
  {
    icon: '🎓',
    degree: "BSc Honours — Computer Science",
    school: 'University of Limpopo',
    year: '2023',
    detail: 'Research: Tri-phone Acoustic Model on IsiZulu Speech Recognition (Jan 2023 – Nov 2023)',
  },
  {
    icon: '🎓',
    degree: 'BSc Mathematical & Computer Science',
    school: 'University of Limpopo',
    year: '2020 — 2022',
    detail: 'Dual focus on advanced mathematics and computer science principles.',
  },
  {
    icon: '🏫',
    degree: 'Matric — Grade 12',
    school: 'Ramathope Secondary School',
    year: '2019',
    detail: 'Completed National Senior Certificate.',
  },
]

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag purple"><FiBook /> Academic Background</div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">University of Limpopo · BSc Honours Computer Science</p>
        </div>
        <div className="edu-grid">
          {education.map((e, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-icon">{e.icon}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-year">{e.year}</div>
              <div className="edu-detail">{e.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

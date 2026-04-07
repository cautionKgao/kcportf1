import jsPDF from 'jspdf'

export function generateCV() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const pageW = 210
  const pageH = 297

  // ── SIDEBAR ──────────────────────────────────────────────────────────
  const sideW = 68
  doc.setFillColor(30, 40, 60)        // dark navy
  doc.rect(0, 0, sideW, pageH, 'F')

  // Sidebar accent line
  doc.setFillColor(0, 212, 255)
  doc.rect(sideW - 2, 0, 2, pageH, 'F')

  // ── MAIN CONTENT AREA ────────────────────────────────────────────────
  doc.setFillColor(10, 15, 30)
  doc.rect(sideW, 0, pageW - sideW, pageH, 'F')

  // ── HEADER BAND ──────────────────────────────────────────────────────
  doc.setFillColor(0, 140, 170)
  doc.rect(sideW, 0, pageW - sideW, 38, 'F')

  // Name
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(22)
  doc.setTextColor(255, 255, 255)
  doc.text('KGAOGELO CAUTION', sideW + 10, 14)
  doc.text('SEKGOBELA', sideW + 10, 23)

  // Role tag
  doc.setFontSize(9)
  doc.setTextColor(0, 212, 255)
  doc.setFont('helvetica', 'bold')
  doc.text('DATA ENGINEER  ·  DATA ANALYST', sideW + 10, 32)

  // ── SIDEBAR CONTENT ──────────────────────────────────────────────────
  let sy = 10

  // Sidebar section helper
  const sideSection = (title, yStart) => {
    doc.setFillColor(0, 212, 255)
    doc.rect(8, yStart, 22, 0.8, 'F')
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.setTextColor(0, 212, 255)
    doc.text(title, 8, yStart - 1.5)
    return yStart + 5
  }

  const sideText = (text, y, highlight = false) => {
    doc.setFont('helvetica', highlight ? 'bold' : 'normal')
    doc.setFontSize(7.5)
    doc.setTextColor(highlight ? 200 : 160, highlight ? 230 : 190, highlight ? 255 : 210)
    const lines = doc.splitTextToSize(text, sideW - 16)
    doc.text(lines, 8, y)
    return y + lines.length * 4.5
  }

  // CONTACT
  sy = sideSection('CONTACT', sy)
  sy = sideText('scaution311@gmail.com', sy)
  sy = sideText('069 961 2025', sy)
  sy = sideText('www.linkedin.com/in/caution-sekgobela-0942821b5', sy)
  sy = sideText('https://github.com/cautionKgao', sy)
  sy = sideText('South Africa', sy)
  sy += 5

  // SKILLS
  sy = sideSection('CORE SKILLS', sy)
  const skills = [
    'Python · Pandas · NumPy',
    'SQL · MS SQL · NoSQL',
    'AWS (S3, Glue, Lambda, Athena, EMR)',
    'ETL / Data Pipelines',
    'Power BI · Oracle Apex',
    'QuickSight · QlikSense',
    'Data Modelling · Machine Learning',
    'Selenium · Java · Git',
  ]
  skills.forEach(s => { sy = sideText(s, sy) })
  sy += 5

  // EDUCATION
  sy = sideSection('EDUCATION', sy)
  sy = sideText('HCMP — Higher Certificate in Management Practice', sy, true)
  sy = sideText('Henley Business School · 2025-2026', sy)
  sy += 2
  sy = sideText('BSc Honours — Computer Science', sy, true)
  sy = sideText('University of Limpopo · 2023', sy)
  sy += 2
  sy = sideText('BSc Maths & Computer Science', sy, true)
  sy = sideText('University of Limpopo · 2020-2022', sy)
  sy += 2
  sy = sideText('Matric · 2019', sy, true)
  sy = sideText('Ramathope Secondary School', sy)
  sy += 5

  // CERTS (compact)
  sy = sideSection('CERTIFICATIONS', sy)
  const certs = [
    '2025 — Python for Data Analysis (Udemy)',
    '2024 — NQF5 Systems Dev (MindWorx)',
    '2024 — Cyber Security (IBM)',
    '2024 — Selenium WebDriver (Udemy)',
    '2023 — Network Track (Huawei)',
    '2022 — Intro to Cloud (IBM)',
    '2021 — Containers & K8s (IBM)',
  ]
  certs.forEach(c => { sy = sideText(c, sy) })

  // ── MAIN CONTENT ─────────────────────────────────────────────────────
  let my = 46
  const mainX = sideW + 10
  const mainW = pageW - sideW - 18

  const mainSection = (title, y) => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.setTextColor(0, 212, 255)
    doc.text(title, mainX, y)
    doc.setDrawColor(0, 212, 255)
    doc.setLineWidth(0.4)
    doc.line(mainX, y + 1.5, mainX + mainW, y + 1.5)
    return y + 7
  }

  const mainText = (text, y, bold = false, color = [190, 210, 230]) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...color)
    const lines = doc.splitTextToSize(text, mainW)
    doc.text(lines, mainX, y)
    return y + lines.length * 4.5
  }

  const bullet = (text, y) => {
    doc.setFillColor(0, 212, 255)
    doc.circle(mainX + 1.5, y - 1, 0.8, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(160, 190, 215)
    const lines = doc.splitTextToSize(text, mainW - 5)
    doc.text(lines, mainX + 5, y)
    return y + lines.length * 4.5
  }

  // SUMMARY
  my = mainSection('PROFESSIONAL SUMMARY', my)
  my = mainText(
    'A highly analytical Data Engineer with 3+ years of experience in data analysis, ETL development, and cloud-based data engineering. Skilled in SQL, Python, Power BI, AWS, and statistical modelling, with a strong ability to convert complex datasets into actionable insights that support strategic decision-making.',
    my
  )
  my += 5

  // EXPERIENCE
  my = mainSection('WORK EXPERIENCE', my)

  // BMW
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(255, 153, 0)
  doc.text('Graduate Data Engineer', mainX, my)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(130, 160, 190)
  doc.text('BMW Group  |  Quality Management', mainX, my + 5)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(7.5)
  doc.setTextColor(100, 130, 160)
  doc.text('2025 — Present', pageW - 20, my, { align: 'right' })
  my += 10

  const bmwPoints = [
    'Analyse quality and inventory data using SQL, Python, Power BI, and Oracle Apex to support strategic insights',
    'Build and maintain ETL pipelines to process and transform operational data.',
    'Improve data accessibility by developing dashboards and reports for non technical users.',
    'Collaborate with cross-functional teams to provide data-driven recommendations.',
    'Develop dashboards and data visualisations for Quality Management reporting',
  ]
  bmwPoints.forEach(p => { my = bullet(p, my) })
  my += 4

  // Absa
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  doc.setTextColor(167, 139, 250)
  doc.text('Junior Learner — Quality Engineer', mainX, my)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  doc.setTextColor(130, 160, 190)
  doc.text('Absa  |  Financial Services', mainX, my + 5)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(7.5)
  doc.setTextColor(100, 130, 160)
  doc.text('2024 — 2025', pageW - 20, my, { align: 'right' })
  my += 10

  const absaPoints = [
    'Contributed to financial systems testing and data validation to ensure system reliability and regulatory compliance.',
    'Collaborated with developers, business analysts, and QA teams to define data related test cases and acceptance criteria.',
    'Performed functional, regression, and performance testing, identifying trends and anomalies in system data.',
    'Documented findings and communicated results to stakeholders, improving decision-making and user experience.',
    'Collaborated with developers and business analysts to ensure quality standards',
  ]
  absaPoints.forEach(p => { my = bullet(p, my) })
  my += 5

  // KEY COMPETENCIES
  my = mainSection('KEY COMPETENCIES', my)
  const comps = [
    ['Problem Solving', 'Strategic thinker — quickly identifies and resolves complex challenges across data engineering and quality domains'],
    ['Analytical Thinking', 'Data-driven approach to decision-making and process improvement, leveraging BI tools and statistical methods'],
    ['Adaptability', 'Proven experience across diverse software projects and cross-functional teams in both finance and automotive sectors'],
    ['Communication', 'Confidently conveys technical concepts to both technical and non-technical audiences including senior stakeholders'],
    ['Collaboration', 'Works effectively in agile and cross-functional environments, bridging the gap between data, engineering and business teams'],
    ['Continuous Learning', 'Proactively pursues certifications and upskilling in cloud, data, and software engineering disciplines'],
  ]
  comps.forEach(([title, desc]) => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.setTextColor(0, 212, 255)
    doc.text(`${title}: `, mainX, my)
    const tw = doc.getTextWidth(`${title}: `)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(160, 190, 215)
    const lines = doc.splitTextToSize(desc, mainW - tw - 1)
    doc.text(lines[0], mainX + tw, my)
    if (lines.length > 1) {
      doc.text(lines.slice(1).join(' '), mainX, my + 4.5)
      my += 4.5
    }
    my += 5.5
  })

  // TOOLS & TECHNOLOGIES
  my += 2
  my = mainSection('TOOLS & TECHNOLOGIES', my)

  const toolCols = [
    { label: 'Cloud & Big Data', items: 'AWS S3 · AWS Glue · AWS Lambda · AWS Athena · AWS EMR · QuickSight' },
    { label: 'Languages', items: 'Python · SQL · Java · JavaScript · Shell Scripting' },
    { label: 'Databases', items: 'MS SQL Server · NoSQL · Oracle Apex · MySQL' },
    { label: 'BI & Visualisation', items: 'Power BI · QlikSense · QuickSight · Oracle Reports' },
    { label: 'DevOps & Tools', items: 'Git · Docker · Kubernetes · Selenium WebDriver · Jira' },
  ]

  toolCols.forEach(({ label, items }) => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(7.5)
    doc.setTextColor(0, 212, 255)
    doc.text(`${label}:`, mainX, my)
    const labelW = doc.getTextWidth(`${label}: `)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(160, 190, 215)
    const lines = doc.splitTextToSize(items, mainW - labelW)
    doc.text(lines[0], mainX + labelW, my)
    if (lines.length > 1) {
      doc.text(lines.slice(1), mainX + 2, my + 4.5)
      my += lines.length * 4.5
    } else {
      my += 5.5
    }
  })

  // Footer
  doc.setDrawColor(0, 212, 255)
  doc.setLineWidth(0.3)
  doc.line(sideW, pageH - 10, pageW, pageH - 10)

  const footerCenterX = sideW + (pageW - sideW) / 2
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(7)
  doc.setTextColor(80, 100, 130)
  doc.text('References and academic transcripts available on request  ·  Automated CV', footerCenterX, pageH - 5, { align: 'center' })

  doc.save('Kgaogelo_Caution_Sekgobela_cv_de_f.pdf')
}

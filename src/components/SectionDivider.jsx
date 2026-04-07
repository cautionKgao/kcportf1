export default function SectionDivider({ color = 'cyan' }) {
  const colors = {
    cyan:   { beam: '#00d4ff', glow: 'rgba(0,212,255,0.6)',   dim: 'rgba(0,212,255,0.08)' },
    orange: { beam: '#ff9900', glow: 'rgba(255,153,0,0.6)',   dim: 'rgba(255,153,0,0.08)' },
    purple: { beam: '#a78bfa', glow: 'rgba(167,139,250,0.6)', dim: 'rgba(167,139,250,0.08)' },
    green:  { beam: '#34d399', glow: 'rgba(52,211,153,0.6)',  dim: 'rgba(52,211,153,0.08)' },
    pink:   { beam: '#f472b6', glow: 'rgba(244,114,182,0.6)', dim: 'rgba(244,114,182,0.08)' },
  }
  const c = colors[color] || colors.cyan

  return (
    <div className="section-divider" style={{ '--beam': c.beam, '--glow': c.glow, '--dim': c.dim }}>
      <div className="divider-track" />
      <div className="divider-beam" />
      <div className="divider-particles">
        {[...Array(4)].map((_, i) => (
          <div className="divider-dot" key={i} style={{ '--i': i }} />
        ))}
      </div>
    </div>
  )
}

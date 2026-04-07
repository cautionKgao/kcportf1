import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    setActive(href)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo">KC<span>.dev</span></a>
      <ul className={`navbar-links${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href ? 'active' : ''}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="navbar-menu-btn" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        {open ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  )
}

import { useCallback, useState } from 'react'

const navLinks = [
  { label: 'Proyecto',      href: '#proyecto' },
  { label: 'Amenidades',    href: '#amenidades' },
  { label: 'Departamentos', href: '#departamentos' },
  { label: 'Galería',       href: '#galeria' },
  { label: 'Ubicación',     href: '#ubicacion' },
  { label: 'Nosotros',      href: '#about-us' },
  { label: 'Contacto',      href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  return (
    <nav className={`navbar${open ? ' navbar--open' : ''}`}>
      <img src="/logo.svg" alt="High Point" className="navbar-logo" />

      <button
        className="navbar-hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        type="button"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <line x1="3" y1="6"  x2="21" y2="6"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <ul className="navbar-links">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={close}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

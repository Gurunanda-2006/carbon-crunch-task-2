import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import logo from '../../public/assets/Union (1).png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo" onClick={() => setOpen(false)}>
        <img src={logo} alt="NFTme" />
      </Link>

      {/* Nav links */}
      <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        {[
          { label: 'Home',         to: '/' },
          { label: 'About us',     to: '/about' },
          { label: 'Marketplace',  to: '/marketplace' },
          { label: 'Artists',      to: '/artists' },
          { label: 'Contact',      to: '/contact' },
        ].map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className={pathname === to ? 'nav__link nav__link--active' : 'nav__link'}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link to="/marketplace" className="nav__cta" onClick={() => setOpen(false)}>
        Connect Wallet
      </Link>

      {/* Hamburger */}
      <button
        className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

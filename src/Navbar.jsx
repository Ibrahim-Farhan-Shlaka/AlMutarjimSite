import React, { useState } from "react"
import "./style/Navbar.css"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* Left Side */}
      <div className="nav-left">
        <img src="/Logo.jpeg" alt="Almutarjim Logo" className="nav-logo" />
        <span className="nav-title">Al Mutarjim</span>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <button>About</button>
        <button>Services</button>
        <button className="nav-cta">Contact</button>
      </div>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mobile-menu">
          <button>About</button>
          <button>Services</button>
          <button>Contact</button>
        </div>
      )}

    </nav>
  )
}

export default Navbar

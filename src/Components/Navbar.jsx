import React, { useState } from "react"
import "../style/Navbar.css"
import LangButton from "./LangButton"
import { Link } from "react-router-dom"

const Navbar = ({ lang, toggleLang }) => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* Left */}
      <div className="nav-left">
        <img src="/Logo.jpeg" alt="Almutarjim Logo" className="nav-logo" />
        <span className="nav-title">Al Mutarjim</span>
      </div>

      {/* Center */}
      <div className="nav-center">
        <LangButton lang={lang} toggleLang={toggleLang} />
      </div>
      

      {/* Center Hamburger */}
      <div className="nav-hamburger-center">
        <button className={`nav-toggle ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
        <Link to="/contact" className="nav-cta" onClick={() => setOpen(false)}>Contact</Link>
      </div>

    </nav>
  )
}

export default Navbar
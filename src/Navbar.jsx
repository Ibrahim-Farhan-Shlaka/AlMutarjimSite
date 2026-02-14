import React, { useState } from "react"
import "./style/Navbar.css"
import LangButton from "./LangButton"

const Navbar = ({ lang, toggleLang }) => {

  return (
    <nav className="navbar">

      {/* Left */}
      <div className="nav-left">
        <img src="/Logo.jpeg" alt="Almutarjim Logo" className="nav-logo" />
        <span className="nav-title">Al Mutarjim</span>
      </div>

      {/* CENTER LANG BUTTON */}
      <div className="nav-center">
        <LangButton lang={lang} toggleLang={toggleLang} />
      </div>

      {/* Right Links */}
      <div className="nav-links">
        <button>About</button>
        <button>Services</button>
        <button className="nav-cta">Contact</button>
      </div>

    </nav>
  )
}

export default Navbar

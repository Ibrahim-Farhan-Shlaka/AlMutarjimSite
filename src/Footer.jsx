import React from 'react'
import './style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p className="footer-text">
          © {new Date().getFullYear()} Al Mutarjim Office for Legal & Authorised Translation
        </p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/almutarjimofficeiraq/" target="_blank">
            <img src="/insta.png" alt="Instagram" />
          </a>

          <a href="https://facebook.com" target="_blank">
            <img src="/facebook3.png" alt="Facebook" />
          </a>

          <a href="https://wa.me/9647703599943" target="_blank">
            <img src="/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
import React, { useState, useEffect } from "react"
import "./style/Slideshow.css"

const images = ["8.jfif", "9.jfif", "7.jfif"]

const Slideshow = ({ language }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slider">
      <img src={images[index]} alt="Hero" className="slide-img" />

      <div className="hero-text">
        <h1>{language === "ar" ? "مرحبًا بكم في مكتب المترجم" : "Welcome to Al Mutarjim Office"}</h1>
        <h2>{language === "ar" ? "للترجمة القانونية المعتمدة" : "Legal & Authorized Translation"}</h2>
        <p>{language === "ar" ? "مترجمين محترفين ومرخصين" : "Professional certified translators"}</p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/9647700000000"
            target="_blank"
            className="hero-btn whatsapp"
          >
            💬 WhatsApp
          </a>

          <a href="tel:+9647700000000" className="hero-btn call">
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Slideshow

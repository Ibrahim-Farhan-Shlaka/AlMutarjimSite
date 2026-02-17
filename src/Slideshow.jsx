import React, { useState, useEffect } from "react"
import "./style/Slideshow.css"
import { gtag_report_conversion } from "./src/utils/gtag.js";

const images = ["main.jpg", "9Copy.jpg", "7Copy.jpg"]

const Slideshow = ({ lang }) => {
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
        <h1>{lang === "ar" ? "مرحبًا بكم في مكتب المترجم" : "Welcome to Al Mutarjim Office"}</h1>
        <h2>{lang === "ar" ? "للترجمة القانونية المعتمدة" : "Legal & Authorized Translation"}</h2>
        <p>{lang === "ar" ? "مترجمين محترفين ومرخصين" : "Professional certified translators"}</p>
        
      <div className="hero-buttons">
            <a
              href="https://wa.me/9647703599943?text=اتصل بالمترجم"
              target="_blank"
              className="hero-btn whatsapp"
              onClick={(e) => {gtag_report_conversion("https://wa.me/9647703599943?text=اتصل بالمترجم");}}
            >
              {lang === "ar" ? "💬+9647703599943 أرسل مستند عبر واتساب" : "Send documents via whatsapp +9647703599943💬"}
            </a>

            <a href="tel:+9647703599943" className="hero-btn call" onClick={() => gtag_report_conversion()}>
              {lang === "ar" ? "📞 اتصل بالمترجم" : "Call us 📞"}
            </a>
            
      </div>

      </div>
    </div>
  )
}

export default Slideshow

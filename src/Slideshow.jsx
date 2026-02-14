import React, { useState, useEffect } from "react"
import "./style/Slideshow.css"

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

      </div>
    </div>
  )
}

export default Slideshow

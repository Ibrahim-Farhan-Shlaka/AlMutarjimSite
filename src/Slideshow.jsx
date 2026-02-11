import React from 'react'
import './style/Slideshow.css'

const Slideshow = ({ language }) => {
  return (
    <div className="slider-wrapper">

      <div className="slider">

        <div className="slide">
          <img src="greek.png" alt="Hero" />

          <div className="hero-text">
            <h1>{language === "ar" ? "مرحبًا بكم في مكتب المترجم" : "Welcome to Al Mutarjim office"}</h1>
            <h2> {language === "ar" ? "للترجمة القانونية المعتمدة" : "for legal and authorised translation"}</h2>
            <p> {language === "ar" ? "مترجمين محترفين ومرخصين" : "authorised and proffesional translators"}</p>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Slideshow

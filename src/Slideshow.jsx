import React from 'react'
import './style/Slideshow.css'

const Slideshow = ({ language }) => {
  return (
    <div className="slider-wrapper">

      <div className="slider">

        <div className="slide">
          <img src="8.jfif" alt="Hero" />
          <img src="9.jfif" alt="Hero" />
          <img src="7.jfif" alt="Hero" />

          <div className="hero-text">
            <h1>{language === "ar" ? "مرحبًا بكم في مكتب المترجم" : "Welcome to Al Mutarjim office"}</h1>
            <h2> {language === "ar" ? "للترجمة القانونية المعتمدة" : "for legal and authorised translation"}</h2>
            <p> {language === "ar" ? "مترجمين محترفين ومرخصين" : "authorised and proffesional translators"}</p>


          <div className="hero-buttons">
            <a
              href="https://wa.me/9647700000000?text=اتصل بالمترجم"
              target="_blank"
              className="hero-btn whatsapp"
            >
              💬 أرسل مستند عبر واتساب
            </a>

            <a href="tel:+9647700000000" className="hero-btn call">
              📞 اتصل بالمترجم
            </a>
            
          </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Slideshow

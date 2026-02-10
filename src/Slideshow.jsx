import React from 'react'
import './style/Slideshow.css'

const Slideshow = () => {
  return (
    <div className="slider-wrapper">

      <div className="slider">

        <div className="slide">
          <img src="tran3.png" alt="Hero" />

          {/* Overlay text */}
          <div className="hero-text">
            <h1>مرحبًا بكم في مكتب المترجم </h1>
            <h2>للترجمة القانونية المعتمدة</h2>

            <p>أكثر من 20 عامًا من الخبرة في مجال الترجمة القانونية</p>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Slideshow

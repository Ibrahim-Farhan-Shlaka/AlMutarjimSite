import React from 'react'
import '../style/Shop.css'

const Shop = ({ Name }) => {
  return (
    <section className="shop-section">
      <div className="shop-overlay">
        <h2>{Name}</h2>
      </div>

      <iframe
        className="shop-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15960.8696340726!2d44.42332700000001!3d33.303423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557818a4e76a2bd%3A0x1bc2d7d7b3134881!2z2YXZg9iq2Kgg2KfZhNmF2KrYsdis2YUg2YTZhNiq2LHYrNmF2Kkg2KfZhNmC2KfZhtmI2YbZitip!5e1!3m2!1sar!2sus!4v1770570895733!5m2!1sar!2sus"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  )
}

export default Shop

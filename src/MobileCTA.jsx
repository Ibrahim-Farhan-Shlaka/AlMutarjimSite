import React from "react"
import { FaPhoneAlt, FaWhatsapp, FaMap } from "react-icons/fa"
import "./style/MobileCTA.css"

const MobileCTA = ({ lang }) => {
  const t = {
    call: lang === "ar" ? "اتصل الآن" : "Call Now",
    whatsapp: lang === "ar" ? "أرسل عبر واتساب" : "Send Documents on WhatsApp",
    review: lang === "ar" ? "رأيكم بخدماتنا" : "Review Us!"
  }

  return (
    <div className="mobile-cta">
      <a className="cta-call" href="tel:+9647703599943">
        <FaPhoneAlt />
        {t.call}
      </a>

      <a className="cta-review" href="https://maps.app.goo.gl/vEkaRWEMKq6uAMsF8">
        <FaMap/>
        {t.review}
      </a>

      <a
        className="cta-whatsapp"
        href="https://wa.me/9647703599943"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
        {t.whatsapp}
      </a>
    </div>
  )
}

export default MobileCTA

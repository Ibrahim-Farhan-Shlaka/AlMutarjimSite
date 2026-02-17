import React from "react"
import { FaPhoneAlt, FaWhatsapp, FaMap } from "react-icons/fa"
import "./style/MobileCTA.css"
import { gtag_report_conversion } from "./src/utils/gtag.js";

const MobileCTA = ({ lang }) => {
  const t = {
    call: lang === "ar" ? "اتصل الآن" : "Call Now",
    whatsapp: lang === "ar" ? "أرسل عبر واتساب" : "Contact on WhatsApp",
    review: lang === "ar" ? "رأيكم بخدماتنا" : "Review Us!"
  }

  return (
    <div className="mobile-cta">
      <a className="cta-call" href="tel:+9647703599943" onClick={(e) => {gtag_report_conversion();}}>
        <FaPhoneAlt />
        {/*{t.call}*/}
      </a>

      <a className="cta-review" href="https://maps.app.goo.gl/vEkaRWEMKq6uAMsF8">
        <FaMap/>
        {/*{t.review}*/}
      </a>

      <a
        className="cta-whatsapp"
        href="https://wa.me/9647703599943"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {gtag_report_conversion("https://wa.me/9647703599943");}}
      >
        <FaWhatsapp />
        {/*{t.whatsapp}*/}
      </a>
    </div>
  )
}

export default MobileCTA

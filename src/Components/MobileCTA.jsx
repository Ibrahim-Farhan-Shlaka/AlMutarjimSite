import React from "react"
import { FaPhoneAlt, FaWhatsapp, FaMap } from "react-icons/fa"
import "../style/MobileCTA.css"


function gtag_report_conversion(url) {
  console.log("🔥 Conversion button clicked");

  var callback = function () {
    console.log("✅ Conversion callback fired");
    if (typeof url !== "undefined") {
      window.location = url;
    }
  };

  if (window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17938224109/uTUXCIXUrfobEO2nzulC',
      value: 1.0,
      currency: 'TRY',
      event_callback: callback
    });

    console.log("📡 gtag conversion sent to Google");
  } else {
    console.log("❌ gtag NOT loaded");
  }

  return false;
}


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
      </a>

      <a className="cta-review" href="https://maps.app.goo.gl/vEkaRWEMKq6uAMsF8">
        <FaMap/>
      </a>
      {/*
      <a
        className="cta-whatsapp"
        href="https://wa.me/9647703599943"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {gtag_report_conversion("https://wa.me/9647703599943");}}
      >
        <FaWhatsapp />
      </a>
      */}
    </div>
  )
}

export default MobileCTA

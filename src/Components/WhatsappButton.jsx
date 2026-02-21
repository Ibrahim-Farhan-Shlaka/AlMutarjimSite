import React from "react"
import "../style/WhatsappButton.css"


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


const WhatsappButton = () => {
  return (
    <>
    <a
      href="https://wa.me/9647703599943" // <-- replace with your number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {gtag_report_conversion("https://wa.me/9647703599943?text=اتصل بالمترجم");}}
    >
      <img src="/whatsapp.png" alt="WhatsApp" />
    </a>
    </>
  )
}

export default WhatsappButton

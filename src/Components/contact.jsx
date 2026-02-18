import React from "react"
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react"
import "../style/contact.css"

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-17938224109/uTUXCIXUrfobEO2nzulC',
      'value': 1.0,
      'currency': 'TRY',
      'event_callback': callback
  });
  return false;
}

const Contact = ({ lang }) => {
  return (
    <section className="contact-card" dir="ltr">

      <h2 className="contact-title">{lang === "ar" ? "تواصل معنا" : "Contact us"}</h2>
      <div className="contact-divider"></div>

      <div className="contact-grid">

        {/* EMAIL */}
        <a href="mailto:almutarjim2010@gmail.com" className="contact-item">
            <Mail size={40} strokeWidth={1.5} className="pic"/>
            <span>Email</span>
            <p>almutarjim2010@gmail.com</p>
        </a>

        {/* PHONE */}
        <a href="tel:+9647703599943" className="contact-item" onClick={() => gtag_report_conversion()}>
            <Phone size={40} strokeWidth={1.5} className="pic"/>
            <span>Phone</span>
            <p>+964 770 359 9943</p>
            <p>+964 790 172 3025</p>
        </a>

        <a href="https://wa.me/9647703599943"  target="_blank" className="contact-item" onClick={(e) => {gtag_report_conversion("https://wa.me/9647703599943");}}>
        <MessageCircle size={40} strokeWidth={1.5} className="pic"/>
        <span>WhatsApp</span>
        <p>+9647703599943 تواصل معنا</p>
        <p>+9647901723025  او</p>
        </a>

        {/* GOOGLE MAPS */}
        <a href="https://maps.app.goo.gl/nLytDEZhFnYaGUXz6" target="_blank" rel="noopener noreferrer" className="contact-item">
            <MapPin size={40} strokeWidth={1.5} className="pic"/>
            <span>Address</span>
            <p>Baghdad, Karrada, Iraq</p>
        </a>

        {/* INSTAGRAM */}
        <a href="https://www.instagram.com/almutarjimofficeiraq/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <Instagram size={40} strokeWidth={1.5} className="pic"/>
            <span>Instagram</span>
            <p>@almutarjimofficeiraq</p>
        </a>

        {/* FACEBOOK */}
        <a 
            href="https://www.facebook.com/almutarjim21?rdid=QGWQ1bVsIjjktlTP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CCDQQYEwo%2F#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-item"
        >
            <Facebook size={40} strokeWidth={1.5} className="pic"/>
            <span>Facebook</span>
            <p>Al Mutarjim Translation Office</p>
        </a>

      </div>

    </section>
  )
}

export default Contact

import React from "react"
import "./style/WhatsappButton.css"

const WhatsappButton = () => {
  return (
    <>
    <a
      href="https://wa.me/9647703599943" // <-- replace with your number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/whatsapp.png" alt="WhatsApp" />
    </a>

    <div className="whatsapp-text">
      Need translation? Chat with us!
    </div>
    </>
  )
}

export default WhatsappButton

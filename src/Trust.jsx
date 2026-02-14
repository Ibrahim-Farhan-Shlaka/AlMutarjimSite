import React from "react"
import { ShieldCheck, FileCheck, Stamp, Lock } from "lucide-react"
import "./style/Trust.css"

const Trust = ({ lang }) => {

  const t = {
    title: lang === "ar" ? "موثوق ومعتمد رسميًا" : "Official & Trusted Translation Office",
    items: [
      lang === "ar" ? "الترجمة معتمدة لدى الجهات الرسمية" : "Officially certified translations",
      lang === "ar" ? "معترف بها لدى السفارات والجامعات والمحاكم" : "Recognized by embassies, universities, and courts",
      lang === "ar" ? "ختم رسمي على جميع الترجمات" : "Official stamp on all documents",
      lang === "ar" ? "سرية تامة لجميع الوثائق" : "Full confidentiality guaranteed",
    ]
  }

  const icons = [ShieldCheck, FileCheck, Stamp, Lock]

  return (
    <section className="trust-card">
      <h2>{t.title}</h2>

      <div className="trust-grid">
        {t.items.map((item, i) => {
          const Icon = icons[i]
          return (
            <div key={i} className="trust-item">
              <Icon size={36} />
              <p>{item}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Trust

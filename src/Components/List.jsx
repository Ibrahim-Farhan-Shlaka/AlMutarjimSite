import React from "react"
import "../style/List.css"

const List = ({ Header, languages }) => {
  return (
    <section className="language-section">
      <h2 className="language-title">{Header}</h2>

      <div className="language-grid">
        {languages.map((lang, index) => (
          <div key={index} className="language-item">
            {lang}
          </div>
        ))}
      </div>
    </section>
  )
}

export default List
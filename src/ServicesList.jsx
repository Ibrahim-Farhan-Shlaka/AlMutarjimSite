import React, { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import "./style/ServicesList.css"

const ServicesList = ({ Header, data }) => {
  const [openCategory, setOpenCategory] = useState(null)
  const [openSub, setOpenSub] = useState(null)

  return (
    <section className="services-card"> {/* 👈 NEW CARD WRAPPER */}

      <h2 className="services-title">{Header}</h2>

      <div className="services-list">
        {data.map((cat, i) => (
          <div key={i} className="service-category">

            <button
              className="category-header"
              onClick={() => setOpenCategory(openCategory === i ? null : i)}
            >
              <span>{i + 1}. {cat.title}</span>
              {openCategory === i ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Subcategories */}
            {openCategory === i && (
              <div className="subcategory-list">
                {cat.items.map((sub, j) => (
                  <div key={j} className="subcategory">

                    <button
                      className="subcategory-header"
                      onClick={() =>
                        setOpenSub(openSub === `${i}-${j}` ? null : `${i}-${j}`)
                      }
                    >
                      {sub.name}
                      {openSub === `${i}-${j}` ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {/* Image Preview */}
                    {openSub === `${i}-${j}` && (
                      <div className="doc-preview">
                        <img src={sub.image} alt={sub.name} />
                      </div>
                    )}

                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  )
}

export default ServicesList

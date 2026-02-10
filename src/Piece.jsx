import React from 'react'
import './style/Piece.css'

const Piece = ({ Big, Medium, ImagePath, align = "center" }) => {
  return (
    <section className={`piece-card ${align}`}>

      <div className="piece-content">
        <div className="piece-text">
          <h2 className="piece-big">{Big}</h2>
          <div className="piece-divider"></div>
          <p className="piece-medium">
            {Medium?.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
        </div>

        {ImagePath && (
          <img className="piece-img" src={ImagePath} alt="" />
        )}
      </div>

    </section>
  )
}

export default Piece
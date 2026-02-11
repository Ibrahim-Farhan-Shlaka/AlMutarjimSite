import React from 'react'
import './style/Piece.css'

const Piece = ({ Big, Medium, ImagePath, align = "left" }) => {
  return (
    <section className={`piece-card ${align}`}>
      <div className="piece-content">
        
        {Image && (<img src={ImagePath} alt="" className="piece-img" />)}

        <div className="piece-text">
          <h1 className="piece-big">{Big}</h1>
          <div className="piece-divider"></div>
          <p className="piece-medium">{Medium}</p>
        </div>

      </div>
    </section>
  )
}

export default Piece
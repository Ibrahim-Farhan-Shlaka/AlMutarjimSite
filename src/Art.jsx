import React from 'react'
import Artist from './Artist'
import './style/Art.css'

const Art = () => {
  return (
    <>
    <div className='Card'>
        <div className='ArtBox'>
          <Artist name='Copperseasons' username="@copperseasons" logo='csLogo.jpg' BG='ssBG.jpg'></Artist>
          <Artist name='ShapeShifter' username="@shapeshifterl" logo='ssLogo.png' BG='ssBG.jpg'></Artist>
          <Artist name='The Fool' username="@fool" logo='ssLogo.png' BG='ssBG.jpg'></Artist>
          <Artist name='The Magician' username="@magician" logo='ssLogo.png' BG='ssBG.jpg'></Artist>
          <Artist name='The Heirophant' username="@heirophant" logo='ssLogo.png' BG='ssBG.jpg'></Artist>
          <Artist name='The Heirophant' username="@heirophant" logo='ssLogo.png' BG='ssBG.jpg'></Artist>
          <Artist name='The Heirophant' username="@heirophant" logo='ssLogo.png' BG='ssBG.jpg'></Artist>
          <Artist name='The Heirophant' username="@heirophant" logo='ssLogo.png' BG='ssBG.jpg'></Artist>
        </div>
    </div>
    </>
  )
}

export default Art
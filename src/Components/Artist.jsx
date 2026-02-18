import React from 'react';
import sound from './sounds/card.mp3';

const Artist = (props) => {

  const skew = (Math.random() * 6) - 3;

  let cardAudio = new Audio(sound);

  function playAudio () {
    //cardAudio.play();
  }

  const myStyle = {
    backgroundImage: `url(${props.BG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    rotate: `${skew}deg`
  }

  return (
    <>
    <div className='ArtCard' style={myStyle} onMouseEnter={playAudio}>
        <h3>{props.name}</h3>
        <h4>{props.username}</h4>
        <img className='logo' src={props.logo}></img>
    </div>
    </>
  )
}

export default Artist
import React from 'react'

const Event = (props) => {
  return (
    <div className='Event'>
        <div className='Card'>
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    </div>
  )
}

export default Event
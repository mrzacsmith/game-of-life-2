import React from 'react'
import './cellStyle.css'

const Cell = (props) => {
  return (
    <div
      onClick={() => props.storeCell(position)}
      className={props.live ? 'containerLive' : 'containerDead'}
    ></div>
  )
}

export default Cell

import React from 'react'
import "./Grid.css"

const Grid = () => {
  return (
    <div className='main'>
      <div className='d1'>X O</div>
      <div className='d2'>X Turn</div>
      <div className='d3'>Turn</div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='block'></div>
      <div className='b1'>You</div>
      <div className='b2'>Ties</div>
      <div className='b3'>CPU</div>
    </div>
  )
}

export default Grid
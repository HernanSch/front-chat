import React from 'react'
import imagen from '../../Assets/boxtwo.JPG'
import './BoxTwo.scss'

const BoxOne = () => {
  return (
    <div className='boxtwo'>
      <div >
          <h3>Donde es fácil pasar el rato</h3>
          <p>Entra en un canal de voz cuando estés libre. Los amigos que tengas en tu servidor podrán ver que estás conectado y unirse al instante para hablar sin necesidad de llamar.</p>
      </div>
      <div>
          <img src={imagen} alt="Box" />
      </div>
    </div>   
  )
}

export default BoxOne
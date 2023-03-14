import React from 'react'
import imagen from '../../Assets/boxfour.JPG'
import './BoxFour.scss'

const BoxOne = () => {
  return (
    <div className='boxfour'>
      <div >
          <h3>UNA TECNOLOGÍA FIABLE PARA MANTENERSE EN CONTACTO</h3>
          <p>Gracias a la voz y el vídeo de baja latencia, parece que estáis en la misma habitación. Saluda a la cámara, accede a las transmisiones de los juegos de tus amigos o reuníos y disfrutad de una sesión de dibujo compartiendo la pantalla.</p>
      </div>
      <div>
          <img src={imagen} alt="Box" />
      </div>   
    </div>
  )
}

export default BoxOne
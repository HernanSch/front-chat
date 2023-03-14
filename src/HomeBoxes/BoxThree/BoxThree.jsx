import React from 'react'
import imagen from '../../Assets/boxthree.JPG'
import './BoxThree.scss'

const BoxOne = () => {
  return (
    <div className='boxthree'>
      <div>
        <img src={imagen} alt="Box" />
      </div>
      <div >
        <h3>De unos pocos fans a un montón</h3>
        <p>Establece cualquier comunidad con las herramientas de moderación y el acceso personalizado de miembros. Concédeles poderes especiales, crea canales privados y mucho más.</p>
      </div>
      
    </div>   
  )
}

export default BoxOne
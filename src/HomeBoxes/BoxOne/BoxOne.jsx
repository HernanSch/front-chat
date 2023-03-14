import React from 'react'
import imagen from '../../Assets/boxone.JPG'
import './BoxOne.scss'

const BoxOne = () => {
  return (
    <div className='boxone'>
        <div>
            <img src={imagen} alt="Box" />
        </div>   
        <div>
            <h3>Crea un lugar solo para miembros en el que encajes</h3>
            <p>Los servidores de Discord se organizan en canales ordenados por temas donde puedes colaborar, compartir o simplemente hablar de tu día sin monopolizar un chat de grupo.</p>
        </div> 
        
    </div>
  )
}

export default BoxOne
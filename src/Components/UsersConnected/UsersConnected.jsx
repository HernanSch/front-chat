import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersConnected.scss'
import API_URL from '../../Utils/Api';

const UsersConnected = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const obtenerUsuariosConectados = async () => {
      try {
        const response = await axios.get(`${API_URL}/usuarios/conectados`);
        setUsuarios(response.data.connectedUsers);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerUsuariosConectados();
  }, []);

  return (
    <div className='connected-container'>
     
      {showModal && (
        <div className='modal'>
          <h3>Usuarios conectados:</h3>
          <ul>
            {usuarios.map((usuario) => (
              <li key={usuario._id}>
                <span className="green-dot"></span>
                {usuario.user} 
              </li>
            ))}
          </ul>
          <button onClick={() => setShowModal(false)}>Cerrar</button>
        </div>
      )}
      <button onClick={() => setShowModal(true)}>Conectados</button>
    </div>
  );
};

export default UsersConnected;

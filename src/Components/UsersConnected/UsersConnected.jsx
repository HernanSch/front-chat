import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsersConnected.scss'
import API_URL from '../../Utils/Api';

const UsersConnected = () => {
  const [usuarios, setUsuarios] = useState([]);

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
    <div className='connected_container'>
      <h2>Conectados</h2>
      <ul>
        {usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <li key={usuario._id}>
              <span className="green-dot"></span> {/* Añade una bola verde */}
              {usuario.user} 
            </li>
          ))
        ) : (
          <li>No hay usuarios conectados</li>
        )}
      </ul>
    </div>

  );
};

export default UsersConnected;

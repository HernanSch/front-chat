import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersConnected = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuariosConectados = async () => {
      try {
        const response = await axios.get('http://localhost:8000/usuarios/conectados');
        setUsuarios(response.data.connectedUsers);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerUsuariosConectados();
  }, []);

  return (
    <div>
      <h2>Usuarios Conectados:</h2>
      <ul>
        {usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <li key={usuario._id}>
              {usuario.user} ({usuario.email})
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

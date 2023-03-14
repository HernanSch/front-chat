import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const FormularioRegistro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const register = () => {
      axios.post('http://localhost:8000/usuarios/register', { email: email, password: password })
        .then((response) => {
          setMessage(response.data);
          setEmail('');
          setPassword('');
        })
        .catch((error) => {
          console.log(error);
        });
    };
  

  
    return (
      <div className="App">
        <h1>Chat Máximo Décimo Meridio</h1>
        <form>
          <input
            type="text"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={register}>
            Registrarse
          </button>

        </form>
        <p>{message}</p>
      </div>
    );
}

export default FormularioRegistro
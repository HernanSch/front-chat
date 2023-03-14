import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Registro.scss'


const Registro = () => {
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
      <div className="registro">
        <div className='box-register'>
          <h1>Registro de usuarios</h1>
          <form>
            <p>Correo electrónico</p>
            <input
              type="text"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>Password</p>
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
      
      </div>
    );
}

export default Registro
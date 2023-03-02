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
  
    const login = () => {
      axios.post('http://localhost:8000/usuarios/login', { email: email, password: password })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          setMessage('Inicio de sesión exitoso');
          setEmail('');
          setPassword('');
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const logout = () => {
      localStorage.removeItem('token');
      setMessage('Sesión cerrada');
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
          <button type="button" onClick={login}>
            Iniciar sesión
          </button>
          <button type="button" onClick={logout}>
            Cerrar sesión
          </button>
        </form>
        <p>{message}</p>
      </div>
    );
}

export default FormularioRegistro
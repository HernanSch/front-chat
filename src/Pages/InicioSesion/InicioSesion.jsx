import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './InicioSesion.scss'
import { Link } from 'react-router-dom';

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const login = () => {
    axios
      .post('http://localhost:8000/usuarios/login', { email: email, password: password })
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
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Bienvenido de nuevo</h2>
          <p>Inicie sesión en su cuenta</p>
        </div>
        <form>
          <div className="login-input">
            <label htmlFor="email">Correo electrónico</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="login-input">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="login-button" type="button" onClick={login}>
            Iniciar sesión
          </button>
          <button className="login-button" type="button" onClick={logout}>
            Cerrar sesión
          </button>
        </form>
        <p className="login-message">{message}</p>
        <div className='register-box'>
        <label htmlFor="email">¿Necesitas una cuenta?</label>
        <Link to="/registro">
            <button className='register-button'>Registrarse</button>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default InicioSesion;
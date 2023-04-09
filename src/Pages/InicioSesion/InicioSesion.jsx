import React, { useState } from 'react';
import axios from 'axios';
import './InicioSesion.scss';
import { Link } from 'react-router-dom';
import { saveEmailToCookie, saveUserToCookie, savePhotoToCookie, saveUserIdToCookie } from '../../Utils/CookieUtils'; 
import API_URL from '../../Utils/Api';

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const save = (user) => {
    saveEmailToCookie(user.email);
    saveUserToCookie(user.user);
    savePhotoToCookie(user.photo);
    saveUserIdToCookie(user._id);
  }

  const login = async () => {
    try {
      const response = await axios.post(`${API_URL}/usuarios/login`, {
        email: email,
        password: password,
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setMessage('Inicio de sesión exitoso');
      setEmail('');
      setPassword('');

      // Actualiza el estado de conexión del usuario en la base de datos
      await axios.put(`${API_URL}/usuarios/updateusers/${user._id}`, {
        connected: true,
      });

      // Guarda los datos en cookies
      save(user);
      document.cookie = `token=${token}; path=/; secure; SameSite=strict`;
    } catch (error) {
      setMessage('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
      console.log(error);
    }
  };

  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const handleLogout = () => {
    axios.post(`${API_URL}/usuarios/logout`)
      .then(response => {
        setIsLoggedOut(true);
      })
      .catch(error => {
        console.log(error);
      });
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
          <button className="login-button" type="button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </form>
        <p className="login-message">{message}</p>
        <div className="register-box">
          <label htmlFor="email">¿Necesitas una cuenta?</label>
          <Link to="/registro">
            <button className="register-button">Registrarse</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InicioSesion;

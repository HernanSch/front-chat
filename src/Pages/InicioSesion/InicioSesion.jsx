import React, { useState } from 'react';
import axios from 'axios';
import './InicioSesion.scss';
import { Link } from 'react-router-dom';
import { saveEmailToCookie, saveUserToCookie, savePhotoToCookie, getIDFromCookie  } from '../../Utils/CookieUtils'; 

const InicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:8000/usuarios/login', {
        email: email,
        password: password,
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setMessage('Inicio de sesión exitoso');
      setEmail('');
      setPassword('');

      // Actualiza el estado de conexión del usuario en la base de datos
      await axios.put(`http://localhost:8000/usuarios/updateusers/${user._id}`, {
        connected: true,
      });

      // Guarda los datos en cookies
      saveEmailToCookie(email);
      saveUserToCookie(user.user);
      savePhotoToCookie(user.photo);
      document.cookie = `token=${token}; path=/; secure; SameSite=strict`;
    } catch (error) {
      setMessage('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
      console.log(error);
    }
  };


  // Cierra sesion y modifica el valor de connected a False pero genera un error en la consola
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      const user_id = getIDFromCookie(); // use getIDFromCookie here

      const response = await axios.put(`http://localhost:8000/usuarios/updateusers/${user_id}`, {
        connected: false,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // ...
    } catch (error) {
      console.error('Error al cerrar sesión: ', error);
    }
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

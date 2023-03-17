import React from 'react';
import './LogoutButton.scss'

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    // Aquí podrías agregar alguna otra lógica de cierre de sesión, como redirigir a la página de inicio de sesión.
    window.location.href = 'http://localhost:3000/inicio';
  }

  return (
    <div className="logout-button-container">
      <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
    </div>
  );
}

export default LogoutButton;




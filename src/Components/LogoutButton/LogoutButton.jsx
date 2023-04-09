import React, { useState } from 'react';
import axios from 'axios';
import socket from '../../Utils/Socket'
import API_URL from '../../Utils/Api';
import { getUserIdFromCookie } from '../../Utils/CookieUtils';
import './LogoutButton.scss'

function LogoutButton() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [socketConnected, setSocketConnected] = useState(true);
  

  const handleLogout = async () => {
    const userId = getUserIdFromCookie('userId');
    
    await axios.put(`${API_URL}/usuarios/updateusers/${userId}`, {
      connected: false,
    });
  
    axios.post(`${API_URL}/usuarios/logout`)
      .then(response => {
        setIsLoggedOut(true);
        socket.disconnect();
        setSocketConnected(false);
        console.log('Socket.io disconnected.');
        window.location.reload(); // recarga la página después de hacer el put
      })
      .catch(error => {
        console.log(error);
      });
  };
    
  return (
    <div>
      {isLoggedOut ? (
        <p>You have been logged out.</p>
      ) : (
        <div>
          {socketConnected ? (
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          ) : (
            <p>Socket.io desconectado.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default LogoutButton;

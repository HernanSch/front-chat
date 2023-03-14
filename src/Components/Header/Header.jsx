import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Discord Fake</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/registro">Registro</Link></li>          
          <li><Link to="/rooms">Rooms Chat</Link></li>
          <li><Link to="/inicio">Inicio</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

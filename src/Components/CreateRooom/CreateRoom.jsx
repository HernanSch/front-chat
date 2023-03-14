import React, { useState } from 'react';
import io from 'socket.io-client';

const ENDPOINT = 'http://localhost:8000'; // Cambiar por la URL del servidor Socket.io

function CreateRoom() {
  const [roomName, setRoomName] = useState('');

  const handleCreateRoom = () => {
    if (roomName) {
      const socket = io(ENDPOINT);
      socket.emit('createRoom', roomName);
      // Aquí puede hacer cualquier otra cosa que necesite hacer después de crear la sala.
    }
  };

  return (
    <div>
      <label htmlFor="roomName">Nombre de la sala:</label>
      <input
        type="text"
        id="roomName"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button onClick={handleCreateRoom}>Crear sala</button>
    </div>
  );
}

export default CreateRoom;

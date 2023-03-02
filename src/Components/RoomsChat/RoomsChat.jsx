import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

function Rooms() {
  const [currentRoom, setCurrentRoom] = useState(null);

  function joinRoom(roomId, username) {
    socket.emit('joinRoom', roomId, username);
    setCurrentRoom(roomId);
  }

  return (
    <div>
      <h1>Salas de chat</h1>
      <RoomSelection joinRoom={joinRoom} />
      {currentRoom && <ChatRoom roomId={currentRoom} />}
    </div>
  );
}

function RoomSelection({ joinRoom }) {
  return (
    <div>
      <button onClick={() => joinRoom('room1', 'John')}>Sala de chat 1</button>
      <button onClick={() => joinRoom('room2', 'Mary')}>Sala de chat 2</button>
      <button onClick={() => joinRoom('room3', 'Tom')}>Sala de chat 3</button>
    </div>
  );
}

function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  function sendMessage(message) {
    socket.emit('chatMessage', roomId, message);
  }

  const [inputText, setInputText] = useState('');

  return (
    <div>
      <h2>Sala de chat {roomId}</h2>
      <div style={{ height: '300px', overflowY: 'scroll' }}>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <form onSubmit={(e) => { e.preventDefault(); sendMessage(inputText); setInputText(''); }}>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Rooms;

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Rooms.scss'

const socket = io('http://localhost:8000');

function Rooms() {
  const [currentRoom, setCurrentRoom] = useState(null);
  const username = getCookie('username');
  const email = getCookie('email');

  function joinRoom(roomId) {
    if (currentRoom) {
      socket.emit('leaveRoom', currentRoom, username);
    }
    socket.emit('joinRoom', roomId, username);
    setCurrentRoom(roomId);
  }

  return (
    <div>
      <h1>Salas de chat</h1>
      <RoomSelection joinRoom={joinRoom} />
      {currentRoom && <ChatRoom roomId={currentRoom} username={username} email={email} />}
    </div>
  );
}

function RoomSelection({ joinRoom }) {
  return (
    <div>
      <button onClick={() => joinRoom('room1')}>Sala de chat 1</button>
      <button onClick={() => joinRoom('room2')}>Sala de chat 2</button>
      <button onClick={() => joinRoom('room3')}>Sala de chat 3</button>
    </div>
  );
}

function ChatRoom({ roomId, username, email }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('joinRoom', roomId);
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socket.emit('leaveRoom', roomId);
      socket.off('message');
    };
  }, [roomId]);

  function sendMessage(message) {
    socket.emit('chatMessage', roomId, `${username} (${email}): ${message}`);
  }

  const [inputText, setInputText] = useState('');

  return (
    <div>
      <h2>Sala de chat {roomId}</h2>
      <div className='chat-messages' style={{ height: '300px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(inputText);
          setInputText('');
        }}
      >
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

export default Rooms;

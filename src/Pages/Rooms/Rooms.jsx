import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Rooms.scss'
import { getUserFromCookie, getEmailFromCookie, getPhotoFromCookie } from '../../Utils/CookieUtils';
import LogoutButton from '../../Components/LogoutButton/LogoutButton';
import UsersConnected from '../../Components/UsersConnected/UsersConnected';

const socket = io('http://localhost:8000');

function Rooms() {
  const [currentRoom, setCurrentRoom] = useState(null);
  const username = getUserFromCookie('user');
  const email = getEmailFromCookie('email');
  const photo = getPhotoFromCookie('photo');

  function joinRoom(roomId) {
    if (currentRoom) {
      socket.emit('leaveRoom', currentRoom, username);
    }
    socket.emit('joinRoom', roomId, username);
    setCurrentRoom(roomId);
  }

  return (
    <div >
      <div>
        <UsersConnected></UsersConnected>
      </div>
      <div >
        <LogoutButton></LogoutButton>
      </div>
      <div className='first-container'>      
        <div>        
          <h1>Salas de chat</h1>
          <RoomSelection joinRoom={joinRoom} />
          {currentRoom && <ChatRoom roomId={currentRoom} username={username} email={email} photo={photo} />}
        </div>
        
      </div>
    </div>
  );
}

function RoomSelection({ joinRoom }) {
  return (
    <div>
      <button className='rooms-button' onClick={() => joinRoom('room1')}>Sala de chat 1</button>
      <button className='rooms-button' onClick={() => joinRoom('room2')}>Sala de chat 2</button>
      <button className='rooms-button' onClick={() => joinRoom('room3')}>Sala de chat 3</button>
    </div>
  );
}

function ChatRoom({ roomId, username, email, photo }) {
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
    const userString = username ? ` ${getUserFromCookie('user')}` : '';
    
    socket.emit('chatMessage', roomId,`${userString}: ${message}`);
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
        <div className='user-info'>
          {photo && <img className='profile-pic' src={photo} alt='profile pic' />}
          {username && <div className='username'>{username}</div>}
        </div>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
      
    </div>
  );
}

export default Rooms;

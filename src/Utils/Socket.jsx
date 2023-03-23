import io from 'socket.io-client';

const socket = io("https://back-chat-one.vercel.app:9000/", {
  reconnection: false // Desactiva la reconexión automática
});

export default socket;

import io from 'socket.io-client';

const socket = io("https://front-chat-gamma.vercel.app:9000/", {
  reconnection: false // Desactiva la reconexión automática
});

export default socket;

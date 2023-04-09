import io from 'socket.io-client';

const socket = io("http://localhost:9000", {
  reconnection: false // Desactiva la reconexión automática
});

export default socket;

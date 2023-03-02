import React from 'react';
import axios from 'axios';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: ''
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // haz una llamada al servidor para obtener los mensajes existentes
    axios.get('http://localhost:8000/mensajes')
      .then(response => {
        this.setState({ messages: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  sendMessage(message) {
    axios.post('http://localhost:8000/mensajes', { message })
      .then(response => {
        // actualiza el estado con el nuevo mensaje
        this.setState(prevState => ({
          messages: [...prevState.messages, response.data]
        }));
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const message = this.state.message;
    // envía el mensaje al servidor
    this.sendMessage(message);
    // borra el contenido del formulario
    this.setState({ message: '' });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message.text}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.message}
            onChange={event => this.setState({ message: event.target.value })}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default ChatBox;

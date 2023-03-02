import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import moment from 'moment'

const socket = io.connect('http://localhost:8000')

const Chat = () => {
  const [room, setRoom] = useState("1")
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // Join the room on mount
    socket.emit("join_room", room)

    // Listen for incoming messages
    socket.on("receive_message", (data) => {
      const newMessage = {
        body: data.message,
        sender: data.sender,
        timestamp: data.timestamp
      }
      setMessages((messages) => [...messages, newMessage])
    })

    // Clean up event listeners on unmount
    return () => {
      socket.off("receive_message")
    }
  }, [room])

  const sendMessage = (event) => {
    event.preventDefault()
    if (!message.trim()) {
      return
    }
    socket.emit("send_message", {
      message: message,
      room: room
    })
    const newMessage = {
      body: message,
      sender: "me",
      timestamp: moment().format("YYYY-MM-DDTHH:mm:ss.SSSZ")
    }
    setMessages((messages) => [...messages, newMessage])
    setMessage('')
  }

  return (
    <>
      <ul className='chat-page__messages'>
        {messages.map((message, index) =>
          <li className={`chat-page__messages__${message.sender}-li`} key={index}>
            <p className='chat-page__messages__my-li__message'>
              {message.body}
              <span className='chat-page__messages__my-li__timestamp'>
                {new Date(message.timestamp).toLocaleTimeString()}
              </span>
            </p>
          </li>
        )}
      </ul>

      <form className='chat-page__text' onSubmit={sendMessage}>
        <input
          className='chat-page__text_input'
          type='text'
          placeholder='Escriba su mensaje...'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button className='chat-page__text_btn'>Enviar</button>
      </form>
    </>
  )
}

export default Chat

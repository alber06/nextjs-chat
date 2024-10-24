import { Message } from '@/global/types'
import { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const socketIo = io()

    socketIo.on('connect', () => {
      setIsConnected(true)
    })

    socketIo.on('disconnect', () => {
      setIsConnected(false)
    })

    socketIo.on('chat message', (msg: Message) => {
      setMessages((prevMessages) => [...prevMessages, msg])
    })

    setSocket(socketIo)

    return () => {
      socketIo.disconnect()
    }
  }, [])

  const sendMessage = (message: Message) => {
    if (socket) {
      socket.emit('chat message', message)
    }
  }

  return { isConnected, messages, sendMessage }
}

export default useSocket

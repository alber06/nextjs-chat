'use client'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MessageDisplay from '@/components/MessageDisplay/MessageDisplay'
import MessageForm from '@/components/MessageForm/MessageForm'
import { Header } from '@/components/Header'
import { Message } from '@/global/types'
import useSocket from '@/hooks/useSocket'

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const { isConnected, messages: socketMessages } = useSocket()

  useEffect(() => {
    // Process all new socket messages
    const newMessages = socketMessages.map((msg) => ({
      ...msg,
      id: msg.id || uuidv4(),
      isSent: false
    }))

    setMessages((prevMessages: Message[]) => {
      // Filter out any duplicates based on the id
      const uniqueNewMessages = newMessages.filter(
        (newMsg) => !prevMessages.some((prevMsg) => prevMsg.id === newMsg.id)
      )

      return [...prevMessages, ...uniqueNewMessages]
    })
  }, [socketMessages, setMessages])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <Header isConnected={isConnected} />

        <MessageDisplay messages={messages} />
        <MessageForm isConnected={isConnected} setMessages={setMessages} />
      </div>
    </main>
  )
}

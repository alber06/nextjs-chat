import { useEffect, useRef } from 'react'
import { Message } from '@/global/types'

const MessageDisplay = ({ messages }: { messages: Message[] }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="mb-4 h-64 overflow-y-auto border border-gray-300 rounded p-2">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`mb-2 ${msg.isSent ? 'text-right' : 'text-left'}`}
        >
          <span
            className={`inline-block p-2 rounded-lg ${msg.isSent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {msg.text}
          </span>
          <div className="text-xs text-gray-500 mt-1">
            {new Date(msg.timestamp).toLocaleTimeString()}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessageDisplay

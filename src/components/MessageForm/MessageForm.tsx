import { Dispatch, SetStateAction, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSocket } from '@/hooks'
import { Message } from '@/global/types'

const MessageForm = ({
  setMessages,
  isConnected
}: {
  setMessages: Dispatch<SetStateAction<Message[]>>
  isConnected: boolean
}) => {
  const { sendMessage } = useSocket()
  const [inputMessage, setInputMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      const newMessage = {
        id: uuidv4(),
        text: inputMessage,
        timestamp: new Date(),
        isSent: true
      }
      sendMessage(newMessage)
      setMessages((prev) => [...prev, newMessage])
      setInputMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        className="flex-grow mr-2 p-2 border border-gray-300 rounded"
        placeholder="Type a message..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={!isConnected}
      >
        Send
      </button>
    </form>
  )
}

export default MessageForm

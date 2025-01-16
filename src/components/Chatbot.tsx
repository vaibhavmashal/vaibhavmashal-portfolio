'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, X, MessageCircle } from 'lucide-react'

type Message = {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const typewriterEffect = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="inline-block animate-typewriter" style={{ animationDelay: `${index * 50}ms` }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const assistantMessage: Message = { role: 'assistant', content: data.response }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error in chat:', error)
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-white hover:text-emerald-500 transition-colors z-50"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white dark:bg-gray-800 shadow-xl z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h2 className="text-xl font-semibold">Chat with Vaibhav's AI Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close chat"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-3/4 p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {message.role === 'assistant' ? typewriterEffect(message.content) : message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-3/4 p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  <div className="w-5 h-5 border-t-2 border-gray-900 dark:border-gray-100 rounded-full animate-spin"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Vaibhav's skills, projects, or experience..."
                className="flex-grow p-2 rounded-md border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emrald-500 dark:bg-gray-700 dark:text-white"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-emerald-500 text-white p-2 rounded-md hover:bg-emerald-500 transition-colors disabled:opacity-50"
                aria-label="Send message"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                ) : (
                  <Send size={20} />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

// Add the following CSS to your global styles or Tailwind CSS configuration
// .animate-typewriter {
//   opacity: 0;
//   animation: typewriter 0.05s forwards;
// }
// @keyframes typewriter {
//   to {
//     opacity: 1;
//   }
// }


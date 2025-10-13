'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import chatData, { ChatDataEntry } from '@/data/chatData'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hello! I'm your USPTO trademark assistant. Ask me anything about trademark registration!",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Keyword matching algorithm
  const findMatchingResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim()
    
    // Find matching entries based on keywords
    const matches: ChatDataEntry[] = []
    
    for (const entry of chatData) {
      for (const keyword of entry.keywords) {
        if (input.includes(keyword.toLowerCase())) {
          matches.push(entry)
          break // Found a match for this entry, move to next
        }
      }
    }

    // If matches found, pick random response from random matched entry
    if (matches.length > 0) {
      const randomEntry = matches[Math.floor(Math.random() * matches.length)]
      const randomResponse = randomEntry.responses[Math.floor(Math.random() * randomEntry.responses.length)]
      return randomResponse
    }

    // Enhanced fallback responses with contact information if no match found
    const fallbackResponses = [
      "I apologize, but I don't have specific information on that topic. 🤔\n\nHowever, our expert team can help you directly:\n\n📞 Call us: 1-800-TRADEMARK\n📧 Email: info@usptolegal.com\n💬 Live Chat: Available now\n🕐 Hours: Monday-Friday, 9 AM - 6 PM EST\n\nYou can also fill out our Contact Us form on the website for a detailed response within 24 hours!",
      
      "I'm not quite sure about that specific question. Let me connect you with our management team who can provide detailed assistance! 👨‍💼\n\n📌 Contact Options:\n• Phone: 1-800-TRADEMARK (Toll-free)\n• Email: info@usptolegal.com\n• Contact Form: Visit our 'Contact Us' page\n• Schedule Consultation: Free 15-minute call\n\nOur response time is typically under 2 hours during business hours!",
      
      "Hmm, that's a bit outside my knowledge area. But don't worry - our trademark specialists are here to help! 🎯\n\n✅ Contact Our Team:\n📞 Phone Support: 1-800-TRADEMARK\n📧 Email Support: info@usptolegal.com\n📝 Contact Form: Available on our website\n🗓️ Free Consultation: Book online\n\n💡 Business Hours: Mon-Fri, 9 AM - 6 PM EST\n⚡ Emergency? Leave a message and we'll respond ASAP!\n\nWe typically respond within 1-2 hours!",
      
      "I don't have specific information about that, but our management team specializes in all trademark matters and would love to help! 💼\n\n📞 Speak with an Expert:\n• Call: 1-800-TRADEMARK\n• Email: info@usptolegal.com\n• Live Chat: Available during business hours\n• Contact Form: Get a detailed response within 24 hours\n\n🕐 Office Hours: Monday-Friday, 9 AM - 6 PM EST\n🌙 After hours? Fill out our contact form and we'll reach out first thing in the morning!\n\nYour trademark protection is our priority!",
      
      "That's a great question, but I need to connect you with our trademark specialists for the most accurate answer! 🎓\n\n💬 Get Expert Help:\n📞 Phone: 1-800-TRADEMARK (Direct line)\n📧 Email: info@usptolegal.com\n📝 Contact Us Form: www.usptolegal.com/contact\n🎯 Book Free Consultation: Schedule online\n\nWhy contact us?\n✓ Personalized advice for your situation\n✓ Detailed answers from experienced attorneys\n✓ Free initial consultation available\n✓ Fast response time (under 2 hours)\n\nWe're here to help! 🚀",
      
      "I'm still learning about that topic! For the most comprehensive answer, I recommend speaking with our trademark experts directly. 📚\n\n🤝 Connect with Management:\n📞 Call us toll-free: 1-800-TRADEMARK\n📧 Email our team: info@usptolegal.com\n💻 Fill out Contact Form: Quick response guaranteed\n📅 Schedule a Call: Choose a time that works for you\n\n⏰ Available: Monday-Friday, 9 AM - 6 PM EST\n📱 Prefer text? Send your question via our contact form and we'll email you back!\n\nOur team has handled 10,000+ trademark cases - we've got answers!",
      
      "I want to make sure you get the most accurate information! Please reach out to our management team for detailed assistance. 🔍\n\n📞 Contact Information:\n• Toll-Free Phone: 1-800-TRADEMARK\n• Email Support: info@usptolegal.com\n• Online Contact Form: www.usptolegal.com/contact\n• Free Consultation Booking: Available online\n\n🎯 What to Expect:\n✓ Response within 1-2 hours (business hours)\n✓ Expert trademark attorneys\n✓ Personalized guidance\n✓ No obligation consultation\n\n💡 Quick Tip: Fill out our contact form with your question for the most detailed response!\n\nWe look forward to helping you protect your brand! ™️",
      
      "I don't want to give you incorrect information on that topic. Our trademark specialists can provide you with expert guidance! 👨‍⚖️\n\n📞 Reach Our Expert Team:\n• Phone: 1-800-TRADEMARK\n• Email: info@usptolegal.com\n• Contact Form: Available 24/7\n• Live Support: Mon-Fri, 9 AM - 6 PM EST\n\n💼 Why Contact Us?\n✓ 20+ years of trademark experience\n✓ 99% application success rate\n✓ Free initial consultation\n✓ Same-day responses available\n\n📝 Recommended: Fill out our detailed contact form so we can prepare a comprehensive answer tailored to your specific situation!\n\nYour brand deserves expert protection! 🛡️"
    ]

    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
  }

  // Handle sending message
  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Get bot response
    const botResponse = findMatchingResponse(inputValue)
    
    // Add bot message after short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)

    setInputValue('')
  }

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Widget Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white rounded-full p-4 shadow-2xl hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚖️</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">USPTO Assistant</h3>
                  <p className="text-xs text-blue-100">Online • Ask me anything!</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                      {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about trademarks..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Press Enter to send • Powered by USPTO Legal
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

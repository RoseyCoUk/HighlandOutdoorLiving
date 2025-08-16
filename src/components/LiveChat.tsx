import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Phone, Mail, Clock } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi! 👋 I'm here to help with your outdoor living project. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Auto-responses based on keywords
  const autoResponses = {
    'quote': "I'd be happy to help you get a quote! You can fill out our quote form or call us directly at 07730 510368. Would you like me to guide you through the process?",
    'sauna': "Our saunas are steel-framed, fully-insulated, and built to last. They heat up in just 15 minutes and come with a 5-year warranty. Would you like to see some examples?",
    'grill pod': "Our grill pods are weatherproof outdoor kitchens with Mont Alpi appliances. They're perfect for year-round entertaining. Should I show you our gallery?",
    'shed': "We build custom sheds for storage, workshops, or garden offices. All our sheds are bespoke to your space and requirements. What type of shed are you looking for?",
    'price': "Our prices vary based on size, materials, and specifications. The best way to get an accurate quote is to call us at 07730 510368 or fill out our quote form. Would you like me to help you with either option?",
    'delivery': "We deliver and install throughout Northern Ireland and Ireland. Our team handles everything from delivery to final setup. Where are you located?",
    'warranty': "All our products come with a 5-year warranty. We use premium materials and expert craftsmanship to ensure long-lasting quality.",
    'contact': "You can reach us at:\n📞 07730 510368\n📧 nigelmcg@gmail.com\n📍 Maghera, Northern Ireland\n\nWe're available Mon-Fri 8am-6pm, Sat 9am-4pm"
  };

  // Business hours check
  const isBusinessHours = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    
    if (day === 0) return false; // Sunday
    if (day === 6) return hour >= 9 && hour < 16; // Saturday 9am-4pm
    return hour >= 8 && hour < 18; // Mon-Fri 8am-6pm
  };

  // Generate bot response
  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for keywords
    for (const [keyword, response] of Object.entries(autoResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    // Default responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! How can I help you with your outdoor living project today?";
    }

    if (lowerMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    }

    return "Thanks for your message! For detailed information and quotes, I'd recommend calling us at 07730 510368 or filling out our quote form. Our team will be happy to help!";
  };

  // Handle message send
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // 1-3 second delay
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 bg-[#C5B8AB] text-[#222126] rounded-full shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-300 floating-button floating-button-left ${
          isOpen ? 'scale-0' : 'scale-100'
        } bottom-4 left-4 sm:bottom-6 sm:left-6`}
        style={{ width: '56px', height: '56px' }}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 mx-auto" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 bottom-4 left-4 sm:bottom-6 sm:left-6">
          {/* Header */}
          <div className="bg-[#C5B8AB] text-[#222126] p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <div>
                <h3 className="font-semibold">NMG Support</h3>
                <p className="text-xs opacity-80">
                  {isBusinessHours() ? '🟢 Online' : '🔴 Offline'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#222126] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div 
            id="chat-messages"
            className="h-80 overflow-y-auto p-4 space-y-4"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#C5B8AB] text-[#222126]'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          {!isBusinessHours() && (
            <div className="px-4 py-2 bg-yellow-50 border-t border-yellow-200">
              <p className="text-xs text-yellow-800 mb-2">
                <Clock className="w-3 h-3 inline mr-1" />
                Outside business hours. We'll respond when we're back online.
              </p>
              <div className="flex space-x-2">
                <a
                  href="tel:+447730510368"
                  className="flex items-center text-xs text-blue-600 hover:text-blue-800"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  Call Now
                </a>
                <a
                  href="mailto:nigelmcg@gmail.com"
                  className="flex items-center text-xs text-blue-600 hover:text-blue-800"
                >
                  <Mail className="w-3 h-3 mr-1" />
                  Email
                </a>
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5B8AB] focus:border-transparent"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-[#C5B8AB] text-[#222126] px-3 py-2 rounded-lg hover:bg-[#C5B8AB]/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat; 
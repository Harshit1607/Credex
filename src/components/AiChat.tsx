import { useState, useEffect } from 'react';

// Small component for the loading indicator
const LoadingAnimation = () => {
  // Add the animation styles to the document head once
  useEffect(() => {
    const styleId = 'dot-flashing-animation-styles';
    if (!document.getElementById(styleId)) {
      const styleEl = document.createElement('style');
      styleEl.id = styleId;
      styleEl.textContent = `
        .dot-flashing {
          position: relative;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #BE4564;
          color: #BE4564;
          animation: dot-flashing 1s infinite linear alternate;
          animation-delay: 0.5s;
        }
        .dot-flashing::before, .dot-flashing::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
        }
        .dot-flashing::before {
          left: -15px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #BE4564;
          color: #BE4564;
          animation: dot-flashing 1s infinite alternate;
          animation-delay: 0s;
        }
        .dot-flashing::after {
          left: 15px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #BE4564;
          color: #BE4564;
          animation: dot-flashing 1s infinite alternate;
          animation-delay: 1s;
        }
        @keyframes dot-flashing {
          0% { background-color: #BE4564; }
          50%, 100% { background-color: rgba(190, 69, 100, 0.2); }
        }
      `;
      document.head.appendChild(styleEl);
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-12">
      <div className="dot-flashing"></div>
    </div>
  );
};

// This component can be used if you want to eventually integrate with OpenAI API
const ChatService = {
  async sendMessage(message: string): Promise<string> {
    // This is where you would integrate with the actual OpenAI API
    // For now, we'll just return mock responses
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const lowercaseMessage = message.toLowerCase();
    
    if (lowercaseMessage.includes('license') && lowercaseMessage.includes('sell')) {
      return "To sell your license, navigate to 'My Account' > 'Licenses' and click the 'Transfer' button next to the license you wish to sell. Follow the prompts to complete the transaction.";
    } else if (lowercaseMessage.includes('payment') || lowercaseMessage.includes('pay')) {
      return "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Enterprise customers can also request invoice-based payments.";
    } else if (lowercaseMessage.includes('refund') || lowercaseMessage.includes('money back')) {
      return "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, please contact our support team with your order details to process your refund.";
    } else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('support')) {
      return "You can reach our support team via email at support@company.com or by phone at (555) 123-4567, Monday through Friday, 9 AM to 5 PM Eastern Time.";
    } else if (lowercaseMessage.includes('password') || lowercaseMessage.includes('reset')) {
      return "To reset your password, click the 'Forgot Password' link on the login page and follow the instructions sent to your email.";
    }
    
    // Default fallback response
    return "I don't have specific information about that. Please contact our customer support team for assistance with your question.";
  }
};

// Main component that will integrate with your OpenAI implementation later
const AIChat = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<{type: 'user' | 'bot', text: string}[]>([
    {type: 'bot', text: 'Hello! How can I help you today?'}
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Auto-scroll to bottom of chat when new messages appear
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, {type: 'user', text: userMessage}]);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Get response from AI service
      const response = await ChatService.sendMessage(userMessage);
      
      // Add AI response
      setMessages(prev => [...prev, {type: 'bot', text: response}]);
    } catch (error) {
      // Handle errors
      setMessages(prev => [...prev, {type: 'bot', text: 'Sorry, I encountered an error. Please try again later.'}]);
    } finally {
      setIsTyping(false);
    }
  };
  
  const handleQuickQuestion = async (question: string) => {
    // Add user message
    setMessages(prev => [...prev, {type: 'user', text: question}]);
    
    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Get response from AI service
      const response = await ChatService.sendMessage(question);
      
      // Add AI response
      setMessages(prev => [...prev, {type: 'bot', text: response}]);
    } catch (error) {
      // Handle errors
      setMessages(prev => [...prev, {type: 'bot', text: 'Sorry, I encountered an error. Please try again later.'}]);
    } finally {
      setIsTyping(false);
    }
  };
  
  const toggleChat = () => {
    setIsMinimized(!isMinimized);
  };
  
  // Sample quick questions
  const quickQuestions = [
    "How do I sell my license?",
    "What payment methods do you accept?",
    "What is your refund policy?",
    "How do I reset my password?",
    "How do I contact support?"
  ];
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {isMinimized ? (
        <button 
          onClick={toggleChat}
          className="bg-[#BE4564] hover:bg-[#BE4556] text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
          aria-label="Open chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 md:w-96 max-h-[80vh] border border-gray-200">
          {/* Chat Header */}
          <div className="bg-[#BE4564] text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-medium">Customer Support</h3>
            <button 
              onClick={toggleChat} 
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Chat Messages */}
          <div 
            id="chat-messages"
            className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 max-h-96"
          >
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`max-w-[85%] p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-[#BE4564] ml-auto' 
                    : 'bg-gray-100 text-black'
                }`}
              >
                {message.text}
              </div>
            ))}
            
            {isTyping && (
              <div className="bg-gray-100 p-3 rounded-lg max-w-[85%] inline-block">
                <LoadingAnimation />
              </div>
            )}
          </div>
          
          {/* Quick Questions (only show initially) */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Frequently asked questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-gray-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-l-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#BE4564] text-black"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className={`px-4 py-2 bg-[#BE4564] text-white rounded-r-lg ${
                  !inputValue.trim() || isTyping 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-[#BE4564]'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIChat;
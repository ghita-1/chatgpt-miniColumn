import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    setMessages([...messages, { sender: 'user', text: userInput }]);
    setUserInput('');

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      const botResponse = generateBotResponse(userInput);
      setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: botResponse }]);
    }, 500);
  };

  const generateBotResponse = (userMessage) => {
    // Replace this with your actual bot logic
    switch (userMessage.toLowerCase()) {
      case 'hy':
        return "I'm an AI assistant. How can I help you with your question?";
      case 'hhhh':
        return "I'm an AI assistant. How can I help you with your question?";
      default:
        return "I'm not sure I understand. Can you please rephrase your question?";
    }
  };

  return (
    <>
     
      
    
    <div className="flex flex-col items-center h-screen w-screen bg-white">
    
      <div className="w-[50%] mt-8 p-4 bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-200 flex items-center ">
          <span className="text-gray-700 font-bold">Chatbot</span>
          <span className="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm-1 16v2h2v-2zm1.23-2.6a4 4 0 01-.92-7.4 3.92 3.92 0 012.23-.4 4 4 0 013 6 6.73 6.73 0 00-1.69 3.11 1.4 1.4 0 01-2.7 0A7.67 7.67 0 0112.23 13.4z" />
            </svg>
          </span>
        </div>
        {messages.map((message, index) => (
          <div key={index} className={`p-2 mb-2 rounded-lg ${message.sender === 'bot' ? 'bg-gray-200' : 'bg-black text-gray-50'}`}>
            <span className="font-bold">{message.sender === 'bot' ? 'Bot:' : 'You:'}</span> {message.text}
          </div>
        ))}
        <div className="flex mt-4">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Type a message..."
          />
           <button
            onClick={handleSendMessage}
            className=" p-2 rounded-lg bg-black text-white"
          >
                          <FontAwesomeIcon icon={faPaperPlane} />

          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
// Creating chat interface

// Import necessary dependencies from React and Axios library
import React, { useState } from 'react';
import axios from 'axios';

// Define a functional component named Chat
const Chat = () => {
  // Define state variables for user input and chat messages
  const [input, setInput] = useState(''); // input: user's message
  const [messages, setMessages] = useState([]); // messages: array to store chat history

  // Function to handle sending user input to the backend
  const sendMessage = async () => {
    // If the input is empty or only contains spaces, do nothing
    if (input.trim() === '') return;

    // Update chat messages with user's input and mark as 'user' sender
    setMessages([...messages, { text: input, sender: 'user' }]);
    // Clear the input field
    setInput('');

    try {
      // Send a POST request to the backend endpoint '/api/chatbot' with user's input
      const response = await axios.post('/api/chatbot', { prompt: input });
      // Update chat messages with the response from the backend and mark as 'bot' sender
      setMessages([...messages, { text: response.data, sender: 'bot' }]);
    } catch (error) {
      // Handle errors that occur during the API request
      console.error('Error communicating with ChatBot API', error);
      // Update chat messages with an error message and mark as 'bot' sender
      setMessages([...messages, { text: 'Sorry, I encountered an error', sender: 'bot' }]);
    }
  };

  // Render the chat interface in the UI
  return (
    <div className="chat-container">
      {/* Display chat messages in a div with 'chat-messages' class */}
      <div className="chat-messages">
        {/* Map through messages and render each message with appropriate sender class */}
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {/* Display message text */}
            {message.text}
          </div>
        ))}
      </div>
      {/* Input field for user to type messages */}
      <div className="input-container">
        {/* Input field */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update 'input' state with user input
          placeholder="Type your message..."
        />
        {/* Button to send the message */}
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

// Export the Chat component for use in other parts of the application
export default Chat;

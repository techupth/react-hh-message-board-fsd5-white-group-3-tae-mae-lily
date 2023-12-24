import React, { useState } from 'react';

export const MessageBoard = () => { 
  // declared 2 state variables
  const [messages, setMessages] = useState(['Hello all ! This is first message.']);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();             // console.log(messages);
    setMessages([...messages, newMessage]);   // Update messages with the new message
    setNewMessage("");    // Clear the input field after submitting      
  }

  const handleDelete = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);   // Remove the message at the specified index
    setMessages(updatedMessages);   // Update messages without the deleted message
  }

  // Debugging nd edits inside of the component
  // Change div to form then used onSubmit
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form className="message-input-container" onSubmit={handleSubmit}>   
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}    // console.log(e.target.value) to test input
          />
        </label>
        <button type="submit" className="submit-message-button" >Submit</button>
      </form>   
      <div className="board">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <h1>{message}</h1>
            <button className="delete-button" onClick={() => handleDelete(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

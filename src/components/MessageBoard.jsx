import { useState } from "react";

function MessageBoard() {
  // 1. สร้าง useState 2 states
  // 1.1 state ที่เปลี่ยนแปลงในส่วน input ของข้อความ เปลี่ยนแปลงเมื่อมี event change
  // 1.2 state ที่เปลี่ยนแปลงในส่วนหน้าจอแสดงผลให้มีข้อความใหม่ปรากฏขึ้น เปลี่ยนแปลงเมื่อมี event click ปุ่ม Submit
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([
    "Hello all ! This is first message.",
  ]);

  const handleAddMessageListOnClick = () => {
    // 5)  เอาข้อความ messageInput ใส่ลงไปใน Array messageList
    // 5.1) Clone array
    // 5.2) push
    // 5.3) update state
    const newMessageList = [...messageList];
    newMessageList.push(messageInput);
    setMessageList(newMessageList);
  };

  const handleRemoveMessage = (messageIndex) => {
    // 6) ลบข้อมูลออกจาก Array
    // 6.1) Clone array
    // 6.2) splice
    // messageList.splice(messageIndex, 1)
    // 6.3) update state
    const updatedMessageList = [...messageList];
    updatedMessageList.splice(messageIndex, 1);
    setMessageList(updatedMessageList);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            // 2. เก็บข้อมูลที่ผู้ใช้งานพิมพ์เข้ามาจาก Input ลงใน State
            onChange={(event) => {
              setMessageInput(event.target.value);
            }}
            value={messageInput}
          />
        </label>
        {/* 4. เอาข้อความใน inputMessage มาใส่ลงใน board เมื่อมี event click */}
        <button
          className="submit-message-button"
          onClick={handleAddMessageListOnClick}
        >
          Submit
        </button>
      </div>
      <div class="board">
        {/* 3. เอา messageList มาเรนเดอร์ด้วย Array.map */}
        {messageList.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleRemoveMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;

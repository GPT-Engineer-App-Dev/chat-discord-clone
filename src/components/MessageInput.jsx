import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Add message to message list (this is just a placeholder, actual implementation will vary)
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSendMessage} className="p-4 border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="w-full p-2 border rounded"
      />
    </form>
  );
};

export default MessageInput;
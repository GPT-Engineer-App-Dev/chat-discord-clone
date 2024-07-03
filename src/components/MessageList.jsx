import { useEffect, useRef } from "react";

const messages = [
  { id: 1, user: "User1", content: "Hello!", timestamp: "10:00 AM" },
  { id: 2, user: "User2", content: "Hi there!", timestamp: "10:01 AM" },
];

const MessageList = () => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-grow overflow-y-auto p-4">
      {messages.map((message) => (
        <div key={message.id} className="mb-4">
          <div className="flex items-center mb-1">
            <img
              src="/placeholder.svg"
              alt="placeholder"
              className="w-8 h-8 rounded-full mx-auto object-cover"
            />
            <span className="ml-2 font-semibold">{message.user}</span>
            <span className="ml-2 text-xs text-gray-500">{message.timestamp}</span>
          </div>
          <p>{message.content}</p>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};

export default MessageList;
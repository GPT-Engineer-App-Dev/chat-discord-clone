import { useState } from "react";
import { cn } from "@/lib/utils";

const channels = [
  { id: 1, name: "General" },
  { id: 2, name: "Random" },
  { id: 3, name: "Help" },
];

const ChannelList = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <div className="w-64 bg-gray-700 text-white flex flex-col py-4">
      {channels.map((channel) => (
        <button
          key={channel.id}
          className={cn(
            "w-full text-left px-4 py-2",
            selectedChannel === channel.id ? "bg-blue-500" : "bg-gray-600"
          )}
          onClick={() => setSelectedChannel(channel.id)}
        >
          {channel.name}
        </button>
      ))}
    </div>
  );
};

export default ChannelList;
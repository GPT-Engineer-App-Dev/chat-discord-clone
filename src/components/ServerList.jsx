import { useState } from "react";
import { cn } from "@/lib/utils";

const servers = [
  { id: 1, name: "Server 1" },
  { id: 2, name: "Server 2" },
  { id: 3, name: "Server 3" },
];

const ServerList = () => {
  const [selectedServer, setSelectedServer] = useState(null);

  return (
    <div className="w-16 bg-gray-800 text-white flex flex-col items-center py-4">
      {servers.map((server) => (
        <button
          key={server.id}
          className={cn(
            "w-12 h-12 mb-2 rounded-full flex items-center justify-center",
            selectedServer === server.id ? "bg-blue-500" : "bg-gray-600"
          )}
          onClick={() => setSelectedServer(server.id)}
        >
          {server.name[0]}
        </button>
      ))}
    </div>
  );
};

export default ServerList;
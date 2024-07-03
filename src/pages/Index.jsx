import ServerList from "@/components/ServerList";
import ChannelList from "@/components/ChannelList";
import MessageList from "@/components/MessageList";
import MessageInput from "@/components/MessageInput";
import UserInfo from "@/components/UserInfo";

const Index = () => {
  return (
    <div className="flex h-full">
      <ServerList />
      <ChannelList />
      <div className="flex flex-col flex-grow">
        <header className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-semibold">Channel Name</h1>
          <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded"
          />
        </header>
        <MessageList />
        <MessageInput />
      </div>
      <UserInfo />
    </div>
  );
};

export default Index;
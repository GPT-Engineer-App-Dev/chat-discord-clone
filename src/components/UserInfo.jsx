const UserInfo = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex items-center p-4">
      <img
        src="/placeholder.svg"
        alt="placeholder"
        className="w-10 h-10 rounded-full mx-auto object-cover"
      />
      <div className="ml-4">
        <p className="font-semibold">Username</p>
        <p className="text-xs text-gray-400">Online</p>
      </div>
    </div>
  );
};

export default UserInfo;
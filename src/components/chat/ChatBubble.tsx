const ChatBubble = ({
  text,
  fromMe,
  timestamp,
}: {
  text: string;
  fromMe: boolean;
  timestamp: string;
}) => {
  return (
    <div className={`flex ${fromMe ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`p-3 rounded-lg shadow-md max-w-[70%] ${
          fromMe
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        <p className="text-sm">{text}</p>
        <span className="text-xs opacity-70 block text-right mt-1">
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;

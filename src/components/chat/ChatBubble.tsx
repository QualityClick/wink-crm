import { Card } from "@/components/ui/card";

interface ChatBubbleProps {
  text: string;
  fromMe: boolean;
  timestamp: string;
}

const ChatBubble = ({ text, fromMe, timestamp }: ChatBubbleProps) => {
  return (
    <div className={`mb-2 flex ${fromMe ? "justify-end" : "justify-start"}`}>
      <Card
        className={`p-3 max-w-xs rounded-2xl text-sm shadow-md ${
          fromMe ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        <p>{text}</p>
        <span className="text-xs opacity-70 block mt-1 text-right">
          {new Date(parseInt(timestamp) * 1000).toLocaleTimeString()}
        </span>
      </Card>
    </div>
  );
};

export default ChatBubble;

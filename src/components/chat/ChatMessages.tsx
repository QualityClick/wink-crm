import { useEffect, useRef } from "react";
import { useChatStore } from "@/stores/chatStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBubble from "./ChatBubble";

const ChatMessages = () => {
  const { messages, fetchMessages } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [fetchMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ScrollArea className="flex-1 px-6 py-4">
      {messages.map((msg, index) => (
        <ChatBubble
          key={msg.id || index}
          text={msg.text}
          fromMe={msg.from === "me"}
          timestamp={msg.timestamp}
        />
      ))}
      <div ref={messagesEndRef} />
    </ScrollArea>
  );
};

export default ChatMessages;

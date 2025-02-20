import { useEffect, useRef } from "react";
import { useChatStore } from "@/stores/chatStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBubble from "./ChatBubble";

interface ChatMessagesProps {
  selectedChat: string;
}

const ChatMessages = ({ selectedChat }: ChatMessagesProps) => {
  const { messages, fetchMessages } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages(); // ✅ Eliminamos el argumento, ya que `fetchMessages()` no lo requiere
    const interval = setInterval(() => fetchMessages(), 5000);
    return () => clearInterval(interval);
  }, [fetchMessages]);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ScrollArea className="flex-1 px-6 py-4">
      {messages
        .filter((msg) => msg.from === selectedChat || msg.to === selectedChat) // ✅ Corregido el filtro
        .map((msg, index) => {
          const timestampNumber = Number(msg.timestamp);
          const date = isNaN(timestampNumber)
            ? new Date()
            : new Date(timestampNumber * 1000);
          const formattedTime = date.toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <ChatBubble
              key={msg.id || index}
              text={msg.text}
              fromMe={msg.from === "me"}
              timestamp={formattedTime}
            />
          );
        })}
      <div ref={messagesEndRef} />
    </ScrollArea>
  );
};

export default ChatMessages;

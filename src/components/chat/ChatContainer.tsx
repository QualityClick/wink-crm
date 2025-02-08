import ChatSidebar from "./ChatSidebar";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
import { useChatStore } from "@/stores/chatStore";
import { useEffect } from "react";

export default function ChatContainer() {
  const { fetchMessages } = useChatStore();

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, [fetchMessages]);

  return (
    <div className="flex w-full h-full bg-gray-100 dark:bg-gray-900">
      <ChatSidebar />
      <div className="flex flex-col w-full h-full">
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
  );
}

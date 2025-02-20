import { useState, useEffect } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";
import { useChatStore } from "@/stores/chatStore";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const { fetchMessages } = useChatStore();

  useEffect(() => {
    if (selectedChat) {
      fetchMessages(); // ✅ Ahora sí pasamos `selectedChat`
    }
  }, [selectedChat, fetchMessages]);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <ChatSidebar onSelectChat={setSelectedChat} />
      <main className="flex-1 flex flex-col relative">
        <div className="p-4 border-b bg-white dark:bg-gray-800 flex items-center justify-between shadow-sm">
          <h2 className="text-lg font-semibold">
            {selectedChat ? selectedChat : "Selecciona un chat"}
          </h2>
        </div>
        <div className="flex-1 overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
          {selectedChat ? (
            <ChatMessages key={selectedChat} selectedChat={selectedChat} />
          ) : (
            // ✅ Cambiamos `chatId` a `selectedChat`
            <p className="text-center text-gray-500 mt-10">
              Selecciona un chat para empezar
            </p>
          )}
        </div>
        {selectedChat && <ChatInput selectedChat={selectedChat} />}
      </main>
    </div>
  );
};

export default ChatPage;

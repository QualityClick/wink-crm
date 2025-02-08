import { useState } from "react";
import ChatSidebar from "@/components/chat/ChatSidebar";
import ChatMessages from "@/components/chat/ChatMessages";
import { useChatStore } from "@/stores/chatStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");
  const { sendMessage } = useChatStore();

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      {/* Sidebar con lista de chats */}
      <ChatSidebar />

      {/* Contenedor principal del chat */}
      <main className="flex-1 flex flex-col relative">
        <div className="p-4 border-b bg-gray-100 dark:bg-gray-800 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Conversación</h2>
        </div>

        {/* Mensajes */}
        <div className="flex-1 overflow-auto p-4">
          <ChatMessages />
        </div>

        {/* Input fijo tipo Messenger */}
        <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-gray-800 border-t p-3 flex items-center gap-2">
          <Input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Número de WhatsApp"
            className="w-1/4"
          />
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1"
          />
          <Button
            onClick={() => sendMessage(to, message)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 flex items-center gap-2"
          >
            <PaperPlaneIcon className="w-5 h-5" /> Enviar
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;

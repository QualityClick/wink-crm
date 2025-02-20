import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useChatStore } from "@/stores/chatStore";

interface ChatInputProps {
  selectedChat: string;
}

const ChatInput = ({ selectedChat }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChatStore();

  const handleSend = async () => {
    if (message.trim()) {
      await sendMessage(selectedChat, message);
      setMessage(""); // Limpiar input después de enviar
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="sticky bottom-0 left-0 w-full bg-white dark:bg-gray-800 border-t p-3 flex items-center gap-2">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe un mensaje..."
        className="flex-1"
      />
      <Button
        onClick={handleSend}
        className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-4"
      >
        <PaperPlaneIcon className="w-5 h-5" /> Enviar
      </Button>
    </div>
  );
};

export default ChatInput;

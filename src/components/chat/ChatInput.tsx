import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatStore } from "@/stores/chatStore";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");
  const { sendMessage } = useChatStore();

  const handleSend = () => {
    if (message.trim() && to.trim()) {
      sendMessage(to, message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 flex flex-col gap-2">
      <Input
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="Número de WhatsApp (ej: 527442873814)"
      />
      <div className="flex gap-3">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1"
        />
        <Button onClick={handleSend}>Enviar</Button>
      </div>
    </div>
  );
}

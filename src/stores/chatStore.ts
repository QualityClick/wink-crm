import { create } from "zustand";
import axios from "axios";
import { io } from "socket.io-client";

const API_URL = import.meta.env.VITE_BACKEND_URL;

// 🔥 Configurar WebSocket con reconexión automática
const socket = io(API_URL, {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
});

interface Message {
  id: string;
  from: string;
  to?: string;
  text: string;
  timestamp: string;
}

interface ChatState {
  messages: Message[];
  fetchMessages: () => Promise<void>;
  sendMessage: (to: string, message: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: JSON.parse(localStorage.getItem("chatMessages") || "[]"),

  fetchMessages: async () => {
    try {
      const response = await axios.get(`${API_URL}/whatsapp/messages`);
      console.log("📩 Mensajes recibidos:", response.data);

      if (response.data && Array.isArray(response.data)) {
        set((state) => {
          const existingIds = new Set(state.messages.map((msg) => msg.id));
          const newMessages = response.data.filter(
            (msg: Message) => !existingIds.has(msg.id)
          );

          const updatedMessages = [...state.messages, ...newMessages];

          localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
          return { messages: updatedMessages };
        });
      }
    } catch (error) {
      console.error("❌ Error obteniendo mensajes:", error);
    }
  },

  sendMessage: async (to, message) => {
    try {
      const response = await axios.post(`${API_URL}/whatsapp/send`, {
        to,
        message,
      });

      console.log("📤 Mensaje enviado:", response.data);

      const newMessage: Message = {
        id: response.data?.messages?.[0]?.id || `${Date.now()}`,
        from: "me",
        to,
        text: message,
        timestamp: `${Math.floor(Date.now() / 1000)}`,
      };

      set((state) => {
        const updatedMessages = [...state.messages, newMessage];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return { messages: updatedMessages };
      });

      // 🔥 Emitir mensaje en tiempo real al WebSocket
      socket.emit("new_message", newMessage);
    } catch (error) {
      console.error("❌ Error enviando mensaje:", error);
    }
  },
}));

// 📡 Escuchar mensajes en tiempo real desde WebSocket
socket.on("new_message", (message: Message) => {
  console.log("📩 Nuevo mensaje recibido en WebSocket:", message);

  useChatStore.setState((state) => {
    const updatedMessages = [...state.messages, message];
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    return { messages: updatedMessages };
  });
});

import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

interface Message {
  id: string;
  from: string;
  text: string;
  timestamp: string;
  name?: string;
}

interface ChatState {
  messages: Message[];
  fetchMessages: () => Promise<void>;
  sendMessage: (to: string, message: string) => Promise<void>;
  handleIncomingMessage: (messageData: {
    from: string;
    text: string;
    timestamp: string;
    contacts?: { profile?: { name?: string } }[];
  }) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: JSON.parse(localStorage.getItem("chatMessages") || "[]"),

  fetchMessages: async () => {
    try {
      const response = await axios.get(`${API_URL}/whatsapp/messages`);
      console.log("📩 Mensajes recibidos:", response.data);

      if (response.data && Array.isArray(response.data)) {
        set({ messages: response.data });
        localStorage.setItem("chatMessages", JSON.stringify(response.data));
      } else {
        console.error("❌ Error: La API no devuelve un array de mensajes.");
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
        id: response.data.messages[0].id,
        from: "me",
        text: message,
        timestamp: new Date().toISOString(),
      };

      set((state) => {
        const updatedMessages = [...state.messages, newMessage];
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
        return { messages: updatedMessages };
      });
    } catch (error) {
      console.error("❌ Error enviando mensaje:", error);
    }
  },

  handleIncomingMessage: (messageData) => {
    const { from, text, timestamp, contacts } = messageData;
    const name = contacts?.[0]?.profile?.name || from;

    const newMessage: Message = {
      id: `${from}-${timestamp}`,
      from,
      text,
      timestamp,
      name,
    };

    set((state) => {
      const updatedMessages = [...state.messages, newMessage];
      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
      return { messages: updatedMessages };
    });
  },
}));

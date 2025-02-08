import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

interface Message {
  id: string;
  from: string;
  text: string;
  timestamp: string;
}

interface ChatState {
  messages: Message[];
  fetchMessages: () => Promise<void>;
  sendMessage: (to: string, message: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],

  fetchMessages: async () => {
    try {
      const response = await axios.get(`${API_URL}/whatsapp/messages`);
      console.log("📩 Mensajes recibidos:", response.data);

      if (response.data && Array.isArray(response.data)) {
        set({ messages: response.data });
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

      set((state) => ({
        messages: [
          ...state.messages,
          {
            id: response.data.messages[0].id,
            from: "me",
            text: message,
            timestamp: new Date().toISOString(),
          },
        ],
      }));
    } catch (error) {
      console.error("❌ Error enviando mensaje:", error);
    }
  },
}));

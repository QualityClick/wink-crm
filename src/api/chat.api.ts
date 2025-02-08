import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Envía un mensaje de WhatsApp a través del backend
 * @param to Número de destino (WhatsApp)
 * @param message Mensaje a enviar
 */
export const sendMessage = async (to: string, message: string) => {
  try {
    const response = await axios.post(`${API_URL}/whatsapp/send`, {
      to,
      message,
    });
    return response.data;
  } catch (error) {
    console.error("Error enviando mensaje:", error);
    throw error;
  }
};

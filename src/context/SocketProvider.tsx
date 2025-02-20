import { useEffect, useState, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import { SocketContext } from "./SocketContext";

const SOCKET_URL = "http://localhost:3000"; // Asegúrate de que coincida con tu backend

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL, {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    newSocket.on("connect", () => {
      console.log("✅ Conectado a WebSockets");
    });

    newSocket.on("disconnect", () => {
      console.warn("❌ Desconectando WebSockets");
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

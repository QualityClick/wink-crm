import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { InputWithIcon } from "@/components/ui/inputWithIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { conversations } from "@/data/conversations";

export default function MessageCenter() {
  const [filter, setFilter] = useState<
    "All" | "Facebook" | "Instagram" | "WhatsApp"
  >("All");
  const [search, setSearch] = useState("");

  // Filtrar las conversaciones según la plataforma y búsqueda
  const filteredMessages = conversations.filter((message) => {
    const matchesPlatform = filter === "All" || message.platform === filter;
    const matchesSearch = message.sender
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesPlatform && matchesSearch;
  });

  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">Centro de Mensajes</h2>
      </CardHeader>
      <CardContent>
        {/* Controles */}
        <div className="flex items-center justify-between mb-4">
          <InputWithIcon
            placeholder="Buscar por remitente..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<Search className="w-5 h-5 text-gray-500" />}
          />
          <div className="flex items-center gap-2">
            <Button
              variant={filter === "All" ? "default" : "outline"}
              onClick={() => setFilter("All")}
            >
              Todo
            </Button>
            <Button
              variant={filter === "Facebook" ? "default" : "outline"}
              onClick={() => setFilter("Facebook")}
            >
              Facebook
            </Button>
            <Button
              variant={filter === "Instagram" ? "default" : "outline"}
              onClick={() => setFilter("Instagram")}
            >
              Instagram
            </Button>
            <Button
              variant={filter === "WhatsApp" ? "default" : "outline"}
              onClick={() => setFilter("WhatsApp")}
            >
              WhatsApp
            </Button>
          </div>
        </div>

        {/* Lista de Mensajes */}
        <ul className="space-y-4">
          {filteredMessages.map((message) => (
            <li
              key={message.id}
              className="flex items-center gap-4 p-4 border rounded-lg"
            >
              <Badge
                className={`${
                  message.platform === "Facebook"
                    ? "bg-blue-100 text-blue-800"
                    : message.platform === "Instagram"
                    ? "bg-pink-100 text-pink-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {message.platform}
              </Badge>
              <div className="flex flex-col">
                <span className="font-bold text-sm">{message.sender}</span>
                <span className="text-sm text-gray-600">{message.content}</span>
                <span className="text-xs text-gray-400">{message.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

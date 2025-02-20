import { useChatStore } from "@/stores/chatStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";

const ChatSidebar = () => {
  const { messages } = useChatStore();
  const uniqueContacts = Array.from(new Set(messages.map((msg) => msg.from)));
  const [activeTab, setActiveTab] = useState("whatsapp");

  return (
    <aside className="w-[320px] bg-gray-100 dark:bg-gray-800 p-4 border-r flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Chats</h2>

      <Tabs defaultValue="whatsapp" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="whatsapp">
            <BiLogoWhatsapp className="w-6 h-6 text-green-500" />
          </TabsTrigger>
          <TabsTrigger value="messenger">
            <FaFacebookMessenger className="w-6 h-6 text-blue-600" />
          </TabsTrigger>
          <TabsTrigger value="instagram">
            <FaInstagram className="w-6 h-6 text-pink-500" />
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[80vh] mt-2">
          <TabsContent value="whatsapp">
            {uniqueContacts.map((contact) => (
              <Card
                key={contact}
                className="p-3 mb-2 flex items-center gap-3 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                <Avatar className="w-10 h-10">
                  <AvatarFallback>{contact[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{contact}</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Último mensaje...
                  </span>
                </div>
              </Card>
            ))}
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </aside>
  );
};

export default ChatSidebar;
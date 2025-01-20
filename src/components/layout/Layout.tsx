import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-4 bg-gray-50 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
}

import { Bell, Calendar, Cog, PlusCircle, Timer, Menu } from "lucide-react";
import { useAuthStore } from "@/stores/authStore";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Limpiar el estado de usuario
    navigate("/login"); // Redirigir al login
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow-md p-4 md:px-8">
      {/* Botón de hamburguesa: visible solo en móviles */}
      <div className="flex items-center gap-4">
        <button className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 md:hidden">
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
        {/* Logo y marca: visibles solo en pantallas medianas o más grandes */}
        <div className="hidden md:flex items-center gap-2">
          <img
            src="/img/winksolutions_logo.jpg"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold text-gray-800">Wink CRM</h1>
        </div>
      </div>

      {/* Buscador: visible solo en escritorio */}
      <div className="hidden md:flex items-center w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-4">
        <Timer className="text-gray-600 w-6 h-6" />
        <Bell className="text-gray-600 w-6 h-6" />
        <Calendar className="text-gray-600 w-6 h-6" />
        <Cog className="text-gray-600 w-6 h-6" />
        <PlusCircle className="text-blue-500 w-6 h-6 cursor-pointer" />
        <img
          src="/img/profile_picture.jpeg"
          alt="Profile"
          className="w-8 h-8 rounded-full border border-gray-300"
        />
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

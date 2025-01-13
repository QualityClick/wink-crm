import { Bell, Calendar, Cog, PlusCircle, Timer } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white shadow p-4">
      <div className="flex items-center gap-2">
        <img src="/img/winksolutions_logo.jpg" alt="Logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-gray-800">Wink CRM</h1>
      </div>

      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

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
      </div>
    </nav>
  );
}

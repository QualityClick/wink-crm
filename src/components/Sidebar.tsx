import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4">CRM</h1>
      <nav className="flex-1 p-4 space-y-4">
        <Link to="/" className="block hover:text-blue-400">
          Dashboard
        </Link>
        <Link to="/facebook" className="block hover:text-blue-400">
          Facebook
        </Link>
        <Link to="/instagram" className="block hover:text-pink-400">
          Instagram
        </Link>
        <Link to="/whatsapp" className="block hover:text-green-400">
          WhatsApp
        </Link>
        <Link to="/settings" className="block hover:text-yellow-400">
          Settings
        </Link>
        <Link to="/profile" className="block hover:text-purple-400">
          Profile
        </Link>
      </nav>
    </div>
  );
}

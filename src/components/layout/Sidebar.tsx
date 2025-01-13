import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import routes from "@/routes/routes";
import * as Icons from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Hamburger Menu (visible on small screens) */}
      <button
        className="md:hidden p-4 text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icons.Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } md:block w-64 h-screen bg-gray-800 text-white flex flex-col`}
      >
        {/* Logo Section */}
        <div className="p-4 flex items-center gap-2">
          <img
            src="/img/winksolutions_logo.jpg"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold">Wink CRM</span>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 p-4 space-y-4">
          {Object.entries(routes).map(([key, route]) => {
            const Icon = Icons[
              route.icon as keyof typeof Icons
            ] as React.ComponentType<{ className?: string }>;
            const isActive = location.pathname === route.path;

            return (
              <Link
                key={key}
                to={route.path}
                className={`flex items-center gap-2 p-2 rounded ${
                  isActive ? "bg-gray-700 text-white" : "text-gray-300"
                } hover:text-white`}
              >
                <Icon className="w-5 h-5" />
                <span>{route.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

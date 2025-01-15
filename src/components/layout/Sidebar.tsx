import { Link, useLocation } from "react-router-dom";
import routes from "@/routes/routes";
import * as Icons from "lucide-react";
import useSidebarStore from "@/stores/sidebarStore";

export default function Sidebar() {
  const location = useLocation();

  // Obtener el estado y las funciones desde Zustand
  const { isMobileOpen, isCollapsed, toggleMobileSidebar, toggleCollapse } =
    useSidebarStore();

  return (
    <>
      {/* Botón de hamburguesa (visible solo en móviles) */}
      <button
        className={`fixed top-4 left-4 z-30 p-2 rounded-md bg-gray-900 text-white transition-all duration-300 md:hidden ${
          isMobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={toggleMobileSidebar}
      >
        <Icons.Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-20 h-screen bg-gray-900 text-white transition-all duration-300 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${isCollapsed ? "w-20" : "w-64"} md:translate-x-0`}
      >
        {/* Logo y botón para colapsar */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <img
              src="/img/winksolutions_logo.jpg"
              alt="Logo"
              className="w-8 h-8"
            />
            {!isCollapsed && (
              <span className="text-xl font-bold whitespace-nowrap">
                Wink CRM
              </span>
            )}
          </div>
          <button
            className="text-gray-400 hover:text-white"
            onClick={toggleCollapse} // Alternar colapso
          >
            <Icons.ChevronLeft
              className={`w-5 h-5 transform ${
                isCollapsed ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1 p-4 space-y-2">
          {Object.entries(routes).map(([key, route]) => {
            const Icon = Icons[
              route.icon as keyof typeof Icons
            ] as React.ComponentType<{ className?: string }>;
            const isActive = location.pathname === route.path;

            return (
              <Link
                key={key}
                to={route.path}
                className={`flex items-center gap-4 p-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-gray-700 text-white shadow"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8">
                  <Icon className="w-6 h-6" />
                </div>
                {!isCollapsed && <span>{route.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 text-sm text-gray-500 border-t border-gray-800">
            <p>© 2025 Wink Solutions</p>
          </div>
        )}
      </aside>

      {/* Overlay para móviles */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}
    </>
  );
}

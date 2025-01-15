import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SidebarState {
  isMobileOpen: boolean; // Estado del sidebar móvil
  isCollapsed: boolean; // Estado de colapso del sidebar
  toggleMobileSidebar: () => void; // Alternar apertura/cierre en móviles
  toggleCollapse: () => void; // Alternar colapso en escritorio
}

const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isMobileOpen: false,
      isCollapsed: false,
      toggleMobileSidebar: () =>
        set((state) => ({ isMobileOpen: !state.isMobileOpen })),
      toggleCollapse: () =>
        set((state) => ({ isCollapsed: !state.isCollapsed })),
    }),
    {
      name: "sidebar-storage", // Nombre de la clave en localStorage
      partialize: (state) => ({ isCollapsed: state.isCollapsed }), // Guardar solo isCollapsed
    }
  )
);

export default useSidebarStore;

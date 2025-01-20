import { useState } from "react";
import ProjectsTable from "@/components/projects/ProjectsTable";
import { projects } from "@/data/projects";

export default function Projects() {
  const [search, setSearch] = useState("");

  // Filtrar proyectos por búsqueda
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 p-8">
      {/* Encabezado */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Proyectos</h1>
        <p className="text-sm text-gray-600">Gestión de proyectos en curso</p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-lg font-bold">15</h2>
          <p className="text-sm text-gray-600">Todos</p>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-lg font-bold text-blue-600">3</h2>
          <p className="text-sm text-gray-600">En progreso</p>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-lg font-bold text-yellow-600">2</h2>
          <p className="text-sm text-gray-600">En espera</p>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <h2 className="text-lg font-bold text-green-600">2</h2>
          <p className="text-sm text-gray-600">Completados</p>
        </div>
      </div>

      {/* Tabla */}
      <ProjectsTable projects={filteredProjects} onSearch={setSearch} />
    </div>
  );
}

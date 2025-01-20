import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Pencil, Trash, MoreHorizontal } from "lucide-react";

interface ProjectsTableProps {
  projects: {
    id: number;
    name: string;
    client: string;
    startDate: string;
    dueDate: string;
    tags: string[];
    progress: number;
    status: string;
  }[];
  onSearch: (value: string) => void;
}

export default function ProjectsTable({
  projects,
  onSearch,
}: ProjectsTableProps) {
  return (
    <div className="space-y-4">
      {/* Barra de búsqueda */}
      <Input
        placeholder="Buscar proyectos..."
        className="w-full"
        onChange={(e) => onSearch(e.target.value)}
      />

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Cliente</th>
              <th className="p-3">Fecha de Inicio</th>
              <th className="p-3">Fecha Límite</th>
              <th className="p-3">Etiquetas</th>
              <th className="p-3">Progreso</th>
              <th className="p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="p-3">{project.id}</td>
                <td className="p-3">{project.name}</td>
                <td className="p-3">{project.client}</td>
                <td className="p-3">{project.startDate}</td>
                <td className="p-3">{project.dueDate || "Sin fecha"}</td>
                <td className="p-3">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </td>
                <td className="p-3">
                  <Progress value={project.progress} />
                </td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash className="w-5 h-5" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

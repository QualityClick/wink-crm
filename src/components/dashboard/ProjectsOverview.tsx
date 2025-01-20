import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  name: string;
  status: string;
  owner: string;
}

interface ProjectsOverviewProps {
  projects: Project[];
}

export default function ProjectsOverview({ projects }: ProjectsOverviewProps) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-lg font-bold">Resumen de Proyectos</h2>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <p className="font-bold text-sm">{project.name}</p>
                <p className="text-xs text-gray-500">
                  Propietario: {project.owner}
                </p>
              </div>
              <Badge
                className={`${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {project.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

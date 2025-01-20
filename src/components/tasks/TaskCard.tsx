import { useDrag } from "react-dnd";

interface TaskCardProps {
  id: string;
  title: string;
  project: string;
  client: string;
  created: string;
  due: string;
  tags: string[];
  assigned: string[];
}

export default function TaskCard({
  id,
  title,
  project,
  client,
  created,
  due,
  tags,
  assigned,
}: TaskCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`shadow-md p-4 border rounded-lg ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <h3 className="font-bold text-sm">{title}</h3>
      <p className="text-xs text-gray-500">Proyecto: {project}</p>
      <p className="text-xs text-gray-500">Cliente: {client}</p>
      <p className="text-xs text-gray-500">Creado: {created}</p>
      <p className="text-xs text-gray-500">Vence: {due || "Sin fecha"}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs bg-gray-200 px-2 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        {assigned.map((person) => (
          <span
            key={person}
            className="bg-gray-200 text-gray-700 px-2 rounded-full text-xs"
          >
            {person}
          </span>
        ))}
      </div>
    </div>
  );
}

import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

interface Task {
  id: string;
  title: string;
  project: string;
  client: string;
  created: string;
  due: string;
  tags: string[];
  assigned: string[];
}

interface TaskColumnProps {
  status: string;
  tasks: Task[];
  onDrop: (taskId: string, newStatus: string) => void;
}

export default function TaskColumn({ status, tasks, onDrop }: TaskColumnProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task", // Asegúrate de que coincida con el tipo en TaskCard
    drop: (item: { id: string }) => onDrop(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 border rounded-lg ${isOver ? "bg-gray-100" : "bg-white"}`}
    >
      <h2 className="font-bold text-sm mb-4">{status}</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

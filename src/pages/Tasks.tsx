import { useState } from "react";
import TaskColumn from "@/components/tasks/TaskColumn";
import { tasks as initialTasks } from "@/data/tasks";

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDrop = (taskId: string, newStatus: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const columns = [
    "New",
    "In Progress",
    "Testing",
    "Awaiting Feedback",
    "Completed",
  ];

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Tareas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {columns.map((column) => (
          <TaskColumn
            key={column}
            status={column}
            tasks={tasks.filter((task) => task.status === column)}
            onDrop={handleDrop}
          />
        ))}
      </div>
    </div>
  );
}

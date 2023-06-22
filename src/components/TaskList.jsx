import TaskCard from "./TaskCard";
import { useContext } from "react";
import { taskContext } from "../context/Context";

function TaskList() {
  const { task } = useContext(taskContext);

  if (task.length === 0) {
    return <h1  className="text-2xl font-bold text-center bg-blue-700 " >No tareas pa</h1>;
  }

  return (
    <div className="grid grid-cols-5 gap-2">
      {task.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

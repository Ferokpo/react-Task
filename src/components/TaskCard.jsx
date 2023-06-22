import { taskContext } from "../context/Context";
import { useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(taskContext);

  return (
    <div className="bg-gray-800 p-4 rounded-md mb-4">
      <h1 className="text-xl font-bold text-center">{task.title}</h1>
      <p className="text-blue-900">{task.desc}</p>
      <button
        className="text-red-700 bg-black px-2 py-1 rounded-md hover:bg-red-950"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;

import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";

export const taskContext = createContext();

export function ContextProvider(props) {
  const [task, setTask] = useState([]);

  function createTask(Task) {
    setTask([
      ...task,
      {
        title: Task.title,
        id: task.length,
        desc: Task.desc,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(task.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <taskContext.Provider
      value={{
        task,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}

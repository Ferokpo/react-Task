import { useState, useContext } from "react";
import { taskContext } from "../context/Context";

function taskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { createTask } = useContext(taskContext);

  const handleSumit = (e) => {
    e.preventDefault();
    createTask({
      title,
      desc,
    });
    setTitle("");
    setDesc("");
  };

  return (
    <div className=" max-w-md mx-auto ">
      <form onSubmit={handleSumit} className=" bg-gray-950 p-10 mb-4 rounded-md ">

        <h1 className="text-2xl font-bold text-center">Escribimela en tu tarea</h1>


        <input
          className="bg-stone-800 p-3 w-full mb-2 rounded-md"
          placeholder="Escribe tu tarea"
          onChange={function (e) {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          className="bg-stone-800 p-3 w-full mb-2 rounded-md"
          placeholder="Descripcion de la tarea"
          onChange={function (e) {
            setDesc(e.target.value);
          }}
          value={desc}
        ></textarea>
        <button
        className="bg-blue-500 rounded-md  p-3 "
        >Guardar</button>
      </form>
    </div>
  );
}

export default taskForm;

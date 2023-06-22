import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";

function App() {
  return (
    <main className="bg-slate-200 h-screen ">
      <div className="conteiner mx-auto bg-green-600 mb-4">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;

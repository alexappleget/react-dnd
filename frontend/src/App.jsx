import { DndContext, closestCorners } from "@dnd-kit/core";
import { useState } from "react";
import Column from "./components/columns/Column.jsx";
import { arrayMove } from "@dnd-kit/sortable";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const getTaskPosition = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPostion = getTaskPosition(active.id);
      const newPosition = getTaskPosition(over.id);

      return arrayMove(tasks, originalPostion, newPosition);
    });
  };

  const addTask = () => {
    const newId = tasks.length + 1;
    const newTask = { id: newId, title: newTaskTitle };
    setTasks((tasks) => [...tasks, newTask]);
    setNewTaskTitle("");
  };

  return (
    <div className="app">
      <h1>My Tasks ✅</h1>
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App;

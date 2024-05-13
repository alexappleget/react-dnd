import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import Column from "./components/columns/Column.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to homepage" },
    { id: 2, title: "Learn react dnd" },
    { id: 3, title: "Learn redux" },
  ]);

  return (
    <div className="app">
      <h1>My Tasks ✅</h1>
      <DndContext collisionDetection={closestCorners}>
        <Column tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App;

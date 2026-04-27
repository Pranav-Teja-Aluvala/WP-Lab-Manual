import { useState } from "react";

function Todo() {

  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    setList([...list, task]);
    setTask("");
  }

  return (
    <div>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>
        Add
      </button>

      {list.map((t, i) => (
        <p key={i}>{t}</p>
      ))}

    </div>
  );
}

export default Todo;
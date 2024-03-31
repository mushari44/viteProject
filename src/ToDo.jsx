import { useState } from "react";
function ToDo() {
  const [tasks, setTask] = useState([]);
  function handleAddTask() {
    const newTask = document.getElementById("taskInput").value;
    setTask((prevTasks) => [...prevTasks, newTask]);
    document.getElementById("taskInput").value = "";
  }
  function handleDeleteTask(index) {
    setTask(tasks.filter((_, i) => index != i));
  }
  function handleMoveUp(index) {
    // Create a copy of the tasks array
    if (index > 0) {
      const updatedTasks = [...tasks];
      // Swap the current task with the one above it
      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      // Update the state with the modified array
      setTask(updatedTasks);
    }
  }
  function handleMoveDown(index) {
    if (index + 1 < tasks.length) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  return (
    <>
      <div className="ToDoCard">
        <h1>To Do List</h1>

        {tasks.map((task, index) => (
          <li key={index}>
            <p>{task}</p>
            {<button onClick={() => handleDeleteTask(index)}>Delete</button>}
            {<button onClick={() => handleMoveUp(index)}>👆</button>}
            {<button onClick={() => handleMoveDown(index)}>👇</button>}
          </li>
        ))}
        <input placeholder="Add a new task" type="text" id="taskInput"></input>
        <button onClick={handleAddTask}>Add</button>
      </div>
    </>
  );
}

export default ToDo;

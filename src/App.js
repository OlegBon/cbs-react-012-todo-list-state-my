import "./App.css";
import { useState } from "react";
import Task from "./components/Task/Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  const onAddTaskHandler = () => {
    let newTask = {
      id: new Date(),
      title: taskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };

  const onChangeHandler = (e) => {
    setTaskTitle(e.target.value);
  };

  const removeAllTasksHandler = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <div className="Navigation">
        <input
          type="text"
          onChange={(e) => onChangeHandler(e)}
          placeholder="Add task"
          value={taskTitle}
        />
        <button onClick={onAddTaskHandler}>Add Task</button>
        <button onClick={removeAllTasksHandler}>Remove All Task</button>
      </div>
      <div className="Tasks">
        <Task tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;

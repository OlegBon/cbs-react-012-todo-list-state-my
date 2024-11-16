import "./App.css";
import { useState } from "react";

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

  const changeTaskStateHandler = (id) => {
    let newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const removeAllTasksHandler = () => {
    setTasks([]);
  };

  const removeTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
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
        {tasks.map((task) => (
          <div
            className={task.completed ? "Task Completed" : "Task"}
            key={task.id}
          >
            <input
              type="checkbox"
              defaultChecked={task.completed}
              // onInput прибираємо тому що є onChange
              // onInput={onChangeHandler}
              onChange={() => changeTaskStateHandler(task.id)}
            />
            <h1>{task.title}</h1>
            <button onClick={() => removeTask(task.id)}>Delete/Drop</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

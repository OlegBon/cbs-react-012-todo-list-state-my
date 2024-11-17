const Task = ({ tasks, setTasks }) => {
  const changeTaskStateHandler = (id) => {
    let newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const removeTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };
  return (
    <>
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
    </>
  );
};

export default Task;

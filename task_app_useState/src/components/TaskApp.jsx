import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
const data = [
  {
    id: 1,
    text: "react",
    isActive: false,
  },
  {
    id: 3,
    text: "react",
    isActive: false,
  },
  {
    id: 100,
    text: "javascript",
    isActive: false,
  },
];

const nextId = (data) => {
  return data.reduce((first, second) => {
    if (first > second.id) {
      return first;
    } else {
      return second.id;
    }
  }, 0);
};

const TaskApp = () => {
  const [tasks, setTasks] = useState(data);

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: nextId(tasks) + 1,
        text,
        isActive: false,
      },
    ]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (newTask) => {
    const updateTask = tasks.map((task) => {
      if (task.id !== newTask.id) {
        return task;
      }
      return newTask;
    });
    setTasks(updateTask);
  };

  return (
    <div className="app-content">
      <h1>task app</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </div>
  );
};

export default TaskApp;

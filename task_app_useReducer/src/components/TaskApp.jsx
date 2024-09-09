import { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import taskReducer from "../reducer/taskReducer";
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../reducer/taskConstant";
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

const TaskApp = () => {
  const [tasks, dispatch] = useReducer(taskReducer, data);

  const handleAddTask = (text) => {
    dispatch({
      type: ADD_TASK,
      payload: text,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  const handleEditTask = (newTask) => {
    dispatch({
      type: EDIT_TASK,
      payload: newTask,
    });
  };

  return (
    <div className="app-content">
      <h1>task app using useReducer</h1>
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

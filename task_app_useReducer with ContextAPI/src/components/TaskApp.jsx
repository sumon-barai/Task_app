import AddTask from "./AddTask";
import TaskList from "./TaskList";

import { useTask } from "../context/TaskProvider";

const TaskApp = () => {
  const { tasks } = useTask();

  return (
    <div className="app-content">
      <h1>task app using useReducer with contextAPI</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskApp;

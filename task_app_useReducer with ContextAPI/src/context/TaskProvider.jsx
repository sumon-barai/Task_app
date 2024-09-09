/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import taskReducer from "../reducer/taskReducer";
import { data } from "../utils/data";

const TaskContext = createContext(null);

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, data);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => useContext(TaskContext);

export { useTask, TaskProvider };

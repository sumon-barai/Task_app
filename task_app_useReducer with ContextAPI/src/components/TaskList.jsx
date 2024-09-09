/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => <Task key={task.id} task={task} />)
        ) : (
          <p>No task</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;

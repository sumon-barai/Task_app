/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        ) : (
          <p>No task</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;

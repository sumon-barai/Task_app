import { useState } from "react";

/* eslint-disable react/prop-types */
const Task = ({ task, onDelete, onEdit }) => {
  const [editMode, setEdit] = useState(false);
  const handleChangeMode = () => {
    setEdit(!editMode);
  };

  let content;
  if (editMode) {
    content = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onEdit({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={handleChangeMode}>save</button>
      </>
    );
  } else {
    content = (
      <>
        <p>{task.text}</p>
        <button onClick={handleChangeMode}>edit</button>
      </>
    );
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={task.isActive}
        onChange={() => {
          onEdit({
            ...task,
            isActive: !task.isActive,
          });
        }}
      />
      {content}

      <button onClick={() => onDelete(task.id)}>delete</button>
    </li>
  );
};

export default Task;

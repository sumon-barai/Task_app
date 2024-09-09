import { useState } from "react";
import { useTask } from "../context/TaskProvider";
import { DELETE_TASK, EDIT_TASK } from "../reducer/taskConstant";

/* eslint-disable react/prop-types */
const Task = ({ task }) => {
  const { dispatch } = useTask();

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
            dispatch({
              type: EDIT_TASK,
              payload: {
                ...task,
                text: e.target.value,
              },
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
          dispatch({
            type: EDIT_TASK,
            payload: {
              ...task,
              isActive: !task.isActive,
            },
          });
        }}
      />
      {content}

      <button
        onClick={() =>
          dispatch({
            type: DELETE_TASK,
            payload: task.id,
          })
        }
      >
        delete
      </button>
    </li>
  );
};

export default Task;

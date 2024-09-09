/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTask } from "../context/TaskProvider";
import { ADD_TASK } from "../reducer/taskConstant";

const AddTask = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTask();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TASK,
      payload: text,
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>add</button>
    </form>
  );
};

export default AddTask;

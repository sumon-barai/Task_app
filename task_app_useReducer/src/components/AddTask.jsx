/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
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

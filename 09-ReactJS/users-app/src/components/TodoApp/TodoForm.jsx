import { useState } from "react";

function TodoForm({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput(""); // reset
  };

  return (
    <form className="d-flex mb-3 bg-pr" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder="Add new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

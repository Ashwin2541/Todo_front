import React, { useState } from "react";

function TodoForm({ initialData, onSubmit, buttonText }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [status, setStatus] = useState(
    initialData?.status || "Pending"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a todo title");
      return;
    }

    onSubmit({title: title.trim(), status});
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>Todo Title</label>

      <input type="text" placeholder="Enter the Task" value={title} onChange={(e) => setTitle(e.target.value)}/>

      <label>Status</label>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default TodoForm;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../services/api";

function AddTodo() {
  const navigate = useNavigate();

  const handleAddTodo = async (todo) => {
    try {
      await addTodo(todo);
      alert("Todo added successfully!");
      navigate("/todos");
    } catch (error) {
      console.error(error);
      alert("Failed to add Todo");
    }
  };

  return (
    <div className="container">
      <Link className="back-link" to="/todos">← Back to Todos</Link>
      <h1>Add New Todo</h1>

      <TodoForm
        onSubmit={handleAddTodo}
        buttonText="Add Todo"
      />
    </div>
  );
}

export default AddTodo;
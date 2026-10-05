import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { getTodo, updateTodo } from "../services/api";

function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await getTodo(id);
        setTodo(response.data);
      } catch (error) {
        console.error(error);
        alert("Todo not found");
        navigate("/todos");
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id, navigate]);

  const handleUpdate = async (updatedTodo) => {
    try {
      await updateTodo(id, updatedTodo);
      alert("Todo updated successfully!");
      navigate("/todos");
    } catch (error) {
      console.error(error);
      alert("Failed to update todo");
    }
  };

  if (loading) {
    return <div className="container"><h2>Loading...</h2></div>;
  }

  if (!todo) {
    return <div className="container"><h2>Todo not found</h2></div>;
  }

  return (
    <div className="container">
      <Link className="back-link" to="/todos">← Back to Todos</Link>
      <h1>Edit Todo</h1>

      <TodoForm initialData={todo} onSubmit={handleUpdate} buttonText="Update" />
    </div>
  );
}

export default EditTodo;
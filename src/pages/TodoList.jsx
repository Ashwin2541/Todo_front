import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoCard from "../components/TodoCard";
import { getTodos, deleteTodo, updateTodo } from "../services/api";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  const completedCount = todos.filter((todo) => todo.status === "Completed").length;
  const activeCount = todos.filter((todo) => todo.status !== "Completed").length;

  const filteredTodos =
    filter === "All"
      ? todos
      : filter === "Completed"
        ? todos.filter((todo) => todo.status === "Completed")
        : todos.filter((todo) => todo.status !== "Completed");

  const fetchTodos = async () => {
    try {
      const response = await getTodos();
      setTodos(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTodo(id);
      setTodos((currentTodos) =>
        currentTodos.filter((todo) => todo.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete todo");
    }
  };

  const handleComplete = async (todo) => {
    try {
      const response = await updateTodo(todo.id, {
        ...todo,
        status: "Completed",
      });
      setTodos((currentTodos) =>
        currentTodos.map((currentTodo) =>
          currentTodo.id === todo.id ? response.data : currentTodo
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to complete todo");
    }
  };

  if (loading) {
   return <div className="container"><h2>Loading...</h2></div>;
  }

  return (
    <div className="container">
      <div className="page-header">
        <div className="page-header-copy">
          <p className="page-kicker">Your tasks</p>
          <h1>To-Do's</h1>
        </div>

       

        <Link to="/add-todo">
          <button className="add-btn">+ Add Task</button>
        </Link>
      </div>

      <div className="filter-bar" aria-label="Todo filters">
        {['All', 'Active', 'Completed'].map((option) => (
          <button key={option} type="button" className={filter === option ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter(option)}>
            {option}
            <span className="filter-count">
              {option === 'All'
                ? todos.length
                : option === 'Active'
                  ? activeCount
                  : completedCount}
            </span>
          </button>
        ))}
      </div>

      {filteredTodos.length === 0 ? (
        <div className="empty-state">
          <h2>No todos available</h2>
          <p>
            {filter === 'All'
              ? 'Add your first todo to get started.'
              : `No ${filter.toLowerCase()} todos found.`}
          </p>
        </div>
      ) : (
        filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
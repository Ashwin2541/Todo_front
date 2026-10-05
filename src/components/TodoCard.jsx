import React from "react";
import { Link } from "react-router-dom";

function TodoCard({ todo, onDelete, onComplete }) {
  const isCompleted = todo.status === "Completed";

  return (
    <div className="todo-card">
      <div className="todo-main">
        <div className="todo-icon">✓</div>
        <div>
          <h3>{todo.title}</h3>
          <p className="todo-meta">
            <span className="meta-label">Status</span>
            {isCompleted ? (
              <span className="status-badge completed">{todo.status}</span>
            ) : (
              <button type="button" className="status-badge pending status-action" onClick={() => onComplete(todo)} aria-label={`Mark ${todo.title} as completed`}>
                {todo.status}
              </button>
            )}
          </p>
        </div>
      </div>

      <div className="actions">
        <Link to={`/edit-todo/${todo.id}`}>
          <button className="edit-btn">Edit</button>
        </Link>

        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
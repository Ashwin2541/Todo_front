import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">T</div>
        <div>
          <p className="brand-label">Workspace</p>
          <h2>Todo</h2>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Sidebar navigation">
        <NavLink className="nav-item" to="/todos">
          Dashboard
        </NavLink>
        <NavLink className="nav-item" to="/add-todo">
          Add Todo
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;

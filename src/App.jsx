import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />

        <div className="main-panel">
          <Header />

          <main className="page-content">
            <Routes>
              <Route path="/todos" element={<TodoList />} />
              <Route path="/add-todo" element={<AddTodo />} />
              <Route path="/edit-todo/:id" element={<EditTodo />} />
              <Route path="*" element={<Navigate to="/todos" replace />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
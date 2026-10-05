import axios from "axios";

const API_URL = "https://todo-server-hn5x.onrender.com/todos";

export const getTodos = () => axios.get(API_URL);

export const getTodo = (id) =>
  axios.get(`${API_URL}/${id}`);

export const addTodo = (todo) =>
  axios.post(API_URL, todo);

export const updateTodo = (id, todo) =>
  axios.put(`${API_URL}/${id}`, todo);

export const deleteTodo = (id) =>
  axios.delete(`${API_URL}/${id}`);
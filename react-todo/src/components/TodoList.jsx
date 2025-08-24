import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a project",
    "Write tests",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const toggleTodo = (todo) => {
    setTodos(
      todos.map((t) =>
        t === todo ? (t.startsWith("✓ ") ? t.slice(2) : "✓ " + t) : t
      )
    );
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo !== todoToDelete));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: "none", cursor: "pointer" }}>
            <span onClick={() => toggleTodo(todo)}>{todo}</span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteTodo(todo)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

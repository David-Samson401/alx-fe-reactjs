import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a project",
    "Write tests",
  ]);
  const [newTodo, setNewTodo] = useState([]);

  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleToggle = (todo) => {
    setTodos(
      todos.map((t) =>
        t === todo ? (t.startsWith("✓ ") ? t.slice(2) : "✓ " + t) : t
      )
    );
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, idx) => (
          <li
            key={idx}
            onClick={() => handleToggle(todo)}
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            {todo}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

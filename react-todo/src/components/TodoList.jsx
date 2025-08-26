import React from "react";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, idx) => (
        <li
          key={idx}
          onClick={() => toggleTodo(idx)} // pass index
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          {todo.text}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(idx); // pass index
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

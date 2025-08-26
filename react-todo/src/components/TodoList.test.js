import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  const todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: true },
  ];

  test("renders initial todos", () => {
    render(
      <TodoList
        todos={todos}
        toggleTodo={() => {}}
        deleteTodo={() => {}}
      />
    );

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("calls toggleTodo when checkbox is clicked", () => {
    const mockToggle = jest.fn();
    render(
      <TodoList
        todos={todos}
        toggleTodo={mockToggle}
        deleteTodo={() => {}}
      />
    );

    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);

    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  test("calls deleteTodo when delete button is clicked", () => {
    const mockDelete = jest.fn();
    render(
      <TodoList
        todos={todos}
        toggleTodo={() => {}}
        deleteTodo={mockDelete}
      />
    );

    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});

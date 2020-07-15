import { useState, useEffect } from "react";
const getTodoList = () => {
  const todoListLocal = localStorage.getItem("todo-list");
  return todoListLocal ? JSON.parse(todoListLocal) : [];
};
export const useTodos = (initialTodos = getTodoList()) => {
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    addTodo: (text) => {
      setTodos([
        ...todos,
        {
          text,
          id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          removed: false,
        },
      ]);
    },
    toggleTodo: (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    prepareRemove: (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, removed: true } : todo
        )
      );
    },
    removeTodo: (_) => {
      setTodos(todos.filter((todo) => !todo.removed));
    },
  };
};

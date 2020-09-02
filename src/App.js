import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import AddTodo from "./components/AddTodo";
import { useFilterBy, useTodos, useVisibilityTodos } from "./todo-hooks";
function App() {
  
  const { filterBy, changeFilter } = useFilterBy();
  const { todos, addTodo, toggleTodo, prepareRemove, removeTodo } = useTodos();
  const { visibilityTodos } = useVisibilityTodos(todos, filterBy);

  return ( 
    <>
      <div className="action-bar">
        <AddTodo onAddTodo={addTodo} />
        <Filter onChangeFilter={changeFilter} />
      </div>
      <TodoList
        todos={visibilityTodos}
        onToggleTodo={toggleTodo}
        onPrepareRemove={prepareRemove}
        onRemoveTodo={removeTodo}
      />
    </>
  );
}

export default App;

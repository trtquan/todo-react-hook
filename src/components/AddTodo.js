import React from "react";

const AddTodo = ({ onAddTodo }) => {
  let input;
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) return;
          onAddTodo(input.value);
          input.value = "";
        }}
      >
        <input
          ref={(node) => (input = node)}
          type="text"
          className="todo-input"
          maxLength="40"
        />
        <button type="submit" className="todo-button">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </>
  );
};

export default AddTodo

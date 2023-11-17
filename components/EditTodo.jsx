/* eslint-disable react/prop-types */
import { useState } from "react";

const EditTodo = ({ todo, todos, setTodos }) => {
  const [editText, setEditText] = useState(todo.todo);

  function handleEditTodo(id, value) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, todo: value, isEdited: !todo.isEdited }
          : todo
      )
    );
  }
  console.log("todos is", todos);
  return (
    <div className="input-field">
      <input
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        type="text"
        placeholder="updated todo"
        className="todo-input"
      />
      <button
        className="todo-button"
        type="submit"
        onClick={() => handleEditTodo(todo.id, editText)}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </div>
  );
};

export default EditTodo;

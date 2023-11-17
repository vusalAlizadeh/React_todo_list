/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ addNewTodo, status, setStatus }) => {
  const [todo, setTodo] = useState("");

  const handleSubmitForm = function (e) {
    e.preventDefault();
    addNewTodo({
      todo,
      id: uuidv4(),
      isCompleted: false,
      isEdited: false,
    });
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="input-field">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="enter your todo"
          className="todo-input"
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>

      <div className="todo-filter">
        <select
          name="filter"
          className="filter"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

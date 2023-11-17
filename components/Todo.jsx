/* eslint-disable react/prop-types */
import { useState } from "react";
const Todo = ({ todo, completedTodo, setTodos, todos, editedTodo }) => {
  const [todoClassName, setTodoClassName] = useState("todo");

  const deleteTodo = function (id) {
    setTodoClassName("todo fall");
    setTimeout(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }, 1000);
  };
  return (
    <div className={todoClassName}>
      <li className={todo.isCompleted ? "todo-item completed" : "todo-item"}>
        {todo.todo}
      </li>
      <button className="complete-btn" onClick={() => completedTodo(todo.id)}>
        <i className="fa-solid fa-check"></i>
      </button>

      <button className="edit-btn" onClick={() => editedTodo(todo.id)}>
        <i className="fa-solid fa-pen"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteTodo(todo.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;

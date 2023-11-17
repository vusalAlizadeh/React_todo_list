import { useEffect, useState } from "react";
import "./App.css";
import Form from "../components/Form";

import TodoList from "../components/TodoList";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  //functions
  const addNewTodo = function (todo) {
    setTodos([...todos, todo]);
  };

  const completedTodo = function (id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const editedTodo = function (id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEdited: !todo.isEdited } : todo
      )
    );
  };

  useEffect(() => {
    switch (status) {
      case "all":
        setFilteredTodos(todos);
        break;
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [status, todos]);

  return (
    <div className="app">
      <header>
        <h1>React Todo</h1>
      </header>
      <Form addNewTodo={addNewTodo} status={status} setStatus={setStatus} />

      <TodoList
        todos={todos}
        completedTodo={completedTodo}
        editedTodo={editedTodo}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;

/* eslint-disable react/prop-types */
import Todo from "./Todo";
import EditTodo from "./EditTodo";
const TodoList = ({
  todos,
  completedTodo,
  setTodos,
  filteredTodos,
  editedTodo,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) =>
          todo.isEdited ? (
            <EditTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ) : (
            <Todo
              key={todo.id}
              todo={todo}
              completedTodo={completedTodo}
              setTodos={setTodos}
              todos={todos}
              editedTodo={editedTodo}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default TodoList;

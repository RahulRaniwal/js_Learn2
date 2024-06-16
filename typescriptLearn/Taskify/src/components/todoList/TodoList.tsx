import React from "react";
import "../styles.css";
import { Todo } from "../../model";
import SingleTodo from "../singleTodo/SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC = ({ todos, setTodos }: Props) => {
  return (
    <div className="todods">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;

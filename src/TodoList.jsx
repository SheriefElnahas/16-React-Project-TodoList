import React from 'react';

import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

function TodoList({ todos, onEditTodo }) {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li className="todo" key={todo.taskId}>
              {todo.taskName}
              <div className="icons">
                <FaPen />
                <FaTrash />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;

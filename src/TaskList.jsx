import React from 'react';

import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

function TaskList({ tasks, onEditTodo }) {
  return (
    <div>
      <ul className="Task-List">
        {tasks.map(({ taskName, taskId }) => {
          return (
            <li className="Task-List-li" key={taskId}>
              {taskName}
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

export default TaskList;

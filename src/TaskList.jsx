import { useState } from 'react';

import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

function TaskList({ tasks, onEditClick }) {
  const [editTask, setEditTask] = useState(false);

  return (
    <div>
      <ul className="Task-List">
        {tasks.map(({ taskName, taskId }) => {
          return (
            <div key={taskId}>
              <li className="Task-List-li">
                {taskName}
                <div className="icons">
                  <FaPen onClick={() => onEditClick(taskId)} />
                  <FaTrash />
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskList;

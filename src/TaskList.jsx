import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

function TaskList({ tasks, onEditClick, onDeleteClicked }) {
  return (
    <div>
      <ul className="Task-List">
        {tasks.map(({ taskName, taskId }) => {
          return (
            <li key={taskId} className="Task-List-li">
              {taskName}
              <div className="icons">
                <FaPen onClick={() => onEditClick(taskId)} />
                <FaTrash onClick={() => onDeleteClicked(taskId)} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TaskList;

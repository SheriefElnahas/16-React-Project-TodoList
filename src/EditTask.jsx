import { useEffect, useState } from 'react';

function EditTask({ selectedTask, onUpdatedTask }) {
  const [updatedInput, setUpdatedInput] = useState('');

  const handleEditUpdatedInput = (e) => {
    setUpdatedInput(e.target.value);
  };

  useEffect(() => {
    setUpdatedInput(selectedTask?.taskName);
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdatedTask(updatedInput, selectedTask.taskId);
    setUpdatedInput('');
  };
  return (
    <form onSubmit={handleSubmit} className="Add-Task">
      <input className="Add-Task-input" type="text" value={updatedInput} onChange={handleEditUpdatedInput} />

      <button className="Add-Task-btn">Edit Task</button>
    </form>
  );
}

export default EditTask;

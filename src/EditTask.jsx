import { useEffect, useState } from 'react';

function EditTask({ selectedTask, onUpdateTask }) {
  const [newInput, setNewInput] = useState('');

  const handleNewInput = (e) => {
    setNewInput(e.target.value);
  };

  // We used useEffect to execute this line of code only when selectedTask is defined.
  useEffect(() => {
    setNewInput(selectedTask.taskName);
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1- Call the function from app and pass the updated input and the task id
    onUpdateTask(newInput, selectedTask.taskId);

    // 2- Clear the input
    setNewInput('');
  };
  return (
    <form onSubmit={handleSubmit} className="Add-Task">
      <input className="Add-Task-input" type="text" value={newInput} onChange={handleNewInput} />
      <button className="Edit-Task-btn">Edit Task</button>
    </form>
  );
}

export default EditTask;

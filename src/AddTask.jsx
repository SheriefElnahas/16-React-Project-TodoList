import { useState } from 'react';

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.length === 0) {
      return;
    }
    onAddTask(newTask);

    setNewTask('');
  };
  return (
    <form onSubmit={handleSubmit} className="Add-Task">
      <input className="Add-Task-input" type="text" placeholder="Add Your New Task" value={newTask} onChange={handleNewTask} />

      <button className="Add-Task-btn">Add Task</button>
    </form>
  );
}

export default AddTask;

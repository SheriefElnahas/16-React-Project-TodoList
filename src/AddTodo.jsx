import { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTodo(newTodo);
    setNewTodo('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className="add-todo" type="text" placeholder="Add your new todo" value={newTodo} onChange={handleNewTodo} />

      <button className="btn-add-task">Add Task</button>
    </form>
  );
}

export default AddTodo;

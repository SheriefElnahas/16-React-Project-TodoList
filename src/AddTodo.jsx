import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

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

      <button className="todo-button">
        <FaPlus />
      </button>
    </form>
  );
}
// FaPlusSquare
export default AddTodo;

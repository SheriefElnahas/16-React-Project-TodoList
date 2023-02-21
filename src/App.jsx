import './App.css';
import AddTodo from './AddTodo';

{
  /* <FaTrash />
      <FaPenSquare /> */
}
import { FaTrash } from 'react-icons/fa';
import { FaPenSquare } from 'react-icons/fa';
function App() {
  const onAddTodo = (todo) => {
    console.log('todo from app', todo);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo onAddTodo={onAddTodo} />
    </div>
  );
}

export default App;

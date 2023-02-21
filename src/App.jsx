import './App.css';
import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

import { nanoid } from 'nanoid';

function App() {
  const [todos, setTodos] = useState([
    {
      taskName: 'Study Web Development',
      taskId: nanoid(),
    },
    {
      taskName: 'Study Quran',
      taskId: nanoid(),
    },
  ]);

  const onAddTodo = (todo) => {
    const newTodo = {
      taskName: todo,
      taskId: nanoid(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo onAddTodo={onAddTodo} />

      <TodoList todos={todos} />
    </div>
  );
}

export default App;

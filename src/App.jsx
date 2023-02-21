import './App.css';
import { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

import { nanoid } from 'nanoid';

function App() {
  const [tasks, setTasks] = useState([
    {
      taskName: 'Study Web Development',
      taskId: nanoid(),
    },
    {
      taskName: 'Study Quran',
      taskId: nanoid(),
    },
  ]);

  const onAddTask = (task) => {
    const newTask = {
      taskName: task,
      taskId: nanoid(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask onAddTask={onAddTask} />

      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import EditTask from './EditTask';

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
  const [selectedTask, setSelectedTask] = useState();

  const onAddTask = (task) => {
    const newTask = {
      taskName: task,
      taskId: nanoid(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const onEditClick = (taskId) => {
    const selectedTask = tasks.find((task) => task.taskId === taskId);

    setSelectedTask(selectedTask);
  };

  const onUpdatedTask = (updatedTaskName, id) => {
    setTasks((prevTasks) => {
      prevTasks.map((task) => {
        if (task.taskId === id) {
          task.taskName = updatedTaskName;
        }
        return task;
      });

      return [...prevTasks];
    });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* <AddTask onAddTask={onAddTask} /> */}
      <EditTask selectedTask={selectedTask} onUpdatedTask={onUpdatedTask} />

      <TaskList tasks={tasks} onEditClick={onEditClick} />
    </div>
  );
}

export default App;

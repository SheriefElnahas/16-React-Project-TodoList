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
  const [toggleEdit, setToggleEdit] = useState(false);

  const onAddTask = (task) => {
    const newTask = {
      taskName: task,
      taskId: nanoid(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const onEditClick = (taskId) => {
    // 1- Extract the task that we want to edit
    const taskTobeEdited = tasks.find((task) => task.taskId === taskId);

    // 2- Update selectedTask to the task that we extract so that we can pass it to EditTask Component
    setSelectedTask(taskTobeEdited);

    // 3- Show EditTask Component When we click on the edit icon
    setToggleEdit(true);
  };

  // This will be called from EditComponent And I Expect the id and the taskname
  const onUpdateTask = (updatedTaskName, id) => {
    setTasks((prevTasks) => {
      prevTasks.map((task) => {
        if (task.taskId === id) {
          task.taskName = updatedTaskName;
        }
        return task;
      });

      return [...prevTasks];
    });
    // Hide Edit After The Task Is Updated
    setToggleEdit(false);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      {!toggleEdit && <AddTask onAddTask={onAddTask} />}
      {toggleEdit && <EditTask selectedTask={selectedTask} onUpdateTask={onUpdateTask} />}
      <TaskList tasks={tasks} onEditClick={onEditClick} />
    </div>
  );
}

export default App;

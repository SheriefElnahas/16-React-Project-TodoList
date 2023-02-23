import './App.css';
import { useEffect, useState } from 'react';
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

    setTasks((prevTasks) => [newTask, ...prevTasks]);
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

  const onDeleteClicked = (taskId) => {
    setTasks((prevTasks) => {
      const filteredArr = prevTasks.filter((task) => task.taskId !== taskId);
      return filteredArr;
    });
  };

  const onClearClicked = () => {
    setTasks((_) => {
      return [];
    });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      {!toggleEdit && <AddTask onAddTask={onAddTask} />}
      {toggleEdit && <EditTask selectedTask={selectedTask} onUpdateTask={onUpdateTask} />}
      <TaskList tasks={tasks} onEditClick={onEditClick} onDeleteClicked={onDeleteClicked} />
      {tasks.length > 0 && (
        <button onClick={onClearClicked} className="App-delete-btn">
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;

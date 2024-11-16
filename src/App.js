import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import MaintenanceReport from './components/MaintenanceReport';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from LocalStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const markTaskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isComplete = true;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Home Maintenance Scheduler</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onComplete={markTaskComplete} />
      <MaintenanceReport tasks={tasks} />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && date && cost) {
      onAddTask({ task, date, cost: parseFloat(cost), isComplete: false });
      setTask('');
      setDate('');
      setCost('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Maintenance Task</h2>
      <input
        type="text"
        placeholder="Task Description"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Estimated Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

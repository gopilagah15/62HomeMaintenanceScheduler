import React from 'react';

const TaskList = ({ tasks, onComplete }) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h2>Scheduled Maintenance Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks scheduled.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>Task:</strong> {task.task} <br />
              <strong>Date:</strong> {task.date} <br />
              <strong>Estimated Cost:</strong> ${task.cost.toFixed(2)} <br />
              <strong>Status:</strong> {task.isComplete ? 'Completed' : 'Pending'} <br />
              {task.date <= today && !task.isComplete && (
                <span style={{ color: 'red' }}>Reminder: Task is due!</span>
              )}
              {!task.isComplete && (
                <button onClick={() => onComplete(index)}>Mark as Complete</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;

import React from 'react';

const MaintenanceReport = ({ tasks }) => {
  const totalCost = tasks.reduce((acc, task) => {
    return task.isComplete ? acc + task.cost : acc;
  }, 0);

  const completedTasks = tasks.filter(task => task.isComplete).length;

  return (
    <div>
      <h2>Maintenance Report</h2>
      <p>Total Completed Tasks: {completedTasks}</p>
      <p>Total Cost: ${totalCost.toFixed(2)}</p>
    </div>
  );
};

export default MaintenanceReport;

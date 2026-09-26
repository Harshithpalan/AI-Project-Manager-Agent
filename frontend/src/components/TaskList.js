import React from 'react';

function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return null;
  }

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return '#ff4444';
      case 'medium':
        return '#ffbb33';
      case 'low':
        return '#00C851';
      default:
        return '#33b5e5';
    }
  };

  return (
    <div className="task-list">
      <h2>Generated Tasks</h2>
      <div className="tasks-container">
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            <div className="task-header">
              <h3>{task.name}</h3>
              <span 
                className="priority-badge"
                style={{ backgroundColor: getPriorityColor(task.priority) }}
              >
                {task.priority}
              </span>
            </div>
            
            <p className="task-description">{task.description}</p>
            
            <div className="task-details">
              <div className="task-detail">
                <strong>Estimated Time:</strong> {task.estimatedTime}
              </div>
              
              {task.dependencies && task.dependencies.length > 0 && (
                <div className="task-detail">
                  <strong>Dependencies:</strong>
                  <ul className="dependencies-list">
                    {task.dependencies.map((dep, depIndex) => (
                      <li key={depIndex}>{dep}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;

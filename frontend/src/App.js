import React, { useState } from 'react';
import './App.css';
import ProjectForm from './components/ProjectForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateTasks = async (projectData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/generate-tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate tasks');
      }

      const data = await response.json();
      setTasks(data.tasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Project Manager Agent</h1>
        <p>Generate project tasks automatically using AI</p>
      </header>
      
      <main className="App-main">
        <div className="container">
          <ProjectForm onGenerate={handleGenerateTasks} loading={loading} />
          
          {error && (
            <div className="error-message">
              <p>Error: {error}</p>
            </div>
          )}
          
          {tasks && <TaskList tasks={tasks} />}
        </div>
      </main>
    </div>
  );
}

export default App;

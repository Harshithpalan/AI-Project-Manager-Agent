import React, { useState } from 'react';

function ProjectForm({ onGenerate, loading }) {
  const [projectDescription, setProjectDescription] = useState('');
  const [projectType, setProjectType] = useState('web');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectDescription.trim()) {
      alert('Please enter a project description');
      return;
    }
    onGenerate({
      projectDescription,
      projectType,
      deadline
    });
  };

  return (
    <div className="project-form">
      <h2>Describe Your Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
          >
            <option value="web">Web Application</option>
            <option value="mobile">Mobile Application</option>
            <option value="data">Data Science/ML</option>
            <option value="devops">DevOps/Infrastructure</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="projectDescription">Project Description</label>
          <textarea
            id="projectDescription"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            placeholder="Describe your project goals, requirements, and what you want to achieve..."
            rows="6"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="deadline">Target Deadline (optional)</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Generating Tasks...' : 'Generate Tasks'}
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;

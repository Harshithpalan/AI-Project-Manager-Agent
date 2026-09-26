# AI Project Manager Agent

A web application that uses AI to automatically generate project tasks based on project descriptions. Built with React frontend and Node.js backend, powered by OpenAI's GPT models.

## Features

- **AI-Powered Task Generation**: Automatically generates comprehensive task lists from project descriptions
- **Smart Prioritization**: Tasks include priority levels (High/Medium/Low)
- **Time Estimation**: Each task includes estimated completion time
- **Dependency Tracking**: Shows task dependencies for proper project planning
- **Modern UI**: Clean, responsive interface built with React

## Tech Stack

- **Frontend**: React 18
- **Backend**: Node.js with Express
- **AI**: OpenAI GPT-3.5-turbo API
- **Styling**: CSS3 with modern design

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API key

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to the `.env` file:
```
OPENAI_API_KEY=your_actual_api_key_here
PORT=5000
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory (in a new terminal):
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Select your project type (Web Application, Mobile App, Data Science, etc.)
3. Describe your project in detail
4. Optionally set a target deadline
5. Click "Generate Tasks"
6. The AI will generate a comprehensive task list with priorities, time estimates, and dependencies

## Project Structure

```
ai-project-manager-agent/
├── backend/
│   ├── server.js          # Express server with OpenAI integration
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment variables template
├── frontend/
│   ├── public/
│   │   └── index.html     # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProjectForm.js    # Project input form
│   │   │   └── TaskList.js       # Task display component
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Main styles
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Global styles
│   └── package.json       # Frontend dependencies
└── README.md              # This file
```

## API Endpoints

### POST /api/generate-tasks
Generates tasks based on project description.

**Request Body:**
```json
{
  "projectDescription": "Build a modern e-commerce platform",
  "projectType": "web",
  "deadline": "2024-12-31"
}
```

**Response:**
```json
{
  "tasks": [
    {
      "name": "Project Setup",
      "description": "Initialize project structure and development environment",
      "estimatedTime": "2 days",
      "priority": "High",
      "dependencies": []
    }
  ]
}
```

### GET /api/health
Health check endpoint.

## Customization

- **AI Model**: Change the OpenAI model in `backend/server.js` (currently using gpt-3.5-turbo)
- **Styling**: Modify `frontend/src/App.css` to customize the appearance
- **Task Generation**: Adjust the prompt in `backend/server.js` to change how tasks are generated

## Troubleshooting

**Backend won't start:**
- Ensure Node.js is installed
- Check that all dependencies are installed
- Verify your OpenAI API key is correct in the `.env` file

**Frontend can't connect to backend:**
- Ensure the backend is running on port 5000
- Check CORS settings in `backend/server.js`
- Verify the API URL in `frontend/src/App.js`

**Tasks not generating:**
- Check your OpenAI API key has credits
- Verify the API key is correctly set in `.env`
- Check the browser console for error messages

## License

MIT

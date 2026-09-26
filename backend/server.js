const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/api/generate-tasks', async (req, res) => {
  try {
    const { projectDescription, projectType, deadline } = req.body;

    const prompt = `You are an AI project manager. Generate a comprehensive task list for the following project:

Project Description: ${projectDescription}
Project Type: ${projectType}
Deadline: ${deadline}

Please generate a list of specific, actionable tasks with:
1. Task name
2. Description
3. Estimated time/duration
4. Priority level (High/Medium/Low)
5. Dependencies (if any)

Format the response as a JSON array of tasks with this structure:
{
  "tasks": [
    {
      "name": "Task name",
      "description": "Task description",
      "estimatedTime": "time estimate",
      "priority": "High/Medium/Low",
      "dependencies": ["task names this depends on"]
    }
  ]
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an expert project manager AI that generates structured task lists." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
    });

    const responseText = completion.choices[0].message.content;
    
    // Try to parse JSON from the response
    let tasks;
    try {
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        tasks = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    } catch (parseError) {
      // Fallback: create a simple structure from the text
      tasks = {
        tasks: [{
          name: "Project Setup",
          description: responseText.substring(0, 200) + "...",
          estimatedTime: "1 week",
          priority: "High",
          dependencies: []
        }]
      };
    }

    res.json(tasks);
  } catch (error) {
    console.error('Error generating tasks:', error);
    res.status(500).json({ error: 'Failed to generate tasks', details: error.message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AI Project Manager API is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

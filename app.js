// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Middleware
app.use(bodyParser.json());

// Mock database
let tasks = [{name:"shiva",id:1}];

// Define endpoints

// GET /tasks - Retrieve all tasks
app.get('/tasks', (req, res) => {
    console.log("get1")
    res.json(tasks);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
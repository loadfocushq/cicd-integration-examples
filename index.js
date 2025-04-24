const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Simple in-memory database for demonstration
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the LoadFocus Demo API' });
});

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.json(user);
});

// Create a new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }
  
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// Create server instance separately so we can close it in tests
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export both app and server for testing
module.exports = { app, server };

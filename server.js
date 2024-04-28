// Import necessary connections and routes
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection'); // MongoDB connection file
const thoughtRoutes = require('./routes/api/thoughtRoutes'); // thoughtRoutes file is in the api folder
const userRoutes = require('./routes/api/userRoutes'); // userRoutes file is in the api folder

// Set up the port
const PORT = process.env.PORT || 3001;
const app = express();

// MongoDB connection string
const connectionString = 'mongodb://localhost:27017/socialMedia_DB';

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/thoughts', thoughtRoutes); // Mount thought routes
app.use('/api/users', userRoutes); // Mount user routes

// Start the server
db.once('open', () => {
  console.log('Database connected successfully'); // Log database connection success
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Handle database connection errors
db.on('error', (error) => {
  console.error('Error connecting to database:', error);
});

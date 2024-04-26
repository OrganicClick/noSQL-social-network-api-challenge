// Import necessary connections and routes

const express = require('express');
// Make sure this db connection route is correct
// const db = require('./config/connection'); // Assuming this is your MongoDB connection file
const thoughtRoutes = require('./routes/api/thoughtRoutes'); // Adjust the routes based on your project structure
const userRoutes = require('./routes/api/userRoutes'); // Adjust the routes based on your project structure

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/api/thoughts', thoughtRoutes); // Mount thought routes
app.use('/api/users', userRoutes); // Mount user routes

// Start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
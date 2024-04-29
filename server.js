// Import necessary connections and routes
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection'); // MongoDB connection file
const thoughtRoutes = require('./routes/api/thoughtRoutes'); // thoughtRoutes file is in the api folder
const userRoutes = require('./routes/api/userRoutes'); // userRoutes file is in the api folder
const seedUsers = require('./seeds/userSeed'); // Import the seedUsers function
const seedThoughts = require('./seeds/thoughtSeed'); // Import the seedThoughts function

// Set up the port
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to log request details
app.use((req, res, next) => {
  console.log('Incoming Request:');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Request Body:', req.body);
  console.log('---');
  next(); // Call the next middleware/route handler
});

// Routes
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/users', userRoutes);

// Call the seeding functions after establishing the database connection
db.once('open', async () => {
  console.log('Database connected successfully');
  await seedUsers();
  await seedThoughts();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// Handle database connection errors
db.on('error', (error) => {
  console.error('Error connecting to database:', error);
});

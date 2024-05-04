const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');
const thoughtRoutes = require('./routes/api/thoughtRoutes');
const userRoutes = require('./routes/api/userRoutes');
const seedUsers = require('./seeds/userSeed');
const seedThoughts = require('./seeds/thoughtSeed');
const { User, Thought } = require('./models'); // Import User and Thought models

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Incoming Request:');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Request Body:', req.body);
  console.log('---');
  next();
});

app.use('/api/thoughts', thoughtRoutes);
app.use('/api/users', userRoutes);

let databaseSeeded = false;

db.once('open', async () => {
  console.log('Database connected successfully');

  // Check if database has been seeded before
  if (!databaseSeeded) {
    const userCount = await User.countDocuments();
    const thoughtCount = await Thought.countDocuments();

    if (userCount === 0 && thoughtCount === 0) {
      await seedUsers();
      await seedThoughts();
      console.log('Database seeded successfully');
      databaseSeeded = true;
    } else {
      console.log('Database already seeded');
    }
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

db.on('error', (error) => {
  console.error('Error connecting to database:', error);
});

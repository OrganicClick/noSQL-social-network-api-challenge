// Import necessary modules
const User = require('../models/User'); // User model is defined in models/User.js

// Function to seed users
async function seedUsers() {
    // Seed user data
    const userData = [
        { username: 'user1', email: 'user1@example.com' },
        { username: 'user2', email: 'user2@example.com' },
        { username: 'user3', email: 'user3@example.com' },
        { username: 'user4', email: 'user4@example.com' }
    ];

    try {
        // Insert users into the database
        await User.insertMany(userData);
        console.log('Users seeded successfully.');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
}

// Export the seedUsers function
module.exports = seedUsers;
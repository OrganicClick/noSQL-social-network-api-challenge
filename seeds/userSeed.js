// Import necessary modules
const User = require('../models/User'); // User model is defined in models/User.js

// Function to seed users
async function seedUsers() {
    // Seed user data
    const userData = [
        { username: 'john_doe123', email: 'john_doe123@example.com' },
        { username: 'emma_smith456', email: 'emma_smith456@example.com' },
        { username: 'alex_jones789', email: 'alex_jones789@example.com' },
        { username: 'sarah_adams101112', email: 'sarah_adams101112@example.com' }
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
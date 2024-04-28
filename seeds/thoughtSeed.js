// Import necessary modules
const Thought = require('../models/Thought'); // Thought model is defined in models/Thought.js

// Function to seed thoughts
async function seedThoughts() {
    // Seed thought data
    const thoughtData = [
        { thoughtText: 'Just had the best pizza ever!', username: 'john_doe123' },
        { thoughtText: 'Excited for the weekend getaway!', username: 'emma_smith456' },
        { thoughtText: 'Coding is so much fun!', username: 'alex_jones789' },
        { thoughtText: 'Enjoying a relaxing day at the beach.', username: 'sarah_adams101112' }
    ];

    try {
        // Insert thoughts into the database
        await Thought.insertMany(thoughtData);
        console.log('Thoughts seeded successfully.');
    } catch (error) {
        console.error('Error seeding thoughts:', error);
    }
}

// Export the seedThoughts function
module.exports = seedThoughts;

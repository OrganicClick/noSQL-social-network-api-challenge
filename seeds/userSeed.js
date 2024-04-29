// Import necessary modules
const User = require('../models/User'); // User model is defined in models/User.js

// Function to seed users
async function seedUsers() {
    // Seed user data
    const userData = [
        { 
            username: 'john_doe123', 
            email: 'john_doe123@example.com', 
            friends: [] 
        },
        { 
            username: 'emma_smith456', 
            email: 'emma_smith456@example.com', 
            friends: [] 
        },
        { 
            username: 'alex_jones789', 
            email: 'alex_jones789@example.com', 
            friends: [] 
        },
        { 
            username: 'sarah_adams101112', 
            email: 'sarah_adams101112@example.com', 
            friends: [] 
        }
    ];

    try {
        // Insert users into the database
        const users = await User.insertMany(userData);

        // Update friend relationships
        users.forEach(user => {
            switch (user.username) {
                case 'john_doe123':
                    user.friends = [users[1]._id, users[2]._id]; // john_doe123 is friends with emma_smith456 and alex_jones789
                    break;
                case 'emma_smith456':
                    user.friends = [users[0]._id, users[3]._id]; // emma_smith456 is friends with john_doe123 and sarah_adams101112
                    break;
                case 'alex_jones789':
                    user.friends = [users[0]._id]; // alex_jones789 is friends with john_doe123
                    break;
                case 'sarah_adams101112':
                    user.friends = [users[1]._id]; // sarah_adams101112 is friends with emma_smith456
                    break;
                default:
                    break;
            }
        });

        // Save the updated users with friend relationships
        await Promise.all(users.map(user => user.save()));

        console.log('Users seeded successfully.');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
}

// Export the seedUsers function
module.exports = seedUsers;

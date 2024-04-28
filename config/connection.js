// Import necessary functions and objects from the mongoose package
const { connect, connection } = require('mongoose');

// Define the MongoDB connection string
const connectionString = 'mongodb://localhost:27017/socialMedia_DB';

// Connect to the MongoDB database using the connection string
connect(connectionString);

// Export the connection object, representing the MongoDB connection
module.exports = connection;
// Import necessary connections and routes

const express = require('express');
const db = require('./config/connection'); // Assuming this is your MongoDB connection file
const thoughtRoutes = require('./routes/api/thoughtRoutes'); // Adjust the routes based on your project structure
const userRoutes = require('./routes/api/userRoutes'); // Adjust the routes based on your project structure
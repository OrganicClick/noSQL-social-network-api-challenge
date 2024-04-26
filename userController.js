// Import Mongoose and necessary dependencies
const mongoose = require('mongoose');
const { User } = require('../models');

// Controller functions for handling user-related requests
module.exports = {
    // Get all users
    async getAllUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    },
  
    // Get a single user by ID
    async getSingleUser(req, res) {
      try {
        const user = await User.findById(req.params.userId);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    },
  
    // Create a new user
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.status(201).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    },
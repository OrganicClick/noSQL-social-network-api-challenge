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
      // Destructure the request body to extract username and email
      const { username, email } = req.body;

      // Create a new user document with the specified fields
      const user = await User.create({
        username,
        email,
        thoughts: [], // Initialize thoughts array
        friends: [], // Initialize friends array
        friendCount: 0 // Initialize friendCount
      });

      // Send the created user object in the response
      res.status(201).json(user);
    } catch (err) {
      // Handle errors
      console.error(err);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Add a friend to a user's friend list
  async addFriend(req, res) {
    try {
      // Add logic to add a friend to a user's friend list
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Remove a friend from a user's friend list
  async deleteFriend(req, res) {
    try {
      // Add logic to remove a friend from a user's friend list
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
};

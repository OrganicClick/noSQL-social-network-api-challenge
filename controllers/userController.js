// Import Mongoose and necessary dependencies
const mongoose = require('mongoose');
const { User } = require('../models');

// Controller functions for handling user-related requests
module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find()
        .populate('thoughts')
        .populate('friends'); // Populate the friends field
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Get a single user by ID
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate('thoughts')
        .populate('friends'); // Populate the friends field
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

      // Check if a user with the specified username already exists
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }

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
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
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
      const user = await User.findOneAndDelete({ _id: req.params.userId });
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
      // Extract the friendId from the request parameters
      const { friendId } = req.params;

      // Check if the friendId is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(friendId)) {
        return res.status(400).json({ error: 'Invalid friendId' });
      }

      // Find the user by userId and update its friends array to add the new friendId
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: friendId } },
        { runValidators: true, new: true }
      );

      // If the user doesn't exist, return a 404 error
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Send the updated user object in the response
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Remove a friend from a user's friend list
  async deleteFriend(req, res) {
    try {
      // Extract the friendId from the request parameters
      const { friendId } = req.params;

      // Find the user by userId and update its friends array to remove the specified friendId
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: friendId } },
        { runValidators: true, new: true }
      );

      // If the user doesn't exist, return a 404 error
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Send the updated user object in the response
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

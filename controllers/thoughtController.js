// Import Mongoose and necessary dependencies
const mongoose = require('mongoose');
const { Thought } = require('../models');

// Controller functions for handling thought-related requests
module.exports = {
    // Get all thoughts
    async getAllThoughts(req, res) {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    },
  
    // Get a single thought by ID
    async getSingleThought(req, res) {
      try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
          return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    },
  
    // Create a new thought
    async addThought(req, res) {
      try {
        const thought = await Thought.create(req.body);
        res.status(201).json(thought);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    },
    
   // Update a thought by ID
   async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Delete a thought by ID
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ error: 'Thought not found' });
      }
      res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Add a reaction to a thought
  async addReaction(req, res) {
    try {
      // Add logic to add a reaction to a thought
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  // Delete a reaction from a thought
  async deleteReaction(req, res) {
    try {
      // Add logic to delete a reaction from a thought
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
};
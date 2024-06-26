// Import Mongoose and necessary dependencies
const mongoose = require("mongoose");
const { Thought } = require("../models");

// Controller functions for handling thought-related requests
module.exports = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      console.log("Getting all thoughts...");
      const thoughts = await Thought.find();
      console.log("Retrieved thoughts:", thoughts);
      res.json(thoughts);
    } catch (error) {
      console.error("Error getting all thoughts:", error);
      res.status(500).json({ error: "Server error" });
    }
  },

  // Get a single thought by ID
  async getSingleThought(req, res) {
    try {
      console.log("Getting single thought...");
      const thought = await Thought.findById(req.params.thoughtId);
      console.log("Retrieved thought:", thought);
      if (!thought) {
        return res.status(404).json({ error: "Thought not found" });
      }
      res.json(thought);
    } catch (error) {
      console.error("Error getting single thought:", error);
      res.status(500).json({ error: "Server error" });
    }
  },

  // Create a new thought
  async addThought(req, res) {
    try {
      console.log("Adding new thought:", req.body);
      const thought = await Thought.create(req.body);
      console.log("New thought added:", thought);
      res.status(201).json(thought);
    } catch (error) {
      console.error("Error adding new thought:", error);
      res.status(500).json({ error: "Server error" });
    }
  },

  // Update a thought by ID
  async updateThought(req, res) {
    try {
      console.log("Updating thought:", req.params.thoughtId);
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { new: true }
      );
      console.log("Updated thought:", thought);
      if (!thought) {
        return res.status(404).json({ error: "Thought not found" });
      }
      res.json(thought);
    } catch (error) {
      console.error("Error updating thought:", error);
      res.status(500).json({ error: "Server error" });
    }
  },

 // Delete a thought by ID
async deleteThought(req, res) {
  try {
    console.log("Deleting thought:", req.params.thoughtId);
    const thoughtId = req.params.thoughtId;

    // Find the thought by ID and delete it
    const deletedThought = await Thought.findByIdAndDelete(thoughtId);

    if (!deletedThought) {
      return res.status(404).json({ error: "Thought not found" });
    }

    console.log("Deleted thought:", deletedThought);
    res.json({ message: "Thought deleted successfully" });
  } catch (error) {
    console.error("Error deleting thought:", error);
    res.status(500).json({ error: "Server error" });
  }
}


};

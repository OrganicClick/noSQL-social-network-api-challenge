// Import Mongoose and necessary dependencies
const mongoose = require('mongoose');
const { Reaction, Thought } = require('../models');

// Controller functions for handling reaction-related requests
module.exports = {
    // Add a reaction to a thought
    async addReaction(req, res) {
        try {
            console.log('Adding reaction to thought:', req.params.thoughtId);
            const { reactionBody } = req.body;
            const thoughtId = req.params.thoughtId;

            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $push: { reactions: { reactionBody } } },
                { new: true }
            );

            console.log('Updated thought with reaction:', updatedThought);

            if (!updatedThought) {
                return res.status(404).json({ error: 'Thought not found' });
            }

            res.json(updatedThought);
        } catch (error) {
            console.error('Error adding reaction to thought:', error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a reaction from a thought
    async deleteReaction(req, res) {
        try {
            console.log('Deleting reaction from thought:', req.params.thoughtId);
            const thoughtId = req.params.thoughtId;
            const reactionId = req.params.reactionId;

            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $pull: { reactions: { _id: reactionId } } },
                { new: true }
            );

            console.log('Updated thought after deleting reaction:', updatedThought);

            if (!updatedThought) {
                return res.status(404).json({ error: 'Thought not found' });
            }

            res.json(updatedThought);
        } catch (error) {
            console.error('Error deleting reaction from thought:', error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

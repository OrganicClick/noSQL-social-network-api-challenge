const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction');

// Schema to create Thought model

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minLength: 1, // Minimum length of 1 character
        maxLength: 280, // Maximum length of 280 characters
      },
      createdAt: {
        type: Date,
        default: Date.now, // Set default value to the current timestamp
        // Use a getter method to format the timestamp on query
      },
      username: {// The username of the user who created this thought
      // Default value is the current user
        type: String,
        required: true, // The username of the user who created this thought
      },
      reactions: [reactionSchema], // Using Reaction schema as a subdocument schema for reactions
    },
  );

// Define virtual property to calculate the length of the thought's 'reactions' array field on query
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

// Export Thought model
module.exports = Thought;
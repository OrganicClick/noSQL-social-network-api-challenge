const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction');

console.log('reactionSchema:', reactionSchema); // Add this line to check the value of reactionSchema

// Schema to create Thought model
console.log('Creating thoughtSchema...'); // Add this line to indicate the creation of thoughtSchema
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
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema], // Using Reaction schema as a subdocument schema for reactions
    },
  );

console.log('thoughtSchema:', thoughtSchema); // Add this line to check the value of thoughtSchema

// Define virtual property to calculate the length of the thought's 'reactions' array field on query
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

console.log('Thought model created:', Thought); // Add this line to confirm the creation of Thought model

// Export Thought model
module.exports = Thought;

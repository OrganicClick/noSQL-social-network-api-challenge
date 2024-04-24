const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction');

// Schema to create Thought model

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        //required: true,
        // Must be between 1 and 280 characters,
      },
      createdAt: {
        Date: //Date logic,
        // Set default value to the current timestamp
        // Use a getter method to format the timestamp on query
      },
      username: // The username of the user who created this thought
      // Use Mongoose's ObjectId data type
      // Default value is the current user
        type: String,
        required: true,
      reactions: [reactionSchema],
    },
  )
  
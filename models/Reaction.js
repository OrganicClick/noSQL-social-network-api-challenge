// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.

const { Schema } = require('mongoose');

// Define the reaction schema

const reactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,

    }
  });
  
  // Export reactionSchema
  
  module.exports = reactionSchema;
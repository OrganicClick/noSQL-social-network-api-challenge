const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, // Regular expression to validate email format
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    toJSON: {
      virtuals: true, // Include virtual properties when converting document to JSON
    },
    id: false, // Exclude the default '_id' field
  }
);

// Define virtual property to calculate friend count
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

// Initialize User model
const User = model('user', userSchema);

// Export User model
module.exports = User;
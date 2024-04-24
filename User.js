const { Schema, model } = require('mongoose');

// Schema to create User model

const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true,
      //required: true,
      // trimmed: true,
    },
    email: {
      type: String,
      // required: true,
      // unique: true,
      // match: must match a valid email address,
      // validate: [validateEmail, 'Please fill a valid email address'], (??)
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
)

// Define virtual property to calculate friend count
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });
/* mongoose model for user 
must have 
-username
    string
    unique
    required
    trimmed

-email
    string
    unique
    required
    validated with isEmail

-thoughts
    array of _id's of thoughts

-friends
    array of _id's of users

*/

const { Schema, model } = require("mongoose");
const validator = require("../utils/validate-email");

const { validateEmail } = require("../utils/validate-email");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validator, "Please enter a valid email"],
    },
    thoughts: []
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const User = model("User", userSchema);

module.exports = User;

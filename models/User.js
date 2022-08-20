const { Schema, model } = require("mongoose");
const validator = require("../utils/validate-email");

// const { validateEmail } = require("../utils/validate-email");

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
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// userSchema.virtual("thoughtCount").get(function () {
//   return this.thoughts.reduce(
//     (total, thought) => total + thought.reactions.length + 1,
//     0
//   );
// });
userSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.length;
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;

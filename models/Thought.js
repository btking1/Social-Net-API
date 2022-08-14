const { Schema, model } = require("mongoose");

const dateFormat = require("../utils/date-format");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      length: [1, 140],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;

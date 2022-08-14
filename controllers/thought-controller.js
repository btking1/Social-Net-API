const { Thought, Pizza, User } = require("../models");

const thoughtController = {
  addThought({ params, body }, res) {
    console.log(body);
    Thought.create(body).then(({ _id }) => {
      return User.findOneAndUpdate(
        { _id: params.id },
        { $push: { thoughts: _id } },
        { new: true }
      )
        .then((dbUserData) => {
          if (!dbUserData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
          }
          res.json(dbUserData);
        })
        .catch((err) => res.json(err));
    });
  },

  removeThought({ params }, res) {
    console.log(body);
    Thought.findOneAndDelete({ _id: params.thoughtId });
    then((deletedThought) => {
      if (!deletedThought) {
        res.status(404).json({ message: "No thought found with this id" });
        return;
      }
      return User.findOneAndUpdate(
        { _id: params.id },
        { $pull: { thoughts: params.thoughtId } },
        { new: true }
      );
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;

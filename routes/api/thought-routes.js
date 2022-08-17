const router = require("express").Router();

const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getThoughtById,
  getAllThoughts,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts);

router.route("/:userId").post(addThought);

router.route("/:userId/:thoughtId").get(getThoughtById).delete(removeThought);

router.route("/:userId/:thoughtId/reactions").put(addReaction);

router
  .route("/:userId/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;

// // api/thoughts/<userId>
// router.route("/:userId").post(addThought);

// // api/thoughts/<userId>/<thoughtId>
// router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

// router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

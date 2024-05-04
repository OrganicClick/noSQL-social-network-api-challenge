const router = require('express').Router();
const { addReaction, deleteReaction } = require('../../controllers/reactionController');

// Route: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction); // POST request to create a reaction for a thought

// Route: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); // DELETE request to delete a reaction by its ID

module.exports = router;

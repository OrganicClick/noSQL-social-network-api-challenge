const router = require('express').Router();

//Import functions from thoughtController file
const {
    getAllThoughts,
    getSingleThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Route: /api/thoughts
router.route('/')
    .get(getAllThoughts) // GET request to retrieve all thoughts
    .post(addThought); // POST request to create a new thought

// Route: /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought) // GET request to retrieve a single thought by its ID
    .put(updateThought) // PUT request to update a thought by its ID
    .delete(deleteThought); // DELETE request to delete a thought by its ID

// Route: /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction); // POST request to create a reaction for a thought

// Route: /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); // DELETE request to delete a reaction by its ID

// Export router

module.exports = router;
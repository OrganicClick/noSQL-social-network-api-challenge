const router = require('express').Router();

//Import functions from thoughtController file
const {
    getAllThoughts,
    getSingleThought,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// Route: /api/thoughts
router.route('/')
    .get(getAllThoughts) // GET request to retrieve all thoughts
    .post(addThought); // POST request to create a new thought

// Route: /api/thoughts/:thoughtId

// // /api/thoughts/:thoughtId
// router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
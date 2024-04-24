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

// // /api/thoughts
// router.route('/').get(getThought).post(createThought);

// // /api/thoughts/:thoughtId
// router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;
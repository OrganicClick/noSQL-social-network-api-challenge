const router = require('express').Router();

//Functions imported from userController file
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// Route: /api/users
router.route('/')
    .get(getAllUsers) // GET request to retrieve all users
    .post(createUser); // POST request to create a new user

// // /api/users/:userId
// router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
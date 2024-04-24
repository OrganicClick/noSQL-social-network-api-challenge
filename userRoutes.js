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

// Route: /api/users/:userId
router.route('/:userId')
    .get(getSingleUser) // GET request to retrieve a single user by ID
    .put(updateUser) //PUT request to update a user by ID
    .delete(deleteUser); // DELETE request to delete a user by ID
// router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
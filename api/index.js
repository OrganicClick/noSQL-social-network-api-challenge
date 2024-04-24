const router = require('express').Router();
const thoughtRoutes = require('../thoughtRoutes'); // Import thoughtRoutes file
const userRoutes = require('../userRoutes'); // Import userRoutes file

router.use('/thoughts', thoughtRoutes); // Define routes for thoughts under /thoughts URL
router.use('/users', userRoutes); // Define routes for users under /users URL

module.exports = router; // Export the router

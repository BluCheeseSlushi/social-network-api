const router = require('express').Router();
const thoughtRoutes = require('./reaction-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/users');

module.exports = router;

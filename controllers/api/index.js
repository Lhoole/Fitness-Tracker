const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes');
const mealRoutes = require('./mealRoutes');
const sleepRoutes = require('./sleepRoutes');
const userRoutes = require('./userRoutes');

// links api routes to specific data
router.use('/exercises', exerciseRoutes);
router.use('/meals', mealRoutes);
router.use('/sleeps', sleepRoutes);
router.use('/users', userRoutes);

module.exports = router;
const router = require('express').Router();
const apiRoutes = require('./api');


router.use('/api', apiRoutes);

// if a route not through the api is entered
router.use((req, res) => {
  res.send("<h1>Wrong Route, try e.g. /api/exercises </h1>")
});

module.exports = router;
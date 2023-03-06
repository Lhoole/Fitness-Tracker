const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

<<<<<<< HEAD

=======
// added homeRoutes for the landing page
>>>>>>> 97f48203243a14a9a2a21a1c49973c147d1576df
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


// if a route is entered not through the api
router.use((req, res) => {
  res.send("<h1> Wrong Route, try e.g. /api/exercises </h1>")
});

module.exports = router;
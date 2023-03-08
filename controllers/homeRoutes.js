const router = require('express').Router();
const { Exercise, Sleep, Meals, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  if (req.session.logged_in) {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
      });
      const user = userData.get({ plain: true });
      res.render('homepage', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
    return;
  }

  res.render('homepage');
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Exercise }],
    });
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});
//test

router.get('/exercises', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Exercise
        }
      ],
      attributes: ["first_name", "last_name"]
    });

    const exercises = userData.exercises.map((exercise) => exercise.get({ plain: true }));
    var data = {user:userData.dataValues,
      exercises, 
      logged_in: req.session.logged_in 
    }
    res.render('exercise', data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/sleeps', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Sleep
        }
      ],
      attributes: ["first_name", "last_name"]
    });

    const sleep = userData.sleep.map((sleep) => sleep.get({ plain: true }));
    var data = {user:userData.dataValues,
      sleep, 
      logged_in: req.session.logged_in 
    }
    res.render('sleep', data);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/meals', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Meals
        }
      ],
      attributes: ["first_name", "last_name"]
    });

    const meals = userData.meals.map((meal) => meal.get({ plain: true }));
    var data = {user:userData.dataValues,
      meals, 
      logged_in: req.session.logged_in 
    }
    res.render('meals', data);
  } catch (err) {
    res.status(500).json(err);
  }
});
//test
module.exports = router;

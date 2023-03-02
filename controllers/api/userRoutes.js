const router = require('express').Router();
const {User, Sleep} = require('../../models');
const withAuth = require('../../utils/auth');
const bcrypt = require('bcrypt');

// GET all users
router.get('/', async (req, res) => {
    const userData = await User.findAll().catch((err) => {
      res.json(err);
    });
    res.json(userData);
  });

// GET one user
router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
      if (!userData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// POST create a new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
});


// PUT update a user
router.put('/:id', async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        individualHooks: true
      });
      if (!userData[0]) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// Verifies email exists and password is correct
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
      if (!userData) {
        res.status(404).json({ message: 'Login failed. Please try again!' });
        return;
      }
  
      const validPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      if (!validPassword) {
        res.status(400).json({ message: 'Login failed. Please try again!' });
        return;
      }
      res.status(200).json({ message: 'You are now logged in!' });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
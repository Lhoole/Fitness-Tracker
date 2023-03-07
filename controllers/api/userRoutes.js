const router = require('express').Router();
const { User } = require('../../models');
// const withAuth = require('../../utils/auth');
// const bcrypt = require('bcrypt');

// GET all users
// router.get('/', async (req, res) => {
//     const userData = await User.findAll().catch((err) => {
//       res.json(err);
//     });
//     res.json(userData);
//   });

// // GET one user
// router.get('/:email', async (req, res) => {

//     try {
//       const userData = await User.findOne({ where: { email: req.params.email } });
//       if (!userData) {
//         res.status(404).json({ message: 'No user with this id!' });
//         return;
//       }
//       res.status(200).json(userData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

// // POST create a new user
// router.post('/', async (req, res) => {
//     try {
//       const userData = await User.create(req.body);
//       res.status(200).json(userData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
// });


// // PUT update a user
// router.put('/:email', async (req, res) => {
//     try {
//       const userData = await User.update(req.body, {
//         where: {
//           email: req.params.email,
//         },
//         individualHooks: true
//       });
//       if (!userData[0]) {
//         res.status(404).json({ message: 'No user with this id!' });
//         return;
//       }
//       res.status(200).json(userData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

// // Verifies email exists and password is correct
// router.post('/login', async (req, res) => {
//     try {
//       const userData = await User.findOne({ where: { email: req.body.email } });
//       if (!userData) {
//         res.status(404).json({ message: 'Login failed. Please try again' });
//         return;
//       }
  
//       const validPassword = await bcrypt.compare(
//         req.body.password,
//         userData.password
//       );

//       if (!validPassword) {
//         res.status(400).json({ message: 'Login failed. Please try again!' });
//         return;
//       }
//       res.status(200).json({ message: 'You are now logged in!' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });

// module.exports = router;



router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

//withAuth is called in the homeRoutes changed userRoutes for testing
// new users get created in login.js
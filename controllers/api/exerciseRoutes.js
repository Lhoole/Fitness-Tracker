const router = require('express').Router();
const { User, Exercise } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const exerciseData = await Exercise.findAll();
      res.status(200).json(exerciseData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:user_id', async (req, res) => {
    try {
      const exerciseData = await Exercise.findAll({where: {user_id: req.params.user_id},
        include: [{ model: User }]
      });
  
      if (!exerciseData) {
        res.status(404).json({ message: 'No Exercise Data found with this id!' });
        return;
      }
  
      res.status(200).json(exerciseData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.post('/', 
// withAuth, 
async (req, res) => {
  try {
    const newExercise = await Exercise.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', 
// withAuth, 
async (req, res) => {
  try {
    const exerciseData = await Exercise.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!exerciseData) {
      res.status(404).json({ message: 'No Exercise data found with this id!' });
      return;
    }

    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

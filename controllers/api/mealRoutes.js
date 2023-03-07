const router = require('express').Router();
const {User, Meals} = require('../../models');
const withAuth = require('../../utils/auth');

// GET all meal data
router.get('/', async (req, res) => {
    try{
      const mealData = await Meals.findAll()
      res.status(200).json(mealData);
    } catch(err) {
      res.status(500).json(err);
    }
  });

// GET specific meal by id
router.get('/:user_id', async (req, res) => {
    try{
      const mealData = await Meals.findAll({where: {user_id: req.params.user_id},
        include: [{ model: User }],
      })
  
      if (!mealData) {
        res.status(404).json({ message: 'No existing data found with this id' });
        return;
      }
  
      res.status(200).json(mealData);
    } catch(err){
    res.status(500).json(err);
  }
});

// CREATE new meal entry
router.post('/', 
withAuth, 
async (req, res) => {
    try {
      const newMeal = await Meals.create(
        {...req.body,
        user_id: req.session.user_id,
    });

      res.status(200).json(newMeal);
    } catch (err) {
      res.status(400).json(err);
    }
});
  
// DELETE existing meal entry 
router.delete('/:id', 
withAuth, 
async (req, res) => {
    try {
      const mealData = await Meals.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!mealData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
      res.status(200).json(mealData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
module.exports = router;
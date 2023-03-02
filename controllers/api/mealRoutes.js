const router = require('express').Router();
const {User, Meals} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try{
      const mealData = await Meals.findAll()
      res.status(200).json(mealData);
    } catch(err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/:id', async (req, res) => {
    try{
      const mealData = await Meals.findByPk(req.params.id, {
        include: [{ model: Meals }],
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
  
  router.post('/', withAuth, async (req, res) => {
    try {
      const newMeal = await Meals.create({
        ...req.body,
        user_id: req.session.user_id,
    });

      res.status(200).json(newMeal);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
  router.delete('/:id', withAuth, async (req, res) => {
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
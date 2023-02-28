const router = require('express').Router();
const {User, Sleep} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try{
      const sleepData = await Sleep.findAll()
      res.status(200).json(sleepData);
    } catch(err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/:id', async (req, res) => {
    try{
      const sleepData = await Sleep.findByPk(req.params.id, {
        include: [{ model: Sleep }],
      })
  
      if (!sleepData) {
        res.status(404).json({ message: 'No existing data found with this id' });
        return;
      }
  
      res.status(200).json(sleepData);
    } catch(err){
    res.status(500).json(err);
  }
  });
  
  router.post('/', withAuth, async (req, res) => {
    try {
      const newSleep = await Sleep.create(
        ...req.body,
    //   user_id: req.session.user_id,
      );
      res.status(200).json(newSleep);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const sleepData = await Sleep.destroy({
        where: {
          id: req.params.id
        //   user_id: req.session.user_id,
        }
      });
  
      if (!sleepData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
      res.status(200).json(sleepData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


const sequelize = require('../config/connection');
const { User, Exercise, Meals, Sleep } = require('../models');
const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const mealData = require('./mealData.json');
const sleepData = require('./sleepData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const exercises = await Exercise.bulkCreate(exerciseData, {
    returning: true,
  });

  const meals = await Meals.bulkCreate(mealData, {
    returning: true,
  });

  const sleeps = await Sleep.bulkCreate(sleepData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
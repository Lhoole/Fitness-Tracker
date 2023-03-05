const sequelize = require('../config/connection');
const { User, Exercise, Fitness, Meal, Sleep } = require('../models');
const userData = require('./user-seeds.json');
const exerciseData = require('./exercise-seeds.json');
const fitnessData = require('./fitness-seeds.json');
const mealData = require('./meal-seeds.json');
const sleepData = require('./sleep-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const exercises = await Exercise.bulkCreate(exerciseData, {
    returning: true,
  });

  const fitnesses = await Fitness.bulkCreate(fitnessData, {
    returning: true,
  });

  const meals = await Meal.bulkCreate(mealData, {
    returning: true,
  });

  const sleeps = await Sleep.bulkCreate(sleepData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
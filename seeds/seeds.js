const sequelize = require('../config/connection');
const { User, Excercise } = require('../models');

const userData = [
  // Array of user data objects
];

const excerciseData = [
  // Array of exercise data objects
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const exercise of exerciseData) {
    await Excercise.create({
      ...exercise,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();


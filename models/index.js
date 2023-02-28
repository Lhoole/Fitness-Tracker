const Meals = require('./Meals');
const Excercise = require('./Excercise');
const Sleep = require('./Sleep');
const User = require('./User');

User.hasMany(Meals, {
    foreignKey: "user_id",
});

User.hasMany(Sleep, {
    foreignKey: "user_id",
});

User.hasMany(Excercise, {
    foreignKey: "user_id",
});

Meals.belongsTo(User, {
    foreignKey: 'user_id',
});

Excercise.belongsTo(User, {
    foreignKey: 'user_id',
});

Sleep.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
  Meals,
  Excercise,
  Sleep,
  User,
};

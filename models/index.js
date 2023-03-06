const Meals = require('./Meals');
const Exercise = require('./Exercise');
const Sleep = require('./Sleep');
const User = require('./User');

User.hasMany(Meals, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

User.hasMany(Sleep, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

User.hasMany(Exercise, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

Meals.belongsTo(User, {
    foreignKey: 'user_id',
});

Exercise.belongsTo(User, {
    foreignKey: 'user_id',
});

Sleep.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
  Meals,
  Exercise,
  Sleep,
  User,
};

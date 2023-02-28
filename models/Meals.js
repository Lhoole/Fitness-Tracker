const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Meals extends Model {}

Meals.init(
  {
   id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
   },
   user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
   meal_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DateTime_start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  DateTime_end: {
    type: DataTypes.DATE,
    allowNull: false,
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meals',
  }
);

module.exports = Meals;

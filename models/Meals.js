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
  meal_junk: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  date_time_start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  date_time_end: {
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

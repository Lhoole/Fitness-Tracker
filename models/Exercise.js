const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Exercise extends Model {}

Exercise.init(
  {
   id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
   },
   exercise_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_time_start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  date_time_end: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise',
  }
);

module.exports = Exercise;

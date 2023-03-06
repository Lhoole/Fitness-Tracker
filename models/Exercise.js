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
   user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
   exercise_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateTime_start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateTime_end: {
    type: DataTypes.DATE,
    allowNull: false,
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

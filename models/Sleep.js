const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Sleep extends Model {}

Sleep.init(
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
  sleep_quality:{
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
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sleep',
  }
);

module.exports = Sleep;

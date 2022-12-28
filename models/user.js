'use strict';
const gender = ['male','female','other'];
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    gender: DataTypes.ENUM(gender),
    date_of_birth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return User;
};
'use strict';
const gender = ['male','female','other'];
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    gender: DataTypes.ENUM(gender),
    dateOfBirth: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return User;
};
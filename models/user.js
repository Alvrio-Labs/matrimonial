'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const userGender = ['Male', 'Female', 'Others']

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING(15),
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      password: {
        type: DataTypes.STRING(250),
        /**
         * Method to set the hashed password.
         * @param {String} value naked password value.
         * */
        set(value) {
          if (value) {
            this.setDataValue('password', bcrypt.hashSync(value, 10))
          }
        },
      },
      reset_token: {
        type: DataTypes.STRING(250),
      },
      reset_token_expiry: {
        type: DataTypes.DATE,
      },
      first_login_token: {
        type: DataTypes.STRING(250),
      },
      gender: {
        type: DataTypes.ENUM(userGender),
        allowNull: false,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      mobile: {
        type: DataTypes.STRING(15),
      },
      is_email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_phone_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      sessions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      delete_reason: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  return User;
};

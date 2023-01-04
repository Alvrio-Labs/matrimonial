const userGender = ['Male', 'Female', 'Others'];
const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(_models) {
      // define association here
    }
  }

  User.init({
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
    is_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING(250),
      // password hashing method
      set(value) {
        if (value) {
          this.setDataValue('password', bcrypt.hashSync(value, 10));
        }
      },
    },
    reset_token: {
      type: DataTypes.STRING(250),
    },
    reset_token_expiry: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.ENUM(userGender),
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });

  User.beforeCreate((model, _options) => {
    const ageCheck = new Date();
    ageCheck.setFullYear(ageCheck.getFullYear() - 18);
    const birthDate = new Date(model.date_of_birth);
    if (ageCheck < birthDate) {
      throw new Error('Age must be above 18+');
    }
    const comparePassword = function (password) {
      return bcrypt.compareSync(password, model.password);
    };
  });

  return User;
};

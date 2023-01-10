const userGender = ['Male', 'Female', 'Others'];
const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // define association here
      this.hasOne((models.EducationDetail), {
        as: 'educationInfo',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasOne((models.FamilyDetail), {
        as: 'familyInfo',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasMany((models.connectionRequest), {
        as: 'connectionRequest',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasMany((models.userConnection), {
        as: 'userConnection',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasOne((models.PersonalInfo), {
        as: 'PersonalInfo',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasOne((models.lifeStyle), {
        as: 'lifeStyle',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
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
      validate: {
        is: /^[A-Za-z]+$/,
        len: [2, 50],
      },
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        is: /^[A-Za-z]+$/,
        len: [2, 50],
      },
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email address already in use!',
      },

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
  function encryptPasswordIfChanged(user, options) {
    if (user.changed('password')) {
      (user.get('password'));
    }
  }

  User.beforeCreate((model, _options) => {
    const ageCheck = new Date();
    ageCheck.setFullYear(ageCheck.getFullYear() - 18);
    const birthDate = new Date(model.date_of_birth);
    if (ageCheck < birthDate) {
      throw new Error('Age must be above 18+');
    }
  });
  User.beforeUpdate(encryptPasswordIfChanged);

  return User;
};

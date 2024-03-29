const userGender = ['Male', 'Female', 'Others'];
const status = ['pending', 'approved ', 'decline'];
const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      this.hasOne((models.EducationInfo), {
        as: 'education_info',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasOne((models.FamilyInfo), {
        as: 'family_info',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasMany((models.connectionRequest), {
        as: 'connection_request',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasMany((models.userConnection), {
        as: 'user_connection',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasOne((models.PersonalInfo), {
        as: 'personal_info',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasOne((models.lifeStyle), {
        as: 'life_style',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasOne((models.UserPreference), {
        as: 'user_preference',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasMany((models.chatRoom), {
        as: 'chat_room',
        foreignKey: 'chat_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasMany((models.Message), {
        as: 'message',
        foreignKey: 'chat_id',
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
    current_status: {
      type: DataTypes.ENUM(status),
      allowNull: true,
      defaultValue: 'pending',

    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true,

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

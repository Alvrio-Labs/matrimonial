const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class FamilyInfo extends Model {
    static associate(models) {
      // define association here
      this.belongsTo((models.User), {
        as: 'user',
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
    }
  }
  FamilyInfo.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    user_id: {
      type: DataTypes.UUID,
      unique: {
        args: true,
        msg: 'user family details with this id already added',
      },
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Za-z]+$/,
      },
    },
    mother_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Za-z]+$/,
      },
    },
    father_occupation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Za-z]+$/,
      },
    },
    mother_occupation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mother_gotra: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Za-z]+$/,
      },
    },
    grandmother_gotra: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Za-z]+$/,
      },
    },
    nanihal_place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    native_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caste: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'FamilyInfo',
    tableName: 'family_info',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return FamilyInfo;
};

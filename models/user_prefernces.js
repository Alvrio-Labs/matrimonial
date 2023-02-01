const maritalStatus = ['single', 'married', 'widow', 'divorced', 'widower'];
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class UserPreference extends Model {
    static associate(models) {
      // define association here
      this.belongsTo((models.User), {
        as: 'user',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.belongsTo((models.FamilyInfo), {
        as: 'family_info',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
    }
  }
  UserPreference.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    user_id: {
      type: DataTypes.UUID,
      unique: {
        args: true,
        msg: 'user preferences  with this id already exist ',
      },
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    manglik: {
      type: DataTypes.BOOLEAN,
    },
    martial_status: {
      type: DataTypes.ENUM(maritalStatus),
    },
  }, {
    sequelize,
    modelName: 'UserPreference',
    tableName: 'user_preferences',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return UserPreference;
};

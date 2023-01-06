const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class familyInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo((models.User), {
        as: 'user',
        foreignKey: 'id',
        constraints: true,
        onDelete: 'CASCADE',
      });
    }
  }
  familyInfo.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    user_id: {
      type: DataTypes.UUID,
      unique: true,
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mother_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    father_occupation: {
      type: DataTypes.STRING,
      allowNull: false,
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
    },
    grandmother_gotra: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: 'familyInfo',
    tableName: 'family_info',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return familyInfo;
};

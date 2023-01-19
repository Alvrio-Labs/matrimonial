const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class EducationInfo extends Model {
    static associate(models) {
      // define association here
      this.belongsTo((models.User), {
        as: 'User',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
    }
  }
  EducationInfo.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    user_id: {
      type: DataTypes.UUID,
      unique: {
        args: true,
        msg: 'user education detail with this id already added',
      },
    },
    post_graduation_college: {
      type: DataTypes.STRING,
    },
    post_graduation_year: {
      type: DataTypes.DATE,
    },
    graduation_college: {
      type: DataTypes.STRING,
    },
    graduation_year: {
      type: DataTypes.DATE,
    },
    class_12th_school: {
      type: DataTypes.STRING,
    },
    class_12th_passout_year: {
      type: DataTypes.DATE,
    },
    class_10th_school: {
      type: DataTypes.STRING,
    },
    class_10th_passout_year: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'EducationInfo',
    tableName: 'education_info',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return EducationInfo;
};
